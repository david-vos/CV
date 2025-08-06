"use client";

import { Github, Linkedin, Mail, Globe, Music, Home, Code, Palette, BookOpen } from "lucide-react";
import Window from "./Window";

export default function WindowDemo() {
  return (
    <main className="min-h-screen animated-bg gradient-bg p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="particles-bg">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <div className="pulse-bg"></div>
      
      {/* Light effects */}
      <div className="light-beams">
        <div className="light-beam"></div>
        <div className="light-beam"></div>
        <div className="light-beam"></div>
      </div>
      
      <div className="lens-flare"></div>
      <div className="lens-flare"></div>
      <div className="lens-flare"></div>
      
      <div className="light-ray"></div>
      <div className="light-ray"></div>
      <div className="light-ray"></div>
      
      {/* Portfolio Window - Starting Window */}
      <Window title="David Vos - Portfolio" width={448} height={600} isStartingWindow={true}>
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 drop-shadow-lg">
            David Vos
          </h1>
          
          <p className="text-gray-700 mb-2 text-lg font-medium">
            Junior Software Engineer
          </p>
          <p className="text-gray-600 mb-4 text-sm">
            Flevoland, Netherlands
          </p>
          <p className="text-gray-700 mb-8 text-sm">
            Java/Kotlin at work • Games & Interactive Art at home
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://github.com/david-vos"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full transition-all duration-200 hover:scale-110 hover:bg-white/25"
              title="GitHub"
            >
              <Github className="w-5 h-5 text-gray-700" />
            </a>
            <a
              href="https://linkedin.com/in/david-vos-software-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full transition-all duration-200 hover:scale-110 hover:bg-white/25"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-700" />
            </a>
            <a
              href="https://dvos.me"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-full transition-all duration-200 hover:scale-110 hover:bg-white/25"
              title="Website"
            >
              <Globe className="w-5 h-5 text-gray-700" />
            </a>
            <a
              href="mailto:david@dvos.me"
              className="p-3 glass-effect rounded-full transition-all duration-200 hover:scale-110 hover:bg-white/25"
              title="Email"
            >
              <Mail className="w-5 h-5 text-gray-700" />
            </a>
          </div>
          
          <div className="space-y-3">
            <button className="w-full py-3 px-6 glass-button rounded-xl transition-all duration-200 hover:scale-105 text-gray-700 font-medium">
              View Projects
            </button>
            <button className="w-full py-3 px-6 bg-gray-800/80 hover:bg-gray-800/90 backdrop-blur-sm rounded-xl transition-all duration-200 hover:scale-105 text-white font-medium border border-gray-700/30">
              Interactive Art
            </button>
            <button className="w-full py-3 px-6 glass-button rounded-xl transition-all duration-200 hover:scale-105 text-gray-700 font-medium">
              Get In Touch
            </button>
          </div>
          
          <div className="mt-6 flex justify-center gap-4 text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <Music className="w-3 h-3" />
              Music
            </span>
            <span className="flex items-center gap-1">
              <Home className="w-3 h-3" />
              Home Automation
            </span>
          </div>
        </div>
      </Window>

      {/* Projects Window */}
      <Window title="Projects" width={600} height={400} initialPosition={{ x: 500, y: 100 }}>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">My Projects</h2>
          
          <div className="space-y-4">
            <div className="glass-effect p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Code className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-800">Portfolio Website</h3>
              </div>
              <p className="text-sm text-gray-600">
                A modern, interactive portfolio built with Next.js and TypeScript.
              </p>
            </div>
            
            <div className="glass-effect p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Palette className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold text-gray-800">Interactive Art</h3>
              </div>
              <p className="text-sm text-gray-600">
                Creative coding projects using p5.js and Three.js.
              </p>
            </div>
            
            <div className="glass-effect p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold text-gray-800">Learning Platform</h3>
              </div>
              <p className="text-sm text-gray-600">
                Educational tools and resources for developers.
              </p>
            </div>
          </div>
        </div>
      </Window>

      {/* Contact Window */}
      <Window title="Contact" width={350} height={300} initialPosition={{ x: 100, y: 400 }}>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700">david@dvos.me</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-gray-600" />
              <a href="https://dvos.me" className="text-sm text-blue-600 hover:underline">
                dvos.me
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Github className="w-4 h-4 text-gray-600" />
              <a href="https://github.com/david-vos" className="text-sm text-blue-600 hover:underline">
                github.com/david-vos
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Linkedin className="w-4 h-4 text-gray-600" />
              <a href="https://linkedin.com/in/david-vos-software-developer" className="text-sm text-blue-600 hover:underline">
                LinkedIn Profile
              </a>
            </div>
          </div>
          
          <div className="mt-6">
            <button className="w-full py-2 px-4 glass-button rounded-lg transition-all duration-200 hover:scale-105 text-gray-700 font-medium">
              Send Message
            </button>
          </div>
        </div>
      </Window>
    </main>
  );
} 