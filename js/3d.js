/**
 * IT Creative Code Academy - 3D Animations
 * Handles Three.js based 3D animations
 */

import * as THREE from 'three';

let scene, camera, renderer, cube;

export function init3DBackground() {
  // Scene setup
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ alpha: true });
  
  // Make background transparent
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // Add to background container
  const container = document.getElementById('3d-background');
  if (container) {
    container.appendChild(renderer.domElement);
  }
  
  // Create geometry
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshPhongMaterial({
    color: 0x10b981,
    wireframe: true,
    transparent: true,
    opacity: 0.3
  });
  
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  
  // Add lights
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1);
  scene.add(light);
  
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  camera.position.z = 5;
  
  // Handle window resize
  window.addEventListener('resize', onWindowResize, false);
  
  // Start animation
  animate();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  
  renderer.render(scene, camera);
}

// Initialize loading screen
export function initLoadingScreen() {
  const loadingScreen = document.createElement('div');
  loadingScreen.className = 'loading-screen';
  
  const loader = document.createElement('div');
  loader.className = 'loader';
  
  const cube = document.createElement('div');
  cube.className = 'cube';
  
  // Create cube faces
  const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];
  faces.forEach(face => {
    const div = document.createElement('div');
    div.className = `cube-face ${face}`;
    div.textContent = '01';
    cube.appendChild(div);
  });
  
  loader.appendChild(cube);
  loadingScreen.appendChild(loader);
  document.body.appendChild(loadingScreen);
  
  // Remove loading screen after 2 seconds
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
    setTimeout(() => {
      loadingScreen.remove();
    }, 500);
  }, 2000);
}

// Initialize binary rain background
export function initBinaryRain() {
  const container = document.createElement('div');
  container.className = 'binary-rain';
  document.body.appendChild(container);
  
  function createRainDrop() {
    const column = document.createElement('div');
    column.className = 'binary-column';
    
    // Random position and speed
    const x = Math.random() * window.innerWidth;
    const duration = 3 + Math.random() * 5;
    
    column.style.left = `${x}px`;
    column.style.animationDuration = `${duration}s`;
    
    // Generate binary string
    let binary = '';
    for (let i = 0; i < 20; i++) {
      binary += Math.random() > 0.5 ? '1' : '0';
      binary += '\n';
    }
    column.textContent = binary;
    
    container.appendChild(column);
    
    // Remove after animation
    setTimeout(() => {
      column.remove();
    }, duration * 1000);
  }
  
  // Create new drops periodically
  setInterval(createRainDrop, 100);
}