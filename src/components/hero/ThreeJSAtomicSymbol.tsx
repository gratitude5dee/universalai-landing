import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeJSAtomicSymbolProps {
  className?: string;
}

const ThreeJSAtomicSymbol: React.FC<ThreeJSAtomicSymbolProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(500, 500);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffa500, 2, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff6b9d, 2, 100);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x8a5cf6, 1.5, 100);
    pointLight3.position.set(0, 0, -5);
    scene.add(pointLight3);

    // Central glowing core
    const coreGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const coreMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      emissive: 0xffb547,
      emissiveIntensity: 1,
      shininess: 100,
      transparent: true,
      opacity: 0.9,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    // Orbital rings
    const rings: THREE.Mesh[] = [];
    const ringColors = [0x8a5cf6, 0xff6b9d, 0xffb547];
    
    for (let i = 0; i < 3; i++) {
      const ringGeometry = new THREE.TorusGeometry(2 + i * 0.8, 0.05, 16, 100);
      const ringMaterial = new THREE.MeshPhongMaterial({
        color: ringColors[i],
        emissive: ringColors[i],
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.7,
        shininess: 100,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      
      // Rotate rings at different angles
      ring.rotation.x = Math.PI / 2 + (i * Math.PI / 6);
      ring.rotation.y = i * Math.PI / 4;
      
      scene.add(ring);
      rings.push(ring);
    }

    // Orbital particles (nodes)
    const particles: THREE.Mesh[] = [];
    const particleGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    
    for (let i = 0; i < 6; i++) {
      const particleMaterial = new THREE.MeshPhongMaterial({
        color: ringColors[i % 3],
        emissive: ringColors[i % 3],
        emissiveIntensity: 1,
        transparent: true,
        opacity: 0.9,
      });
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      
      const angle = (i / 6) * Math.PI * 2;
      const radius = 2.5;
      particle.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        0
      );
      
      scene.add(particle);
      particles.push(particle);
    }

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      targetRotationX = mouseY * 0.5;
      targetRotationY = mouseX * 0.5;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Smooth rotation towards mouse
      scene.rotation.x += (targetRotationX - scene.rotation.x) * 0.05;
      scene.rotation.y += (targetRotationY - scene.rotation.y) * 0.05;

      // Rotate rings
      rings.forEach((ring, i) => {
        ring.rotation.z += 0.002 * (i % 2 === 0 ? 1 : -1);
      });

      // Rotate particles around center
      particles.forEach((particle, i) => {
        const angle = Date.now() * 0.001 + (i / particles.length) * Math.PI * 2;
        const radius = 2.5;
        particle.position.x = Math.cos(angle) * radius;
        particle.position.y = Math.sin(angle) * radius;
        particle.position.z = Math.sin(angle * 2) * 0.5;
      });

      // Pulsing core
      const pulse = Math.sin(Date.now() * 0.002) * 0.1 + 1;
      core.scale.set(pulse, pulse, pulse);
      (coreMaterial as THREE.MeshPhongMaterial).emissiveIntensity = 1 + Math.sin(Date.now() * 0.003) * 0.3;

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      
      // Dispose geometries and materials
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`flex items-center justify-center ${className}`}
      style={{ width: '500px', height: '500px' }}
    />
  );
};

export default ThreeJSAtomicSymbol;
