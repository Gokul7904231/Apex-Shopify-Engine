import { useEffect } from "react";
import { loadFonts } from "./utils";
import {
  Activity,
  BarChart3,
  DollarSign,
  LayoutDashboard,
  Lightbulb,
  LogOut,
  Percent,
  RefreshCw,
  Search,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import {
  Area,
  AreaChart as RechartsAreaChart,
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
        data-id="123d3919-0b1a-50a4-9420-ce287127eb8b"
      >
        <div
          className="flex"
          style={{ height: "100vh", overflow: "hidden" }}
          data-id="352ce03a-1e33-5fa8-b6e2-5f3ad2bae61b"
        >
          <aside
            className="flex flex-col justify-between"
            style={{
              WebkitBackdropFilter: "blur(24px)",
              backdropFilter: "blur(24px)",
              background: "rgba(15,23,42,0.7)",
              borderRight: "1px solid rgba(255,255,255,0.08)",
              minWidth: "260px",
              width: "260px",
            }}
            data-id="ba63a2f4-aeca-5c79-b7cb-0ffc8209dc19"
          >
            <div data-id="4d9f4d1a-0351-54a9-b293-a6aa15f29ff6">
              <div
                className="p-6 flex items-center gap-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                data-id="a8e01cf4-cf02-537e-9f00-1d6321f10987"
              >
                <div
                  className="flex items-center justify-center rounded-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.606 0.25 292.717), oklch(0.577 0.245 27.325))",
                    height: "40px",
                    width: "40px",
                  }}
                  data-id="0d7f7087-d618-5c7d-a318-fd26652a3f24"
                >
                  <BarChart3
                    className="size-5"
                    style={{ color: "white" }}
                    data-id="b950ffff-4294-51f3-89b4-e8f92af27367"
                  />
                </div>
                <div
                  className="flex flex-col"
                  data-id="1931b652-3f9f-528d-ab0f-fbfa866e829f"
                >
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "white" }}
                    data-id="a8db2541-5f88-5da2-b609-db9aaa492a4a"
                  >
                    Analytics Engine
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    data-id="b1927e67-b19c-588a-9399-9ab8089ad2f6"
                  >
                    Shopify App
                  </span>
                </div>
              </div>
              <nav
                className="flex flex-col gap-1 p-4"
                data-id="8e532f15-7d3c-5c37-9c16-78cb28ab2ff1"
              >
                <a
                  className="flex items-center gap-4 px-4 py-3 text-sm font-medium transition-all rounded-lg"
                  style={{
                    background: "rgba(99,102,241,0.1)",
                    borderLeft: "3px solid oklch(0.606 0.25 292.717)",
                    color: "white",
                  }}
                  data-id="f0afb7b6-6c45-5c9b-95c4-ae968aef0634"
                >
                  <LayoutDashboard
                    className="size-4"
                    style={{ color: "oklch(0.606 0.25 292.717)" }}
                    data-id="cb7b062a-0477-5b90-ac08-2d8a0fb87b62"
                  />
                  <span data-id="bab25183-8c6b-5610-84fc-733dd5eabb73">
                    Dashboard
                  </span>
                </a>
                <a
                  className="flex items-center gap-4 px-4 py-3 text-sm font-medium transition-all rounded-lg"
                  style={{
                    borderLeft: "3px solid transparent",
                    color: "rgba(255,255,255,0.6)",
                  }}
                  data-id="10064285-bcfe-5989-a6a4-a98580c1ea0b"
                >
                  <Search
                    className="size-4"
                    data-id="e9fe5d5c-1050-5ae6-902a-f1036b202e34"
                  />
                  <span data-id="1758fa47-b7ec-540b-a090-1efe5dfc04dd">
                    Product Search
                  </span>
                </a>
                <a
                  className="flex items-center gap-4 px-4 py-3 text-sm font-medium transition-all rounded-lg"
                  style={{
                    borderLeft: "3px solid transparent",
                    color: "rgba(255,255,255,0.6)",
                  }}
                  data-id="e257bac0-454c-5ab9-a63c-85ed33bb420e"
                >
                  <Lightbulb
                    className="size-4"
                    data-id="1e81b3bb-240f-555e-b03e-e9aca8773b5e"
                  />
                  <span data-id="031bf14a-9252-5bb8-b02c-cffbec47ada1">
                    Recommendations
                  </span>
                </a>
                <a
                  className="flex items-center gap-4 px-4 py-3 text-sm font-medium transition-all rounded-lg"
                  style={{
                    borderLeft: "3px solid transparent",
                    color: "rgba(255,255,255,0.6)",
                  }}
                  data-id="ab110bd7-9703-5592-aec0-4291bd0b09ea"
                >
                  <BarChart3
                    className="size-4"
                    data-id="1c109763-b205-521e-b7e9-a505e0539c28"
                  />
                  <span data-id="a133c089-55ad-543f-bca9-6dc91b6677a5">
                    Analytics
                  </span>
                </a>
              </nav>
            </div>
            <div
              className="p-6 flex flex-col gap-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              data-id="53d45af1-a6da-5206-a830-65f35119f693"
            >
              <div
                className="flex items-center justify-center"
                data-id="d47d9b4c-2bf1-5d92-a388-945e1ba98ea7"
              >
                <Badge
                  className="text-xs px-4 py-1 rounded-full"
                  style={{
                    background: "rgba(99,102,241,0.15)",
                    border: "1px solid rgba(99,102,241,0.3)",
                    color: "oklch(0.606 0.25 292.717)",
                  }}
                  variant="secondary"
                  data-id="d3b5b824-ee52-56ba-a774-ba4e44aa18cd"
                >
                  Demo Mode
                </Badge>
              </div>
              <Button
                className="w-full gap-2 text-sm rounded-lg"
                style={{
                  background: "transparent",
                  borderColor: "rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.7)",
                }}
                variant="outline"
                data-id="fdd0f132-0795-5e69-8131-af95627bb51b"
              >
                <LogOut
                  className="size-4"
                  data-id="afff2fc4-bee5-564b-b7e1-da30cd296c36"
                />
                Logout
              </Button>
            </div>
          </aside>
          <main
            className="flex-1 flex flex-col"
            style={{ background: "oklch(1 0 0)", overflow: "hidden" }}
            data-id="68eccac9-a585-58fc-8d9c-6ff119d9a420"
          >
            <div
              className="flex items-center justify-end gap-4 px-8 py-4"
              style={{
                background: "oklch(1 0 0)",
                borderBottom: "1px solid oklch(0.92 0.004 286.32)",
                position: "sticky",
                top: 0,
                zIndex: 10,
              }}
              data-id="d6a54fa1-8526-50a8-9338-e334593fb563"
            >
              <span
                className="text-sm text-[#71717b]"
                data-id="af8b476d-c263-5301-bcfe-80dc52f9f73c"
              >
                user@example.com
              </span>
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.606 0.25 292.717), oklch(0.577 0.245 27.325))",
                  height: "36px",
                  width: "36px",
                }}
                data-id="6d6cd092-141d-598e-b0aa-8683c963bc9e"
              >
                <span
                  className="text-xs font-semibold"
                  style={{ color: "white" }}
                  data-id="8d007fca-863a-506f-afaf-7ff5c5294689"
                >
                  A
                </span>
              </div>
              <Button
                className="gap-2 text-sm rounded-lg"
                variant="outline"
                data-id="c6dae850-8657-5fe9-a9e7-7dc1b5a33d01"
              >
                <LogOut
                  className="size-4"
                  data-id="d3c33bc4-6d28-51b3-b9aa-825d69bb1914"
                />
                Logout
              </Button>
            </div>
            <div
              className="flex-1 p-8 flex flex-col gap-8"
              style={{ overflowY: "auto" }}
              data-id="508125bc-5a6d-5c55-a2c5-d5ceee0eab9b"
            >
              <div
                className="flex flex-col gap-2"
                data-id="36426745-3a74-5c6b-b5e0-0177ec89b3fe"
              >
                <h1
                  className="text-3xl font-semibold text-zinc-950"
                  data-id="57999355-5931-5490-b1a3-45a5021cb63f"
                >
                  Welcome, Alex
                </h1>
                <p
                  className="text-sm text-[#71717b]"
                  data-id="12fcadb1-eccb-5d2c-a179-4cd74d6625c1"
                >
                  Here's an overview of your store performance and insights.
                </p>
              </div>
              <div
                className="relative"
                data-id="a63e6c28-df55-5705-bdb1-5a0769d68247"
              >
                <div
                  className="flex items-center gap-4 px-6 py-4 rounded-xl bg-white border-zinc-200 border-0 border-solid"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
                  data-id="518152ae-b3fb-505b-a9a6-db9dd7ca5c0b"
                >
                  <Search
                    className="size-5 text-[#71717b]"
                    data-id="0380dda7-df53-56dd-87ce-c28a9f2ea589"
                  />
                  <span
                    className="text-sm flex-1 text-[#71717b]"
                    data-id="e51bbf5d-f1af-58bb-9fd8-992e9e0881f8"
                  >
                    Search products, analytics, recommendations...
                  </span>
                  <kbd
                    className="text-xs px-2 py-1 rounded-md bg-zinc-100 text-[#71717b] border-zinc-200 border-0 border-solid"
                    data-id="a851245c-0bed-5243-838f-636f868dfa1b"
                  >
                    ⌘K
                  </kbd>
                </div>
              </div>
              <Card
                className="p-0 gap-0 rounded-2xl border-black/1 border-0 border-solid"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.606 0.25 292.717), oklch(0.496 0.265 301.924))",
                  overflow: "hidden",
                }}
                data-id="b0da26dd-e0d5-56a1-8ed0-d5dc57236161"
              >
                <CardContent
                  className="p-8 gap-4 flex items-center justify-between"
                  data-id="170d7868-5716-58b4-aab7-337a9651356d"
                >
                  <div
                    className="flex flex-col gap-2"
                    data-id="7317bb02-8f99-55f1-b8e3-3a82a0b02c7c"
                  >
                    <h2
                      className="text-2xl font-semibold"
                      style={{ color: "white" }}
                      data-id="e86a4765-0ea2-5d44-a3fb-d7a85d2866f1"
                    >
                      Unlock Premium Analytics
                    </h2>
                    <p
                      className="text-sm"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                      data-id="221326f6-2a4d-5adb-911d-2f063e097244"
                    >
                      Get advanced insights, AI-powered recommendations, and
                      unlimited product searches.
                    </p>
                  </div>
                  <Button
                    className="px-8 py-6 text-sm font-semibold rounded-xl"
                    style={{
                      background: "white",
                      boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
                      color: "oklch(0.606 0.25 292.717)",
                    }}
                    data-id="c3c3f84c-984a-5523-96e5-a95fa444560b"
                  >
                    Upgrade to Premium — $49.99/mo
                  </Button>
                </CardContent>
              </Card>
              <div
                className="grid grid-cols-4 gap-6"
                data-id="e460fa13-63ea-5088-be94-ff928f4dc047"
              >
                <Card
                  className="p-6 gap-4 rounded-xl border-zinc-200 border-0 border-solid"
                  style={{
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    transition: "transform 0.2s ease",
                  }}
                  data-id="36dbbb70-5fcd-5948-a0bb-eb376b8e5c57"
                >
                  <CardHeader
                    className="p-0 gap-2"
                    data-id="34a28389-47fe-5866-973e-dc75b795bc14"
                  >
                    <div
                      className="flex items-center justify-between"
                      data-id="10addd90-b46f-56ac-a9f4-d2cad7631b1f"
                    >
                      <span
                        className="text-sm font-medium text-[#71717b]"
                        data-id="af7119b1-81fe-5a3c-82d3-b8506a3b8bde"
                      >
                        Revenue
                      </span>
                      <div
                        className="flex items-center justify-center p-2 rounded-lg bg-zinc-100"
                        data-id="a5c15117-1788-55fd-832a-c60302ae9f31"
                      >
                        <DollarSign
                          className="size-4 text-[#8e51ff]"
                          data-id="64bf7095-b592-5bdc-b09b-b6521d315b86"
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent
                    className="p-0 gap-1"
                    data-id="f86a6b06-e223-5944-aab1-8c7d4d86b8d0"
                  >
                    <span
                      className="text-2xl font-semibold text-zinc-950"
                      data-id="62cbea9e-c34e-5ecc-9618-ca551f2c20b6"
                    >
                      $12,450
                    </span>
                    <div
                      className="flex items-center gap-1"
                      data-id="b59b2644-43cd-53d5-96c1-a33e944033ee"
                    >
                      <TrendingUp
                        className="size-3"
                        style={{ color: "oklch(0.6 0.118 184.704)" }}
                        data-id="9c8f0cd9-d0b7-5496-8f0c-3f5c3b007147"
                      />
                      <span
                        className="text-xs"
                        style={{ color: "oklch(0.6 0.118 184.704)" }}
                        data-id="2e11321a-80c2-523d-9558-1ae76e815535"
                      >
                        +12.5% from last month
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="p-6 gap-4 rounded-xl border-zinc-200 border-0 border-solid"
                  style={{
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    transition: "transform 0.2s ease",
                  }}
                  data-id="6b590d51-fc0c-5f0d-a865-a43a1804a6ba"
                >
                  <CardHeader
                    className="p-0 gap-2"
                    data-id="7c2bfc2e-5a8e-5beb-bb44-3473697a8936"
                  >
                    <div
                      className="flex items-center justify-between"
                      data-id="c0c2a411-8aba-5b79-9e39-d9d7254cbc83"
                    >
                      <span
                        className="text-sm font-medium text-[#71717b]"
                        data-id="459c8e0a-6649-5df9-a2c5-b8d026323054"
                      >
                        Conversion Rate
                      </span>
                      <div
                        className="flex items-center justify-center p-2 rounded-lg bg-zinc-100"
                        data-id="f6679143-3dd2-57c6-baea-0d0c3a459981"
                      >
                        <Percent
                          className="size-4 text-[#8e51ff]"
                          data-id="f0d3cee8-afa9-5ba5-b8f9-e6b9af772644"
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent
                    className="p-0 gap-1"
                    data-id="d166dc03-5396-5c9d-95dc-196c5b280d7e"
                  >
                    <span
                      className="text-2xl font-semibold text-zinc-950"
                      data-id="93dbce91-e3c9-514f-83d3-64be884157ac"
                    >
                      3.2%
                    </span>
                    <div
                      className="flex items-center gap-1"
                      data-id="10a5fd64-a641-5b84-bc39-221a294d31e5"
                    >
                      <TrendingUp
                        className="size-3"
                        style={{ color: "oklch(0.6 0.118 184.704)" }}
                        data-id="3a6e1254-b61f-52da-877d-2c0262bec82f"
                      />
                      <span
                        className="text-xs"
                        style={{ color: "oklch(0.6 0.118 184.704)" }}
                        data-id="e892c074-70e7-59eb-9b76-82eb73a63c7f"
                      >
                        +0.8% from last month
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="p-6 gap-4 rounded-xl border-zinc-200 border-0 border-solid"
                  style={{
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    transition: "transform 0.2s ease",
                  }}
                  data-id="e4719a10-9486-5fd5-8d88-08ab2f2cd1f6"
                >
                  <CardHeader
                    className="p-0 gap-2"
                    data-id="43b1a1f8-0717-56b9-bb17-d892e1132c3e"
                  >
                    <div
                      className="flex items-center justify-between"
                      data-id="92d5a55d-2c03-5574-a97e-b3c38fec6c28"
                    >
                      <span
                        className="text-sm font-medium text-[#71717b]"
                        data-id="56822459-cd4c-5980-bf84-69660837db18"
                      >
                        API Status
                      </span>
                      <div
                        className="flex items-center justify-center p-2 rounded-lg bg-zinc-100"
                        data-id="ba8f0647-3595-5c59-9649-6ab8aefb30f7"
                      >
                        <Activity
                          className="size-4 text-[#8e51ff]"
                          data-id="5edabae6-994e-5ffe-92ba-a73b57e862bd"
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent
                    className="p-0 gap-1"
                    data-id="3d3db7b5-d91d-5e50-aa5e-8ea0a6192ab9"
                  >
                    <span
                      className="text-2xl font-semibold text-zinc-950"
                      data-id="72852d3a-6ece-54b2-9f58-4ec2268182b2"
                    >
                      Online
                    </span>
                    <Badge
                      className="text-xs px-2 py-0.5 w-fit rounded-full"
                      style={{
                        background: "rgba(34,197,94,0.1)",
                        border: "1px solid rgba(34,197,94,0.3)",
                        color: "rgb(34,197,94)",
                      }}
                      data-id="18eb53ab-c266-54e0-9cf0-6ddd8715336d"
                    >
                      ● Operational
                    </Badge>
                  </CardContent>
                </Card>
                <Card
                  className="p-6 gap-4 rounded-xl border-zinc-200 border-0 border-solid"
                  style={{
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    transition: "transform 0.2s ease",
                  }}
                  data-id="5aee91b0-c64e-5552-aaa3-e25d4f2e32e8"
                >
                  <CardHeader
                    className="p-0 gap-2"
                    data-id="8fbf45b4-a21b-5d5a-949d-488bcd4dd988"
                  >
                    <div
                      className="flex items-center justify-between"
                      data-id="7b8f7932-f8f7-5d61-945c-55b97f58c6c5"
                    >
                      <span
                        className="text-sm font-medium text-[#71717b]"
                        data-id="550f90b9-7ba6-5883-ba77-e90b3f53f7cc"
                      >
                        Auth Sync Status
                      </span>
                      <div
                        className="flex items-center justify-center p-2 rounded-lg bg-zinc-100"
                        data-id="82acf8f4-68b2-5669-96ee-a8861a5a5961"
                      >
                        <RefreshCw
                          className="size-4 text-[#8e51ff]"
                          data-id="df76cf4b-beed-58a2-a18c-5301e7a0a4a7"
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent
                    className="p-0 gap-1"
                    data-id="e4c9257a-9038-53ce-b9be-4abf9f82e83e"
                  >
                    <span
                      className="text-2xl font-semibold text-zinc-950"
                      data-id="153c394f-34f7-5845-ac39-63b67ff3f71c"
                    >
                      Synced
                    </span>
                    <Badge
                      className="text-xs px-2 py-0.5 w-fit rounded-full"
                      style={{
                        background: "rgba(34,197,94,0.1)",
                        border: "1px solid rgba(34,197,94,0.3)",
                        color: "rgb(34,197,94)",
                      }}
                      data-id="a34c60a7-fa9f-5e24-861a-6679c1fc32b5"
                    >
                      ● Connected
                    </Badge>
                  </CardContent>
                </Card>
              </div>
              <div
                className="grid grid-cols-2 gap-6"
                data-id="37577a51-9eaf-5beb-8481-5df1fb722a8d"
              >
                <Card
                  className="p-6 gap-4 rounded-xl border-zinc-200 border-0 border-solid"
                  data-id="2350584b-a7c8-5c37-b291-587228ff581d"
                >
                  <CardHeader
                    className="p-0 gap-2"
                    data-id="fc52ceac-20cb-597b-b11d-d885436306c0"
                  >
                    <div
                      className="flex items-center justify-between"
                      data-id="1f0bb545-80b6-5a35-8a53-495b66ede91c"
                    >
                      <h3
                        className="text-base font-semibold text-zinc-950"
                        data-id="dcad95b4-0bf0-502e-bcb7-eae2d7208f2b"
                      >
                        Revenue Trend
                      </h3>
                      <Button
                        className="text-xs h-8 px-4 rounded-lg"
                        variant="outline"
                        data-id="d2ec69c5-66bc-5551-8da4-5808a2a8236b"
                      >
                        Last 7 days
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent
                    className="p-0 gap-0"
                    data-id="99671eda-b282-5930-b4db-cb195ef36382"
                  >
                    <ChartContainer
                      className="h-[220px] w-full"
                      config={{
                        revenue: {
                          color: "oklch(0.606 0.25 292.717)",
                          label: "Revenue",
                        },
                      }}
                      data-id="c11aad69-91b7-512d-bef5-9e520db324c3"
                    >
                      <RechartsAreaChart
                        data={[
                          { day: "Mon", revenue: 1800 },
                          { day: "Tue", revenue: 2200 },
                          { day: "Wed", revenue: 1900 },
                          { day: "Thu", revenue: 2800 },
                          { day: "Fri", revenue: 2400 },
                          { day: "Sat", revenue: 3100 },
                          { day: "Sun", revenue: 2700 },
                        ]}
                        margin={{ bottom: 0, left: 8, right: 8, top: 8 }}
                        data-id="5ee8cf8f-9111-5395-b108-39fc197a811a"
                      >
                        <defs data-id="97943d45-17a9-5fdd-b8d7-03030014abb3">
                          <linearGradient
                            id="revenueGrad"
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="1"
                            data-id="4833ed1e-fa79-5616-8298-d3d68f2b4a32"
                          >
                            <stop
                              offset="0%"
                              stopColor="oklch(0.606 0.25 292.717)"
                              stopOpacity={0.3}
                              data-id="03e6fcc5-4658-5413-8383-28d819f8797a"
                            />
                            <stop
                              offset="100%"
                              stopColor="oklch(0.606 0.25 292.717)"
                              stopOpacity={0.02}
                              data-id="ef4fbf9d-34b9-5436-b0e4-a96cdbe21ebe"
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid
                          stroke="oklch(0.92 0.004 286.32)"
                          strokeDasharray="3 3"
                          data-id="b37d3242-3c40-5610-9a7c-994cf1068a38"
                        />
                        <XAxis
                          axisLine={false}
                          dataKey="day"
                          tick={{
                            fill: "oklch(0.552 0.016 285.938)",
                            fontSize: 12,
                          }}
                          tickLine={false}
                          data-id="6ae5c2d0-70d4-5936-92c2-c33c76be17d4"
                        />
                        <YAxis
                          axisLine={false}
                          tick={{
                            fill: "oklch(0.552 0.016 285.938)",
                            fontSize: 12,
                          }}
                          tickLine={false}
                          data-id="b9e3f4e4-4302-5ffb-839a-a7238b2b86a5"
                        />
                        <Area
                          dataKey="revenue"
                          fill="url(#revenueGrad)"
                          stroke="oklch(0.606 0.25 292.717)"
                          strokeWidth={2}
                          type="monotone"
                          data-id="244df759-309e-514e-b313-4287915ffac6"
                        />
                        <ChartTooltip data-id="dba19421-c561-5751-a51b-e0e5701a2873" />
                      </RechartsAreaChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
                <Card
                  className="p-6 gap-4 rounded-xl border-zinc-200 border-0 border-solid"
                  data-id="936ce4fe-b08c-5b4e-b5d7-19e955e3eb7d"
                >
                  <CardHeader
                    className="p-0 gap-2"
                    data-id="b8cf2a16-b2bd-5a4a-b111-e1e884819146"
                  >
                    <div
                      className="flex items-center justify-between"
                      data-id="00883b1e-8343-5813-ac28-1c9bc98e2cca"
                    >
                      <h3
                        className="text-base font-semibold text-zinc-950"
                        data-id="3fe8e1e9-f0b3-5d8a-83fb-b0ec928d7eb6"
                      >
                        Top Products
                      </h3>
                      <Button
                        className="text-xs h-8 px-4 rounded-lg"
                        variant="outline"
                        data-id="364b762b-7d00-5c45-babb-8245f976ef62"
                      >
                        View All
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent
                    className="p-0 gap-4"
                    data-id="89325403-b2f7-5ff6-b7f4-f3bcfe3d13b8"
                  >
                    <div
                      className="flex flex-col gap-4"
                      data-id="d960826b-d152-5e15-a334-fc5f936187b4"
                    >
                      <div
                        className="flex items-center justify-between p-4 rounded-lg bg-zinc-100"
                        data-id="1dfb4d98-4516-5c5e-9933-08b203188c6f"
                      >
                        <div
                          className="flex items-center gap-4"
                          data-id="7db38525-0197-53b7-8bc6-911b3c317bd2"
                        >
                          <div
                            className="flex items-center justify-center rounded-lg"
                            style={{
                              background:
                                "linear-gradient(135deg, oklch(0.606 0.25 292.717), oklch(0.496 0.265 301.924))",
                              height: "40px",
                              width: "40px",
                            }}
                            data-id="dcc054ca-62a0-548e-abec-db3568ee106a"
                          >
                            <span
                              className="text-xs font-semibold"
                              style={{ color: "white" }}
                              data-id="662ebcc7-fc91-52a6-82f7-8a0620f9f508"
                            >
                              #1
                            </span>
                          </div>
                          <div
                            className="flex flex-col gap-0.5"
                            data-id="d27b3f70-3269-5b87-9a03-21210ecadaf4"
                          >
                            <span
                              className="text-sm font-medium text-zinc-950"
                              data-id="0f68c475-e8bc-5703-9990-2ac776dd0fb5"
                            >
                              Premium Widget Pro
                            </span>
                            <span
                              className="text-xs text-[#71717b]"
                              data-id="f742112d-c192-5944-bc31-84c30e74a129"
                            >
                              1,245 units sold
                            </span>
                          </div>
                        </div>
                        <span
                          className="text-sm font-semibold text-zinc-950"
                          data-id="6a7ffc21-b91b-57cc-9d95-bca4f955480f"
                        >
                          $4,890
                        </span>
                      </div>
                      <div
                        className="flex items-center justify-between p-4 rounded-lg bg-zinc-100"
                        data-id="8082b2f9-9c58-51ea-95b0-c7f17232ab48"
                      >
                        <div
                          className="flex items-center gap-4"
                          data-id="d86cc74f-5267-5b60-aa47-433ffacd0df1"
                        >
                          <div
                            className="flex items-center justify-center rounded-lg"
                            style={{
                              background: "oklch(0.967 0.001 286.375)",
                              border: "1px solid oklch(0.92 0.004 286.32)",
                              height: "40px",
                              width: "40px",
                            }}
                            data-id="91346c07-5439-55a1-a489-e9a69ea1656b"
                          >
                            <span
                              className="text-xs font-semibold text-[#71717b]"
                              data-id="de9d6e5c-ccd4-572c-a5de-8fe6b5ddbb09"
                            >
                              #2
                            </span>
                          </div>
                          <div
                            className="flex flex-col gap-0.5"
                            data-id="3eea0aae-299f-5e55-8575-e3d36248549f"
                          >
                            <span
                              className="text-sm font-medium text-zinc-950"
                              data-id="203fe56f-9c50-5314-87f9-64f8b05e583b"
                            >
                              Smart Gadget X
                            </span>
                            <span
                              className="text-xs text-[#71717b]"
                              data-id="4970f8b1-283d-5770-86b8-a30878174f45"
                            >
                              987 units sold
                            </span>
                          </div>
                        </div>
                        <span
                          className="text-sm font-semibold text-zinc-950"
                          data-id="92c3f520-e479-5ba4-9ae1-8f74cc6ba2b6"
                        >
                          $3,420
                        </span>
                      </div>
                      <div
                        className="flex items-center justify-between p-4 rounded-lg bg-zinc-100"
                        data-id="50c4c7f1-d458-544b-b1b1-1b67adc2a4ea"
                      >
                        <div
                          className="flex items-center gap-4"
                          data-id="87a6def3-bbb6-5274-b8a2-1d734f7f2f50"
                        >
                          <div
                            className="flex items-center justify-center rounded-lg"
                            style={{
                              background: "oklch(0.967 0.001 286.375)",
                              border: "1px solid oklch(0.92 0.004 286.32)",
                              height: "40px",
                              width: "40px",
                            }}
                            data-id="ce268e95-b28a-5946-afe3-fdce283992df"
                          >
                            <span
                              className="text-xs font-semibold text-[#71717b]"
                              data-id="ffc6fc7a-2a38-56ca-b855-2ca4b6f3fceb"
                            >
                              #3
                            </span>
                          </div>
                          <div
                            className="flex flex-col gap-0.5"
                            data-id="7673dc28-4411-5199-9a40-f1a4eb056386"
                          >
                            <span
                              className="text-sm font-medium text-zinc-950"
                              data-id="a062c840-9389-5d91-b75c-151a7bf905e1"
                            >
                              Eco Bundle Pack
                            </span>
                            <span
                              className="text-xs text-[#71717b]"
                              data-id="6b5f4d4a-763a-5ea2-a66f-79f525a7b486"
                            >
                              756 units sold
                            </span>
                          </div>
                        </div>
                        <span
                          className="text-sm font-semibold text-zinc-950"
                          data-id="0cfe3d56-c368-5bac-be16-2ff012f17e52"
                        >
                          $2,140
                        </span>
                      </div>
                      <div
                        className="flex items-center justify-between p-4 rounded-lg bg-zinc-100"
                        data-id="24285abc-37a4-5738-8ad3-2748bba80488"
                      >
                        <div
                          className="flex items-center gap-4"
                          data-id="f5122eb0-1a1c-58cd-94bb-b8a91ab2cab4"
                        >
                          <div
                            className="flex items-center justify-center rounded-lg"
                            style={{
                              background: "oklch(0.967 0.001 286.375)",
                              border: "1px solid oklch(0.92 0.004 286.32)",
                              height: "40px",
                              width: "40px",
                            }}
                            data-id="90c2c9f9-fb78-5c86-b6ba-926ebeaf1ab9"
                          >
                            <span
                              className="text-xs font-semibold text-[#71717b]"
                              data-id="31624a8d-6227-5cb9-a537-265d7c517038"
                            >
                              #4
                            </span>
                          </div>
                          <div
                            className="flex flex-col gap-0.5"
                            data-id="a992d038-0c29-593b-839c-1e252aa35ab7"
                          >
                            <span
                              className="text-sm font-medium text-zinc-950"
                              data-id="7e5dd0e2-cbc3-56ab-a589-427890149fe0"
                            >
                              Classic Essentials
                            </span>
                            <span
                              className="text-xs text-[#71717b]"
                              data-id="66fde603-3101-5572-a961-7c834dc2fe92"
                            >
                              623 units sold
                            </span>
                          </div>
                        </div>
                        <span
                          className="text-sm font-semibold text-zinc-950"
                          data-id="31400826-99f9-52a4-9de4-57d175024d17"
                        >
                          $2,000
                        </span>
                      </div>
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
