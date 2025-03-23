
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { Mesh } from 'three';
import AnimatedCard from '../common/AnimatedCard';

// Simplified animated sphere component with basic material instead of distort material
const AnimatedSphere = () => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere args={[1, 32, 32]} ref={meshRef}>
      <meshStandardMaterial 
        color="#3B82F6" 
        roughness={0.5}
        metalness={0.2}
      />
    </Sphere>
  );
};

// The main component with simplified Three.js setup and error handling
const TechGlobe = () => {
  return (
    <AnimatedCard className="my-16">
      <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden">
        <Canvas
          camera={{ position: [0, 0, 3], fov: 45 }}
          dpr={[1, 1.5]} // Lower DPR for better performance
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5} 
            enablePan={false}
          />
        </Canvas>
        <div className="absolute top-0 left-0 w-full p-6 z-10 text-center">
          <h3 className="text-xl font-bold text-white drop-shadow-lg">
            Future Ready Technology
          </h3>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default TechGlobe;
