import React, { useEffect, useRef } from 'react';

const MouseParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    const colors = ['rgba(168, 85, 247, 0.6)', 'rgba(236, 72, 153, 0.5)', 'rgba(99, 102, 241, 0.4)']; 
    
    // Configuração do mouse
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      x: number;
      y: number;
      size: number;
      baseSize: number;
      speedX: number;
      speedY: number;
      color: string;
      glowSize: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.baseSize = Math.random() * 2.5 + 0.5;
        this.size = this.baseSize;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = (Math.random() * 0.6 + 0.2) * -1; // Movimento suave para cima
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.glowSize = this.size * (Math.random() * 3 + 2);
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Reposicionar partícula quando sair do topo
        if (this.y < -10) {
          this.y = canvas!.height + 10;
          this.x = Math.random() * canvas!.width;
        }
        
        // Rebater nas bordas horizontais (suave)
        if (this.x > canvas!.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        
        // Interação com o mouse (afastar suavemente como poeira)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = forceDirectionX * force * 1.5;
            const directionY = forceDirectionY * force * 1.5;
            
            this.x -= directionX;
            this.y -= directionY;
            
            // Leve brilho ao se aproximar do mouse
            this.size = this.baseSize + (force * 1.5);
        } else if (this.size > this.baseSize) {
            this.size -= 0.1;
        }
      }

      draw() {
        if (!ctx) return;
        
        // Desenha a "auréola" (glow) da partícula
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.glowSize);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.glowSize, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        
        // Desenha o núcleo da partícula
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.4, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    function init() {
      particlesArray = [];
      const numberOfParticles = Math.min((canvas!.width * canvas!.height) / 12000, 80); // Menos partículas para o efeito premium
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }
    
    let animationFrameId: number;
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      
      // Global comp effect for glow overlap
      ctx.globalCompositeOperation = 'screen';
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      // Reset
      ctx.globalCompositeOperation = 'source-over';
      
      animationFrameId = requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-80"
      style={{ transition: 'opacity 1s ease-in-out' }}
    />
  );
};

export default MouseParticles;
