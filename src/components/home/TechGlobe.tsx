
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Float, PerspectiveCamera } from '@react-three/drei';
import { Mesh, Group } from 'three';
import AnimatedCard from '../common/AnimatedCard';

// Floating text component
const FloatingText = () => {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={4} rotationIntensity={0.2} floatIntensity={0.5}>
        <Text3D
          font="/fonts/inter_bold.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
          position={[-1.5, 0, 0]}
        >
          TVM
          <meshStandardMaterial color="#3B82F6" metalness={0.8} roughness={0.2} />
        </Text3D>
      </Float>
    </group>
  );
};

// Animated tech rings
const TechRings = () => {
  const ringsRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.z += 0.002;
      ringsRef.current.rotation.x += 0.003;
    }
  });

  return (
    <group ref={ringsRef}>
      {[1, 1.5, 2].map((radius, index) => (
        <mesh key={index} rotation-x={Math.PI * 0.5}>
          <torusGeometry args={[radius, 0.02, 16, 100]} />
          <meshStandardMaterial 
            color={index === 0 ? "#3B82F6" : index === 1 ? "#60A5FA" : "#93C5FD"} 
            metalness={0.8}
            roughness={0.2}
            opacity={0.8}
            transparent
          />
        </mesh>
      ))}
    </group>
  );
};

// Main component with enhanced Three.js setup
const TechGlobe = () => {
  return (
    <AnimatedCard className="my-16">
      <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50 z-0" />
        
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 2]}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.3} 
            penumbra={1} 
            intensity={1} 
            castShadow 
          />
          <directionalLight position={[-5, 5, 5]} intensity={0.5} />
          
          {/* 3D Elements */}
          <FloatingText />
          <TechRings />
          
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5} 
            enablePan={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.5}
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
