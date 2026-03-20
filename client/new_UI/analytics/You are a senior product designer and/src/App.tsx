import { useEffect } from "react";
import { loadFonts } from "./utils";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Calendar,
  ChevronDown,
  Download,
  LayoutDashboard,
  Lightbulb,
  LogOut,
  Minus,
  Search,
  TrendingUp,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const ALL_FONTS = {
  "Inter-Thin": 100,
  "Inter-ExtraLight": 200,
  "Inter-Light": 300,
  "Inter-Regular": 400,
  "Inter-Medium": 500,
  "Inter-SemiBold": 600,
  "Inter-Bold": 700,
  "Inter-ExtraBold": 800,
  "Inter-Black": 900,
};

export default function App() {
  useEffect(() => {
    loadFonts(ALL_FONTS);
  }, []);

  return (
    <div>
      <div
        className="w-full h-fit bg-white text-zinc-950 h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible"
        data-id="01ab262b-1e8e-5f28-9cf0-3db719c934f0"
      >
        <div
          className="flex h-[1080px] overflow-hidden"
          data-id="ddd902f5-4eff-5145-b2a6-ab987f022250"
        >
          <aside
            className="w-[260px] min-w-[260px] flex flex-col justify-between bg-neutral-50 border-zinc-200 border-0 border-solid"
            style={{ backdropFilter: "blur(24px)" }}
            data-id="ce1b79dd-68e7-59c6-8ff3-9f0d44d9b462"
          >
            <div data-id="a981a435-aa25-5644-a309-140be3ebd16e">
              <div
                className="p-6 flex items-center gap-4 border-zinc-200 border-0 border-solid"
                data-id="19c9f68d-8a11-55be-b244-843bcec93d68"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#8e51ff]"
                  data-id="5eb65171-de4a-573a-9790-21e81a6aeb74"
                >
                  <BarChart3
                    className="size-5 text-violet-50"
                    data-id="a160640f-2f12-545b-87bb-36fbda3b81a9"
                  />
                </div>
                <div data-id="3abd7f9d-a3f8-5aa9-940c-0c56ba02f7b1">
                  <p
                    className="font-semibold text-sm text-zinc-950"
                    data-id="27be7939-6fb2-59dd-93dd-0a864a584579"
                  >
                    Analytics Engine
                  </p>
                  <p
                    className="text-xs text-[#71717b]"
                    data-id="7779e9bd-1267-5f53-b8f3-eacadd5267f0"
                  >
                    Shopify App
                  </p>
                </div>
              </div>
              <nav
                className="flex flex-col gap-1 p-4"
                data-id="a9d95f6e-9054-5760-805a-af3f4acd007f"
              >
                <a
                  className="flex items-center gap-4 px-4 py-2.5 text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all cursor-pointer rounded-lg text-[#71717b]"
                  data-id="b2c25135-8b02-5052-a76b-0b649459a341"
                >
                  <LayoutDashboard
                    className="size-4"
                    data-id="f5744b5b-95d7-5404-8e44-70f596ac5e0b"
                  />
                  <span data-id="79829d18-a96c-5904-b162-d7d441e3133b">
                    Dashboard
                  </span>
                </a>
                <a
                  className="flex items-center gap-4 px-4 py-2.5 text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all cursor-pointer rounded-lg text-[#71717b]"
                  data-id="3e59ba09-4e7a-5b93-8419-795d0354dc62"
                >
                  <Search
                    className="size-4"
                    data-id="7ef570c9-dae5-5108-a8d1-d9a31d86725c"
                  />
                  <span data-id="1c45ad8a-bfca-5a5c-8935-e8842dfe0be0">
                    Product Search
                  </span>
                </a>
                <a
                  className="flex items-center gap-4 px-4 py-2.5 text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all cursor-pointer rounded-lg text-[#71717b]"
                  data-id="aa2b016e-e6da-5533-80a3-280b63cdea24"
                >
                  <Lightbulb
                    className="size-4"
                    data-id="fb74ec66-d646-565b-8c97-72830ebe0874"
                  />
                  <span data-id="889a7071-c30d-5d12-9aac-ad16b9ef1b81">
                    Recommendations
                  </span>
                </a>
                <a
                  className="flex items-center gap-4 px-4 py-2.5 text-sm font-medium transition-all cursor-pointer rounded-lg bg-[#8e51ff]/10 text-[#8e51ff] border-[#8e51ff] border-0 border-solid"
                  data-id="c86d221d-7970-5487-adc5-f062355e7ae6"
                >
                  <BarChart3
                    className="size-4"
                    data-id="4bbb39a9-1d6f-55a3-beee-4f1a3231e44a"
                  />
                  <span data-id="bf4b3746-393b-519d-9592-81fc816f6cba">
                    Analytics
                  </span>
                </a>
              </nav>
            </div>
            <div
              className="p-4 flex flex-col gap-4 border-zinc-200 border-0 border-solid"
              data-id="9feca984-eca8-5433-8cea-24a25f2c721a"
            >
              <div
                className="flex items-center gap-2 px-4 py-2"
                data-id="fc66721c-8a0c-5656-8e91-a668ba3f14e1"
              >
                <span
                  className="w-2 h-2 animate-pulse rounded-full bg-green-500"
                  data-id="c6de09f8-5ee5-53aa-baf7-4c94146a6df8"
                />
                <span
                  className="text-xs text-[#71717b]"
                  data-id="35395025-9616-51d9-ab09-9cf6f513d85e"
                >
                  Live Connected
                </span>
              </div>
              <Button
                className="w-full justify-start gap-2 text-sm text-[#71717b]"
                variant="ghost"
                data-id="1a8e0938-082c-5a43-9c24-9e0c3d9095ef"
              >
                <LogOut
                  className="size-4"
                  data-id="73bf2403-91ba-571c-86ba-99d5e47c511b"
                />
                <span data-id="46373a05-3755-5421-b8ab-0d9fdac9ed7a">
                  Logout
                </span>
              </Button>
            </div>
          </aside>
          <main
            className="flex-1 flex flex-col overflow-hidden"
            data-id="fb53bafe-fbeb-5f08-ab63-bda79bebf4ce"
          >
            <div
              className="flex items-center justify-between px-8 py-4 sticky top-0 z-10 bg-white border-zinc-200 border-0 border-solid"
              data-id="2a2006d9-2292-59d5-b2f0-cc9597c03274"
            >
              <div
                className="flex items-center gap-2"
                data-id="a60070ca-09d7-5eb0-a1a9-e8ed1b8d360c"
              >
                <Activity
                  className="size-5 text-[#8e51ff]"
                  data-id="a8e51392-572a-5a9f-b853-66a88379f305"
                />
                <h1
                  className="text-lg font-semibold"
                  data-id="41a1d1c1-946d-5cdf-b022-ee8abdaa4d73"
                >
                  Analytics
                </h1>
              </div>
              <div
                className="flex items-center gap-4"
                data-id="c1ccfe6f-27e0-5452-8caa-623e8f763a30"
              >
                <span
                  className="text-sm text-[#71717b]"
                  data-id="f2a277e2-89e2-5d9a-9aa1-9d96e82a7c25"
                >
                  admin@shopify-app.com
                </span>
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#8e51ff]/20"
                  data-id="c0d281ec-2179-5072-a072-5d313a0d09b1"
                >
                  <span
                    className="text-xs font-semibold text-[#8e51ff]"
                    data-id="82dfd13c-928e-5c61-be83-9210ba9edb28"
                  >
                    A
                  </span>
                </div>
                <Button
                  className="gap-2 text-sm"
                  size="sm"
                  variant="outline"
                  data-id="2bc6b34f-c609-5fa7-a6b2-664e1e778717"
                >
                  <LogOut
                    className="size-3"
                    data-id="c86be74e-e8ab-5299-b620-240c596f0965"
                  />
                  <span data-id="c92f9f70-ab34-549d-8287-ba266f04a61f">
                    Logout
                  </span>
                </Button>
              </div>
            </div>
            <div
              className="flex-1 overflow-y-auto p-8"
              data-id="42660f72-d80e-565f-92a0-b8fa9fb15df2"
            >
              <div
                className="flex flex-col gap-6"
                data-id="11780c5c-e5a8-52f9-b4c0-eace27162c2b"
              >
                <Alert
                  className="flex items-center gap-4 p-4 rounded-xl"
                  variant="destructive"
                  data-id="c23efc57-ad63-5831-b7ce-a5d02c304ae1"
                >
                  <AlertTriangle
                    className="size-5"
                    data-id="f246ccef-919c-5a46-b6e1-f9decd7a9ad6"
                  />
                  <div
                    className="flex-1"
                    data-id="50452d24-f85f-596f-af66-c44871a6347b"
                  >
                    <AlertTitle
                      className="text-sm font-semibold"
                      data-id="a0f6ad42-d028-59bb-ae2c-ef2aa0503b53"
                    >
                      Error
                    </AlertTitle>
                    <AlertDescription
                      className="text-sm"
                      data-id="2dd320ac-a826-59ac-ac94-6191f7706e44"
                    >
                      Failed to load analytics data
                    </AlertDescription>
                  </div>
                  <Button
                    size="sm"
                    variant="destructive"
                    data-id="6855724e-1853-5aff-b8bf-a3bc667505e3"
                  >
                    Retry
                  </Button>
                </Alert>
                <div
                  className="grid grid-cols-3 gap-6"
                  data-id="f77c3b3d-0e2e-563c-a6df-4af45712231f"
                >
                  <Card
                    className="p-6 gap-4 shadow-lg hover:shadow-xl transition-all cursor-pointer rounded-xl"
                    data-id="fb8e7f78-a771-58ed-9b0e-38e0a30c58ad"
                  >
                    <CardHeader
                      className="p-0 gap-1"
                      data-id="3f2f3f0c-44a4-5436-acbe-d2c629dabc38"
                    >
                      <p
                        className="text-sm text-[#71717b]"
                        data-id="6a593ed6-8d0c-5e60-b105-f723effa9c2e"
                      >
                        Revenue (7d)
                      </p>
                    </CardHeader>
                    <CardContent
                      className="p-0 gap-2"
                      data-id="66d952a5-e9e2-5635-b750-21d73f6b6359"
                    >
                      <div
                        className="flex items-end justify-between"
                        data-id="ee8c8528-93b8-5f48-a3f9-5536b6066d20"
                      >
                        <span
                          className="text-3xl font-semibold"
                          data-id="85ef4154-d038-5542-97c9-b9801b0736de"
                        >
                          $8,320
                        </span>
                        <div
                          className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 text-green-500"
                          data-id="341aa433-8070-5a90-8123-1a605a24669e"
                        >
                          <TrendingUp
                            className="size-3"
                            data-id="a31c272c-7ba7-5b28-b234-7e7cb570abc7"
                          />
                          <span
                            className="text-xs font-medium"
                            data-id="ae9ed1f6-5286-534c-ad68-fd4be458a19d"
                          >
                            +12.5%
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    className="p-6 gap-4 shadow-lg hover:shadow-xl transition-all cursor-pointer rounded-xl"
                    data-id="e68522a0-914c-5db0-b63d-232775f8fd38"
                  >
                    <CardHeader
                      className="p-0 gap-1"
                      data-id="361e1588-069b-54d2-b9bc-62bdc997c42e"
                    >
                      <p
                        className="text-sm text-[#71717b]"
                        data-id="985dc082-f65d-5cba-af39-bbd5075e3586"
                      >
                        Conversion Rate
                      </p>
                    </CardHeader>
                    <CardContent
                      className="p-0 gap-2"
                      data-id="5e26b869-317f-5a81-ab19-cb30d866fc26"
                    >
                      <div
                        className="flex items-end justify-between"
                        data-id="268c4bca-635a-594c-bce0-357bd194d850"
                      >
                        <span
                          className="text-3xl font-semibold"
                          data-id="c6d329ab-4726-5df5-be0a-40196eddc4e3"
                        >
                          4.1%
                        </span>
                        <div
                          className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 text-green-500"
                          data-id="72b6df02-1027-587b-8c73-c80f03512a24"
                        >
                          <TrendingUp
                            className="size-3"
                            data-id="6667c6dc-09f5-5b3d-a844-58ca612bcab4"
                          />
                          <span
                            className="text-xs font-medium"
                            data-id="ec3e69a9-fdde-56bd-b52d-ccc4a301c414"
                          >
                            +0.8%
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    className="p-6 gap-4 shadow-lg hover:shadow-xl transition-all cursor-pointer rounded-xl"
                    data-id="fd2a4c06-8692-5e28-b8a1-ec57776abdea"
                  >
                    <CardHeader
                      className="p-0 gap-1"
                      data-id="5afcbea9-2c4f-5d17-8187-b345001b9f5d"
                    >
                      <p
                        className="text-sm text-[#71717b]"
                        data-id="79f0b48c-ff99-5480-ad0a-dadea6466c51"
                      >
                        Avg Order Value
                      </p>
                    </CardHeader>
                    <CardContent
                      className="p-0 gap-2"
                      data-id="8938691c-ef33-5150-9778-7e366962c868"
                    >
                      <div
                        className="flex items-end justify-between"
                        data-id="a398b74d-46f6-5160-8557-68b1e1a07fb7"
                      >
                        <span
                          className="text-3xl font-semibold"
                          data-id="7ca277f8-1a86-5150-8d1b-fa20ad3ab8a7"
                        >
                          $67.50
                        </span>
                        <div
                          className="flex items-center gap-1 px-2 py-1 rounded-full bg-zinc-100 text-[#71717b]"
                          data-id="22ee0694-8873-510f-bfa1-9da4c2c8aaea"
                        >
                          <Minus
                            className="size-3"
                            data-id="9c9670bf-8c39-50b7-9488-708160c03f89"
                          />
                          <span
                            className="text-xs font-medium"
                            data-id="819c548b-89ef-58fe-ad3f-674560424717"
                          >
                            0.0%
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <Card
                  className="p-6 gap-6 shadow-lg rounded-2xl"
                  data-id="3ed02df2-1555-5892-93cd-ccc26e61915c"
                >
                  <CardHeader
                    className="p-0 gap-2 flex flex-row items-center justify-between"
                    data-id="d7d0f2f5-bf52-5d66-a8bb-d618d9cd2108"
                  >
                    <div
                      className="flex flex-col gap-1"
                      data-id="3af55d4d-5569-56ea-86ba-eca59786cd7b"
                    >
                      <CardTitle
                        className="text-base font-semibold"
                        data-id="ccdb04b7-0a10-5b32-8a11-2276a73e7b92"
                      >
                        Revenue Overview
                      </CardTitle>
                      <CardDescription
                        className="text-sm text-[#71717b]"
                        data-id="9276b5d0-6ad9-58bc-a83d-244e5c1cf384"
                      >
                        Daily revenue for the past 7 days
                      </CardDescription>
                    </div>
                    <Button
                      className="gap-2"
                      size="sm"
                      variant="outline"
                      data-id="59cead20-8da5-5e28-b106-59a643d600e7"
                    >
                      <Calendar
                        className="size-3"
                        data-id="f83b423d-63f1-5436-a2f3-f7c482b019b3"
                      />
                      <span data-id="fe3586a9-c5fc-5873-bb39-f9cdcc67c0a5">
                        Last 7 Days
                      </span>
                      <ChevronDown
                        className="size-3"
                        data-id="cc6f9cef-d049-5a5d-af08-1876e407f040"
                      />
                    </Button>
                  </CardHeader>
                  <CardContent
                    className="p-0 gap-0"
                    data-id="a659fd26-c7c9-5d75-8ac0-9515f9634c55"
                  >
                    <div
                      className="h-[320px]"
                      data-id="91559352-91e1-5605-a8a6-8b164974a890"
                    >
                      <ChartContainer
                        className="h-full w-full"
                        config={{
                          revenue: {
                            color: "oklch(0.606 0.25 292.717)",
                            label: "Revenue",
                          },
                        }}
                        data-id="ce7545d7-fc2b-5ffb-b757-107f164555c9"
                      >
                        <RechartsBarChart
                          data={[
                            { day: "Mon", revenue: 980 },
                            { day: "Tue", revenue: 1250 },
                            { day: "Wed", revenue: 1100 },
                            { day: "Thu", revenue: 1420 },
                            { day: "Fri", revenue: 1380 },
                            { day: "Sat", revenue: 1050 },
                            { day: "Sun", revenue: 1140 },
                          ]}
                          margin={{ bottom: 8, left: 8, right: 8, top: 8 }}
                          data-id="c3726817-57fe-5d01-b5b0-12f58a05821d"
                        >
                          <CartesianGrid
                            stroke="oklch(0.92 0.004 286.32)"
                            strokeDasharray="3 3"
                            vertical={false}
                            data-id="f14dba3f-0b84-5d5b-afdc-e74df8357a79"
                          />
                          <XAxis
                            axisLine={false}
                            dataKey="day"
                            tick={{
                              fill: "oklch(0.552 0.016 285.938)",
                              fontSize: 12,
                            }}
                            tickLine={false}
                            data-id="5fb5c5b1-f284-5489-9a75-1f3387b01259"
                          />
                          <YAxis
                            axisLine={false}
                            tick={{
                              fill: "oklch(0.552 0.016 285.938)",
                              fontSize: 12,
                            }}
                            tickLine={false}
                            data-id="8f424e05-635e-5140-b28b-4eff7717a9e2"
                          />
                          <ChartTooltip data-id="d0abf81f-3af5-52cf-a628-c2d5171e0e80" />
                          <Bar
                            dataKey="revenue"
                            fill="oklch(0.606 0.25 292.717)"
                            radius={[6, 6, 0, 0]}
                            data-id="afe9b28e-4002-59ee-a6e5-815338fbc7d0"
                          />
                        </RechartsBarChart>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="p-6 gap-6 shadow-lg rounded-2xl"
                  data-id="00f3cebf-23ab-5967-8fc1-294800b71d3e"
                >
                  <CardHeader
                    className="p-0 gap-2 flex flex-row items-center justify-between"
                    data-id="f9147bc1-9e18-5935-be4a-01448fc80839"
                  >
                    <div
                      className="flex flex-col gap-1"
                      data-id="91b0e3a0-bf3c-5657-a25a-34c7845f37d5"
                    >
                      <CardTitle
                        className="text-base font-semibold"
                        data-id="a6c538b9-7508-5c92-ba56-f901bc79fc7f"
                      >
                        Top Products
                      </CardTitle>
                      <CardDescription
                        className="text-sm text-[#71717b]"
                        data-id="40a8ce29-2376-5ddc-9e04-3db0b56c4ccc"
                      >
                        Best performing products by revenue
                      </CardDescription>
                    </div>
                    <Button
                      className="gap-2"
                      size="sm"
                      variant="outline"
                      data-id="a4705588-b198-5118-bceb-51fc77e083f5"
                    >
                      <Download
                        className="size-3"
                        data-id="a8093ef1-ea6e-53cf-90b7-cadf517d904a"
                      />
                      <span data-id="5f68d95d-9c63-54e2-97ea-ef6be8464a46">
                        Export
                      </span>
                    </Button>
                  </CardHeader>
                  <CardContent
                    className="p-0 gap-0"
                    data-id="c938c5eb-b4c1-599d-b900-5aa6e8f6d9e0"
                  >
                    <div
                      className="overflow-hidden rounded-xl border-zinc-200 border-0 border-solid"
                      data-id="98636110-a28a-5168-8e44-38eb9fbd0d72"
                    >
                      <Table data-id="302937f3-0e98-5494-a611-94408c62475f">
                        <TableHeader data-id="d7eec8d3-4b30-53fc-a8d0-a4c0dfd7d8a2">
                          <TableRow
                            className="hover:bg-muted/50 bg-zinc-100/50"
                            data-id="29d7e746-9d31-5f1d-b783-de1e8d347178"
                          >
                            <TableHead
                              className="text-xs font-semibold text-[#71717b]"
                              data-id="169eec81-4d53-5f8f-81e4-dc1f2e3e7267"
                            >
                              Product Name
                            </TableHead>
                            <TableHead
                              className="text-xs font-semibold text-[#71717b]"
                              data-id="351b1ec4-f4ad-5175-927c-a7fc797102a6"
                            >
                              Category
                            </TableHead>
                            <TableHead
                              className="text-xs font-semibold text-right text-[#71717b]"
                              data-id="3bba5d77-e33f-5b62-a59f-e6767fc756db"
                            >
                              Revenue
                            </TableHead>
                            <TableHead
                              className="text-xs font-semibold text-right text-[#71717b]"
                              data-id="1c1e1850-1cdc-5cda-b96c-5b4973f12f76"
                            >
                              Units Sold
                            </TableHead>
                            <TableHead
                              className="text-xs font-semibold text-right text-[#71717b]"
                              data-id="db209e6d-74a0-50dd-a179-b61c76c18465"
                            >
                              Conversion Rate
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody data-id="7f435405-346c-554e-b82e-3800fc588b40">
                          <TableRow
                            className="hover:bg-primary/5 transition-colors"
                            data-id="e871c7de-6300-50c0-896e-062045db336c"
                          >
                            <TableCell
                              className="text-sm font-medium"
                              data-id="cd5324ff-ff3f-5540-b979-925b7b90338c"
                            >
                              Premium Wireless Headphones
                            </TableCell>
                            <TableCell
                              className="text-sm text-[#71717b]"
                              data-id="2cc3ee7d-6df3-5386-ad2a-80a1082c2a8f"
                            >
                              Electronics
                            </TableCell>
                            <TableCell
                              className="text-sm text-right font-medium"
                              data-id="ab360ac6-8fec-5c2c-a7c3-6ab21f57ff7c"
                            >
                              $2,450
                            </TableCell>
                            <TableCell
                              className="text-sm text-right"
                              data-id="1a7980e3-faa9-5f3c-8a78-d90fbbdd2c0f"
                            >
                              98
                            </TableCell>
                            <TableCell
                              className="text-sm text-right"
                              data-id="5dfe43c4-4029-51ea-8247-f72b2dc061af"
                            >
                              <span
                                className="font-medium text-green-500"
                                data-id="3a67ed86-d3bd-59b9-a852-43a6d8dec9b1"
                              >
                                6.2%
                              </span>
                            </TableCell>
                          </TableRow>
                          <TableRow
                            className="hover:bg-primary/5 transition-colors bg-zinc-100/30"
                            data-id="51dd8308-648f-5034-8df0-07b9f1e159c6"
                          >
                            <TableCell
                              className="text-sm font-medium"
                              data-id="8686409b-6049-52cc-ac9c-2a0fede5464e"
                            >
                              Organic Cotton T-Shirt
                            </TableCell>
                            <TableCell
                              className="text-sm text-[#71717b]"
                              data-id="67f001ef-464b-586b-a367-065ba3fccb35"
                            >
                              Apparel
                            </TableCell>
                            <TableCell
                              className="text-sm text-right font-medium"
                              data-id="a569c4ee-243f-5f10-95ba-224061b2204f"
                            >
                              $1,890
                            </TableCell>
                            <TableCell
                              className="text-sm text-right"
                              data-id="7d201795-81a9-531b-a385-ce13a98d0c91"
                            >
                              189
                            </TableCell>
                            <TableCell
                              className="text-sm text-right"
                              data-id="f93efb21-eacc-5a09-93b2-758973e40c78"
                            >
                              <span
                                className="font-medium text-green-500"
                                data-id="9abf8035-7c30-5bb4-b76c-b16c045b7684"
                              >
                                5.8%
                              </span>
                            </TableCell>
                          </TableRow>
                          <TableRow
                            className="hover:bg-primary/5 transition-colors"
                            data-id="440b9972-f234-5ba2-b2da-4894d77471f0"
                          >
                            <TableCell
                              className="text-sm font-medium"
                              data-id="43235811-daf2-506f-8735-9ff5228578f2"
                            >
                              Smart Home Hub Pro
                            </TableCell>
                            <TableCell
                              className="text-sm text-[#71717b]"
                              data-id="7c52a606-5142-514f-91bd-9c15615c7561"
                            >
                              Smart Home
                            </TableCell>
                            <TableCell
                              className="text-sm text-right font-medium"
                              data-id="b8013f97-01aa-5ad0-a66a-abfd22eea387"
                            >
                              $1,650
                            </TableCell>
                            <TableCell
                              className="text-sm text-right"
                              data-id="fa699819-25b5-5689-be46-15cab0b08131"
                            >
                              55
                            </TableCell>
                            <TableCell
                              className="text-sm text-right"
                              data-id="c0020e93-a233-5a47-ab29-22214ffbc90b"
                            >
                              <span
                                className="font-medium text-green-500"
                                data-id="ee7fd902-aab7-54ee-b53e-322ac8fb006f"
                              >
                                4.9%
                              </span>
                            </TableCell>
                          </TableRow>
                          <TableRow
                            className="hover:bg-primary/5 transition-colors bg-zinc-100/30"
                            data-id="84ec12c9-8bc7-5db5-b75c-ed8083fa6335"
                          >
                            <TableCell
                              className="text-sm font-medium"
                              data-id="18a121e3-de10-5dd4-9cca-2a61726e419c"
                            >
                              Artisan Coffee Blend
                            </TableCell>
                            <TableCell
                              className="text-sm text-[#71717b]"
                              data-id="72dfe70e-e577-53ab-ae6a-b605bb573f73"
                            >
                              Food &amp; Beverage
                            </TableCell>
                            <TableCell
                              className="text-sm text-right font-medium"
                              data-id="71cf321b-893b-57dd-9286-ddb5254dc188"
                            >
                              $1,320
                            </TableCell>
                            <TableCell
                              className="text-sm text-right"
                              data-id="e1f48c09-beb9-53b0-85ca-75fd732351c0"
                            >
                              264
                            </TableCell>
                            <TableCell
                              className="text-sm text-right"
                              data-id="1ab7d7c8-f5bf-5a1c-8298-f207fa513454"
                            >
                              <span
                                className="font-medium text-green-500"
                                data-id="80e66924-50cf-5262-a894-ba15c9381e6d"
                              >
                                4.5%
                              </span>
                            </TableCell>
                          </TableRow>
                          <TableRow
                            className="hover:bg-primary/5 transition-colors"
                            data-id="6facf599-a996-54a9-bbe1-42a02d3e4eef"
                          >
                            <TableCell
                              className="text-sm font-medium"
                              data-id="9353ad0b-8ca5-581a-bb0f-63d13e375b15"
                            >
                              Yoga Mat Premium
                            </TableCell>
                            <TableCell
                              className="text-sm text-[#71717b]"
                              data-id="0ec91f5f-70a3-5e08-b3e8-571234b7d658"
                            >
                              Fitness
                            </TableCell>
                            <TableCell
                              className="text-sm text-right font-medium"
                              data-id="d15202a2-084d-5101-99fc-9371a685af85"
                            >
                              $980
                            </TableCell>
                            <TableCell
                              className="text-sm text-right"
                              data-id="e9dc29d7-70d5-520f-a69f-80daf86da385"
                            >
                              140
                            </TableCell>
                            <TableCell
                              className="text-sm text-right"
                              data-id="ebe2abbb-9f60-52f1-92f3-2059efb86532"
                            >
                              <span
                                className="font-medium text-[#71717b]"
                                data-id="8e24a903-a672-5414-a5b0-8e82bfddb12f"
                              >
                                3.8%
                              </span>
                            </TableCell>
                          </TableRow>
                          <TableRow
                            className="hover:bg-primary/5 transition-colors bg-zinc-100/30"
                            data-id="fc8533de-e370-5d60-85b0-c0f37c65b063"
                          >
                            <TableCell
                              className="text-sm font-medium"
                              data-id="14703373-d600-5522-9fed-5e1d676f61c1"
                            >
                              Stainless Steel Water Bottle
                            </TableCell>
                            <TableCell
                              className="text-sm text-[#71717b]"
                              data-id="2687d986-ae5a-5be1-8d48-a4fa0898320c"
                            >
                              Accessories
                            </TableCell>
                            <TableCell
                              className="text-sm text-right font-medium"
                              data-id="57c7a284-b3d8-5338-ab90-05c50bfde308"
                            >
                              $870
                            </TableCell>
                            <TableCell
                              className="text-sm text-right"
                              data-id="5bf24e80-f5ac-597d-9e5a-a931eeabe1ba"
                            >
                              174
                            </TableCell>
                            <TableCell
                              className="text-sm text-right"
                              data-id="86b3259c-bea2-5545-b17e-933a737ecca8"
                            >
                              <span
                                className="font-medium text-[#71717b]"
                                data-id="29ee61ba-580d-50f9-adc4-c03e8fe04201"
                              >
                                3.5%
                              </span>
                            </TableCell>
                          </TableRow>
                          <TableRow
                            className="hover:bg-primary/5 transition-colors"
                            data-id="f881b586-9744-5946-91b2-da252c23561d"
                          >
                            <TableCell
                              className="text-sm font-medium"
                              data-id="a244809f-ae04-5a56-8624-e32e2959cca5"
                            >
                              LED Desk Lamp
                            </TableCell>
                            <TableCell
                              className="text-sm text-[#71717b]"
                              data-id="6b98f428-6bc5-56bc-8f90-0dffe65e9cab"
                            >
                              Home Office
                            </TableCell>
                            <TableCell
                              className="text-sm text-right font-medium"
                              data-id="d360f765-aaab-5a9c-8eae-f5a3e6c9c16f"
                            >
                              $720
                            </TableCell>
                            <TableCell
                              className="text-sm text-right"
                              data-id="a2215f7a-87cf-5543-b7f3-1b752583d122"
                            >
                              90
                            </TableCell>
                            <TableCell
                              className="text-sm text-right"
                              data-id="42254350-e834-519c-82d3-2ffc00858ef4"
                            >
                              <span
                                className="font-medium text-[#71717b]"
                                data-id="980637b3-709f-50f7-a09c-b62549ffd526"
                              >
                                3.2%
                              </span>
                            </TableCell>
                          </TableRow>
                          <TableRow
                            className="hover:bg-primary/5 transition-colors bg-zinc-100/30"
                            data-id="001dee45-f99e-55b7-9152-127d9f5f1037"
                          >
                            <TableCell
                              className="text-sm font-medium"
                              data-id="a70d8b3f-f1a4-59a5-811e-0b7b4406b88e"
                            >
                              Natural Skincare Set
                            </TableCell>
                            <TableCell
                              className="text-sm text-[#71717b]"
                              data-id="c600d2dd-6b43-5b08-b235-14e11558f75e"
                            >
                              Beauty
                            </TableCell>
                            <TableCell
                              className="text-sm text-right font-medium"
                              data-id="011e808b-5b88-5e27-a64a-992d59f65464"
                            >
                              $650
                            </TableCell>
                            <TableCell
                              className="text-sm text-right"
                              data-id="4434adfb-1709-5cd4-ba25-071b9f3bad60"
                            >
                              65
                            </TableCell>
                            <TableCell
                              className="text-sm text-right"
                              data-id="4dd1de0f-9a8f-55c3-ba9a-f25d2ce693f3"
                            >
                              <span
                                className="font-medium text-[#71717b]"
                                data-id="da53549d-d580-5245-a710-2958df5230f6"
                              >
                                2.9%
                              </span>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
