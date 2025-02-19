// import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { ArrowRight } from "lucide-react";

const page = () => {
  const data = [
    {
      title: (<div className="text-red-500 font-light">Sep 2023 - Oct 2024</div>),
      content: (
        <div>
          <p className="text-green-700 text-sm md:text-2xl font-normal mb-4">
            Chitkara ACM Student Chapter
          </p>
          <p className="text-white border border-green-700 inline-block rounded-xl p-3 bg-gradient-to-r from-green-700 via-green-700 to-green-900 text-sm md:text-xl font-normal mb-4">
            Web Developer Team
          </p>
          <div className="mb-8 space-y-4 items-start w-full mx-auto">
            <div className="flex gap-2 items-center text-gray-200 text-[18px]">
              <ArrowRight className="w-8 h-8 text-red-500 " />Enhanced user engagement by 15% with intuitive designs and interactive features.
            </div>
            <div className="flex gap-2 items-center text-gray-200 text-[18px]">
              <ArrowRight className="w-8 h-8 text-red-500 " />Collaborated with 15+ developers to improve platform usability and user experience.
            </div>
            <div className="flex gap-2 items-center text-gray-200 text-[18px]">
              <ArrowRight className="w-8 h-8 text-red-500 " />Boosted site performance by 30% through efficient code optimization.
            </div>
            <div className="flex gap-2 items-center text-gray-200 text-[18px]">
              <ArrowRight className="w-8 h-8 text-red-500 " />Led the integration of modern tools and contributed to 10+ successful events with seamless execution.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: (<div className="text-red-500 font-light">Feb 2023 - Jul 2024</div>),
      content: (
        <div>
          <p className="text-green-500 text-sm md:text-2xl font-bold mb-4">
            The Xiting Way
          </p>
          <p className="text-white border border-green-700 inline-block rounded-xl p-3 bg-gradient-to-r from-green-700 via-green-700 to-green-900 text-sm md:text-xl font-normal mb-4">
            Web Developer
          </p>
          <div className="mb-8 space-y-4">
            <div className="flex gap-2 items-center text-gray-200 text-[18px]">
              <ArrowRight className="w-8 h-8 text-red-500 " />Designed user-centric interfaces, leading to a 30% increase in engagement.
            </div>
            <div className="flex gap-2 items-center text-gray-200 text-[18px]">
              <ArrowRight className="w-8 h-8 text-red-500 " />Developed and integrated RESTful APIs for better system efficiency.
            </div>
            <div className="flex gap-2 items-center text-gray-200 text-[18px]">
              <ArrowRight className="w-8 h-8 text-red-500 " />Collaborated with cross-functional teams, boosting user satisfaction by 20%.
            </div>
            <div className="flex gap-2 items-center text-gray-200 text-[18px]">
              <ArrowRight className="w-8 h-8 text-red-500 " />Optimized workflows, improving team productivity by 15%.
            </div>
            <div className="flex gap-2 items-center text-gray-200 text-[18px]">
              <ArrowRight className="w-8 h-8 text-red-500 " />Enhanced performance and functionality through seamless design and development.
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export default page