import React, { useRef, useEffect } from "react";

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: null, y: null });
  const trailRate = 2; // particles per frame on mouse move
  const baseParticleCount = 100;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      for (let i = 0; i < trailRate; i++) {
        particles.current.push(new Particle(e.clientX, e.clientY, true));
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleClick = (e) => {
      for (let i = 0; i < 30; i++) {
        particles.current.push(new Particle(e.clientX, e.clientY, true));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    window.addEventListener("click", handleClick);

    const lerp = (a, b, t) => a + (b - a) * t;

    class Particle {
      constructor(x, y, fromMouse = false) {
        this.baseX = fromMouse ? x : Math.random() * canvas.width;
        this.baseY = fromMouse ? y : Math.random() * canvas.height;
        this.x = this.baseX;
        this.y = this.baseY;
        this.radius = Math.random() * 2 + 1;
        this.color = "rgba(0, 200, 255, 1)"; // Cool blue
        this.angle = Math.random() * Math.PI * 2;
        this.offset = Math.random() * 30 + 10;
        this.speed = 0.002 + Math.random() * 0.005;
        this.fromMouse = fromMouse;
        this.life = fromMouse ? 60 : Infinity;
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

        // Gently float around original position
        if (!this.fromMouse) {
          this.x = lerp(
            this.x,
            this.baseX + Math.cos(this.angle) * this.offset,
            0.05
          );
          this.y = lerp(
            this.y,
            this.baseY + Math.sin(this.angle) * this.offset,
            0.05
          );
        }

        // Follow mouse if nearby
        if (mouse.current.x !== null && !this.fromMouse) {
          const dx = this.x - mouse.current.x;
          const dy = this.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            this.x = lerp(this.x, mouse.current.x, 0.02);
            this.y = lerp(this.y, mouse.current.y, 0.02);
          }
        }

        if (this.fromMouse) {
          this.life--;
        }

        this.draw();
      }

      isAlive() {
        return this.life > 0;
      }
    }

    // Initialize base particles
    for (let i = 0; i < baseParticleCount; i++) {
      particles.current.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.current = particles.current.filter((p) => p.isAlive());
      particles.current.forEach((p) => p.update());

      // Draw connecting lines (star web)
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const a = particles.current[i];
          const b = particles.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          // const maxDist = 100;
          const maxDist = 50;

          if (dist < maxDist && Math.random() < 0.5) {
            // 50% chance to draw
            const alpha = 1 - dist / maxDist;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.4})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticleCanvas;
