"use client";

import { useState } from "react";
import { User, FolderOpen, Share2, Code, Mail } from "lucide-react";

interface DockItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
  zIndex: number;
}

interface DockProps {
  onWindowOpen: (windowId: string) => void;
  onWindowClose: (windowId: string) => void;
  onWindowFocus: (windowId: string) => void;
  openWindows: string[];
  focusedWindow: string | null;
}

export default function Dock({
  onWindowOpen,
  onWindowFocus,
  openWindows,
  focusedWindow
}: DockProps) {
  const [dockItems] = useState<DockItem[]>([
    {
      id: "about",
      title: "About Me",
      icon: <User className="w-6 h-6" />,
      isOpen: false,
      zIndex: 20
    },
    {
      id: "projects",
      title: "Projects",
      icon: <FolderOpen className="w-6 h-6" />,
      isOpen: false,
      zIndex: 20
    },
    {
      id: "social",
      title: "Social",
      icon: <Share2 className="w-6 h-6" />,
      isOpen: false,
      zIndex: 20
    },
    {
      id: "skills",
      title: "Skills",
      icon: <Code className="w-6 h-6" />,
      isOpen: false,
      zIndex: 20
    },
    {
      id: "contact",
      title: "Contact",
      icon: <Mail className="w-6 h-6" />,
      isOpen: false,
      zIndex: 20
    }
  ]);

  const handleDockItemClick = (itemId: string) => {
    if (openWindows.includes(itemId)) {
      // Window is open, focus it
      onWindowFocus(itemId);
    } else {
      // Window is closed, open it
      onWindowOpen(itemId);
    }
  };

  return (
    <div className="dock-container">
      <div className="dock">
        {dockItems.map((item) => {
          const isOpen = openWindows.includes(item.id);
          const isFocused = focusedWindow === item.id;
          
          return (
            <div
              key={item.id}
              className={`dock-item ${isOpen ? 'open' : ''} ${isFocused ? 'focused' : ''}`}
              onClick={() => handleDockItemClick(item.id)}
              title={item.title}
            >
              <div className="dock-item-icon">
                {item.icon}
              </div>
              {isOpen && (
                <div className="dock-item-indicator">
                  <div className="indicator-dot"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
} 