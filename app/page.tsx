"use client"

import React, { useState, useEffect } from "react";
import MyBounceLoader from '@/components/bounce-loader';
import HeroSection from "@/components/sections/hero";
import { WhatIDo } from "@/components/sections/what-i-do";
import { ProfessionalSkills } from "@/components/sections/professional-skills";
import Projects from "@/components/sections/projects";
import { Resume } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <MyBounceLoader isLoading={isLoading} />
      {!isLoading && (
        <>
          <div
            className="absolute top-0 right-0 -mt-[0px] -mr-[0px] w-[890px] h-[1673px] bg-no-repeat bg-right-top z-0 opacity-30 lg:opacity-100"
            style={{ backgroundImage: `url(/images/polygons.svg)` }}
          ></div>
          <main className="pt-16 relative z-10">
            <HeroSection />
            <WhatIDo />
            <ProfessionalSkills />
            <Projects />
            <Resume />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}