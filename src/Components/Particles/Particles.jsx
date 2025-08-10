import React, { useRef, useEffect } from "react";

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });
  const particles = useRef([]);
  const particleCount = 150;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.radius = 2 + Math.random() * 3;
        this.speedY = 0.5 + Math.random() * 1.5;
        this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
      }

      draw(ctx) {
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
        this.y -= this.speedY;

        // Repel from mouse
        const dx = this.x - mouse.current.x;
        const dy = this.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const angle = Math.atan2(dy, dx);
          const repelForce = (100 - dist) / 5;
          this.x += Math.cos(angle) * repelForce;
          this.y += Math.sin(angle) * repelForce;
        }

        if (this.y < -10) {
          this.reset();
        }

        this.draw(ctx);
      }
    }

    // Init particles
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
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        background: "#000",
        display: "block",
      }}
    />
  );
};

export default ParticleCanvas;
