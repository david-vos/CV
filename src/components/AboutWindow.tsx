"use client";

import { Mail, Github, Linkedin, Globe, MapPin, Calendar, Code } from "lucide-react";

export default function AboutWindow() {
  return (
    <div className="p-6 text-gray-800">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          I&apos;m a Junior Software Engineer based in Flevoland, Netherlands, passionate about creating 
          innovative solutions and interactive experiences. I specialize in Java/Kotlin development 
          for professional work while exploring games and interactive art in my personal projects.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <MapPin className="w-4 h-4 text-gray-600" />
          <span className="text-gray-700">Flevoland, Netherlands</span>
        </div>
        
        <div className="flex items-center gap-3">
          <Code className="w-4 h-4 text-gray-600" />
          <span className="text-gray-700">Java/Kotlin • React • TypeScript</span>
        </div>
        
        <div className="flex items-center gap-3">
          <Calendar className="w-4 h-4 text-gray-600" />
          <span className="text-gray-700">Available for new opportunities</span>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-3">Connect</h3>
        <div className="flex gap-3">
          <a
            href="https://github.com/david-vos"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 glass-effect rounded-lg transition-all duration-200 hover:scale-110 hover:bg-white/25"
            title="GitHub"
          >
            <Github className="w-5 h-5 text-gray-700" />
          </a>
          <a
            href="https://linkedin.com/in/david-vos-software-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 glass-effect rounded-lg transition-all duration-200 hover:scale-110 hover:bg-white/25"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-gray-700" />
          </a>
          <a
            href="https://dvos.me"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 glass-effect rounded-lg transition-all duration-200 hover:scale-110 hover:bg-white/25"
            title="Website"
          >
            <Globe className="w-5 h-5 text-gray-700" />
          </a>
          <a
            href="mailto:david@dvos.me"
            className="p-2 glass-effect rounded-lg transition-all duration-200 hover:scale-110 hover:bg-white/25"
            title="Email"
          >
            <Mail className="w-5 h-5 text-gray-700" />
          </a>
        </div>
      </div>
    </div>
  );
} 