"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
// import { MapPin } from "lucide-react";

interface GlobeProps {
    markers: { location: [number, number]; size: number; flag?: string; name?: string }[];
}

export function Globe({ markers }: GlobeProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef<number | null>(null);
    const pointerInteractionMovement = useRef(0);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let phi = 0;
        let width = 0;
        const theta = 0.3;

        const onResize = () => {
            if (canvasRef.current && canvasRef.current.parentElement) {
                width = canvasRef.current.parentElement.offsetWidth;
            }
        };
        window.addEventListener('resize', onResize);
        onResize();

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: theta,
            dark: 0,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            // Add subtle colors: light cyan-blue ocean/land vibe
            baseColor: [0.3, 0.6, 0.9], // Blue-ish globe base
            markerColor: [1, 0.3, 0.3], // Red markers for contrast
            glowColor: [0.8, 0.9, 1], // Soft blue glow
            markers: markers,
            onRender: (state) => {
                if (!pointerInteracting.current) {
                    phi += 0.005; // Reversed revolution direction
                }
                const currentPhi = phi + pointerInteractionMovement.current;
                state.phi = currentPhi;
                state.width = width * 2;
                state.height = width * 2;

                // Sync HTML markers overlay
                if (overlayRef.current) {
                    const radius = width / 2;
                    const children = overlayRef.current.children;

                    markers.forEach((marker, i) => {
                        const child = children[i] as HTMLElement;
                        if (!child) return;

                        // 1. Convert lat/lng to radians
                        const lat = (marker.location[0] * Math.PI) / 180;
                        const lng = (marker.location[1] * Math.PI) / 180;

                        // 2. Spherical to Cartesian 
                        // Synchronize with Cobe's globe rotation direction
                        const thetaLong = lng + currentPhi;

                        // Standard spherical projection
                        const x = Math.cos(lat) * Math.sin(thetaLong);
                        const y = Math.sin(lat);
                        const z = Math.cos(lat) * Math.cos(thetaLong);

                        // 3. Apply Camera Tilt (theta = 0.3)
                        // Rotation around the X-axis:
                        const yTilt = y * Math.cos(theta) - z * Math.sin(theta);
                        const zTilt = y * Math.sin(theta) + z * Math.cos(theta);

                        // 4. Scale to screen coordinates
                        // Cobe rendering size relative to canvas
                        const globeRadius = radius * 0.9;

                        // Canvas is width X height. Center is (radius, radius)
                        const px = radius + x * globeRadius;
                        const py = radius - yTilt * globeRadius;

                        // 5. Visibility check
                        // zTilt > 0 means it's facing the camera. 
                        const isVisible = zTilt > -0.15;

                        // Smooth fade out when approaching the horizon
                        let opacity = 0;
                        if (zTilt > 0.1) {
                            opacity = 1;
                        } else if (zTilt > -0.15) {
                            // Fade from 1 to 0 as it goes from 0.1 to -0.15
                            opacity = (zTilt + 0.15) / 0.25;
                        }

                        child.style.transform = `translate(${px}px, ${py}px) scale(${isVisible ? 1 : 0.5})`;
                        child.style.opacity = opacity.toString();
                        child.style.zIndex = isVisible ? '10' : '-1';
                    });
                }
            },
        });

        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        };
    }, [markers]);

    return (
        <div style={{ width: '100%', maxWidth: '800px', aspectRatio: '1/1', margin: '0 auto', position: 'relative' }}>
            <canvas
                ref={canvasRef}
                onPointerDown={(e) => {
                    pointerInteracting.current = e.clientX;
                    canvasRef.current!.style.cursor = 'grabbing';
                }}
                onPointerUp={() => {
                    pointerInteracting.current = null;
                    canvasRef.current!.style.cursor = 'grab';
                }}
                onPointerOut={() => {
                    pointerInteracting.current = null;
                    canvasRef.current!.style.cursor = 'grab';
                }}
                onMouseMove={(e) => {
                    if (pointerInteracting.current !== null) {
                        const delta = e.clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta / 200;
                    }
                }}
                onTouchMove={(e) => {
                    if (pointerInteracting.current !== null && e.touches[0]) {
                        const delta = e.touches[0].clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta / 100;
                    }
                }}
                style={{
                    width: '100%',
                    height: '100%',
                    cursor: 'grab',
                    contain: 'layout paint size',
                    opacity: 1,
                    transition: 'opacity 1s ease',
                }}
            />
            {/* HTML Marker Overlay */}
            {/* <div ref={overlayRef} className="absolute inset-0 pointer-events-none">
                {markers.map((marker, i) => (
                    <div
                        key={i}
                        className="absolute flex items-center gap-1.5 transition-opacity duration-300 pointer-events-auto"
                        style={{
                            // Start centered at origin, then transform origin to pinpoint tip
                            top: 0,
                            left: 0,
                            transformOrigin: '0% 50%',
                        }}
                    >
                        <div className="-translate-x-1/2 -translate-y-[80%] text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] relative z-10">
                            <MapPin size={18} strokeWidth={2.5} className="fill-red-500/20" />
                        </div>

                        <div className="flex items-center gap-1 bg-surface/90 backdrop-blur-sm px-1.5 py-0.5 rounded shadow-sm border border-border mt-[-28px] ml-1 relative z-20">
                            {marker.flag && <span className="text-sm leading-none">{marker.flag}</span>}
                            {marker.name && <span className="text-[10px] font-bold text-fg tracking-wide uppercase">{marker.name}</span>}
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
}
