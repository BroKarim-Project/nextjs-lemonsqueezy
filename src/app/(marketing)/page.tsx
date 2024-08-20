// import { BackgroundCircles } from '@/components/design/hero';

import Image from "next/image";

import Background from "@/../public/assets/tes-bg.png";
import SubscribeForm from "@/components/subscribe-form";

export default async function IndexPage() {
  return (
    <>
      <section className="relative space-y-6 pb-8 pt-6 md:pb-12 md:pt-8" id="hero">
        <div className="absolute left-1/2 top-1/2 -z-10 hidden h-full w-full -translate-x-1/2 -translate-y-1/2 transform dark:block">
          <Image
            src={Background}
            alt="Background"
            width={1440}
            height={1800}
            className="w-full"
            quality={75} // Anda bisa menyesuaikan kualitas di sini
            placeholder="blur" // Opsional, untuk efek blur saat loading
          />
        </div>
        <div className="container z-10 flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">Build and Ship your SaaS Supa Fast.</h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">Join the waitlist for my Newsletter.</p>

          <SubscribeForm />
        </div>
      </section>

      <section id="features" className="container space-y-6 py-8 dark:bg-transparent ">
        <div className="mx-auto flex items-center justify-between space-y-4 md:max-w-[64rem]">
          <h2 className="font-heading text-xl leading-[1.1]">More Capability. Less Complexity</h2>
          <a href="#" className="flex-none rounded-full px-3.5 py-1 text-sm font-semibold text-black underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
            See all <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                  </svg>
                  <h3 className="font-bold">🚀</h3>
                </div>
              </div>
              <div className="space-y-2">
                {" "}
                <h3 className="font-bold"> Modern Stack </h3>
                <p className="text-sm text-muted-foreground">Build your application using the latest and most advanced technologies in the web development ecosystem.</p>
              </div>
            </div>
          </div>
          <div className="relative  overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
                  </svg>
                  <h3 className="font-bold">🗃️</h3>
                </div>
                <div className="flex  items-center px-1 border border-gray-300 rounded-full">
                  <div className="relative w-4 h-4 flex justify-center items-center">
                    <>
                      <div className="circle circle-1"></div>
                      <div className="circle circle-2"></div>
                    </>
                  </div>
                  <p className="text-sm leading-7 text-black">ongoing</p>
                </div>
              </div>
              <div className="space-y-2">
                {" "}
                <h3 className="font-bold"> Database </h3>
                <p className="text-sm text-muted-foreground">Leverage the flexibility of Prisma to connect with your preferred database, whether it’s Postgres, MySQL, SQLite, or MongoDB.</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                  </svg>
                  <h3 className="font-bold text-xl">🎨</h3>
                </div>
              </div>
              <div className="space-y-2">
                {" "}
                <h3 className="font-bold"> Design System </h3>
                <p className="text-sm text-muted-foreground">Develop your application with a flexible and extensible design system that can be customized to fit your needs.</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-6 w-6 fill-current">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <h3 className="font-bold text-xl">🔐</h3>
                </div>
                <div className="flex  items-center px-1 border border-gray-300 rounded-full">
                  <div className="relative w-4 h-4 flex justify-center items-center">
                    <>
                      <div className="circle circle-1"></div>
                      <div className="circle circle-2"></div>
                    </>
                  </div>
                  <p className="text-sm leading-7 text-black">ongoing</p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold">Authentication</h3>
                <p className="text-sm text-muted-foreground">Implement secure and reliable authentication using NextAuth.js with middleware for additional control.</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <svg className="h-6 w-6 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>{" "}
                      <path
                        d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <h3 className="font-bold">📝</h3>
                </div>
              </div>
              <div className="space-y-2">
                {" "}
                <h3 className="font-bold"> Email </h3>
                <p className="text-sm text-muted-foreground">Seamlessly send transactional emails using React-Email in combination with your chosen email provider.</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <svg fill="#000000" className="h-6 w-6 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M2.293,18.707a1,1,0,0,1,0-1.414l3-3a1,1,0,0,1,1.262-.125l2.318,1.545,2.42-2.42a1,1,0,0,1,1.414,1.414l-3,3a1,1,0,0,1-1.262.125L6.127,16.287l-2.42,2.42a1,1,0,0,1-1.414,0ZM22,3V21a1,1,0,0,1-1,1H3a1,1,0,0,1,0-2H20V8H4v4a1,1,0,0,1-2,0V3A1,1,0,0,1,3,2H21A1,1,0,0,1,22,3ZM4,6H20V4H4Zm10.707,6.707,1-1a1,1,0,0,0-1.414-1.414l-1,1a1,1,0,1,0,1.414,1.414Z"></path>
                    </g>
                  </svg>
                  <h3 className="font-bold">🔍️</h3>
                </div>
                <div className="flex  items-center px-1 border border-gray-300 rounded-full">
                  <div className="relative w-4 h-4 flex justify-center items-center">
                    <>
                      <div className="circle circle-1"></div>
                      <div className="circle circle-2"></div>
                    </>
                  </div>
                  <p className="text-sm leading-7 text-black">ongoing</p>
                </div>
              </div>
              <div className="space-y-2">
                {" "}
                <h3 className="font-bold"> SEO </h3>
                <p className="text-sm text-muted-foreground">Enhance your application’s visibility on search engines by optimizing for SEO, Improve your site’s ranking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
