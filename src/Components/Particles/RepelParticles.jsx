import React, { useRef, useEffect } from "react";

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: null, y: null });
  const particleCount = 150;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleResize = () => {
      // canvas.width = window.innerWidth;
      // canvas.height = window.innerHeight;
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    class Particle {
      constructor() {
        this.baseX = Math.random() * canvas.width;
        this.baseY = Math.random() * canvas.height;
        this.x = this.baseX;
        this.y = this.baseY;
        this.radius = Math.random() * 2 + 1;
        // this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;

        this.angle = Math.random() * Math.PI * 2;
        this.offset = Math.random() * 50 + 10;
        this.speed = 0.005 + Math.random() * 0.01;

        // const customColors = ["#FF6B6B", "#FFD93D"];
        const customColors = ["#ffffffff", "#7be2ffff", "#7bffdaff"];

        this.color =
          customColors[Math.floor(Math.random() * customColors.length)];
      }

      draw() {
        const grad = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius * 4
        );
        grad.addColorStop(0, this.color);
        grad.addColorStop(1, "transparent");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 4, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        this.angle += this.speed;

        // Gently orbit around base position
        this.x = this.baseX + Math.cos(this.angle) * this.offset;
        this.y = this.baseY + Math.sin(this.angle) * this.offset;

        // Repel from mouse
        const dx = this.x - mouse.current.x;
        const dy = this.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          const angle = Math.atan2(dy, dx);
          const repel = (100 - dist) / 4;
          this.x += Math.cos(angle) * repel;
          this.y += Math.sin(angle) * repel;
        }

        this.draw();
      }
    }

    particles.current = [];
    for (let i = 0; i < particleCount; i++) {
      particles.current.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((p) => p.update());
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        // zIndex: 1,
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticleCanvas;
