"use client"
import { Canvas } from "@react-three/fiber"
import HeroContent from "@/components/hero-content"
import { useRef, useMemo, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export default function HeroSection() {
  const [dpr, setDpr] = useState<[number, number]>([1, 1.5])

  useEffect(() => {
    // Optimize for performance
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (isMobile) {
      setDpr([1, 1])
    } else {
      setDpr([1, 1.5])
    }
  }, [])

  return (
    <div className="w-full relative">
      {/* 3D Canvas for animated elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Canvas 
          dpr={dpr} 
          camera={{ position: [0, 0, 6], fov: 75 }}
          gl={{ 
            antialias: false,
            alpha: true,
            powerPreference: "high-performance",
            stencil: false,
            depth: true
          }}
          performance={{ min: 0.1 }}
          frameloop="always"
        >
          <HeroCanvasContent />
        </Canvas>
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        <HeroContent />
      </div>
    </div>
  )
}

// Desert Sun - Central glowing orb
function DesertSun() {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05
      meshRef.current.scale.setScalar(scale)
    }
    if (glowRef.current) {
      const glowScale = 1.3 + Math.sin(state.clock.elapsedTime * 0.8) * 0.1
      glowRef.current.scale.setScalar(glowScale)
    }
  })

  return (
    <>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color="#FF8C00" transparent opacity={0.9} />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.4, 16, 16]} />
        <meshBasicMaterial color="#FFA500" transparent opacity={0.3} />
      </mesh>
    </>
  )
}

// Desert Cacti
function DesertCacti() {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const count = 6
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const positions = useMemo(() => [
    { x: -3, y: -1, z: -1, scale: 0.6, rotation: 0 },
    { x: 3, y: -1.2, z: 0.5, scale: 0.5, rotation: 0.3 },
    { x: -2.5, y: -0.8, z: 2, scale: 0.7, rotation: 0.8 },
    { x: 2.8, y: -1, z: -2, scale: 0.55, rotation: 1.2 },
    { x: 0, y: -1.5, z: 3, scale: 0.4, rotation: 0.5 },
    { x: -1, y: -1.3, z: -3, scale: 0.45, rotation: 2 },
  ], [])
  
  useFrame((state) => {
    if (meshRef.current) {
      for (let i = 0; i < count; i++) {
        const pos = positions[i]
        const sway = Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.02
        dummy.position.set(pos.x, pos.y, pos.z)
        dummy.rotation.set(sway, pos.rotation, sway * 0.5)
        dummy.scale.set(pos.scale, pos.scale * 1.5, pos.scale)
        dummy.updateMatrix()
        meshRef.current.setMatrixAt(i, dummy.matrix)
      }
      meshRef.current.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <coneGeometry args={[0.3, 1.2, 6]} />
      <meshBasicMaterial color="#2D7A3E" transparent opacity={0.85} />
    </instancedMesh>
  )
}

// Sand Dune Rings
function SandDuneRings() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001
    }
  })

  return (
    <group ref={groupRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
        <torusGeometry args={[3, 0.03, 8, 32]} />
        <meshBasicMaterial color="#D2691E" transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.7, 0]}>
        <torusGeometry args={[3.5, 0.03, 8, 32]} />
        <meshBasicMaterial color="#CD853F" transparent opacity={0.4} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -1.9, 0]}>
        <torusGeometry args={[4, 0.03, 8, 32]} />
        <meshBasicMaterial color="#DEB887" transparent opacity={0.3} />
      </mesh>
    </group>
  )
}

// Sand Particles
function SandParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const velocities = useRef<Float32Array>()
  
  const particles = useMemo(() => {
    const count = 150
    const positions = new Float32Array(count * 3)
    const vels = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 8
      positions[i3 + 1] = (Math.random() - 0.5) * 6
      positions[i3 + 2] = (Math.random() - 0.5) * 8
      vels[i3] = (Math.random() - 0.5) * 0.01
      vels[i3 + 1] = (Math.random() - 0.5) * 0.005
      vels[i3 + 2] = (Math.random() - 0.5) * 0.01
    }
    velocities.current = vels
    return positions
  }, [])
  
  useFrame(() => {
    if (particlesRef.current && velocities.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocities.current[i]
        positions[i + 1] += velocities.current[i + 1]
        positions[i + 2] += velocities.current[i + 2]
        if (Math.abs(positions[i]) > 4) positions[i] *= -1
        if (Math.abs(positions[i + 1]) > 3) positions[i + 1] *= -1
        if (Math.abs(positions[i + 2]) > 4) positions[i + 2] *= -1
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#F4A460" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function HeroCanvasContent() {
  return (
    <>
      {/* Desert lighting - warm tones */}
      <ambientLight intensity={0.6} color="#FFE4B5" />
      <pointLight position={[0, 2, 0]} intensity={1.5} color="#FF8C00" />
      <pointLight position={[5, 0, 5]} intensity={0.8} color="#FFA500" />
      
      <group>
        <DesertSun />
        <SandDuneRings />
        <DesertCacti />
        <SandParticles />
      </group>
    </>
  )
}
