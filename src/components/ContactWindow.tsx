"use client";

import { Mail, MapPin, Phone, Clock, Send, Download } from "lucide-react";

export default function ContactWindow() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "david@dvos.me",
      link: "mailto:david@dvos.me",
      description: "Best way to reach me for professional inquiries"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Flevoland, Netherlands",
      link: null,
      description: "Available for remote work worldwide"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Availability",
      value: "Open to opportunities",
      link: null,
      description: "Currently seeking new challenges"
    }
  ];

  return (
    <div className="p-6 text-gray-800">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          I'm always interested in new opportunities, collaborations, or just connecting with fellow developers and creatives.
        </p>
      </div>

      <div className="space-y-4 mb-6">
        {contactInfo.map((info, index) => (
          <div key={index} className="p-4 glass-effect rounded-lg border border-gray-200/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gray-100 rounded-lg">
                {info.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-700">{info.value}</p>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-600">{info.description}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="p-4 glass-effect rounded-lg border border-gray-200/50">
          <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
          <div className="space-y-3">
            <a
              href="mailto:david@dvos.me?subject=Hello from your portfolio"
              className="flex items-center gap-3 p-3 glass-button rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Send className="w-4 h-4" />
              <span className="font-medium">Send Email</span>
            </a>
            <a
              href="https://linkedin.com/in/david-vos-software-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-blue-600/80 hover:bg-blue-600/90 backdrop-blur-sm rounded-lg transition-all duration-200 hover:scale-105 text-white"
            >
              <Send className="w-4 h-4" />
              <span className="font-medium">Connect on LinkedIn</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 glass-button rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span className="font-medium">Download Resume</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-3">What I'm Looking For</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p>• Full-time software engineering opportunities</p>
          <p>• Freelance projects and collaborations</p>
          <p>• Open source contributions</p>
          <p>• Creative coding and interactive art projects</p>
          <p>• Game development collaborations</p>
        </div>
      </div>
    </div>
  );
} 