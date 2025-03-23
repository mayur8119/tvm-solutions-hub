
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Mesh } from 'three';
import AnimatedCard from '../common/AnimatedCard';

// The animated sphere component
const AnimatedSphere = () => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere args={[1, 64, 64]} ref={meshRef}>
      <MeshDistortMaterial 
        color="#3B82F6" 
        attach="material" 
        distort={0.5} 
        speed={1.5} 
        roughness={0.4}
        metalness={0.8}
      />
    </Sphere>
  );
};

// The main component to export
const TechGlobe = () => {
  return (
    <AnimatedCard className="my-16">
      <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden">
        <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#8FC7FF" />
          <AnimatedSphere />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={1} 
            enablePan={false}
            minPolarAngle={Math.PI / 2 - 0.5}
            maxPolarAngle={Math.PI / 2 + 0.5}
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
