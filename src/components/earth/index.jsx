import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { useRef } from 'react';
import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg';
import EarthClouds from '../../assets/textures/8k_earth_clouds.jpg';
import EarthSpecular from '../../assets/textures/8k_earth_specular_map.jpg';
import EarthNightMap from '../../assets/textures/8k_earth_nightmap.jpg';
import EarthNormal from '../../assets/textures/8k_earth_normal_map.jpg';

function Earth(props) {
    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormal, EarthSpecular, EarthClouds])
    const EarthRef = useRef()
    const cloudsRef = useRef()
    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();

        EarthRef.current.rotation.y = elapsedTime / 6;
        cloudsRef.current.rotation.y = elapsedTime / 6;
    })

    return (
        <>
            <ambientLight intensity={1} />
            <pointLight color='#f6f3ea' position={[2, 0, 5]} intensity={1.2} />
            <Stars
                radius={300}
                depth={60}
                count={20000}
                factor={7}
                saturation={0}
                fade={true}
            />
            <mesh ref={cloudsRef} position={[0, 0, 3]}>
                <sphereGeometry args={[1.005, 32, 32]} />
                <meshPhongMaterial
                    map={cloudsMap}
                    opacity={0.6}
                    depthWrite={true}
                    transparent={true}
                    side={THREE.DoubleSide}
                />
            </mesh>
            <mesh ref={EarthRef} position={[0, 0, 3]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7} />
                <OrbitControls
                    enableZoom={true}
                    enablePan={true}
                    enableRotate={true}
                    zoomSpeed={0.6}
                    panSpeed={0.5}
                    rotateSpeed={0.4}
                />
            </mesh>
        </>
    )
}

export default Earth