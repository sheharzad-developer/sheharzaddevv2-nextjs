import React, { useEffect, useRef } from 'react';

function MatrixBackground() {
    const canvas = useRef();

    useEffect(() => {
        const context = canvas.current.getContext('2d');
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        canvas.current.width = width;
        canvas.current.height = height;

        // Multiple character sets for variety
        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()_+-=[]{}|;:,.<>?";
        const katakana = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";
        const binary = "01";
        const chars = matrix + katakana + binary;

        // Multiple layers for depth
        const layers = 3;
        const layerData = [];

        for (let layer = 0; layer < layers; layer++) {
            const fontSize = 12 + layer * 4;
            const columns = Math.floor(width / fontSize);
            const drops = [];
            const speeds = [];
            const colors = [];
            const opacities = [];

            for (let i = 0; i < columns; i++) {
                drops[i] = Math.random() * -50;
                speeds[i] = (Math.random() * 0.8 + 0.2) * (layer + 1);
                opacities[i] = Math.random() * 0.5 + 0.3;
                
                // Different colors for each layer
                if (layer === 0) {
                    colors[i] = '#00ff88';
                } else if (layer === 1) {
                    colors[i] = '#00ff00';
                } else {
                    colors[i] = '#00cc66';
                }
            }

            layerData.push({ fontSize, columns, drops, speeds, colors, opacities });
        }

        // Particle system
        const particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 4 + 1,
                life: Math.random() * 100 + 50,
                maxLife: Math.random() * 100 + 50
            });
        }

        // Lightning effect
        let lightning = [];
        let lightningTimer = 0;

        let time = 0;

        function drawLightning() {
            if (lightning.length === 0 && Math.random() > 0.995) {
                const startX = Math.random() * width;
                const endX = startX + (Math.random() - 0.5) * 200;
                lightning = [
                    { x: startX, y: 0 },
                    { x: endX, y: height }
                ];
                lightningTimer = 10;
            }

            if (lightning.length > 0 && lightningTimer > 0) {
                context.strokeStyle = '#00ffff';
                context.lineWidth = 3;
                context.globalAlpha = lightningTimer / 10;
                context.shadowColor = '#00ffff';
                context.shadowBlur = 20;
                
                context.beginPath();
                context.moveTo(lightning[0].x, lightning[0].y);
                context.lineTo(lightning[1].x, lightning[1].y);
                context.stroke();
                
                lightningTimer--;
                if (lightningTimer <= 0) {
                    lightning = [];
                }
            }
        }

        function drawParticles() {
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                
                p.x += p.vx;
                p.y += p.vy;
                p.life--;

                if (p.life <= 0 || p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
                    particles.splice(i, 1);
                    particles.push({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        vx: (Math.random() - 0.5) * 2,
                        vy: (Math.random() - 0.5) * 2,
                        size: Math.random() * 4 + 1,
                        life: Math.random() * 100 + 50,
                        maxLife: Math.random() * 100 + 50
                    });
                } else {
                    const opacity = p.life / p.maxLife;
                    context.fillStyle = `rgba(0, 255, 255, ${opacity})`;
                    context.shadowColor = '#00ffff';
                    context.shadowBlur = 10;
                    context.fillRect(p.x, p.y, p.size, p.size);
                }
            }
        }

        function draw() {
            time += 0.02;
            
            // Create depth with multiple fade layers
            context.fillStyle = 'rgba(0, 0, 0, 0.1)';
            context.fillRect(0, 0, width, height);

            // Draw lightning first (behind everything)
            drawLightning();

            // Draw matrix layers from back to front
            for (let layer = layers - 1; layer >= 0; layer--) {
                const data = layerData[layer];
                
                for (let i = 0; i < data.columns; i++) {
                    const text = chars[Math.floor(Math.random() * chars.length)];
                    const x = i * data.fontSize;
                    const y = data.drops[i] * data.fontSize;

                    // Create wave effect
                    const wave = Math.sin(time * 2 + i * 0.1) * 0.3 + 0.7;
                    const pulse = Math.sin(time * 4 + i * 0.05) * 0.2 + 0.8;
                    const opacity = wave * pulse * data.opacities[i];
                    
                    context.globalAlpha = opacity;
                    context.fillStyle = data.colors[i];
                    context.font = `bold ${data.fontSize}px monospace`;
                    
                    // Intense glow effect
                    context.shadowColor = data.colors[i];
                    context.shadowBlur = 15;
                    context.fillText(text, x, y);

                    // Reset drop
                    if (data.drops[i] * data.fontSize > height && Math.random() > 0.99) {
                        data.drops[i] = 0;
                    }

                    data.drops[i] += data.speeds[i];
                }
            }

            // Draw particles on top
            drawParticles();

            // Add screen flash effect
            if (Math.random() > 0.998) {
                context.fillStyle = 'rgba(0, 255, 255, 0.1)';
                context.fillRect(0, 0, width, height);
            }

            // Add scan line effect
            const scanLineY = (time * 50) % height;
            context.fillStyle = 'rgba(0, 255, 255, 0.1)';
            context.fillRect(0, scanLineY, width, 2);

            context.globalAlpha = 1;
            context.shadowBlur = 0;
            requestAnimationFrame(draw);
        }

        draw();

        // Handle window resize
        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;
            canvas.current.width = newWidth;
            canvas.current.height = newHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                background: 'radial-gradient(ellipse at center, #001a00 0%, #000000 80%)',
            }}
        >
            <canvas 
                ref={canvas}
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                }}
            />
        </div>
    );
}

export default MatrixBackground; 