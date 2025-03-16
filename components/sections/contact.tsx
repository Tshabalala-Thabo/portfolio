import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-16 px-4">
      <div className='container'>
        <div className="w-full max-w-2xl mx-auto bg-glass p-4 rounded-md border bg-opacity-70 border-white border-opacity-10 text-white">
          <div>
            <div className="text-2xl font-bold text-white">Contact Me</div>
            <div className="text-white opacity-70">Feel free to reach out through any of these platforms</div>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-primary" />
              <a
                href="mailto:47thabo@gmail.com"
                className="p-0 h-auto font-normal text-base text-white hover:text-primary"
              >
                47thabo@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Github className="h-6 w-6 text-primary" />
              <a
                href="https://github.com/Tshabalala-Thabo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary"
              >
                github.com/Tshabalala-Thabo
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Linkedin className="h-6 w-6 text-primary" />
              <a
                href="https://www.linkedin.com/in/thabo-tshabalala/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary"
              >
                linkedin.com/in/thabo-tshabalala
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}