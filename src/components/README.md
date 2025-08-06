# Window Component

A reusable, draggable window component with macOS-style design and glass morphism effects.

## Features

- **Draggable**: Windows can be moved by dragging the title bar
- **Resizable**: Customizable width and height
- **Positionable**: Can be positioned at specific coordinates or centered automatically
- **Glass Morphism**: Beautiful glass-like appearance with backdrop blur
- **macOS Style**: Traffic light buttons and title bar design
- **Touch Support**: Works on mobile devices
- **Viewport Bounds**: Windows stay within the viewport boundaries

## Usage

### Basic Usage

```tsx
import Window from "../components/Window";

function MyComponent() {
  return (
    <Window title="My Window" width={400} height={300}>
      <div className="p-4">
        <h2>Window Content</h2>
        <p>This is the content inside the window.</p>
      </div>
    </Window>
  );
}
```

### With Custom Position

```tsx
<Window 
  title="Positioned Window" 
  width={500} 
  height={400}
  initialPosition={{ x: 100, y: 200 }}
>
  <div className="p-4">
    <h2>Custom Position</h2>
    <p>This window appears at coordinates (100, 200).</p>
  </div>
</Window>
```

### Starting Window

```tsx
<Window 
  title="Main Window" 
  width={500} 
  height={400}
  isStartingWindow={true}
>
  <div className="p-4">
    <h2>Starting Window</h2>
    <p>This window will be centered on screen load and have higher priority.</p>
  </div>
</Window>
```

### Multiple Windows

```tsx
function MultiWindowExample() {
  return (
    <main className="min-h-screen animated-bg gradient-bg">
      {/* Background effects */}
      <div className="particles-bg">
        <div className="particle"></div>
        {/* ... more particles */}
      </div>
      
      {/* First Window */}
      <Window title="Portfolio" width={448} height={600}>
        <div className="p-8 text-center">
          <h1>David Vos</h1>
          <p>Junior Software Engineer</p>
          {/* ... more content */}
        </div>
      </Window>
      
      {/* Second Window */}
      <Window 
        title="Projects" 
        width={600} 
        height={400} 
        initialPosition={{ x: 500, y: 100 }}
      >
        <div className="p-6">
          <h2>My Projects</h2>
          {/* ... project content */}
        </div>
      </Window>
      
      {/* Third Window */}
      <Window 
        title="Contact" 
        width={350} 
        height={300} 
        initialPosition={{ x: 100, y: 400 }}
      >
        <div className="p-6">
          <h2>Get In Touch</h2>
          {/* ... contact content */}
        </div>
      </Window>
    </main>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | The content to display inside the window |
| `title` | `string` | `"Window"` | The title displayed in the window's title bar |
| `width` | `number` | `448` | The width of the window in pixels |
| `height` | `number` | `600` | The height of the window in pixels |
| `initialPosition` | `{ x: number, y: number }` | `undefined` | Initial position. If not provided, the window will be centered |
| `className` | `string` | `""` | Additional CSS classes to apply to the window |
| `isStartingWindow` | `boolean` | `false` | If true, the window will be centered on screen load and have higher z-index |

## Styling

The Window component uses the following CSS classes that are defined in `globals.css`:

- `.floating-window`: Main window container
- `.window-title-bar`: Title bar with drag functionality
- `.traffic-lights`: Container for macOS-style buttons
- `.traffic-light`: Individual traffic light buttons
- `.window-title`: Window title text
- `.liquid-glass-container`: Glass morphism background

## Behavior

- **Dragging**: Windows can only be dragged by the title bar
- **Bounds**: Windows automatically stay within the viewport boundaries
- **Touch Support**: Full touch support for mobile devices
- **Z-Index**: Windows have proper z-index management during dragging
- **Responsive**: Windows adapt to different screen sizes

## Example Implementation

See `WindowDemo.tsx` for a complete example showing multiple windows with different content and sizes.

## Background Requirements

The Window component is designed to work with the animated background system. Make sure your main container has the following classes:

```tsx
<main className="min-h-screen animated-bg gradient-bg p-4 relative overflow-hidden">
  {/* Background effects */}
  <div className="particles-bg">
    <div className="particle"></div>
    {/* ... */}
  </div>
  
  {/* Windows */}
  <Window title="Example" width={400} height={300}>
    {/* Content */}
  </Window>
</main>
``` 