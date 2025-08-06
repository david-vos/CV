"use client";

import { Github, Globe } from "lucide-react";

export default function ProjectsWindow() {
  const projects = [
    {
      title: "Interactive Art Portfolio",
      description: "A creative portfolio showcasing interactive art pieces and generative designs.",
      tech: ["React", "TypeScript", "Canvas API"],
      link: "https://dvos.me",
      github: null,
      status: "Live"
    },
    {
      title: "Home Automation System",
      description: "Custom home automation setup with smart devices and custom integrations.",
      tech: ["Python", "Home Assistant", "IoT"],
      link: null,
      github: "https://github.com/david-vos/home-automation",
      status: "Private"
    },
    {
      title: "Game Development Projects",
      description: "Various game development projects exploring different genres and mechanics.",
      tech: ["Unity", "C#", "Game Design"],
      link: null,
      github: "https://github.com/david-vos/games",
      status: "In Progress"
    },
    {
      title: "Java/Kotlin Applications",
      description: "Professional software development projects using Java and Kotlin.",
      tech: ["Java", "Kotlin", "Spring Boot"],
      link: null,
      github: null,
      status: "Professional"
    }
  ];

  return (
    <div className="p-6 text-gray-800">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A collection of my work, from professional software development to creative coding projects.
        </p>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="p-4 glass-effect rounded-lg border border-gray-200/50">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
              <span className={`px-2 py-1 text-xs rounded-full ${
                project.status === 'Live' ? 'bg-green-100 text-green-800' :
                project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                project.status === 'Professional' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {project.status}
              </span>
            </div>
            
            <p className="text-gray-700 text-sm mb-3">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <Globe className="w-3 h-3" />
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <Github className="w-3 h-3" />
                  Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 