import { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
        // Function to get particle colors based on theme
    const getParticleColors = () => {
      // Check if dark/blue theme is active
      const computedStyle = window.getComputedStyle(document.body);
      const background = computedStyle.background || computedStyle.backgroundColor;
      
      const isDarkMode = document.documentElement.classList.contains('dark') || 
                        document.body.classList.contains('dark') ||
                        document.querySelector('html').classList.contains('dark') ||
                        window.matchMedia('(prefers-color-scheme: dark)').matches ||
                        document.body.style.backgroundColor === 'rgb(0, 0, 0)' ||
                        document.body.style.backgroundColor === 'black' ||
                        // Check for blue theme indicators
                        background.includes('linear-gradient') ||
                        background.includes('667eea') ||
                        background.includes('764ba2') ||
                        background.includes('rgb(102, 126, 234)') ||
                        background.includes('rgb(118, 75, 162)');
      
      console.log('Theme detection:', { 
        isDarkMode,
        htmlClasses: document.documentElement.classList.toString(),
        bodyClasses: document.body.classList.toString(),
        bodyBg: document.body.style.backgroundColor,
        bodyBackground: document.body.style.background,
        computedBackground: background
      });
      
      // White particles for blue/dark theme, black particles for white theme
      const particleColor = isDarkMode ? '#ffffff' : '#000000';
      const lineColor = isDarkMode ? '#ffffff' : '#000000';
      
      console.log('Using colors:', { particleColor, lineColor });
      
      return { particleColor, lineColor };
    };

    // Load particles.js script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;

    script.onload = () => {
      // Initialize particles.js after script loads
      if (window.particlesJS) {
        const colors = getParticleColors();

                console.log('Initializing particles with colors:', colors);
        
        // Use theme-appropriate colors
        console.log('Using theme-appropriate colors:', colors);
        
        // Fallback configuration for light theme
        const fallbackConfig = {
          particles: {
            number: { value: 80 },
            color: { value: '#000000' }, // Force black for light theme
            shape: { type: 'circle' },
            opacity: { value: 0.9 }, // Very visible
            size: { value: 5 }, // Larger size
            line_linked: {
              enable: true,
              distance: 150,
              color: '#000000', // Force black lines
              opacity: 0.6,
              width: 1
            },
            move: { enable: true, speed: 6 }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'repulse' },
              onclick: { enable: true, mode: 'push' }
            }
          }
        };

        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 40, // Minimal particles for airy feel
              density: {
                enable: true,
                value_area: 1000
              }
            },
            color: {
              value: colors.particleColor
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000'
              }
            },
            opacity: {
              value: 0.7, // Very low opacity for subtlety
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.7, // Very low minimum
                sync: false
              }
            },
            size: {
              value: 2, // Small, delicate particles
              random: true,
              anim: {
                enable: true,
                speed: 6,
                size_min: 0.5, // Very small minimum
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 200, // Longer distance for airy feel
              color: colors.lineColor,
              opacity: 0.2, // Very subtle lines
              width: 0.5 // Fine, thin lines
            },
            move: {
              enable: true,
              speed: 2, // Slow, gentle movement
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'bounce', // Gentle bounce for soft effect
              bounce: true,
              attract: {
                enable: true,
                rotateX: 300,
                rotateY: 600
              }
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'grab' // Gentle grab instead of repulse
              },
              onclick: {
                enable: true,
                mode: 'bubble' // Soft bubble effect
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 0.5
                }
              },
              bubble: {
                distance: 200,
                size: 20,
                duration: 3,
                opacity: 0.3,
                speed: 2
              },
              repulse: {
                distance: 100,
                duration: 0.8
              },
              push: {
                particles_nb: 2
              },
              remove: {
                particles_nb: 1
              }
            }
          },
          retina_detect: true
        });
      }
    };

    document.head.appendChild(script);

    // Function to update particles when theme changes
    const updateParticlesForTheme = () => {
      if (window.pJSDom && window.pJSDom[0]) {
        const colors = getParticleColors();
        const pJS = window.pJSDom[0].pJS;

        // Update particle colors
        pJS.particles.array.forEach(particle => {
          particle.color.value = colors.particleColor;
        });

        // Update line colors
        pJS.particles.line_linked.color = colors.lineColor;

        // Refresh the canvas
        pJS.fn.canvasPaint();
      }
    };

    // Listen for theme changes
    const observer = new MutationObserver(updateParticlesForTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style jsx>{`
        #particles-js {
          position: fixed;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          z-index: 1;
          pointer-events: none;
          background: transparent;
        }
      `}</style>
      <div id="particles-js"></div>
    </>
  );
};

export default ParticlesBackground;
