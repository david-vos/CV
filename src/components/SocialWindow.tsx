"use client";

import { Github, Linkedin, Globe, Mail } from "lucide-react";

export default function SocialWindow() {
  const socialLinks = [
    {
      name: "GitHub",
      username: "@david-vos",
      url: "https://github.com/david-vos",
      icon: <Github className="w-5 h-5" />,
      description: "Code repositories and open source contributions",
      color: "hover:bg-gray-100"
    },
    {
      name: "LinkedIn",
      username: "David Vos",
      url: "https://linkedin.com/in/david-vos-software-developer",
      icon: <Linkedin className="w-5 h-5" />,
      description: "Professional network and career updates",
      color: "hover:bg-blue-50"
    },
    {
      name: "Website",
      username: "dvos.me",
      url: "https://dvos.me",
      icon: <Globe className="w-5 h-5" />,
      description: "Personal website and portfolio",
      color: "hover:bg-purple-50"
    },
    {
      name: "Email",
      username: "david@dvos.me",
      url: "mailto:david@dvos.me",
      icon: <Mail className="w-5 h-5" />,
      description: "Direct communication and inquiries",
      color: "hover:bg-green-50"
    }
  ];

  return (
    <div className="p-6 text-gray-800">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Social & Contact</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Connect with me across different platforms. I&apos;m always open to new opportunities and collaborations.
        </p>
      </div>

      <div className="space-y-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block p-4 glass-effect rounded-lg border border-gray-200/50 transition-all duration-200 ${social.color}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gray-100 rounded-lg">
                {social.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{social.name}</h3>
                <p className="text-sm text-gray-600">{social.username}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">{social.description}</p>
          </a>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
        <p className="text-gray-700 text-sm mb-4">
          I&apos;m always interested in hearing about new opportunities, interesting projects, or just connecting with fellow developers and creatives.
        </p>
        <div className="flex gap-2">
          <a
            href="mailto:david@dvos.me"
            className="flex-1 py-2 px-4 glass-button rounded-lg text-center text-sm font-medium transition-all duration-200 hover:scale-105"
          >
            Send Email
          </a>
          <a
            href="https://linkedin.com/in/david-vos-software-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-4 bg-blue-600/80 hover:bg-blue-600/90 backdrop-blur-sm rounded-lg text-center text-sm font-medium text-white transition-all duration-200 hover:scale-105"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
} 