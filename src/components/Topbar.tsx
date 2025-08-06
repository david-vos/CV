"use client";

import { useState, useEffect } from "react";
import { Bell, Battery, Wifi, Signal } from "lucide-react";

export default function Topbar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showNotifications, setShowNotifications] = useState(false);
  const [batteryClicked, setBatteryClicked] = useState(false);
  const [easterEggFound, setEasterEggFound] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const handleBatteryClick = () => {
    if (!batteryClicked) {
      // First click - show the notification
      setBatteryClicked(true);
      setShowNotifications(true);
    } else if (!easterEggFound) {
      // Second click - reveal the easter egg
      setEasterEggFound(true);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 topbar">
      <div className="px-4 py-1 flex items-center text-sm font-medium text-gray-800">
        {/* Left side - Time and Date */}
        <div className="flex items-center gap-4 flex-1">
          <div className="text-center">
            <div className="font-semibold">{formatTime(currentTime)}</div>
            <div className="text-xs opacity-75">{formatDate(currentTime)}</div>
          </div>
        </div>

        {/* Center - Desktop indicator */}
        <div className="flex items-center justify-center flex-1">
          <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium topbar-item">
            Desktop 1
          </div>
        </div>

        {/* Right side - System indicators and notifications */}
        <div className="flex items-center gap-3 flex-1 justify-end">
          {/* Wifi */}
          <div className="flex items-center gap-1 topbar-item px-2 py-1">
            <Wifi className="w-4 h-4" />
          </div>

          {/* Signal */}
          <div className="flex items-center gap-1 topbar-item px-2 py-1">
            <Signal className="w-4 h-4" />
          </div>

          {/* Battery */}
          <div 
            className="flex items-center gap-1 topbar-item px-2 py-1 cursor-pointer hover:bg-white/20 rounded transition-colors"
            onClick={handleBatteryClick}
            title={!batteryClicked ? "Click to reveal a secret..." : !easterEggFound ? "Click again to find the answer..." : "You found it!"}
          >
            <Battery className="w-4 h-4" />
            <span className="text-xs">42%</span>
          </div>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
              }}
              className="p-1 hover:bg-white/20 rounded transition-colors topbar-item"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
            </button>

            {/* Notification dropdown */}
            {showNotifications && (
              <div className="absolute top-full right-0 mt-2 w-80 glass-card rounded-lg shadow-lg border border-white/20">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-800">Notifications</h3>
                    <button
                      onClick={() => {
                        setShowNotifications(false);
                      }}
                      className="text-xs text-gray-600 hover:text-gray-800"
                    >
                      Close
                    </button>
                  </div>
                  
                  {/* Easter egg notification */}
                  {!batteryClicked ? (
                    <div className="p-3 bg-white/30 rounded-lg mb-2">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-800">Deep Thought</div>
                          <div className="text-xs text-gray-600 mt-1">
                            Can you find the answer to life, the universe, and everything?
                          </div>
                          <div className="text-xs text-gray-500 mt-2">Just now</div>
                        </div>
                      </div>
                    </div>
                  ) : !easterEggFound ? (
                    <div className="p-3 bg-yellow-100/50 rounded-lg mb-2">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-800">Hint Found</div>
                          <div className="text-xs text-gray-600 mt-1">
                            You found the battery! Now click it again to discover the answer...
                          </div>
                          <div className="text-xs text-gray-500 mt-2">Just now</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 bg-green-100/50 rounded-lg mb-2">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-800">Congratulations!</div>
                          <div className="text-xs text-gray-600 mt-1">
                            You found the answer! The answer to life, the universe, and everything is indeed 42.
                          </div>
                          <div className="text-xs text-gray-500 mt-2">Douglas Adams would be proud</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="text-center text-xs text-gray-500 py-2">
                    {!batteryClicked ? "Click the battery to find the answer..." : !easterEggFound ? "Now click the battery again!" : "You've discovered the ultimate answer!"}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 