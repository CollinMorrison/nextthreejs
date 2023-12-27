'use client'
import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';

export default function Three () {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (typeof window !== undefined) {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera( 75,
                window.innerWidth / window.innerHeight, 0.1, 1000 );
            
            const renderer = new THREE.WebGLRenderer();
            // renderer.setScissorTest( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );
            
            const geometry = new THREE.BoxGeometry( 1, 1, 1 );
            const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            const cube = new THREE.Mesh( geometry, material );
            const edges = new THREE.EdgesGeometry(geometry);
            const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0xffffff } ));
            scene.add(line);
            scene.add( cube );
            
            
            camera.position.z = 5;
            const animate = () => {
                requestAnimationFrame( animate )
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                line.rotation.x += 0.01;
                line.rotation.y += 0.01;
                renderer.render( scene, camera )
            }
            animate();
        }
    })
    
    
    
    return (
        // <div ref={containerRef} />
        <div>
            hello
        </div>
    )
}

