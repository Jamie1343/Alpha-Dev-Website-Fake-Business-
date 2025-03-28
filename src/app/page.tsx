import { raleway } from "@/utils";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

export default function Home() {
  return (
    <div className={`${raleway.className}`}>
      <div className={`bg-[url(/images/hero_bg.svg)] bg-no-repeat bg-cover min-h-screen max-w-screen`}>
        <Navbar></Navbar>
        <div className="flex flex-col lg:flex-row text-white mx-2 items-center lg:mx-24 mt-12 text-center lg:text-left">
          <h1 className="w-full lg:w-[75%]">
            Transforming Your <br />
            Digital Vision Into <br /> Reality
          </h1>
          <div className="w-full lg:w-[70%] lg:justify-stretch">
            <div className="items-center flex-col flex h-full">
              <p className="mt-5 w-[80%]">At Webfluxion, we specialise in crafting stunning websites tailored to your unique needs. Discover how our innovative solutions can elevate your online presence.</p>
              <div className="mt-auto ">
                <button className="bg-[#000000]   px-4 py-4 text-[1rem]  rounded-xl mr-8 text-white w-32">Explore</button>
                <button className="bg-[#FFFFFF]   px-4 py-4 text-[1rem]  rounded-xl w-32 border-3 border-[#757575] text-[#757575]">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="min-h-fit py-5 mb-5" id="services">
        <h2 className="text-center w-[70%] mx-auto mt-8">
          Transform Your Vision into Reality with<br></br> Our Custom Web Design Services
        </h2>
        <div className="flex flex-col mt-8 lg:flex-row lg:gap-4">
          <Service title="Engage Your Audience with Stunning and Functional Web Experiences" description="We create websites that captivate and convert visitors into loyal customers." imgPath="/images/services/engage.svg" linkText="Discover" linkURL="/discover"></Service>
          <Service title="Seamless and Adaptive Solutions for Every Device with Responsive Web Development" description="Our e-commerce solutions empower your business to thrive online." imgPath="/images/services/adapt.svg" linkText="Explore" linkURL="/explore"></Service>
          <Service title="Boost Your Sales with Our Comprehensive E-commerce Solutions" description="Our tailored e-commerce platforms are designed for growth and success." imgPath="/images/services/sales.svg" linkText="Shop" linkURL="/discover"></Service>
        </div>
      </section>
      <section className="min-h-screen bg-[#D9D9D9]">+</section>
    </div>
  );
}
