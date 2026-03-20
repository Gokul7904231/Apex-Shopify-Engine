import { useEffect } from "react";
import { loadFonts } from "./utils";
import {
  BarChart3,
  LayoutDashboard,
  Lightbulb,
  LogOut,
  Package,
  Search,
  User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
        data-id="2aae83bd-1783-56c1-b99c-45e83ac04e96"
      >
        <div
          style={{ display: "flex", height: "100vh", overflow: "hidden" }}
          data-id="733ffc16-6ab3-521f-8fb8-9f6641ac5405"
        >
          <aside
            className="flex flex-col border-white/10 border-0 border-solid"
            style={{
              WebkitBackdropFilter: "blur(24px)",
              backdropFilter: "blur(24px)",
              background: "rgba(15, 23, 42, 0.7)",
              minWidth: "260px",
              width: "260px",
            }}
            data-id="5f4099c8-03d1-59df-a129-f9c293632618"
          >
            <div
              className="p-6 flex flex-col gap-2 border-white/10 border-0 border-solid"
              data-id="1722526f-6b66-5d94-b7f9-2b30837b5025"
            >
              <div
                className="flex items-center gap-4"
                data-id="ceb7dbfc-f5b9-51c2-8326-7c32fb36948f"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#8e51ff]/20"
                  data-id="a06ae6e9-d715-5a32-9955-00a99ef2918c"
                >
                  <BarChart3
                    className="size-5 text-[#8e51ff]"
                    data-id="58b45ce9-e814-542a-b2cb-bab35e44dac9"
                  />
                </div>
                <div
                  className="flex flex-col gap-1"
                  data-id="a487b9ba-c748-53bf-a203-5feb71394f88"
                >
                  <span
                    className="text-sm font-semibold text-white"
                    data-id="5b3eb68b-b5be-5037-8e31-c90af545cbdd"
                  >
                    Analytics Engine
                  </span>
                  <span
                    className="text-xs text-white/50"
                    data-id="987e9dda-1b2e-5daa-8407-04ab640fff3c"
                  >
                    Shopify App
                  </span>
                </div>
              </div>
            </div>
            <nav
              className="flex flex-col gap-1 p-4 flex-1"
              data-id="510106f9-637f-59c2-aba5-af474ba980e3"
            >
              <a
                className="flex items-center gap-4 px-4 py-2.5 text-sm font-medium transition-all hover:text-white/90 hover:bg-white/5 rounded-lg text-white/60"
                style={{ transition: "all 0.2s ease" }}
                data-id="5b6fa080-d1d8-581c-a0b8-6751df3fee86"
              >
                <LayoutDashboard
                  className="size-4"
                  data-id="de0bc5af-2a07-5668-85a0-1faafc490c89"
                />
                <span data-id="a141d092-2644-58a4-944b-6316bf1f865b">
                  Dashboard
                </span>
              </a>
              <a
                className="flex items-center gap-4 px-4 py-2.5 text-sm font-semibold rounded-lg text-[#8e51ff]"
                style={{
                  background: "oklch(0.606 0.25 292.717 / 0.1)",
                  borderLeft: "3px solid oklch(0.606 0.25 292.717)",
                }}
                data-id="175076ee-d6fa-5594-9256-0ea9acada85b"
              >
                <Search
                  className="size-4"
                  data-id="4c7328be-4dc7-5e69-aa21-547075344cbe"
                />
                <span data-id="4ebbc072-7775-5c8a-9ce9-02bd6eec6c20">
                  Product Search
                </span>
              </a>
              <a
                className="flex items-center gap-4 px-4 py-2.5 text-sm font-medium transition-all hover:text-white/90 hover:bg-white/5 rounded-lg text-white/60"
                style={{ transition: "all 0.2s ease" }}
                data-id="a3ffe6d1-28f1-5170-a882-d10470832367"
              >
                <Lightbulb
                  className="size-4"
                  data-id="76ea0bd3-daab-5bae-868b-4df76c508bd7"
                />
                <span data-id="14574ad6-cc53-5a9e-be3b-94c07a2f7722">
                  Recommendations
                </span>
              </a>
              <a
                className="flex items-center gap-4 px-4 py-2.5 text-sm font-medium transition-all hover:text-white/90 hover:bg-white/5 rounded-lg text-white/60"
                style={{ transition: "all 0.2s ease" }}
                data-id="b7563362-b6f4-561c-b7b1-fb7eb6f1b20d"
              >
                <BarChart3
                  className="size-4"
                  data-id="59123789-ba51-5745-987d-1113b6a2d809"
                />
                <span data-id="76a461c0-58c5-581a-bab5-ac9454b1d6b4">
                  Analytics
                </span>
              </a>
            </nav>
            <div
              className="p-6 flex flex-col gap-4 border-white/10 border-0 border-solid"
              data-id="9d4c40e8-7c63-594e-b69e-93df48e67b55"
            >
              <div
                className="flex items-center gap-2"
                data-id="9e7aa9ea-d4ae-5385-98d7-133ed0037565"
              >
                <div
                  className="w-2 h-2 animate-pulse rounded-full bg-green-500"
                  data-id="0a41fc03-38c4-52cb-af12-7fc98b0d6fc6"
                />
                <span
                  className="text-xs font-medium text-green-400"
                  data-id="4103c23c-17a5-506f-b78a-ab5fe7f2808e"
                >
                  Live Connected
                </span>
              </div>
              <Button
                className="w-full hover:text-white hover:bg-white/10 text-sm text-white/70 border-white/20 border-0 border-solid"
                variant="outline"
                data-id="e91b673d-f12b-538e-88e0-c54c0e214415"
              >
                <LogOut
                  className="size-4 mr-2"
                  data-id="910b0ab8-1d54-5ea1-9fec-58cd90f9ae61"
                />
                Logout
              </Button>
            </div>
          </aside>
          <div
            className="flex-1 flex flex-col overflow-hidden"
            data-id="e51a42e6-dd9e-5e6e-ac91-b6e8f66b1a6c"
          >
            <div
              className="flex items-center justify-end gap-4 px-8 py-4 bg-white/80 border-zinc-200 border-0 border-solid"
              style={{ backdropFilter: "blur(12px)" }}
              data-id="3116abeb-2f3e-5851-a05a-65a2ae7accc1"
            >
              <span
                className="text-sm text-[#71717b]"
                data-id="259a6688-5b23-5247-ad58-c791fffbfedd"
              >
                admin@shopify-analytics.com
              </span>
              <div
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#8e51ff]/20"
                data-id="824698bd-8b3f-56e6-8893-07518c0356a7"
              >
                <User
                  className="size-4 text-[#8e51ff]"
                  data-id="292e08c9-5c97-559d-ae36-21e5410c10f3"
                />
              </div>
              <Button
                className="text-sm"
                size="sm"
                variant="outline"
                data-id="caca1628-a4a3-54f2-a16a-03c48be56547"
              >
                <LogOut
                  className="size-4 mr-2"
                  data-id="5e66629f-fea0-5961-80d1-4ca3f9785c3a"
                />
                Logout
              </Button>
            </div>
            <div
              className="flex-1 overflow-y-auto p-8"
              data-id="dfcce2d2-eb61-5911-b3b8-99740206d3cb"
            >
              <div
                className="flex flex-col gap-8"
                data-id="a021eeb9-5287-50af-9308-adaa5d65883f"
              >
                <div
                  className="flex flex-col gap-6"
                  data-id="b198c351-388c-56be-b893-d4ef68616243"
                >
                  <div
                    className="flex flex-col gap-1"
                    data-id="7f2bfc0f-da8e-5663-9144-e41446c7dec7"
                  >
                    <h1
                      className="text-2xl font-semibold text-zinc-950"
                      data-id="cfce0e29-f078-5676-a56f-074e70b95ad3"
                    >
                      Product Search
                    </h1>
                    <p
                      className="text-sm text-[#71717b]"
                      data-id="d396f452-be22-5940-b7df-60a3e442fb27"
                    >
                      Search and filter your Shopify product catalog
                    </p>
                  </div>
                  <div
                    className="flex flex-wrap items-center gap-4"
                    data-id="c3d106bf-5270-5476-b671-b7e807bbe9c4"
                  >
                    <div
                      className="relative flex-1 min-w-[320px]"
                      data-id="112748bd-fbfa-541f-8c6d-81549c5c1e8f"
                    >
                      <Search
                        className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-[#71717b]"
                        data-id="3a16b0d8-9cd2-5819-8535-81793837faee"
                      />
                      <Input
                        className="pl-12 h-12 text-sm rounded-xl bg-zinc-100 border-zinc-200 border-0 border-solid"
                        placeholder="Search products by name, SKU, or vendor..."
                        data-id="58fceffb-9622-5fc9-871a-f3ae1f23ee92"
                      />
                    </div>
                    <Select data-id="b6ad1af4-ba27-55fc-a1d5-6c0d234d258b">
                      <SelectTrigger
                        className="w-[180px] h-12 rounded-xl"
                        data-id="b8e594c9-f419-5120-82ca-61793c4e32c2"
                      >
                        <SelectValue
                          placeholder="Sort by"
                          data-id="3857d4d9-bf2e-540b-88bd-346d02c2ad2b"
                        />
                      </SelectTrigger>
                      <SelectContent data-id="53a182ce-64db-5f0a-a193-64dd00f6531a">
                        <SelectItem
                          value="newest"
                          data-id="99d01616-fb18-5772-a7df-216e6671a3bd"
                        >
                          Newest First
                        </SelectItem>
                        <SelectItem
                          value="price-asc"
                          data-id="c4246465-8b5b-5283-b28b-782828dd51cc"
                        >
                          Price: Low to High
                        </SelectItem>
                        <SelectItem
                          value="price-desc"
                          data-id="352b39f0-5010-507f-ac44-3e72e9796d67"
                        >
                          Price: High to Low
                        </SelectItem>
                        <SelectItem
                          value="name"
                          data-id="8d2dec4a-d2c7-5d8c-80ad-1dd1da4b5c88"
                        >
                          Name A-Z
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Select data-id="cf0312c6-7761-5a0e-89f6-fd15d67cd88f">
                      <SelectTrigger
                        className="w-[180px] h-12 rounded-xl"
                        data-id="6b210303-67ce-52c3-8c8c-aa80c9196a1b"
                      >
                        <SelectValue
                          placeholder="Category"
                          data-id="022b4d7c-41f8-52b6-9e5d-76ae04cb15d1"
                        />
                      </SelectTrigger>
                      <SelectContent data-id="b3693b5b-98f6-54a0-8952-87b3c2030cf2">
                        <SelectItem
                          value="all"
                          data-id="b00b9737-72c4-5895-8e85-8f4de5273ca9"
                        >
                          All Categories
                        </SelectItem>
                        <SelectItem
                          value="apparel"
                          data-id="a479753d-ce5c-5cc0-a00a-cf99435fc528"
                        >
                          Apparel
                        </SelectItem>
                        <SelectItem
                          value="electronics"
                          data-id="1826ddf9-022d-51da-a72a-e4c25955ea82"
                        >
                          Electronics
                        </SelectItem>
                        <SelectItem
                          value="beauty"
                          data-id="3d3673c1-11bc-5261-ac8c-20eeae3dfd7a"
                        >
                          Beauty
                        </SelectItem>
                        <SelectItem
                          value="home"
                          data-id="c2d53a6f-3803-53b9-b123-32c8d7ee5b1c"
                        >
                          Home &amp; Decor
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Badge
                      className="h-8 px-4 text-sm font-medium"
                      variant="secondary"
                      data-id="d768781d-cdc3-551d-b188-c51c15effca7"
                    >
                      <Package
                        className="size-3.5 mr-1.5"
                        data-id="d3f23703-384a-558b-a11e-c338a075a496"
                      />
                      24 products found
                    </Badge>
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gap: "24px",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(260px, 1fr))",
                  }}
                  data-id="c6dcbdcb-e71e-5591-bf41-cd8833bef87a"
                >
                  <Card
                    className="p-0 gap-0 overflow-hidden shadow-lg transition-all hover:shadow-xl rounded-2xl border-black/1 border-0 border-solid"
                    style={{
                      background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                      transition: "all 0.3s ease",
                    }}
                    data-id="24d3f480-c0dc-5c59-8a94-3ee7dd019e2a"
                  >
                    <div
                      className="relative h-48 overflow-hidden"
                      data-id="49fe54db-b43f-5e8a-938a-54644f0ea3cc"
                    >
                      <img
                        alt="Product"
                        className="w-full h-full object-cover"
                        data-authorname="Rick Rothenberg"
                        data-authorurl="https://unsplash.com/@rick_rothenberg"
                        data-blurhash="LDJG%Iof4noMoffQayfQ0Jaybqay"
                        data-photoid="2d5eZgQ5aFQ"
                        src="https://images.unsplash.com/photo-1675805173284-4cd3be67adcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjB2aW9sZXQlMjBhYnN0cmFjdCUyMHByb2R1Y3QlMjBncmFkaWVudHxlbnwxfDJ8fHwxNzczOTE4MDk1fDA&ixlib=rb-4.1.0&q=80&w=400"
                        data-id="cc0d0f14-b878-54cf-a002-bba5b31bad28"
                      />
                    </div>
                    <CardContent
                      className="p-4 gap-2 flex flex-col"
                      data-id="166f6358-a467-5736-8872-1d7276f97d64"
                    >
                      <p
                        className="text-sm font-semibold truncate text-white"
                        data-id="470d6cba-ddbe-5b02-9432-955066788f2d"
                      >
                        Premium Wireless Headphones Pro
                      </p>
                      <p
                        className="text-xs text-white/50"
                        data-id="47ef1ec0-ccb8-5d74-8a92-74d546df5c00"
                      >
                        TechVendor • Electronics
                      </p>
                      <div
                        className="flex items-center justify-between mt-1"
                        data-id="757d9ae2-2913-5a47-a6c3-dab7d1311d5d"
                      >
                        <span
                          className="text-lg font-bold text-white"
                          data-id="5fc4f01b-c381-5a2d-9802-08be12c1c527"
                        >
                          $129.99
                        </span>
                        <Badge
                          className="text-xs bg-green-500/20 text-green-400 border-black/1 border-0 border-solid"
                          data-id="81dbec92-3ceb-5523-a5d5-9878f5d23249"
                        >
                          High Stock
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    className="p-0 gap-0 overflow-hidden shadow-lg transition-all hover:shadow-xl rounded-2xl border-black/1 border-0 border-solid"
                    style={{
                      background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                      transition: "all 0.3s ease",
                    }}
                    data-id="9c302b70-1641-59f1-8e9a-8c13812d61bb"
                  >
                    <div
                      className="relative h-48 overflow-hidden"
                      data-id="7ec9f460-1628-563a-b3ba-5236705aa28c"
                    >
                      <img
                        alt="Product"
                        className="w-full h-full object-cover"
                        data-authorname="LATIKA SARKER"
                        data-authorurl="https://unsplash.com/@latikasar"
                        data-blurhash="LRNm.*?b~qju9FayWBfR~qfQD%of"
                        data-photoid="RBBvxvE04nM"
                        src="https://images.unsplash.com/photo-1708746333840-22560480297b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwcHJvZHVjdCUyMGVjb21tZXJjZSUyMGl0ZW18ZW58MXwyfHx8MTc3MzkxODA5NXww&ixlib=rb-4.1.0&q=80&w=400"
                        data-id="fc931f31-0fda-5f9b-bc70-700b3e906df4"
                      />
                    </div>
                    <CardContent
                      className="p-4 gap-2 flex flex-col"
                      data-id="bbcbf0e6-4880-5355-8167-5cf70051c569"
                    >
                      <p
                        className="text-sm font-semibold truncate text-white"
                        data-id="5a389479-6617-599f-9358-132b1b1b52a1"
                      >
                        Organic Snack Pack Bundle
                      </p>
                      <p
                        className="text-xs text-white/50"
                        data-id="042ce404-7523-5f21-beff-752fc55d56a6"
                      >
                        NatureFoods • Grocery
                      </p>
                      <div
                        className="flex items-center justify-between mt-1"
                        data-id="37356edc-9d54-50ad-969d-8dca49861bbf"
                      >
                        <span
                          className="text-lg font-bold text-white"
                          data-id="77b4bb00-b477-5f7d-83b3-015b5452f17b"
                        >
                          $24.50
                        </span>
                        <Badge
                          className="text-xs bg-yellow-500/20 text-yellow-400 border-black/1 border-0 border-solid"
                          data-id="1887663e-7a18-537c-a4cd-6049308162a3"
                        >
                          Medium
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    className="p-0 gap-0 overflow-hidden shadow-lg transition-all hover:shadow-xl rounded-2xl border-black/1 border-0 border-solid"
                    style={{
                      background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                      transition: "all 0.3s ease",
                    }}
                    data-id="0ddf3a0a-1590-5154-9752-2ba5f2f8c36c"
                  >
                    <div
                      className="relative h-48 overflow-hidden"
                      data-id="d6299353-01fe-5ef6-8e45-dbb42bc364f8"
                    >
                      <img
                        alt="Product"
                        className="w-full h-full object-cover"
                        data-authorname="Puscas Adryan"
                        data-authorurl="https://unsplash.com/@adryan_studio"
                        data-blurhash="LIF=,K-;IVIU~q%MWCt7IU%Loe%M"
                        data-photoid="PNM-jgUDoX8"
                        src="https://images.unsplash.com/photo-1772009288423-96090d2998c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3J5JTIwcHJvZHVjdHxlbnwxfDJ8fHwxNzczOTE4MDk1fDA&ixlib=rb-4.1.0&q=80&w=400"
                        data-id="7edbb3c4-03fb-5ea2-9c4d-fb3272f25c4f"
                      />
                    </div>
                    <CardContent
                      className="p-4 gap-2 flex flex-col"
                      data-id="c5311da9-b10b-5dcd-ad4a-e48173b8221e"
                    >
                      <p
                        className="text-sm font-semibold truncate text-white"
                        data-id="f608cae1-6da1-5aee-94fc-ba565759efa5"
                      >
                        Designer Leather Crossbody Bag
                      </p>
                      <p
                        className="text-xs text-white/50"
                        data-id="c4e0acc9-47b7-5c9a-afde-f7c2ce449619"
                      >
                        LuxStyle • Fashion
                      </p>
                      <div
                        className="flex items-center justify-between mt-1"
                        data-id="73d0a3c3-2299-5a15-a464-4519d71edc76"
                      >
                        <span
                          className="text-lg font-bold text-white"
                          data-id="af0cb205-6eaf-5d06-9580-91631174bd29"
                        >
                          $89.00
                        </span>
                        <Badge
                          className="text-xs bg-green-500/20 text-green-400 border-black/1 border-0 border-solid"
                          data-id="6f161b31-5ece-5d93-b13c-dc83d7aa0ad5"
                        >
                          High Stock
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    className="p-0 gap-0 overflow-hidden shadow-lg transition-all hover:shadow-xl rounded-2xl border-black/1 border-0 border-solid"
                    style={{
                      background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                      transition: "all 0.3s ease",
                    }}
                    data-id="8834c3a6-cc83-5fff-ac7e-7eea4fcda059"
                  >
                    <div
                      className="relative h-48 overflow-hidden"
                      data-id="80bd76cd-38f6-5a64-bd20-fb9231703ec3"
                    >
                      <img
                        alt="Product"
                        className="w-full h-full object-cover"
                        data-authorname="Default Cameraman"
                        data-authorurl="https://unsplash.com/@default_cameraman"
                        data-blurhash="LSB3{OIV4T?aM{t8t7M_9Et7-;IV"
                        data-photoid="YwBzzs7D3zQ"
                        src="https://images.unsplash.com/photo-1766503206606-27de0861e8a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZ2FkZ2V0JTIwcHJvZHVjdCUyMG1pbmltYWx8ZW58MXwyfHx8MTc3MzkxODA5Nnww&ixlib=rb-4.1.0&q=80&w=400"
                        data-id="ec7451c4-d668-5126-83e5-99dd1d670b81"
                      />
                    </div>
                    <CardContent
                      className="p-4 gap-2 flex flex-col"
                      data-id="1ca31574-134d-53cc-ad34-da87fe51d543"
                    >
                      <p
                        className="text-sm font-semibold truncate text-white"
                        data-id="24c1067c-2b9b-5208-97a9-977ee389f4f6"
                      >
                        iPhone Air Ultra Slim Case
                      </p>
                      <p
                        className="text-xs text-white/50"
                        data-id="59111d2c-e54b-5ec9-853b-b722afee428f"
                      >
                        TechGear • Accessories
                      </p>
                      <div
                        className="flex items-center justify-between mt-1"
                        data-id="e2c86345-e75c-5970-90a8-977b44ed11ca"
                      >
                        <span
                          className="text-lg font-bold text-white"
                          data-id="218bc6e8-4eec-57a1-8726-6333c4114dee"
                        >
                          $49.99
                        </span>
                        <Badge
                          className="text-xs bg-red-500/20 text-red-400 border-black/1 border-0 border-solid"
                          data-id="c050bbae-268a-5c53-b019-415bcc6886ab"
                        >
                          Low Stock
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    className="p-0 gap-0 overflow-hidden shadow-lg transition-all hover:shadow-xl rounded-2xl border-black/1 border-0 border-solid"
                    style={{
                      background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                      transition: "all 0.3s ease",
                    }}
                    data-id="decbcfe8-5021-5002-97e9-f112b17e8863"
                  >
                    <div
                      className="relative h-48 overflow-hidden"
                      data-id="993df3e4-0af5-5064-9c92-d5ce351fa9c7"
                    >
                      <img
                        alt="Product"
                        className="w-full h-full object-cover"
                        data-authorname="Johanne Pold Jacobsen"
                        data-authorurl="https://unsplash.com/@johannepoldjacobsen"
                        data-blurhash="LRN^h}t7~qWA_4%Nt8WA?aM{D*of"
                        data-photoid="e0_UUSOrI3o"
                        src="https://images.unsplash.com/photo-1608979107966-fc844310b0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBiZWF1dHklMjBwcm9kdWN0fGVufDF8Mnx8fDE3NzM5MTgwOTV8MA&ixlib=rb-4.1.0&q=80&w=400"
                        data-id="27c9cf93-855e-527f-81c0-8ec0aafdaa88"
                      />
                    </div>
                    <CardContent
                      className="p-4 gap-2 flex flex-col"
                      data-id="3b96cd64-6106-54a5-9bdf-cecf1bca1d74"
                    >
                      <p
                        className="text-sm font-semibold truncate text-white"
                        data-id="ff53d91a-ae2b-5622-8599-af8056dedaa9"
                      >
                        Luxury Skincare Gift Set
                      </p>
                      <p
                        className="text-xs text-white/50"
                        data-id="8064ddd4-9940-5184-8577-1c6f5e5cd4dc"
                      >
                        GlowBeauty • Beauty
                      </p>
                      <div
                        className="flex items-center justify-between mt-1"
                        data-id="09f23be1-e55d-53cd-aec8-1e3e7a1ab10c"
                      >
                        <span
                          className="text-lg font-bold text-white"
                          data-id="9114d293-ca6f-57e8-9e3a-0ff732d67da8"
                        >
                          $74.95
                        </span>
                        <Badge
                          className="text-xs bg-green-500/20 text-green-400 border-black/1 border-0 border-solid"
                          data-id="42831407-f739-515d-b734-d0be108f934d"
                        >
                          High Stock
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    className="p-0 gap-0 overflow-hidden shadow-lg transition-all hover:shadow-xl rounded-2xl border-black/1 border-0 border-solid"
                    style={{
                      background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                      transition: "all 0.3s ease",
                    }}
                    data-id="7efe320d-ea85-50ca-8e25-ce26025951a1"
                  >
                    <div
                      className="relative h-48 overflow-hidden"
                      data-id="8b106fc1-9410-5339-8b0a-e68b7a642187"
                    >
                      <img
                        alt="Product"
                        className="w-full h-full object-cover"
                        data-authorname="Sayan Majhi"
                        data-authorurl="https://unsplash.com/@minimalsayan"
                        data-blurhash="LQMaV3%M?vt7~qV@9GM{^+IU%goL"
                        data-photoid="JFbfcUgI8VU"
                        src="https://images.unsplash.com/photo-1686135187001-d3bbfdeeef8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBwcm9kdWN0JTIwbWluaW1hbHxlbnwxfDJ8fHwxNzczOTE4MDk1fDA&ixlib=rb-4.1.0&q=80&w=400"
                        data-id="3c7558de-2081-5f66-a5c0-2311870bbf3e"
                      />
                    </div>
                    <CardContent
                      className="p-4 gap-2 flex flex-col"
                      data-id="643ae3c3-192f-579e-a07b-a5da52b38f66"
                    >
                      <p
                        className="text-sm font-semibold truncate text-white"
                        data-id="0f759751-09d9-5c2b-b4cd-e3cbee36eae8"
                      >
                        Minimalist Desk Organizer
                      </p>
                      <p
                        className="text-xs text-white/50"
                        data-id="61e64ae6-43de-57aa-b1b1-4b87eda818cc"
                      >
                        HomeStyle • Home &amp; Decor
                      </p>
                      <div
                        className="flex items-center justify-between mt-1"
                        data-id="dc1c3c7a-b820-5423-82a8-01f85b92442e"
                      >
                        <span
                          className="text-lg font-bold text-white"
                          data-id="6343c5f0-c959-5ea0-961b-70e451c110df"
                        >
                          $39.99
                        </span>
                        <Badge
                          className="text-xs bg-yellow-500/20 text-yellow-400 border-black/1 border-0 border-solid"
                          data-id="8b70b662-236e-59f4-b0f8-d59555cfbca1"
                        >
                          Medium
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    className="p-0 gap-0 overflow-hidden shadow-lg transition-all hover:shadow-xl rounded-2xl border-black/1 border-0 border-solid"
                    style={{
                      background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                      transition: "all 0.3s ease",
                    }}
                    data-id="3f40f716-e4ba-5789-a856-9f1ef0859517"
                  >
                    <div
                      className="relative h-48 overflow-hidden"
                      data-id="ebe10214-2669-50de-b0ca-8d85ff9bcb96"
                    >
                      <img
                        alt="Product"
                        className="w-full h-full object-cover"
                        data-authorname="Behnam Norouzi"
                        data-authorurl="https://unsplash.com/@behy_studio"
                        data-blurhash="LVON5yt8?bWBt6WAM{fk_NRjITt7"
                        data-photoid="F4rWoM3cYjI"
                        src="https://images.unsplash.com/photo-1631984564919-1f6b2313a71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzJTIwcHJvZHVjdHxlbnwxfDJ8fHwxNzczOTAyMDAwfDA&ixlib=rb-4.1.0&q=80&w=400"
                        data-id="2331f517-5b8a-5be6-8a63-9f875ed6adee"
                      />
                    </div>
                    <CardContent
                      className="p-4 gap-2 flex flex-col"
                      data-id="2452dd3f-668e-5bfe-b058-26499ffe6868"
                    >
                      <p
                        className="text-sm font-semibold truncate text-white"
                        data-id="8a74b462-2668-5b11-adc6-dc3b53dedb11"
                      >
                        Urban Runner Sneakers V2
                      </p>
                      <p
                        className="text-xs text-white/50"
                        data-id="d8e4994d-fa1f-560b-a806-cfaea268ff91"
                      >
                        StreetWear • Footwear
                      </p>
                      <div
                        className="flex items-center justify-between mt-1"
                        data-id="238546c3-342f-52e4-ac56-734dffb0b9d5"
                      >
                        <span
                          className="text-lg font-bold text-white"
                          data-id="d0debd6b-5290-5176-9236-3e430116493e"
                        >
                          $159.00
                        </span>
                        <Badge
                          className="text-xs bg-red-500/20 text-red-400 border-black/1 border-0 border-solid"
                          data-id="4c210372-16fc-515d-8eac-8fe3eccf7238"
                        >
                          Low Stock
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                  <Card
                    className="p-0 gap-0 overflow-hidden shadow-lg transition-all hover:shadow-xl rounded-2xl border-black/1 border-0 border-solid"
                    style={{
                      background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                      transition: "all 0.3s ease",
                    }}
                    data-id="c916ef38-2967-5c89-aaca-a656a87dadad"
                  >
                    <div
                      className="relative h-48 overflow-hidden"
                      data-id="27dc55c5-72a8-5d93-966b-5e3ba4c788f1"
                    >
                      <img
                        alt="Product"
                        className="w-full h-full object-cover"
                        data-authorname="Luan Fonseca"
                        data-authorurl="https://unsplash.com/@luanfonsecavisuals"
                        data-blurhash="LKBM0a%0E5Rn}=t5RlWWNIay$~oe"
                        data-photoid="KQSmqtj65Rk"
                        src="https://images.unsplash.com/photo-1760532466984-39c3eb7f1254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMGx1eHVyeSUyMHByb2R1Y3R8ZW58MXwyfHx8MTc3MzkwMjAxMnww&ixlib=rb-4.1.0&q=80&w=400"
                        data-id="0f7ff376-d246-517f-83b6-6a07857eec13"
                      />
                    </div>
                    <CardContent
                      className="p-4 gap-2 flex flex-col"
                      data-id="47b16f64-0123-596d-a426-df896cbc8961"
                    >
                      <p
                        className="text-sm font-semibold truncate text-white"
                        data-id="ef0f78b7-2d45-549b-9eb5-8fae65723b2b"
                      >
                        Hugo Boss Classic Timepiece
                      </p>
                      <p
                        className="text-xs text-white/50"
                        data-id="8f7612b1-c36b-555a-bd63-6dd2d144ca93"
                      >
                        LuxWatch • Accessories
                      </p>
                      <div
                        className="flex items-center justify-between mt-1"
                        data-id="56cf3916-8d5b-5c20-b522-fa69e7e08f55"
                      >
                        <span
                          className="text-lg font-bold text-white"
                          data-id="dfa32e0a-9157-5f4e-83e0-b3afc322d86f"
                        >
                          $299.00
                        </span>
                        <Badge
                          className="text-xs bg-green-500/20 text-green-400 border-black/1 border-0 border-solid"
                          data-id="663fbfc5-d9d3-5120-a9b1-983284c7f8e7"
                        >
                          High Stock
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div
                  className="flex flex-col gap-4 mt-2"
                  data-id="9d0c35fe-4563-5cf2-adb8-f853ade07bda"
                >
                  <p
                    className="text-sm font-medium text-[#71717b]"
                    data-id="21f08c83-ecc7-5b53-9573-d7ce4acdaa65"
                  >
                    Loading more products...
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gap: "24px",
                      gridTemplateColumns:
                        "repeat(auto-fill, minmax(260px, 1fr))",
                    }}
                    data-id="e07a9220-36b6-599b-a2e5-90eefcf1f8cb"
                  >
                    <Card
                      className="p-0 gap-0 overflow-hidden rounded-2xl border-black/1 border-0 border-solid"
                      style={{
                        background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                      }}
                      data-id="fe89b7c4-cf9d-5b0e-91e3-c7646fe9ee9c"
                    >
                      <div
                        className="h-48 animate-pulse bg-white/5"
                        data-id="5262c376-a37b-5783-8f6c-439f8db59bd5"
                      />
                      <div
                        className="p-4 flex flex-col gap-2"
                        data-id="0e73ec72-314b-5cc4-977b-28c1edca0bc3"
                      >
                        <div
                          className="h-4 w-3/4 animate-pulse rounded-sm bg-white/10"
                          data-id="21543d03-3759-5380-afcf-45b8b732cb8f"
                        />
                        <div
                          className="h-3 w-1/2 animate-pulse rounded-sm bg-white/5"
                          data-id="ef56c330-1a67-599e-ae5c-0c024060455b"
                        />
                        <div
                          className="flex items-center justify-between mt-1"
                          data-id="e5e898ee-847d-5249-927e-b600616f569d"
                        >
                          <div
                            className="h-5 w-16 animate-pulse rounded-sm bg-white/10"
                            data-id="e36a8cb4-e1ff-581e-b9d4-45459ca477df"
                          />
                          <div
                            className="h-5 w-20 animate-pulse rounded-full bg-white/5"
                            data-id="610326f8-4b2e-520e-8e4f-4e23bd251a74"
                          />
                        </div>
                      </div>
                    </Card>
                    <Card
                      className="p-0 gap-0 overflow-hidden rounded-2xl border-black/1 border-0 border-solid"
                      style={{
                        background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                      }}
                      data-id="7631979f-701a-5ed8-9ca7-b38f817cb008"
                    >
                      <div
                        className="h-48 animate-pulse bg-white/5"
                        data-id="5305aff2-7450-56fc-b80d-0fbd1634d58a"
                      />
                      <div
                        className="p-4 flex flex-col gap-2"
                        data-id="7d09001a-2dd8-52b6-9ce3-2b8279891a85"
                      >
                        <div
                          className="h-4 w-2/3 animate-pulse rounded-sm bg-white/10"
                          data-id="7ae56657-eb3a-5814-9c57-363ea3a16f85"
                        />
                        <div
                          className="h-3 w-1/3 animate-pulse rounded-sm bg-white/5"
                          data-id="4dd21ca4-02f3-5468-b25e-fa2b4389c1e9"
                        />
                        <div
                          className="flex items-center justify-between mt-1"
                          data-id="21b842ae-a235-579a-9417-e811ff7a094c"
                        >
                          <div
                            className="h-5 w-16 animate-pulse rounded-sm bg-white/10"
                            data-id="549cbcf6-f196-55a5-8a94-637fb237f7f2"
                          />
                          <div
                            className="h-5 w-20 animate-pulse rounded-full bg-white/5"
                            data-id="ac908115-7d76-511c-a471-084a4c1801a8"
                          />
                        </div>
                      </div>
                    </Card>
                    <Card
                      className="p-0 gap-0 overflow-hidden rounded-2xl border-black/1 border-0 border-solid"
                      style={{
                        background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                      }}
                      data-id="8a38237e-0a5b-593f-b470-807bec671817"
                    >
                      <div
                        className="h-48 animate-pulse bg-white/5"
                        data-id="6e85733c-b135-5e03-b407-ccfd01c208f9"
                      />
                      <div
                        className="p-4 flex flex-col gap-2"
                        data-id="a4cc054b-d951-53fa-a468-4b7fca3e94a1"
                      >
                        <div
                          className="h-4 w-4/5 animate-pulse rounded-sm bg-white/10"
                          data-id="29de43aa-9668-533a-b288-ee38b8c5d0f8"
                        />
                        <div
                          className="h-3 w-2/5 animate-pulse rounded-sm bg-white/5"
                          data-id="db940c82-5204-5518-aba7-90664733c11f"
                        />
                        <div
                          className="flex items-center justify-between mt-1"
                          data-id="776c0510-d240-5d0f-98c8-81421c93cfd1"
                        >
                          <div
                            className="h-5 w-16 animate-pulse rounded-sm bg-white/10"
                            data-id="0d10dc6c-0a66-5b46-9445-676b7615713c"
                          />
                          <div
                            className="h-5 w-20 animate-pulse rounded-full bg-white/5"
                            data-id="52ce5b7a-8197-514d-9bac-6e9e1611cde8"
                          />
                        </div>
                      </div>
                    </Card>
                    <Card
                      className="p-0 gap-0 overflow-hidden rounded-2xl border-black/1 border-0 border-solid"
                      style={{
                        background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                      }}
                      data-id="dc90d983-6732-54fe-8468-5fdd69788031"
                    >
                      <div
                        className="h-48 animate-pulse bg-white/5"
                        data-id="382c692a-edfd-58b6-9afc-6d3e61a5cf69"
                      />
                      <div
                        className="p-4 flex flex-col gap-2"
                        data-id="7ad2877c-25f0-5de0-a1be-958d4723cb37"
                      >
                        <div
                          className="h-4 w-3/5 animate-pulse rounded-sm bg-white/10"
                          data-id="9af6ede3-c17a-5098-a4f1-5d8de94ea8f9"
                        />
                        <div
                          className="h-3 w-1/4 animate-pulse rounded-sm bg-white/5"
                          data-id="c6f617f0-28ca-5b41-8102-2b76a374c327"
                        />
                        <div
                          className="flex items-center justify-between mt-1"
                          data-id="38cda78c-2fe3-5735-b64a-b90b8ad178ee"
                        >
                          <div
                            className="h-5 w-16 animate-pulse rounded-sm bg-white/10"
                            data-id="12971fe7-68f5-514e-8f46-9861f9bdd44f"
                          />
                          <div
                            className="h-5 w-20 animate-pulse rounded-full bg-white/5"
                            data-id="03900a8c-ad04-595a-b65e-55232febe0ef"
                          />
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
