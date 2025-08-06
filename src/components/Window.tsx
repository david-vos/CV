"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import type { ReactNode } from "react";

interface WindowProps {
  children: ReactNode;
  title?: string;
  width?: number;
  height?: number;
  initialPosition?: { x: number; y: number };
  className?: string;
  isStartingWindow?: boolean;
  onClose?: () => void;
  onFocus?: () => void;
  isFocused?: boolean;
}

export default function Window({
  children,
  title = "Window",
  width = 448,
  height = 600,
  initialPosition,
  className = "",
  isStartingWindow = false,
  onClose,
  onFocus,
  isFocused = false
}: WindowProps) {
  const [position, setPosition] = useState(initialPosition ?? { x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(!isStartingWindow);
  const [isMounted, setIsMounted] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    // Center the window initially if it's the starting window or no initial position is provided
    if (isStartingWindow || !initialPosition) {
      const centerWindow = () => {
        if (typeof window !== 'undefined') {
          const centerX = (window.innerWidth - width) / 2;
          const centerY = (window.innerHeight - height) / 2;
          setPosition({ x: centerX, y: centerY });
          setIsVisible(true);
        }
      };
      
      // Small delay to ensure the component has rendered
      const timer = setTimeout(centerWindow, 0);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [isMounted, isStartingWindow, initialPosition, width, height]);

  useEffect(() => {
    if (!isMounted) return;
    
    // Handle viewport resize for starting windows
    if (isStartingWindow) {
      const handleResize = () => {
        if (typeof window !== 'undefined') {
          setPosition({
            x: (window.innerWidth - width) / 2,
            y: (window.innerHeight - height) / 2
          });
        }
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isMounted, isStartingWindow, width, height]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Focus the window when clicked
    if (onFocus) {
      onFocus();
    }
    
    // Only allow dragging from the title bar
    const target = e.target as HTMLElement;
    const isTitleBar = target.closest('.window-title-bar');
    
    if (!isTitleBar) {
      return;
    }
    
    // Calculate offset relative to the current position
    const offsetX = e.clientX - position.x;
    const offsetY = e.clientY - position.y;
    
    setDragOffset({ x: offsetX, y: offsetY });
    setIsDragging(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Focus the window when touched
    if (onFocus) {
      onFocus();
    }
    
    // Only allow dragging from the title bar
    const target = e.target as HTMLElement;
    const isTitleBar = target.closest('.window-title-bar');
    
    if (!isTitleBar) {
      return;
    }
    
    const touch = e.touches[0];
    if (!touch) return;
    
    // Calculate offset relative to the current position
    const offsetX = touch.clientX - position.x;
    const offsetY = touch.clientY - position.y;
    
    setDragOffset({ x: offsetX, y: offsetY });
    setIsDragging(true);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging && windowRef.current) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      
      // Keep window within viewport bounds
      if (typeof window !== 'undefined') {
        const maxX = window.innerWidth - width;
        const maxY = window.innerHeight - height;
        
        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY))
        });
      }
    }
  }, [isDragging, dragOffset, width, height]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (isDragging && windowRef.current) {
      const touch = e.touches[0];
      if (!touch) return;
      
      const newX = touch.clientX - dragOffset.x;
      const newY = touch.clientY - dragOffset.y;
      
      // Keep window within viewport bounds
      if (typeof window !== 'undefined') {
        const maxX = window.innerWidth - width;
        const maxY = window.innerHeight - height;
        
        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY))
        });
      }
    }
  }, [isDragging, dragOffset, width, height]);

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging, handleMouseMove, handleTouchMove]);

  // Don't render until mounted to prevent hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <div 
      ref={windowRef}
      className={`floating-window ${isDragging ? 'dragging' : ''} ${isStartingWindow ? 'starting-window' : ''} ${className}`}
              style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          position: 'absolute',
          width: `${width}px`,
          height: `${height}px`,
          zIndex: isFocused ? 30 : (isStartingWindow ? 25 : 20),
          opacity: isVisible ? 1 : 0,
          transition: isVisible ? 'opacity 0.3s ease-out' : 'none'
        }}
    >
      {/* Glass morphism container */}
      <div className="relative w-full h-full">
        {/* Liquid glass background */}
        <div className="absolute inset-0 liquid-glass-container"></div>
        
        {/* macOS-style title bar */}
        <div 
          className="window-title-bar" 
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Traffic light buttons */}
          <div className="traffic-lights">
            <div 
              className="traffic-light close" 
              title="Close"
              onClick={(e) => {
                e.stopPropagation();
                if (onClose) onClose();
              }}
            ></div>
            <div 
              className="traffic-light minimize" 
              title="Minimize"
              onClick={(e) => {
                e.stopPropagation();
                if (onClose) onClose();
              }}
            ></div>
            <div className="traffic-light maximize" title="Maximize"></div>
          </div>
          
          {/* Window title */}
          <div className="window-title">{title}</div>
          
          {/* Spacer to balance the layout */}
          <div style={{ width: '68px' }}></div>
        </div>
        
        {/* Content area */}
        <div className="relative z-10 h-full overflow-auto" style={{ height: `calc(100% - 32px)` }}>
          {children}
        </div>
      </div>
    </div>
  );
} 