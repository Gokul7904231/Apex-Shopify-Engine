// ============================================================
// Analytics Engine — Sliding Window & Dynamic Programming
// ============================================================
// Statistical analysis algorithms for sales data:
//   - Simple Moving Average (SMA) via sliding window
//   - Exponential Moving Average (EMA) for trend smoothing
//   - Maximum subarray (Kadane's) for best sales period
//   - Revenue aggregation by time periods
//
// Time Complexity:
//   SMA: O(N) using sliding window (not O(N*W) naive)
//   EMA: O(N) single pass
//   Best period (Kadane's): O(N)
//   Aggregation: O(N)
//
// Space Complexity: O(N) for output arrays
// ============================================================

export interface DataPoint {
  date: string; // ISO date string
  value: number;
}

export interface MovingAverageResult {
  date: string;
  value: number;
  average: number;
}

export interface BestPeriodResult {
  startDate: string;
  endDate: string;
  totalValue: number;
  startIndex: number;
  endIndex: number;
}

export interface AggregatedData {
  period: string;
  total: number;
  count: number;
  average: number;
}

export interface TrendAnalysis {
  direction: 'up' | 'down' | 'stable';
  changePercent: number;
  movingAverages: MovingAverageResult[];
  bestPeriod: BestPeriodResult;
  aggregated: AggregatedData[];
}

export class AnalyticsEngine {
  /**
   * Simple Moving Average using a sliding window.
   * O(N) time — maintains a running sum, subtracting the element
   * that leaves the window and adding the new one.
   *
   * @param data - Time series data points
   * @param windowSize - Number of periods in the window
   */
  static simpleMovingAverage(data: DataPoint[], windowSize: number): MovingAverageResult[] {
    if (data.length === 0 || windowSize <= 0) return [];
    const effectiveWindow = Math.min(windowSize, data.length);
    const results: MovingAverageResult[] = [];

    // Initialize window sum
    let windowSum = 0;
    for (let i = 0; i < effectiveWindow; i++) {
      windowSum += data[i].value;
    }

    // First average
    results.push({
      date: data[effectiveWindow - 1].date,
      value: data[effectiveWindow - 1].value,
      average: windowSum / effectiveWindow,
    });

    // Slide the window: O(1) per step
    for (let i = effectiveWindow; i < data.length; i++) {
      windowSum += data[i].value - data[i - effectiveWindow].value;
      results.push({
        date: data[i].date,
        value: data[i].value,
        average: windowSum / effectiveWindow,
      });
    }

    return results;
  }

  /**
   * Exponential Moving Average for smoother trend detection.
   * More responsive to recent data than SMA.
   * EMA_t = α * value_t + (1 - α) * EMA_{t-1}
   * where α = 2 / (period + 1)
   */
  static exponentialMovingAverage(data: DataPoint[], period: number): MovingAverageResult[] {
    if (data.length === 0 || period <= 0) return [];
    const alpha = 2 / (period + 1);
    const results: MovingAverageResult[] = [];

    let ema = data[0].value;
    results.push({
      date: data[0].date,
      value: data[0].value,
      average: ema,
    });

    for (let i = 1; i < data.length; i++) {
      ema = alpha * data[i].value + (1 - alpha) * ema;
      results.push({
        date: data[i].date,
        value: data[i].value,
        average: Math.round(ema * 100) / 100,
      });
    }

    return results;
  }

  /**
   * Find the best contiguous sales period using Kadane's algorithm.
   * Finds the subarray with maximum sum in O(N) time.
   *
   * We normalize values against the daily average so that
   * "best period" means "most above average" rather than just
   * "highest absolute sum" (which would always be the whole array
   * if all values are positive).
   */
  static findBestPeriod(data: DataPoint[]): BestPeriodResult {
    if (data.length === 0) {
      return { startDate: '', endDate: '', totalValue: 0, startIndex: 0, endIndex: 0 };
    }
    if (data.length === 1) {
      return {
        startDate: data[0].date,
        endDate: data[0].date,
        totalValue: data[0].value,
        startIndex: 0,
        endIndex: 0,
      };
    }

    // Normalize against average for meaningful "best" period
    const avg = data.reduce((sum, d) => sum + d.value, 0) / data.length;
    const normalized = data.map((d) => d.value - avg);

    // Kadane's algorithm on normalized values
    let maxSum = normalized[0];
    let currentSum = normalized[0];
    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 1; i < normalized.length; i++) {
      if (currentSum + normalized[i] < normalized[i]) {
        currentSum = normalized[i];
        tempStart = i;
      } else {
        currentSum += normalized[i];
      }

      if (currentSum > maxSum) {
        maxSum = currentSum;
        start = tempStart;
        end = i;
      }
    }

    // Calculate actual total for the best period
    let totalValue = 0;
    for (let i = start; i <= end; i++) {
      totalValue += data[i].value;
    }

    return {
      startDate: data[start].date,
      endDate: data[end].date,
      totalValue: Math.round(totalValue * 100) / 100,
      startIndex: start,
      endIndex: end,
    };
  }

  /**
   * Aggregate data by time period (day, week, month).
   */
  static aggregateByPeriod(
    data: DataPoint[],
    period: 'day' | 'week' | 'month',
  ): AggregatedData[] {
    const buckets = new Map<string, { total: number; count: number }>();

    for (const point of data) {
      const date = new Date(point.date);
      let key: string;

      switch (period) {
        case 'day':
          key = point.date.substring(0, 10);
          break;
        case 'week': {
          const dayOfWeek = date.getDay();
          const weekStart = new Date(date);
          weekStart.setDate(date.getDate() - dayOfWeek);
          key = `Week of ${weekStart.toISOString().substring(0, 10)}`;
          break;
        }
        case 'month':
          key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
          break;
      }

      if (!buckets.has(key)) {
        buckets.set(key, { total: 0, count: 0 });
      }
      const bucket = buckets.get(key)!;
      bucket.total += point.value;
      bucket.count++;
    }

    return Array.from(buckets.entries()).map(([period, { total, count }]) => ({
      period,
      total: Math.round(total * 100) / 100,
      count,
      average: Math.round((total / count) * 100) / 100,
    }));
  }

  /**
   * Full trend analysis: combines SMA, EMA, best period, and aggregation.
   */
  static analyzeTrend(data: DataPoint[], windowSize: number = 7): TrendAnalysis {
    const movingAverages = this.simpleMovingAverage(data, windowSize);
    const bestPeriod = this.findBestPeriod(data);
    const aggregated = this.aggregateByPeriod(data, 'month');

    // Determine trend direction from EMA
    let direction: 'up' | 'down' | 'stable' = 'stable';
    let changePercent = 0;

    if (movingAverages.length >= 2) {
      const first = movingAverages[0].average;
      const last = movingAverages[movingAverages.length - 1].average;
      changePercent = first !== 0 ? ((last - first) / first) * 100 : 0;
      changePercent = Math.round(changePercent * 100) / 100;

      if (changePercent > 5) direction = 'up';
      else if (changePercent < -5) direction = 'down';
    }

    return { direction, changePercent, movingAverages, bestPeriod, aggregated };
  }
}
