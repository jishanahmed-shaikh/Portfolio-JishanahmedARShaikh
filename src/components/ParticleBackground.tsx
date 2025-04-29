import { useEffect, useRef, useState } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    function updateHeroHeight() {
      const hero = document.querySelector('section.min-h-screen');
      if (hero) {
        setHeroHeight(hero.getBoundingClientRect().height);
      } else {
        setHeroHeight(0);
      }
    }
    updateHeroHeight();
    window.addEventListener('resize', updateHeroHeight);
    return () => window.removeEventListener('resize', updateHeroHeight);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // --- PARTICLE SETUP ---
    // Stars with enhanced colors
    const starColors = [
      'rgba(255,255,255,0.7)', // white, reduced opacity
      'rgba(192,192,255,0.6)', // shiny silver-blue
      'rgba(173,216,230,0.6)', // light blue
      'rgba(135,206,250,0.7)', // sky blue
      'rgba(176,224,230,0.5)', // powder blue
      'rgba(100,180,255,0.7)', // deep blue
    ];
    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * width,
      y: heroHeight + Math.random() * (height - heroHeight),
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.03, // reduced speed
      speedY: (Math.random() - 0.5) * 0.03, // reduced speed
      baseOpacity: Math.random() * 0.3 + 0.3, // lower base opacity
      opacity: Math.random() * 0.3 + 0.3,
      pulse: (Math.random() * 0.02) + 0.005, // slower twinkle
      color: starColors[Math.floor(Math.random() * starColors.length)],
      pulseDir: Math.random() > 0.5 ? 1 : -1,
      sparkleSize: Math.random() * 4 + 2,
    }));

    // Nebulae with enhanced colors
    const nebulaColors = [
      "rgba(255,255,255,0.08)",
      "rgba(192,192,255,0.10)",
      "rgba(173,216,230,0.10)",
      "rgba(135,206,250,0.10)",
    ];
    const nebulae = Array.from({ length: 5 }, () => ({
      x: Math.random() * width,
      y: heroHeight + Math.random() * (height - heroHeight),
      size: Math.random() * 250 + 150,
      color: nebulaColors[Math.floor(Math.random() * nebulaColors.length)],
      opacity: Math.random() * 0.15 + 0.08,
      speedX: (Math.random() - 0.5) * 0.01, // reduced speed
      speedY: (Math.random() - 0.5) * 0.01, // reduced speed
    }));

    // Multiple Astronauts (smaller, fewer, more transparent)
    const astronauts = Array.from({ length: 1 }, () => ({
      x: Math.random() * width,
      y: heroHeight + (Math.random() * (height - heroHeight - 100) + 50),
      size: Math.random() * 6 + 8, // much smaller
      speedX: (Math.random() * 0.08) + 0.03, // slow
      trail: [] as Array<{ x: number, y: number, opacity: number }>,
      color: `rgba(${Math.floor(Math.random() * 55 + 180)}, ${Math.floor(Math.random() * 55 + 180)}, 255, 0.25)`, // lower opacity
    }));

    // --- ANIMATION LOOP ---
    function animate() {
      ctx.clearRect(0, heroHeight, width, height - heroHeight);
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, heroHeight, width, height - heroHeight);
      ctx.clip();

      // Draw stars with enhanced sparkle and star shape
      stars.forEach((star) => {
        star.x += star.speedX;
        star.y += star.speedY;
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < heroHeight) star.y = height;
        if (star.y > height) star.y = heroHeight;

        // Twinkle
        star.opacity += star.pulse * star.pulseDir;
        if (star.opacity > 1) { star.opacity = 1; star.pulseDir = -1; }
        if (star.opacity < 0.3) { star.opacity = 0.3; star.pulseDir = 1; }

        // Draw star core (dot)
        ctx.save();
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 16;
        ctx.fill();

        // Draw star flares (cross)
        ctx.shadowBlur = 0;
        ctx.strokeStyle = star.color;
        ctx.lineWidth = 1.2;
        for (let i = 0; i < 4; i++) {
          ctx.save();
          ctx.translate(star.x, star.y);
          ctx.rotate((Math.PI / 2) * i);
          ctx.beginPath();
          ctx.moveTo(-star.size * 2, 0);
          ctx.lineTo(star.size * 2, 0);
          ctx.globalAlpha = star.opacity * 0.5;
          ctx.stroke();
          ctx.restore();
        }
        ctx.restore();
      });

      // Draw astronauts
      astronauts.forEach((astronaut) => {
        astronaut.x += astronaut.speedX;
        if (astronaut.x > width + 50) {
          astronaut.x = -50;
          astronaut.y = heroHeight + (Math.random() * (height - heroHeight - 100) + 50);
          astronaut.trail = [];
        }

        // Update trail
        if (Math.random() > 0.3) {
          astronaut.trail.push({ x: astronaut.x, y: astronaut.y, opacity: 0.8 });
        }
        astronaut.trail.forEach((point, index) => {
          point.opacity -= 0.01;
          ctx.beginPath();
          ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(100, 200, 255, ${point.opacity})`;
          ctx.fill();
          if (point.opacity <= 0) astronaut.trail.splice(index, 1);
        });

        // Draw astronaut
        ctx.beginPath();
        ctx.arc(astronaut.x, astronaut.y, astronaut.size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.shadowColor = "#aeefff";
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Draw astronaut details
        ctx.beginPath();
        ctx.arc(astronaut.x, astronaut.y, astronaut.size - 6, 0, Math.PI * 2);
        ctx.fillStyle = astronaut.color;
        ctx.fill();
      });

      ctx.restore();
      requestAnimationFrame(animate);
    }
    animate();
  }, [heroHeight]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none"
      style={{ background: 'black' }}
    />
  );
};

export default ParticleBackground;