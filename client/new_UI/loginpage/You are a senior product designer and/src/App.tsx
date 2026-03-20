import { useEffect } from "react";
import { loadFonts } from "./utils";
import { AlertCircle, BarChart3, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

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
        className="w-full h-fit bg-zinc-950 text-neutral-50 h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible"
        data-id="39476b13-5601-5703-ad71-3d89dc0a69a4"
      >
        <div
          className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.141 0.005 285.823) 0%, oklch(0.18 0.04 293) 40%, oklch(0.141 0.005 285.823) 100%)",
          }}
          data-id="e515d00f-c7cf-54ea-805e-bc20035cf050"
        >
          <div
            className="absolute inset-0 overflow-hidden"
            data-id="e3bc2278-d092-58e0-b1fd-c7c26a2c13af"
          >
            <div
              className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.541 0.281 293.009 / 0.08) 0%, transparent 70%)",
              }}
              data-id="948aab26-8ecd-5f06-b43c-cb29ba69ff17"
            />
            <div
              className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.488 0.243 264.376 / 0.06) 0%, transparent 70%)",
              }}
              data-id="52f8e2f8-9ddb-5fa6-a0cd-b9787d4ee1b3"
            />
            <div
              className="absolute top-[30%] right-[20%] w-[400px] h-[400px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.627 0.265 303.9 / 0.04) 0%, transparent 70%)",
              }}
              data-id="2ff2dd27-e34c-50ac-91bc-577f4a45e322"
            />
          </div>
          <div
            className="relative z-10 w-full max-w-[400px] mx-4"
            data-id="5af02daf-bdc5-57a0-bad1-0d6e2ca39fdf"
          >
            <div
              className="flex flex-col items-center gap-8"
              data-id="ef56c3d2-99bb-5d33-b114-b037d7a3e9bb"
            >
              <div
                className="flex items-center gap-2"
                data-id="6646d4a4-aaa2-543b-ab65-f121ab33555f"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#7f22fe]"
                  data-id="c1939ba1-2989-5c65-8c33-034f607f5cb8"
                >
                  <BarChart3
                    className="size-5 text-violet-50"
                    data-id="345c91ae-0719-5235-ab8d-a218ce421496"
                  />
                </div>
                <span
                  className="text-xl font-bold tracking-tight text-neutral-50"
                  data-id="9cfb130d-aef7-5916-9894-c50e3315bc3b"
                >
                  Shopify Analytics
                </span>
              </div>
              <Card
                className="w-full p-8 gap-6 shadow-xl rounded-2xl border-white/50 border-0 border-solid"
                style={{
                  backdropFilter: "blur(20px)",
                  background: "oklch(0.21 0.006 285.885 / 0.8)",
                }}
                data-id="5bbffe96-96b6-51ee-aa6b-4946037758f1"
              >
                <CardHeader
                  className="gap-2 p-0 items-center text-center"
                  data-id="79122591-14ce-5f5c-9a95-2943cd1a9f6e"
                >
                  <CardTitle
                    className="text-2xl font-semibold text-neutral-50"
                    data-id="41d92008-fc04-5914-9c41-bf0107e610ed"
                  >
                    Welcome back
                  </CardTitle>
                  <CardDescription
                    className="text-sm text-[#9f9fa9]"
                    data-id="33582b10-e102-53f9-bd25-656477618aec"
                  >
                    Sign in to your analytics dashboard
                  </CardDescription>
                </CardHeader>
                <CardContent
                  className="gap-4 p-0 flex flex-col"
                  data-id="b3ac79fd-7fd5-5887-ad03-b8a745671cb9"
                >
                  <button
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary rounded-xl bg-zinc-800/50 text-neutral-50 border-white/10 border-0 border-solid"
                    data-id="bf3420a3-4d80-5113-9851-c495cd5e6382"
                  >
                    <svg
                      className="size-5"
                      viewBox="0 0 24 24"
                      data-id="55101fdd-f8f8-5973-86e3-e82582cc92f0"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                        fill="#4285F4"
                        data-id="54dd8194-685e-53e2-a60d-b89926e29d33"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                        data-id="7b4c8403-7c5c-55c8-914d-a3f2c27a2b77"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                        data-id="35009863-f591-5dfc-a10f-d41810b78156"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                        data-id="00d4edd7-4f7b-5571-89f5-d28f4d900535"
                      />
                    </svg>
                    <span data-id="4b60e4d3-7f82-5418-92fe-9010195b7614">
                      Continue with Google
                    </span>
                  </button>
                  <div
                    className="flex items-center gap-4"
                    data-id="8fd5e79a-7afc-5313-b067-930578c89344"
                  >
                    <Separator
                      className="flex-1"
                      data-id="7b35e1b6-556f-503e-b630-f09ed47dbc3a"
                    />
                    <span
                      className="text-xs uppercase tracking-wider text-[#9f9fa9]"
                      data-id="3ed2681d-878e-51d0-af9e-f0bde44d6a81"
                    >
                      or
                    </span>
                    <Separator
                      className="flex-1"
                      data-id="80d89c0b-1bc0-5476-9f4e-9c365ce3f7d5"
                    />
                  </div>
                  <div
                    className="p-4 flex items-start gap-2 rounded-lg bg-[#ff6467]/10 border-[#ff6467]/30 border-0 border-solid"
                    data-id="5b908f5c-f216-56d2-89df-4c1ab2b1a650"
                  >
                    <AlertCircle
                      className="size-4 mt-0.5 shrink-0 text-[#ff6467]"
                      data-id="20592600-813d-5229-802d-b666df5867a4"
                    />
                    <p
                      className="text-sm text-[#ff6467]"
                      data-id="2135822e-43a2-5468-95ef-76cc8de4e28f"
                    >
                      Invalid email or password. Please try again.
                    </p>
                  </div>
                  <div
                    className="flex flex-col gap-4"
                    data-id="d61cd4c7-f942-58a8-80e8-2e5bb8aa5f29"
                  >
                    <div
                      className="flex flex-col gap-2"
                      data-id="686829ab-3b4d-5eab-add9-f0e4d9e99e99"
                    >
                      <Label
                        className="text-sm font-medium text-neutral-50"
                        htmlFor="email"
                        data-id="1ea4ba53-e1c2-5dcc-a4cb-338f876c9d2f"
                      >
                        Email
                      </Label>
                      <Input
                        className="h-11 px-4 text-sm placeholder:text-muted-foreground focus-visible:ring-primary rounded-lg bg-zinc-950/50 border-white/10 border-0 border-solid"
                        id="email"
                        placeholder="you@company.com"
                        type="email"
                        data-id="2e287385-7d9b-514d-a128-bcdbbf71708b"
                      />
                    </div>
                    <div
                      className="flex flex-col gap-2"
                      data-id="96170dc3-c8fa-53f4-abeb-b8bad40f59f0"
                    >
                      <div
                        className="flex items-center justify-between"
                        data-id="132a3cf8-0830-5505-9c93-25690dd3b257"
                      >
                        <Label
                          className="text-sm font-medium text-neutral-50"
                          htmlFor="password"
                          data-id="0643714b-dda8-5307-888f-24453f73e443"
                        >
                          Password
                        </Label>
                        <a
                          className="text-xs hover:text-primary/80 transition-colors text-[#7f22fe]"
                          href="#"
                          data-id="ecedeff6-89c1-5a58-bd9b-7f94c5f909e2"
                        >
                          Forgot password?
                        </a>
                      </div>
                      <Input
                        className="h-11 px-4 text-sm placeholder:text-muted-foreground focus-visible:ring-primary rounded-lg bg-zinc-950/50 border-white/10 border-0 border-solid"
                        id="password"
                        placeholder="••••••••"
                        type="password"
                        data-id="054e3f18-3d3a-5865-9027-dbf7f7c0ef36"
                      />
                    </div>
                  </div>
                  <Button
                    className="w-full h-11 font-medium text-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2 rounded-xl bg-[#7f22fe] text-violet-50"
                    disabled={true}
                    data-id="205e3606-d43b-521d-91c3-8a0784df243d"
                  >
                    <Loader2
                      className="size-4 animate-spin"
                      data-id="57408c1f-30f6-5ba7-b035-755293c4cd66"
                    />
                    <span data-id="a4569caa-2f90-5fb8-a5a5-c04b1179885a">
                      Signing in...
                    </span>
                  </Button>
                </CardContent>
                <CardFooter
                  className="gap-1 p-0 justify-center"
                  data-id="2b452357-6c0d-5164-8403-d1202add7b77"
                >
                  <p
                    className="text-sm text-[#9f9fa9]"
                    data-id="df86880b-90a8-52cf-bcf8-7d5271c11db9"
                  >
                    Don't have an account?
                  </p>
                  <a
                    className="text-sm font-medium hover:text-primary/80 transition-colors text-[#7f22fe]"
                    href="#"
                    data-id="1aa88246-fb7b-5b11-8a78-a57c095b18fa"
                  >
                    Sign up
                  </a>
                </CardFooter>
              </Card>
              <p
                className="text-xs text-center text-[#9f9fa9]"
                data-id="ef6c7d83-3a80-5736-8486-d04ea3560e03"
              >
                By signing in, you agree to our
                <a
                  className="underline hover:text-foreground transition-colors text-[#9f9fa9]"
                  href="#"
                  data-id="9215db25-ea37-54bd-ac04-60ca8e8c65db"
                >
                  Terms of Service
                </a>
                and
                <a
                  className="underline hover:text-foreground transition-colors text-[#9f9fa9]"
                  href="#"
                  data-id="083db754-cec6-5218-8dc5-110406244f76"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
