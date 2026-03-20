import { useEffect } from "react";
import { loadFonts } from "./utils";
import {
  BarChart3,
  LayoutDashboard,
  Lightbulb,
  LogOut,
  PackageOpen,
  Search,
  Sparkles,
  Upload,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
        data-id="c5c281e9-0238-560a-b493-cc481c11588e"
      >
        <div
          style={{ display: "flex", height: "100vh", overflow: "hidden" }}
          data-id="7ad3cb7e-2e27-5705-819d-e2559fe9a7e0"
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
            data-id="9e9d5ef3-a1e7-510a-8732-8b1fdafed7d2"
          >
            <div
              className="p-6 flex flex-col gap-2"
              data-id="c7ef5527-a9ed-5836-aa34-ea1cdd318ccb"
            >
              <div
                className="flex items-center gap-2"
                data-id="df6ccd47-8736-5600-8e8f-5749dd8710bd"
              >
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#8e51ff]"
                  data-id="f1dd8dfe-bc03-5fde-9256-051cd8158a63"
                >
                  <BarChart3
                    className="size-4 text-violet-50"
                    data-id="60f79bea-3099-5be6-92c4-8ba5bcc0b8e3"
                  />
                </div>
                <div data-id="f2fa2dd6-0398-5bb9-8638-ab75ef550efb">
                  <p
                    className="text-sm font-semibold text-white"
                    data-id="6a8c0e50-7159-535d-a88e-96a139d710fe"
                  >
                    Analytics Engine
                  </p>
                  <p
                    className="text-xs text-white/50"
                    data-id="acbac963-9d67-5569-ac71-e4c99fe92177"
                  >
                    Shopify App
                  </p>
                </div>
              </div>
            </div>
            <nav
              className="flex-1 flex flex-col gap-1 p-4"
              data-id="706dc683-fae6-5fed-95f7-c74e12658162"
            >
              <a
                className="flex items-center gap-2 px-4 py-2.5 text-sm hover:text-white/90 transition-all cursor-pointer rounded-lg text-white/60"
                style={{ transition: "transform 0.2s ease" }}
                data-id="7fbabdb8-6402-576f-9b61-193032dfcd93"
              >
                <LayoutDashboard
                  className="size-4"
                  data-id="00bfd26b-4742-5f1b-b57d-2e942bdbf727"
                />
                <span data-id="1d780796-1a0d-509f-bcb6-bee7968c36bc">
                  Dashboard
                </span>
              </a>
              <a
                className="flex items-center gap-2 px-4 py-2.5 text-sm hover:text-white/90 transition-all cursor-pointer rounded-lg text-white/60"
                style={{ transition: "transform 0.2s ease" }}
                data-id="8c7a5b81-d7d8-586d-8a73-07f13b5b2bd1"
              >
                <Search
                  className="size-4"
                  data-id="9fd65491-ef66-50fc-846e-0cce4ca21fb7"
                />
                <span data-id="127fbb1c-bb31-5fc1-938b-b54bbb212731">
                  Product Search
                </span>
              </a>
              <a
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium cursor-pointer rounded-lg text-white"
                style={{
                  background: "rgba(99, 102, 241, 0.1)",
                  borderLeft: "3px solid oklch(0.606 0.25 292.717)",
                  transition: "transform 0.2s ease",
                }}
                data-id="acd0e6de-7df3-5f3e-bb48-03e354ea3273"
              >
                <Lightbulb
                  className="size-4 text-[#8e51ff]"
                  data-id="402966ae-1710-5efd-bded-9be9901981cc"
                />
                <span data-id="b4989ad9-5fb7-5609-a166-f58a50785a58">
                  Recommendations
                </span>
              </a>
              <a
                className="flex items-center gap-2 px-4 py-2.5 text-sm hover:text-white/90 transition-all cursor-pointer rounded-lg text-white/60"
                style={{ transition: "transform 0.2s ease" }}
                data-id="3b57cb39-dda8-5f32-a9ce-ae1f0f6c6b46"
              >
                <BarChart3
                  className="size-4"
                  data-id="48f453ca-f8db-52ad-87b6-186e611b4424"
                />
                <span data-id="42f0da96-0733-5b5a-9c8c-3fdde8b49ac6">
                  Analytics
                </span>
              </a>
            </nav>
            <div
              className="p-6 flex flex-col gap-4 border-white/10 border-0 border-solid"
              data-id="2165e98a-2b1f-5d7a-8661-1d3483f85193"
            >
              <Badge
                className="w-fit text-xs bg-[#8e51ff]/20 text-[#8e51ff] border-[#8e51ff]/30 border-0 border-solid"
                data-id="d698e99e-966e-5fc0-9d2d-b181153d6008"
              >
                Demo Mode
              </Badge>
              <Button
                className="justify-start hover:text-white hover:bg-white/5 gap-2 text-sm p-2 text-white/50"
                variant="ghost"
                data-id="cc504b71-6664-5e5f-bab3-662b08fade9b"
              >
                <LogOut
                  className="size-4"
                  data-id="5d9ed7b9-1b04-54a1-af2d-67dff5cbcab1"
                />
                <span data-id="8ea5bb2f-516c-5ec2-992f-c6cf5f3968f6">
                  Logout
                </span>
              </Button>
            </div>
          </aside>
          <div
            className="flex-1 flex flex-col overflow-hidden"
            style={{ background: "oklch(0.985 0 0)" }}
            data-id="f789fbf4-6bdf-5517-b26d-205041ad7d58"
          >
            <div
              className="flex items-center justify-end gap-4 px-8 py-4 bg-white/80 border-zinc-200 border-0 border-solid"
              style={{ backdropFilter: "blur(12px)" }}
              data-id="e145869b-5e20-5884-9f17-8e6de78074cf"
            >
              <span
                className="text-sm text-[#71717b]"
                data-id="5e355adc-7451-573c-9154-e67214226012"
              >
                demo@shopify.com
              </span>
              <div
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#8e51ff]/20"
                data-id="ecde78d5-b898-506b-9cd7-298ca4763490"
              >
                <span
                  className="text-xs font-semibold text-[#8e51ff]"
                  data-id="27d642ea-c24e-58bf-8e82-3787e7698ac4"
                >
                  D
                </span>
              </div>
              <Button
                className="gap-2 text-sm"
                size="sm"
                variant="outline"
                data-id="0bf124ca-6129-52d9-bc78-dc8a2412b856"
              >
                <LogOut
                  className="size-4"
                  data-id="3ca2a29e-c4e5-56ea-b4e5-1c12e73b2afe"
                />
                <span data-id="fb2afb51-f589-5da0-b697-2b7c33b48501">
                  Logout
                </span>
              </Button>
            </div>
            <div
              className="flex-1 overflow-y-auto p-8"
              data-id="bdb7654a-201d-56c8-929b-d462d9d707e1"
            >
              <div
                className="max-w-6xl mx-auto flex flex-col gap-8"
                data-id="182c6f41-0f14-50e9-a3be-12d2e701f007"
              >
                <div
                  className="flex flex-col gap-2"
                  data-id="93785336-c07e-5498-8ce2-d17c9c1ae128"
                >
                  <h1
                    className="text-2xl font-semibold text-zinc-950"
                    data-id="95094c1c-8453-5603-a2fa-928180f208df"
                  >
                    AI-Powered Recommendations
                  </h1>
                  <p
                    className="text-sm text-[#71717b]"
                    data-id="5fce5660-d569-5e9c-824f-01668ffce898"
                  >
                    Personalized product suggestions based on your store's order
                    patterns and customer behavior.
                  </p>
                </div>
                <Card
                  className="p-6 gap-4 bg-[#8e51ff]/5 border-[#8e51ff]/20 border-0 border-solid"
                  data-id="ad4ca928-8c66-55b9-a0ca-298c8420738b"
                >
                  <CardContent
                    className="p-0 gap-4 flex items-start"
                    data-id="f7595f91-6bc0-5766-bd39-2ab80605792a"
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-xl bg-[#8e51ff]/10"
                      data-id="37ac7460-edeb-5b5a-a931-c6f02d21da03"
                    >
                      <Sparkles
                        className="size-5 text-[#8e51ff]"
                        data-id="e7eee863-8ee3-5a2d-80c3-23f395bb5f5b"
                      />
                    </div>
                    <div
                      className="flex flex-col gap-2"
                      data-id="2df24763-6766-5e97-b564-9e0c0e5ea36f"
                    >
                      <h3
                        className="text-sm font-semibold text-zinc-950"
                        data-id="9628c6ec-69f9-5c6a-b70a-2fd6338ff84b"
                      >
                        Powered by Frequent Itemset Mining
                      </h3>
                      <p
                        className="text-sm leading-relaxed text-[#71717b]"
                        data-id="4b50d3c6-6b92-53f4-adfe-da0392fe2202"
                      >
                        Our algorithm analyzes purchase patterns across your
                        store's order history to find products that are
                        frequently bought together. By identifying these
                        associations, we generate personalized product
                        recommendations that can increase average order value
                        and improve customer satisfaction.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <div data-id="602c8077-7cf1-5ee4-9530-ada439195e86">
                  <h2
                    className="text-lg font-semibold mb-4 text-zinc-950"
                    data-id="e92a0f0e-3adb-54a3-a5ce-0cb470881caf"
                  >
                    Recommended Products
                  </h2>
                  <div
                    className="grid grid-cols-3 gap-6"
                    data-id="b9d2c4a5-4df1-506e-97c0-79522ea2712f"
                  >
                    <Card
                      className="p-0 gap-0 overflow-hidden hover:shadow-lg transition-all cursor-pointer group rounded-2xl border-zinc-200 border-0 border-solid"
                      data-id="439e0668-5d09-5e3b-ba41-468f8cd6137e"
                    >
                      <div
                        className="relative h-48 overflow-hidden bg-zinc-100"
                        data-id="9543332f-93dd-5ab8-8278-3ff0c06c9406"
                      >
                        <img
                          alt="Product"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          data-authorname="personalgraphic.com"
                          data-authorurl="https://unsplash.com/@personal_graphic"
                          data-blurhash="LGNK6W00EOoIxvf5xukC9uWA-oa$"
                          data-photoid="RUqCyjDQZ-A"
                          src="https://images.unsplash.com/photo-1691480208637-6ed63aac6694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZWNvbW1lcmNlJTIwbWluaW1hbHxlbnwxfDJ8fHwxNzczOTE4MDk2fDA&ixlib=rb-4.1.0&q=80&w=400"
                          data-id="a90d7ae9-cef0-5c3b-a1c1-ea238b257682"
                        />
                      </div>
                      <CardContent
                        className="p-4 gap-2 flex flex-col"
                        data-id="eb44c67c-f09e-5287-a067-aae1ba9dcd1a"
                      >
                        <p
                          className="text-sm font-semibold truncate text-zinc-950"
                          data-id="1ec14a10-a643-5e19-afe4-94bbcfd5cbf5"
                        >
                          Organic Peanut Butter Premium
                        </p>
                        <p
                          className="text-xs text-[#71717b]"
                          data-id="5645291e-b112-553a-9c87-1f921ca0bef4"
                        >
                          NaturalFoods Co.
                        </p>
                        <div
                          className="flex items-center justify-between mt-1"
                          data-id="b56a1a88-af01-516c-ba97-9b7fef232305"
                        >
                          <span
                            className="text-base font-bold text-zinc-950"
                            data-id="4522e203-5a62-5e79-9006-64600c845b71"
                          >
                            $24.99
                          </span>
                          <Badge
                            className="text-xs bg-green-100 text-green-700 border-green-200 border-0 border-solid"
                            data-id="2d97c121-b39d-585e-ae97-9af3a3c43eff"
                          >
                            In Stock
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                    <Card
                      className="p-0 gap-0 overflow-hidden hover:shadow-lg transition-all cursor-pointer group rounded-2xl border-zinc-200 border-0 border-solid"
                      data-id="8ddc187f-80db-51a5-b919-cd03e22e4a3e"
                    >
                      <div
                        className="relative h-48 overflow-hidden bg-zinc-100"
                        data-id="d34c11bb-77d7-53e8-9610-d22ac7d38c81"
                      >
                        <img
                          alt="Fashion product"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          data-authorname="Wilhelm Gunkel"
                          data-authorurl="https://unsplash.com/@wilhelmgunkel"
                          data-blurhash="LAI5Y.t700a}xuWBWBj[4nj[%Mof"
                          data-photoid="GxGR7WhFCEQ"
                          src="https://images.unsplash.com/photo-1767715380018-c2287192f6ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcHJvZHVjdCUyMGNsb3RoaW5nfGVufDF8Mnx8fDE3NzM5MTgwOTZ8MA&ixlib=rb-4.1.0&q=80&w=400"
                          data-id="32ca4e43-36d6-523c-8723-8c926d71409b"
                        />
                      </div>
                      <CardContent
                        className="p-4 gap-2 flex flex-col"
                        data-id="58d754d8-e043-501d-90aa-ac9c23f28c53"
                      >
                        <p
                          className="text-sm font-semibold truncate text-zinc-950"
                          data-id="c0dbea16-fef7-5f09-bb9d-480f6a20a3e5"
                        >
                          Classic Denim Jacket
                        </p>
                        <p
                          className="text-xs text-[#71717b]"
                          data-id="12defff7-d630-531a-b002-6cc255ee8d1e"
                        >
                          UrbanWear
                        </p>
                        <div
                          className="flex items-center justify-between mt-1"
                          data-id="65c868e4-c734-59a4-af17-6d108186e988"
                        >
                          <span
                            className="text-base font-bold text-zinc-950"
                            data-id="afb96f98-7e20-5597-a90a-33fa8a5c1b47"
                          >
                            $89.00
                          </span>
                          <Badge
                            className="text-xs bg-green-100 text-green-700 border-green-200 border-0 border-solid"
                            data-id="b8a64137-bacf-5162-8291-00c3db8987b6"
                          >
                            In Stock
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                    <Card
                      className="p-0 gap-0 overflow-hidden hover:shadow-lg transition-all cursor-pointer group rounded-2xl border-zinc-200 border-0 border-solid"
                      data-id="6ee6679c-ff11-54f4-b278-60fe7dd11d37"
                    >
                      <div
                        className="relative h-48 overflow-hidden bg-zinc-100"
                        data-id="3876ff74-2d53-5d05-a5fa-88cfb5abb136"
                      >
                        <img
                          alt="Electronics gadget"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          data-authorname="Lluvia Morales"
                          data-authorurl="https://unsplash.com/@hi_lluvia"
                          data-blurhash="LUKB5T%2pckV00xtRPRj4:j@rrjc"
                          data-photoid="HOmaE9GorM0"
                          src="https://images.unsplash.com/photo-1636614597280-3dde89cbd6cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGdhZGdldCUyMHByb2R1Y3R8ZW58MXwyfHx8MTc3MzkwMjAxMnww&ixlib=rb-4.1.0&q=80&w=400"
                          data-id="a2a0892b-4f23-555d-b2b5-4306453b1701"
                        />
                      </div>
                      <CardContent
                        className="p-4 gap-2 flex flex-col"
                        data-id="f3b86722-9f21-50f2-90b1-b8d75432b55b"
                      >
                        <p
                          className="text-sm font-semibold truncate text-zinc-950"
                          data-id="00a2e4ca-3564-5e0d-8a89-338d1905659f"
                        >
                          Wireless Noise-Cancelling Headphones
                        </p>
                        <p
                          className="text-xs text-[#71717b]"
                          data-id="ab2fdc6a-4cf3-56cb-bacb-72be6b8afbe1"
                        >
                          AudioTech Pro
                        </p>
                        <div
                          className="flex items-center justify-between mt-1"
                          data-id="ffa74c77-8fb1-5f17-8f56-adbbf0a46e8b"
                        >
                          <span
                            className="text-base font-bold text-zinc-950"
                            data-id="54079d06-9ea5-5956-a784-79cb3ff28829"
                          >
                            $149.99
                          </span>
                          <Badge
                            className="text-xs bg-yellow-100 text-yellow-700 border-yellow-200 border-0 border-solid"
                            data-id="f04040db-1188-5348-967b-3290e63390ea"
                          >
                            Low Stock
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                    <Card
                      className="p-0 gap-0 overflow-hidden hover:shadow-lg transition-all cursor-pointer group rounded-2xl border-zinc-200 border-0 border-solid"
                      data-id="ead65fcb-b67c-5937-9e55-cdee38be2c5c"
                    >
                      <div
                        className="relative h-48 overflow-hidden bg-zinc-100"
                        data-id="67f80583-036d-529e-b083-d44a28df6c66"
                      >
                        <img
                          alt="Skincare product"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          data-authorname="Jacinta Christos"
                          data-authorurl="https://unsplash.com/@jacintachristos"
                          data-blurhash="LDH{1f-V}]_NxvE1?IROw|S2tlD$"
                          data-photoid="WKTyFX8gAJI"
                          src="https://images.unsplash.com/photo-1614159102369-effd79eadadd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMHByb2R1Y3R8ZW58MXwyfHx8MTc3MzkwMjAxMnww&ixlib=rb-4.1.0&q=80&w=400"
                          data-id="aa259151-61cf-5b69-a683-c7b6be5c5eef"
                        />
                      </div>
                      <CardContent
                        className="p-4 gap-2 flex flex-col"
                        data-id="b0230cfd-d1ec-59b0-adb4-ca4ae5e61403"
                      >
                        <p
                          className="text-sm font-semibold truncate text-zinc-950"
                          data-id="83d5bbc5-18c9-5958-8242-3bdee5b6c028"
                        >
                          Hydrating Serum Collection
                        </p>
                        <p
                          className="text-xs text-[#71717b]"
                          data-id="5ddaa742-3726-5abd-a0e7-fd2101b74682"
                        >
                          GlowSkin Beauty
                        </p>
                        <div
                          className="flex items-center justify-between mt-1"
                          data-id="e9a16372-fd29-5670-b701-23ff8c3260ca"
                        >
                          <span
                            className="text-base font-bold text-zinc-950"
                            data-id="35adbe60-da9a-58e3-911b-39120f0c3e94"
                          >
                            $34.50
                          </span>
                          <Badge
                            className="text-xs bg-green-100 text-green-700 border-green-200 border-0 border-solid"
                            data-id="81b3cab2-08a9-595d-8d73-1365bdd0ca79"
                          >
                            In Stock
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                    <Card
                      className="p-0 gap-0 overflow-hidden hover:shadow-lg transition-all cursor-pointer group rounded-2xl border-zinc-200 border-0 border-solid"
                      data-id="0ba87384-a68d-5b49-8c18-ff128590c28c"
                    >
                      <div
                        className="relative h-48 overflow-hidden bg-zinc-100"
                        data-id="95e7742e-f0bb-5765-bf6a-6979865dca16"
                      >
                        <img
                          alt="Sneakers product"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          data-authorname="Behnam Norouzi"
                          data-authorurl="https://unsplash.com/@behy_studio"
                          data-blurhash="LVON5yt8?bWBt6WAM{fk_NRjITt7"
                          data-photoid="F4rWoM3cYjI"
                          src="https://images.unsplash.com/photo-1631984564919-1f6b2313a71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxzaG9lcyUyMHNuZWFrZXJzJTIwcHJvZHVjdHxlbnwxfDJ8fHwxNzczOTE4MDk2fDA&ixlib=rb-4.1.0&q=80&w=400"
                          data-id="a1782e57-6136-56ce-a8b5-7d69d5e559d3"
                        />
                      </div>
                      <CardContent
                        className="p-4 gap-2 flex flex-col"
                        data-id="86a303b9-e9a4-53e3-8d1d-8084f6c787fe"
                      >
                        <p
                          className="text-sm font-semibold truncate text-zinc-950"
                          data-id="509a4adf-78ec-5b91-a720-eb4edc422379"
                        >
                          Retro Runner Sneakers
                        </p>
                        <p
                          className="text-xs text-[#71717b]"
                          data-id="2de028b1-2fd2-58dd-b3a0-a95fddaaa229"
                        >
                          StepUp Athletics
                        </p>
                        <div
                          className="flex items-center justify-between mt-1"
                          data-id="73e52ae6-2bcf-54f5-83f6-04ad042f9c32"
                        >
                          <span
                            className="text-base font-bold text-zinc-950"
                            data-id="46464656-698a-5120-b025-d7689a90d7aa"
                          >
                            $119.00
                          </span>
                          <Badge
                            className="text-xs bg-green-100 text-green-700 border-green-200 border-0 border-solid"
                            data-id="f6d70335-a786-57a5-98ba-86ec85711854"
                          >
                            In Stock
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                    <Card
                      className="p-0 gap-0 overflow-hidden hover:shadow-lg transition-all cursor-pointer group rounded-2xl border-zinc-200 border-0 border-solid"
                      data-id="cc6275fd-bc74-5c79-94b5-8ec05c972065"
                    >
                      <div
                        className="relative h-48 overflow-hidden bg-zinc-100"
                        data-id="f7f0431d-4593-570d-8455-a4aa9cb9a97f"
                      >
                        <img
                          alt="Watch product"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          data-authorname="Faraz Fayaz"
                          data-authorurl="https://unsplash.com/@farazfayaz"
                          data-blurhash="LjN^e:M{WBj[-;D%WBRj~qofIUWB"
                          data-photoid="3weffxf3mdk"
                          src="https://images.unsplash.com/photo-1758887952896-8491d393afe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMGFjY2Vzc29yaWVzJTIwcHJvZHVjdHxlbnwxfDJ8fHwxNzczOTE4MDk2fDA&ixlib=rb-4.1.0&q=80&w=400"
                          data-id="39abce60-ab98-5eb8-bd1b-997637379a93"
                        />
                      </div>
                      <CardContent
                        className="p-4 gap-2 flex flex-col"
                        data-id="b2e40b0e-4e3c-502e-b69b-004d747dcb57"
                      >
                        <p
                          className="text-sm font-semibold truncate text-zinc-950"
                          data-id="039a9ea9-3159-5738-9e0e-8796860965e9"
                        >
                          Minimalist Chronograph Watch
                        </p>
                        <p
                          className="text-xs text-[#71717b]"
                          data-id="81dbb5c2-a2a0-54b5-a4a2-4a74ab0d3a03"
                        >
                          TimeCraft
                        </p>
                        <div
                          className="flex items-center justify-between mt-1"
                          data-id="34c759d3-122e-58c9-a550-365116cc6c4f"
                        >
                          <span
                            className="text-base font-bold text-zinc-950"
                            data-id="1291c5fc-a6a2-5711-afab-b0332b6ccc1c"
                          >
                            $259.00
                          </span>
                          <Badge
                            className="text-xs bg-yellow-100 text-yellow-700 border-yellow-200 border-0 border-solid"
                            data-id="2723f9f1-0f5b-5759-8774-4923240ac1a0"
                          >
                            Low Stock
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <Card
                  className="p-12 gap-4 mt-4 border-zinc-200 border-0 border-dashed"
                  data-id="e0f25a07-ad3f-54da-bcf7-c8eea4fdeba6"
                >
                  <CardContent
                    className="p-0 gap-4 flex flex-col items-center justify-center text-center"
                    data-id="f314b5a5-8f42-5e3b-b12e-e62685785059"
                  >
                    <div
                      className="w-16 h-16 flex items-center justify-center rounded-full bg-zinc-100"
                      data-id="d7c0ff12-8347-5d39-924b-b78b457012c8"
                    >
                      <PackageOpen
                        className="size-8 text-[#71717b]"
                        data-id="fd54c3b7-a3d7-557e-8d70-f7eb296f198a"
                      />
                    </div>
                    <div
                      className="flex flex-col gap-1"
                      data-id="788091f3-e5a8-5d0b-a921-f9a799627210"
                    >
                      <h3
                        className="text-base font-semibold text-zinc-950"
                        data-id="04144653-f15e-5d00-83af-221765ae9fc2"
                      >
                        Not enough data yet
                      </h3>
                      <p
                        className="text-sm max-w-md text-[#71717b]"
                        data-id="a5d7f20a-2740-573f-afab-0ad6814f6b87"
                      >
                        Add more orders to unlock AI recommendations. Our
                        algorithm needs sufficient purchase history to identify
                        meaningful product associations.
                      </p>
                    </div>
                    <Button
                      className="mt-2 gap-2 text-sm"
                      variant="outline"
                      data-id="8f852d27-d810-5cd5-8e3f-bfc0909d0b1d"
                    >
                      <Upload
                        className="size-4"
                        data-id="1a0f60af-80e9-5c20-a87b-1edd9f9f93ab"
                      />
                      <span data-id="b92c1aec-ae46-5b16-b44b-20335a07c4c3">
                        Import Orders
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
