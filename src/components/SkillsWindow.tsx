"use client";

import { Code, Database, Palette, Gamepad2, Settings, Globe } from "lucide-react";

export default function SkillsWindow() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: "Java", level: 90 },
        { name: "Kotlin", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Python", level: 75 },
        { name: "C#", level: 70 }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="w-5 h-5" />,
      skills: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Node.js", level: 70 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "Databases & Tools",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "Git", level: 90 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 60 }
      ]
    },
    {
      title: "Creative & Interactive",
      icon: <Palette className="w-5 h-5" />,
      skills: [
        { name: "Unity", level: 75 },
        { name: "Canvas API", level: 80 },
        { name: "WebGL", level: 65 },
        { name: "Game Design", level: 70 },
        { name: "Interactive Art", level: 80 }
      ]
    },
    {
      title: "Home Automation",
      icon: <Settings className="w-5 h-5" />,
      skills: [
        { name: "Home Assistant", level: 85 },
        { name: "IoT", level: 80 },
        { name: "Smart Home", level: 90 },
        { name: "Automation", level: 85 },
        { name: "Hardware", level: 70 }
      ]
    }
  ];

  return (
    <div className="p-6 text-gray-800">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          My technical skills span from professional software development to creative coding and home automation.
        </p>
      </div>

      <div className="space-y-6">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="p-4 glass-effect rounded-lg border border-gray-200/50">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
            </div>
            
            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-xs text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold mb-3">Learning & Growth</h3>
        <p className="text-gray-700 text-sm mb-4">
          I'm constantly expanding my skill set and exploring new technologies. Currently focusing on:
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Machine Learning</span>
          <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Rust</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Web3</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Cloud Architecture</span>
        </div>
      </div>
    </div>
  );
} 