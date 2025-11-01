"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { Trail } from "@react-three/drei"

type FloatingOrbsProps = {}

// Individual orb component with smooth floating animation
function FloatingOrb({ 
  position, 
  color, 
  size, 
  speed,
  index 
}: { 
  position: [number, number, number]
  color: string
  size: number
  speed: number
  index: number
}) {
  const orbRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  
  // Store initial position
  const initialPos = useMemo(() => position, [])
  
  useFrame((state) => {
    if (orbRef.current) {
      const time = state.clock.elapsedTime * speed
      
      // Smooth floating motion
      orbRef.current.position.x = initialPos[0] + Math.sin(time + index) * 0.5
      orbRef.current.position.y = initialPos[1] + Math.cos(time * 1.2 + index) * 0.5
      orbRef.current.position.z = initialPos[2] + Math.sin(time * 0.8 + index) * 0.3
      
      // Gentle rotation
      orbRef.current.rotation.x += 0.01
      orbRef.current.rotation.y += 0.015
      
      // Pulsing scale effect
      const scale = 1 + Math.sin(time * 2 + index) * 0.1
      orbRef.current.scale.setScalar(scale)
    }
    
    // Glow effect sync with orb
    if (glowRef.current && orbRef.current) {
      glowRef.current.position.copy(orbRef.current.position)
      const glowScale = 1.5 + Math.sin(state.clock.elapsedTime * 1.5 + index) * 0.2
      glowRef.current.scale.setScalar(glowScale)
    }
  })

  return (
    <>
      {/* Main orb */}
      <mesh ref={orbRef} position={position}>
        <icosahedronGeometry args={[size, 3]} />
        <meshPhysicalMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.2}
        />
      </mesh>
      
      {/* Outer glow layer */}
      <mesh ref={glowRef} position={position}>
        <sphereGeometry args={[size * 1.3, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </>
  )
}

export default function FloatingOrbs(props: FloatingOrbsProps) {
  const orbsData = useMemo(() => [
    { position: [2, 2, 0] as [number, number, number], color: "#00d4ff", size: 0.5, speed: 0.5 },
    { position: [-2, -2, 0] as [number, number, number], color: "#b400ff", size: 0.35, speed: 0.6 },
    { position: [1, -3, 1] as [number, number, number], color: "#00ff88", size: 0.4, speed: 0.45 },
    { position: [-1, 2, -2] as [number, number, number], color: "#ff00ff", size: 0.3, speed: 0.7 },
    { position: [3, -1, -1] as [number, number, number], color: "#ff6b00", size: 0.28, speed: 0.55 },
    { position: [-2.5, 1, 2] as [number, number, number], color: "#00ffff", size: 0.32, speed: 0.48 },
  ], [])

  return (
    <group>
      {orbsData.map((orb, idx) => (
        <FloatingOrb
          key={idx}
          position={orb.position}
          color={orb.color}
          size={orb.size}
          speed={orb.speed}
          index={idx}
        />
      ))}
    </group>
  )
}
