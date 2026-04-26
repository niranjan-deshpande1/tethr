'use client'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function GradientBackground() {
  return (
    <ShaderGradientCanvas
      fov={45}
      pixelDensity={1}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    >
      <ShaderGradient
        animate="on"
        brightness={1.1}
        cAzimuthAngle={180}
        cDistance={3.51}
        cPolarAngle={115}
        cameraZoom={1}
        color1="#7F2800"
        color2="#a35ab7"
        color3="#7f8683"
        envPreset="city"
        grain="off"
        lightType="3d"
        positionX={-0.5}
        positionY={0.1}
        positionZ={0}
        reflection={0.1}
        rotationX={0}
        rotationY={0}
        rotationZ={235}
        shader="defaults"
        type="waterPlane"
        uAmplitude={0}
        uDensity={1.1}
        uFrequency={5.5}
        uSpeed={0.1}
        uStrength={2.4}
        uTime={0.2}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  )
}
