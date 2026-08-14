import React, { useEffect, useRef } from 'react';

function Hero() {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const handleResize = () => {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.targetX = e.clientX - rect.left;
            mouseRef.current.targetY = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouseRef.current.targetX = -1000;
            mouseRef.current.targetY = -1000;
        };

        const container = canvas.parentElement;
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        const render = () => {
            mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.1;
            mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.1;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const gridSize = 40;
            const mousePullRadius = 180;
            const maxPullStrength = 35; 

            for (let x = 0; x <= canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.strokeStyle = 'rgba(12, 92, 230, 0.278)';
                ctx.lineWidth = 1;

                for (let y = 0; y <= canvas.height; y += 10) {
                    const dx = mouseRef.current.x - x;
                    const dy = mouseRef.current.y - y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    let offsetX = 0;
                    if (distance < mousePullRadius) {
                        const factor = (1 - distance / mousePullRadius);
                        offsetX = (dx / distance) * factor * maxPullStrength * -1;
                    }

                    const currentX = x + offsetX;
                    if (y === 0) ctx.moveTo(currentX, y);
                    else ctx.lineTo(currentX, y);
                }
                ctx.stroke();
            }

            for (let y = 0; y <= canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.strokeStyle = 'rgba(20, 79, 228, 0.433)';
                ctx.lineWidth = 1;

                for (let x = 0; x <= canvas.width; x += 10) {
                    const dx = mouseRef.current.x - x;
                    const dy = mouseRef.current.y - y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    let offsetY = 0;
                    if (distance < mousePullRadius) {
                        const factor = (1 - distance / mousePullRadius);

                        offsetY = (dy / distance) * factor * maxPullStrength * -1;
                    }

                    const currentY = y + offsetY;
                    if (x === 0) ctx.moveTo(x, currentY);
                    else ctx.lineTo(x, currentY);
                }
                ctx.stroke();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="hero-container position-relative overflow-hidden">
            <div className="top-section d-flex align-items-center justify-content-center text-center position-relative">
                <canvas ref={canvasRef} className="grid-canvas position-absolute inset-0"></canvas>
                <div className="grid-glow-overlay"></div>
            </div>

            <div className="position-absolute top-50 start-50 translate-middle w-100 text-center z-2">
                <span className="d-flex flex-wrap justify-content-center align-items-center tracking-wider user-select-none px-3 typography gap-4">
                    <div className="web position-relative border border-dark border-2 d-inline-flex align-items-center">
                        <span className="corner-square top-left"></span>
                        <span className="corner-square top-right"></span>
                        <span className="corner-square bottom-left"></span>
                        <span className="corner-square bottom-right"></span>

                        <span className="w split-text">W</span>
                        <span className="e split-text">E</span>
                        <span className="b split-text">B</span>
                    </div>

                    <div className="d-inline-flex align-items-center">
                        <span className="d ms-4 split-text">D</span>
                        <span className="e split-text">E</span>
                        <span className="v split-text">V</span>
                        <span className="e split-text">E</span>
                        <span className="l split-text">L</span>
                        <span className="o split-text">O</span>
                        <span className="p split-text">P</span>
                        <span className="e split-text">E</span>
                        <span className="r split-text">R</span>
                    </div>
                </span>
            </div>

            <div className="bottom-section bg-black text-white"></div>
        </div>
    );
}

export default Hero;