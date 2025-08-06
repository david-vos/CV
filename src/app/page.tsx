"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Globe, Music, Home } from "lucide-react";
import Window from "../components/Window";
import Dock from "../components/Dock";
import AboutWindow from "../components/AboutWindow";
import ProjectsWindow from "../components/ProjectsWindow";
import SocialWindow from "../components/SocialWindow";
import SkillsWindow from "../components/SkillsWindow";
import ContactWindow from "../components/ContactWindow";
import Topbar from "../components/Topbar";
import ClientOnly from "../components/ClientOnly";

export default function HomePage() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const [focusedWindow, setFocusedWindow] = useState<string | null>(null);

  const handleWindowOpen = (windowId: string) => {
    if (!openWindows.includes(windowId)) {
      setOpenWindows(prev => [...prev, windowId]);
    }
    setFocusedWindow(windowId);
  };

  const handleWindowClose = (windowId: string) => {
    setOpenWindows(prev => prev.filter(id => id !== windowId));
    if (focusedWindow === windowId) {
      setFocusedWindow(null);
    }
  };

  const handleWindowFocus = (windowId: string) => {
    setFocusedWindow(windowId);
  };

  return (
    <main className="min-h-screen animated-bg gradient-bg relative overflow-hidden">
      <ClientOnly fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="text-white">Loading...</div>
        </div>
      }>
        {/* Topbar */}
        <Topbar />
        
        {/* Main content with top padding for topbar and bottom padding for dock */}
        <div className="pt-12 pb-24 p-4">
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
          <Window 
            title="David Vos - Portfolio" 
            width={448} 
            height={600} 
            isStartingWindow={true}
            onFocus={() => handleWindowFocus('portfolio')}
            isFocused={focusedWindow === 'portfolio'}
          >
            <div className="p-8 text-center">
              {/* Name */}
              <h1 className="text-4xl font-bold text-gray-800 mb-6 drop-shadow-lg">
                David Vos
              </h1>
              
              {/* Tagline */}
              <p className="text-gray-700 mb-2 text-lg font-medium">
                Junior Software Engineer
              </p>
              <p className="text-gray-600 mb-4 text-sm">
                Flevoland, Netherlands
              </p>
              <p className="text-gray-700 mb-8 text-sm">
                Java/Kotlin at work • Games & Interactive Art at home
              </p>
              
              {/* Social buttons */}
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
              
              {/* Action buttons */}
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
              
              {/* Interests */}
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

          {/* About Window */}
          {openWindows.includes('about') && (
            <Window
              title="About Me"
              width={400}
              height={500}
              initialPosition={{ x: 100, y: 100 }}
              onClose={() => handleWindowClose('about')}
              onFocus={() => handleWindowFocus('about')}
              isFocused={focusedWindow === 'about'}
            >
              <AboutWindow />
            </Window>
          )}

          {/* Projects Window */}
          {openWindows.includes('projects') && (
            <Window
              title="Projects"
              width={500}
              height={600}
              initialPosition={{ x: 150, y: 150 }}
              onClose={() => handleWindowClose('projects')}
              onFocus={() => handleWindowFocus('projects')}
              isFocused={focusedWindow === 'projects'}
            >
              <ProjectsWindow />
            </Window>
          )}

          {/* Social Window */}
          {openWindows.includes('social') && (
            <Window
              title="Social & Contact"
              width={450}
              height={550}
              initialPosition={{ x: 200, y: 200 }}
              onClose={() => handleWindowClose('social')}
              onFocus={() => handleWindowFocus('social')}
              isFocused={focusedWindow === 'social'}
            >
              <SocialWindow />
            </Window>
          )}

          {/* Skills Window */}
          {openWindows.includes('skills') && (
            <Window
              title="Skills & Expertise"
              width={480}
              height={650}
              initialPosition={{ x: 250, y: 250 }}
              onClose={() => handleWindowClose('skills')}
              onFocus={() => handleWindowFocus('skills')}
              isFocused={focusedWindow === 'skills'}
            >
              <SkillsWindow />
            </Window>
          )}

          {/* Contact Window */}
          {openWindows.includes('contact') && (
            <Window
              title="Contact"
              width={420}
              height={520}
              initialPosition={{ x: 300, y: 300 }}
              onClose={() => handleWindowClose('contact')}
              onFocus={() => handleWindowFocus('contact')}
              isFocused={focusedWindow === 'contact'}
            >
              <ContactWindow />
            </Window>
          )}

          {/* Dock */}
          <Dock
            onWindowOpen={handleWindowOpen}
            onWindowClose={handleWindowClose}
            onWindowFocus={handleWindowFocus}
            openWindows={openWindows}
            focusedWindow={focusedWindow}
          />
        </div>
      </ClientOnly>
    </main>
  );
}
