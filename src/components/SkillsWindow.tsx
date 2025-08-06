"use client";

import { Code, Database, Palette, Zap } from "lucide-react";

export default function SkillsWindow() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: "Java", level: 90, description: "Primary language for professional development" },
        { name: "Kotlin", level: 85, description: "Modern Android and backend development" },
        { name: "TypeScript", level: 80, description: "Frontend and full-stack development" },
        { name: "JavaScript", level: 85, description: "Web development and interactive features" },
        { name: "Python", level: 75, description: "Scripting, automation, and data processing" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Zap className="w-5 h-5" />,
      skills: [
        { name: "React", level: 85, description: "Modern UI development with hooks and context" },
        { name: "Next.js", level: 80, description: "Full-stack React framework" },
        { name: "Spring Boot", level: 80, description: "Java backend development" },
        { name: "Tailwind CSS", level: 90, description: "Utility-first CSS framework" },
        { name: "Unity", level: 70, description: "Game development and interactive experiences" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "Git", level: 90, description: "Version control and collaboration" },
        { name: "Docker", level: 75, description: "Containerization and deployment" },
        { name: "PostgreSQL", level: 70, description: "Database design and management" },
        { name: "AWS", level: 65, description: "Cloud infrastructure and services" },
        { name: "Home Assistant", level: 80, description: "Home automation and IoT" }
      ]
    },
    {
      title: "Creative & Design",
      icon: <Palette className="w-5 h-5" />,
      skills: [
        { name: "Interactive Art", level: 85, description: "Creative coding and generative design" },
        { name: "Game Design", level: 75, description: "Game mechanics and user experience" },
        { name: "UI/UX Design", level: 70, description: "User interface and experience design" },
        { name: "Music Production", level: 65, description: "Digital audio and composition" },
        { name: "3D Modeling", level: 60, description: "Blender and 3D asset creation" }
      ]
    }
  ];

  return (
    <div className="p-6 text-gray-800">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A comprehensive overview of my technical skills and creative abilities. I&apos;m constantly learning and expanding my expertise.
        </p>
      </div>

      <div className="space-y-6">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="p-4 glass-effect rounded-lg border border-gray-200/50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Additional Skills */}
        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Additional Skills</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 glass-effect rounded-lg text-center">
              <div className="text-sm font-medium text-gray-800">Agile/Scrum</div>
            </div>
            <div className="p-3 glass-effect rounded-lg text-center">
              <div className="text-sm font-medium text-gray-800">CI/CD</div>
            </div>
            <div className="p-3 glass-effect rounded-lg text-center">
              <div className="text-sm font-medium text-gray-800">REST APIs</div>
            </div>
            <div className="p-3 glass-effect rounded-lg text-center">
              <div className="text-sm font-medium text-gray-800">GraphQL</div>
            </div>
            <div className="p-3 glass-effect rounded-lg text-center">
              <div className="text-sm font-medium text-gray-800">Testing</div>
            </div>
            <div className="p-3 glass-effect rounded-lg text-center">
              <div className="text-sm font-medium text-gray-800">Performance</div>
            </div>
          </div>
        </div>

        {/* Learning Goals */}
        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Currently Learning</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 glass-effect rounded-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Advanced Game Development with Unity</span>
            </div>
            <div className="flex items-center gap-3 p-3 glass-effect rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Machine Learning and AI Integration</span>
            </div>
            <div className="flex items-center gap-3 p-3 glass-effect rounded-lg">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Advanced Home Automation Systems</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 