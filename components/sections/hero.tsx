import React from 'react';
import { Github, Linkedin, Download } from 'lucide-react';
import { projects } from '@/data/projects';

const HeroSection: React.FC = () => {
  return (
    <section className="py-8 px-4 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full flex flex-col items-center lg:items-start lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
          <p className="text-sm sm:text-base text-white font-bold mb-2">HELLO, <span className="text-primary">MY NAME IS</span></p>
          <h1 className='text-3xl sm:text-4xl md:text-5xl text-primary font-bold mb-4'>
            THABO <span className='text-primary-200 [text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff]'>TSHABALALA</span>
          </h1>
          <p className="text-base lg:text-lg mb-4 font-bold text-white">I am: <span className="text-white text-xl sm:text-2xl font-normal ml-1 font-source-code-pro">Software Developer</span></p>
          <div className='hidden lg:block'>
            <p className="text-sm sm:text-base text-white opacity-70 mb-6">I have competitive skills and a strong passion for my career. Always excited to work on a project.</p>
            <div className="flex mb-6">
              <a href="https://github.com/Tshabalala-Thabo" className="hover:opacity-100 opacity-70 transition-opacity duration-200 mr-4">
                <Github className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </a>
              <a href="https://www.linkedin.com/in/thabo-tshabalala/" className="hover:opacity-100 opacity-70 transition-opacity duration-200">
                <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </a>
            </div>
            <div className="flex items-center">
              <a href="/ThaboTshabalala_CV_10_2024.pdf" download className="bg-primary mt-2 hover:bg-primary/50 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded transition duration-300 text-sm sm:text-base">
                <Download className="inline-block mr-2" />
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 md:w-2/3 lg:w-5/12 relative">
          <img
            src="/images/right.svg"
            alt="Hero illustration"
            className="w-full h-auto"
          />
          <div className="absolute bottom-12  md:bottom-16 sm:bottom-24 md:bottom-32 -left-24 lg:-left-9 sm:-left-10 flex items-center border border-white border-opacity-70 text-white rounded-md p-2 bg-glass bg-opacity-70">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
              {Math.floor(((new Date().getTime() - new Date('2023-10-01').getTime()) / (1000 * 60 * 60 * 24 * 365)))} <span className="text-primary">+</span>
            </h1>
            <div className="text-xs sm:text-sm font-bold ml-2 sm:ml-4">
              <p>YEARS OF</p>
              <p className="text-primary">EXPERIENCE</p>
            </div>
          </div>
          <div className="absolute bottom-4 sm:bottom-8 md:bottom-16 -right-24 lg:right-0 flex items-center border border-white border-opacity-70 text-white rounded-md p-2 bg-glass bg-opacity-70">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
              {projects.length} <span className="text-primary">+</span>
            </h1>
            <div className="text-xs sm:text-sm font-bold ml-2 sm:ml-4">
              <p>PERSONAL</p>
              <p className="text-primary">PROJECTS</p>
            </div>
          </div>
        </div>
        <div className='block lg:hidden flex flex-col items-center' >
          <p className="text-sm lg:text-base text-white opacity-70 text-center mt-6 mb-6">From Pretoria, with competitive skills in software development and UI design. I have a strong passion for my career and am always excited to tackle new projects, ensuring both functionality and great user experiences.</p>
          <div className="flex mb-6">
            <a href="https://github.com/Tshabalala-Thabo" className="hover:opacity-100 opacity-70 transition-opacity duration-200 mr-4">
              <Github className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </a>
            <a href="https://www.linkedin.com/in/thabo-tshabalala/" className="hover:opacity-100 opacity-70 transition-opacity duration-200">
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </a>
          </div>
          <div className="flex items-center">
            <a href="/ThaboTshabalala_CV_10_2024.pdf" download className="bg-primary mt-2 hover:bg-primary/50 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded transition duration-300 text-sm sm:text-base">
              <Download className="inline-block mr-2" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;