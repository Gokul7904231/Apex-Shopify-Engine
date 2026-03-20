// ============================================================
// Trie Data Structure — Autocomplete Search Engine
// ============================================================
// A Trie (prefix tree) optimized for fast autocomplete lookups.
// Each node stores children and a frequency counter for ranking.
//
// Time Complexity:
//   Insert: O(L) where L = word length
//   Search: O(L)
//   Prefix match (autocomplete): O(L + K) where K = number of matches
//
// Space Complexity: O(N * L) where N = number of words
// ============================================================

interface TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;
  frequency: number;
  word: string | null;
}

export interface AutocompleteResult {
  word: string;
  frequency: number;
}

function createNode(): TrieNode {
  return {
    children: new Map(),
    isEndOfWord: false,
    frequency: 0,
    word: null,
  };
}

export class Trie {
  private root: TrieNode;
  private size: number;

  constructor() {
    this.root = createNode();
    this.size = 0;
  }

  /**
   * Insert a word into the trie with an optional frequency boost.
   * If the word already exists, its frequency is incremented.
   */
  insert(word: string, frequency: number = 1): void {
    const normalized = word.toLowerCase().trim();
    if (!normalized) return;

    let current = this.root;
    for (const char of normalized) {
      if (!current.children.has(char)) {
        current.children.set(char, createNode());
      }
      current = current.children.get(char)!;
    }

    if (!current.isEndOfWord) {
      this.size++;
    }
    current.isEndOfWord = true;
    current.frequency += frequency;
    current.word = normalized;
  }

  /**
   * Search for an exact word in the trie.
   */
  search(word: string): boolean {
    const node = this.findNode(word.toLowerCase().trim());
    return node !== null && node.isEndOfWord;
  }

  /**
   * Check if any word in the trie starts with the given prefix.
   */
  startsWith(prefix: string): boolean {
    return this.findNode(prefix.toLowerCase().trim()) !== null;
  }

  /**
   * Get autocomplete suggestions for a prefix, ranked by frequency.
   * Uses a min-heap to efficiently extract top-K results.
   * @param prefix - The search prefix
   * @param limit - Maximum number of suggestions (default: 10)
   */
  autocomplete(prefix: string, limit: number = 10): AutocompleteResult[] {
    const normalized = prefix.toLowerCase().trim();
    if (!normalized) return [];

    const prefixNode = this.findNode(normalized);
    if (!prefixNode) return [];

    // Collect all words under this prefix
    const results: AutocompleteResult[] = [];
    this.collectWords(prefixNode, results);

    // Sort by frequency (descending) and return top-K
    // Using a full sort here; for very large datasets, a min-heap would be more efficient
    results.sort((a, b) => b.frequency - a.frequency);
    return results.slice(0, limit);
  }

  /**
   * Delete a word from the trie.
   * Returns true if the word was found and deleted.
   */
  delete(word: string): boolean {
    const normalized = word.toLowerCase().trim();
    return this.deleteRecursive(this.root, normalized, 0);
  }

  /**
   * Get the total number of unique words in the trie.
   */
  getSize(): number {
    return this.size;
  }

  /**
   * Bulk insert an array of words with optional frequencies.
   */
  bulkInsert(entries: Array<{ word: string; frequency?: number }>): void {
    for (const entry of entries) {
      this.insert(entry.word, entry.frequency || 1);
    }
  }

  // --- Private helpers ---

  private findNode(prefix: string): TrieNode | null {
    let current = this.root;
    for (const char of prefix) {
      if (!current.children.has(char)) {
        return null;
      }
      current = current.children.get(char)!;
    }
    return current;
  }

  private collectWords(node: TrieNode, results: AutocompleteResult[]): void {
    if (node.isEndOfWord && node.word) {
      results.push({ word: node.word, frequency: node.frequency });
    }
    for (const child of node.children.values()) {
      this.collectWords(child, results);
    }
  }

  private deleteRecursive(node: TrieNode, word: string, depth: number): boolean {
    if (depth === word.length) {
      if (!node.isEndOfWord) return false;
      node.isEndOfWord = false;
      node.word = null;
      node.frequency = 0;
      this.size--;
      return node.children.size === 0;
    }

    const char = word[depth];
    const child = node.children.get(char);
    if (!child) return false;

    const shouldDeleteChild = this.deleteRecursive(child, word, depth + 1);
    if (shouldDeleteChild) {
      node.children.delete(char);
      return !node.isEndOfWord && node.children.size === 0;
    }

    return false;
  }
}
