// import { BackgroundCircles } from '@/components/design/hero'; //strokeWidth

"use client";

import Image from "next/image";
import Pac1 from "@/../public/assets/pac1-vacuum.png";
import Pac2 from "@/../public/assets/pac2-vacum.png";
import Pac3 from "@/../public/assets/pac3-vacum.png";
import { Icons } from "@/components/icons";
import axios from "axios";
import { Star } from "lucide-react";

export default async function IndexPage() {
  const buyVacum1 = async () => {
    try {
      const response = await axios.post("../api/lemonsqueezy", {
        productId: "495244",
      });

      if (response.data && response.data.checkoutUrl) {
        console.log(response.data);
        window.open(response.data.checkoutUrl, "_blank");
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to buy product #1");
    }
  };
  return (
    <>
      <section className="relative min-h-screen top-0 w-full bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] z-0 bg-cover bg-center bg-no-repeat">
        <div className="w-full h-[500px] relative ">
          <div className="absolute inset-0 bg-transparent sm:bg-gray-900/75 w-full min-h-screen opacity-40 sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div className="absolute -bottom-10 w-full px-6 flex justify-between items-center">
            <h1 className="text-3xl font-extrabold text-white text-left sm:text-7xl">
              THE NEW GENERATION
              <br /> OF CLEANING
            </h1>

            <div className=" text-center">
              <a href="#" className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* sponsor */}
      <div className="flex flex-wrap bg-[#fffaf4] items-center  mt-2 md:p-0 p-4 md:justify-around">
        <div className="w-full md:w-1/3 justify-center md:px-10 ">
          <p className="text-xl uppercase font-bold  ">Available On</p>
        </div>
        <div className="flex md:w-2/3 items-center justify-center gap-10">
          <Icons.Amazon />
          <Icons.AliExpress />
          <Icons.Ebay />
          <Icons.Walmart />
          <Icons.Etsy />
        </div>
      </div>

      <hr className=" text-black border border-black " />
      <section className="bg-[#fffaf4] min-h-screen relative  py-4 text-black">
        <div className=" px-4 py-16 md:p-10  xl:max-w-3xl">
          <h1 className="text-4xl uppercase font-bold leadi sm:text-5xl">Our product</h1>
        </div>
        <hr className=" text-black border border-black " />
        <div className="grid  sm:grid-cols-3 ">
          {/* product 1 */}
          <div className="group flex flex-col border-black  border-r-2  px-4">
            <Image src={Pac2} alt="Package one" className="h-[350px] w-[400px]  sm:h-[450px]" />

            <div className="mt-2">
              <div className="mt-2 flex gap-1">
                <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                  <Star fill="#FFD35A" color="#FFD35A" size={16} />
                  <Star fill="#FFD35A" color="#FFD35A" size={16} />
                  <Star fill="#FFD35A" color="#FFD35A" size={16} />
                  <Star fill="#FFD35A" color="#FFD35A" size={16} />
                </div>
              </div>

              <div className="my-4 flex justify-between  text-sm">
                <button onClick={buyVacum1} className="text-black text-left font-semibold text-lg max-w-lg group-hover:underline group-hover:underline-offset-4">
                  SHARK HD1000 AI ULTRA ROBO VACUM{" "}
                </button>

                <p className="text-black text-lg">$299</p>
              </div>
            </div>
          </div>
          {/* product 2 */}
          <div className="group flex flex-col border-black  border-r-2  px-4">
            <Image src={Pac1} alt="Package one" className="h-[350px] w-full object-cover sm:h-[450px]" />

            <div className="mt-2">
              <div className="mt-2 flex gap-1">
                <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                  <Star fill="#FFD35A" color="#FFD35A" size={16} />
                  <Star fill="#FFD35A" color="#FFD35A" size={16} />
                  <Star fill="#FFD35A" color="#FFD35A" size={16} />
                  <Star fill="#FFD35A" color="#FFD35A" size={16} />
                </div>
              </div>

              <div className="my-4 flex justify-between  text-sm">
                <h1 className="text-black font-semibold text-lg max-w-lg group-hover:underline group-hover:underline-offset-4">SHARK AV2500 AI ULTRA VACUM </h1>
                <div className="flex gap-2">
                  <p className="text-black line-through">&nbsp;$588&nbsp;</p>
                  <p className="text-black text-lg">$399</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group flex flex-col  px-4">
            <Image src={Pac3} alt="Package one" className="h-[350px] w-[400px] sm:h-[450px]" />

            <div className="mt-2">
              <div className="mt-2 flex gap-1">
                <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                  <Star fill="#FFD35A" color="#FFD35A" size={16} />
                  <Star fill="#FFD35A" color="#FFD35A" size={16} />
                  <Star fill="#FFD35A" color="#FFD35A" size={16} />
                  <Star fill="#FFD35A" color="#FFD35A" size={16} />
                </div>
              </div>

              <div className="my-4 flex justify-between  text-sm">
                <h1 className="text-black font-semibold text-lg max-w-lg group-hover:underline group-hover:underline-offset-4">LET OUR TEAM ELEVATE YOUR LIVING </h1>
                <div className="flex items-center">
                  <p className="text-black text-lg">$199</p>
                  <p className="text-gray-600 text-sm">/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className=" text-black border border-black " />
      </section>
    </>
  );
}
