"use client";

import { Mail, Github, Linkedin, MapPin, Calendar } from "lucide-react";

export default function ContactWindow() {
  return (
    <div className="p-6 text-gray-800">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          I&apos;m always open to new opportunities, collaborations, and interesting conversations. 
          Feel free to reach out through any of the channels below.
        </p>
      </div>

      <div className="space-y-6">
        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Get In Touch</h3>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 glass-effect rounded-lg">
              <Mail className="w-5 h-5 text-gray-600" />
              <div>
                <div className="font-medium text-gray-800">Email</div>
                <div className="text-sm text-gray-600">david@dvos.me</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 glass-effect rounded-lg">
              <MapPin className="w-5 h-5 text-gray-600" />
              <div>
                <div className="font-medium text-gray-800">Location</div>
                <div className="text-sm text-gray-600">Flevoland, Netherlands</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 glass-effect rounded-lg">
              <Calendar className="w-5 h-5 text-gray-600" />
              <div>
                <div className="font-medium text-gray-800">Availability</div>
                <div className="text-sm text-gray-600">Open to new opportunities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Quick Actions</h3>
          
          <div className="grid grid-cols-1 gap-3">
            <a
              href="mailto:david@dvos.me?subject=Portfolio%20Inquiry"
              className="flex items-center justify-center gap-2 p-3 glass-button rounded-lg text-gray-700 font-medium transition-all duration-200 hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </a>
            
            <a
              href="https://linkedin.com/in/david-vos-software-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 bg-blue-600/80 hover:bg-blue-600/90 backdrop-blur-sm rounded-lg text-white font-medium transition-all duration-200 hover:scale-105"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
            
            <a
              href="https://github.com/david-vos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 glass-button rounded-lg text-gray-700 font-medium transition-all duration-200 hover:scale-105"
            >
              <Github className="w-4 h-4" />
              View GitHub
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Send a Message</h3>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className="w-full p-3 glass-effect rounded-lg border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full p-3 glass-effect rounded-lg border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full p-3 glass-effect rounded-lg border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                placeholder="Tell me about your project or opportunity..."
              ></textarea>
            </div>
            
            <button className="w-full py-3 px-6 glass-button rounded-lg text-gray-700 font-medium transition-all duration-200 hover:scale-105">
              Send Message
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            I&apos;ll get back to you as soon as possible. Looking forward to hearing from you!
          </p>
        </div>
      </div>
    </div>
  );
} 