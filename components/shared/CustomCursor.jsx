import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    const updateCursorPosition = () => {
      if (cursor && dot) {
        cursor.style.left = mouseRef.current.x + 'px';
        cursor.style.top = mouseRef.current.y + 'px';
        dot.style.left = mouseRef.current.x + 'px';
        dot.style.top = mouseRef.current.y + 'px';
      }
      animationFrameRef.current = requestAnimationFrame(updateCursorPosition);
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseEnter = () => {
      isHoveringRef.current = true;
      if (cursor) {
        cursor.classList.add('hover');
      }
    };

    const handleMouseLeave = () => {
      isHoveringRef.current = false;
      if (cursor) {
        cursor.classList.remove('hover');
      }
    };

    // Start the animation loop
    animationFrameRef.current = requestAnimationFrame(updateCursorPosition);

    // Add mouse move listener
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .glass-card, .tech-badge');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          background: rgba(99, 102, 241, 0.3);
          border: 2px solid rgba(99, 102, 241, 0.8);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          will-change: transform;
        }
        
        .custom-cursor.hover {
          width: 40px;
          height: 40px;
          background: rgba(99, 102, 241, 0.1);
          border: 2px solid rgba(99, 102, 241, 1);
        }
        
        .custom-cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 4px;
          height: 4px;
          background: rgba(99, 102, 241, 1);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          will-change: transform;
        }
      `}</style>
      
      <div 
        ref={cursorRef}
        className="custom-cursor"
      />
      <div 
        ref={dotRef}
        className="custom-cursor-dot"
      />
    </>
  );
};

export default CustomCursor;
