import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear geometría y materiales para los cubos
const geometry = new THREE.BoxGeometry(1, 1, 1);

const materialGreen = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const materialBlue = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const materialRed = new THREE.MeshStandardMaterial({ color: 0xff0000 });

// Crear cubos con diferentes materiales
const cubeGreen = new THREE.Mesh(geometry, materialGreen);
const cubeBlue = new THREE.Mesh(geometry, materialBlue);
const cubeRed = new THREE.Mesh(geometry, materialRed);

// Posicionar los cubos en la escena
cubeGreen.position.x = -2;
cubeBlue.position.x = 0;
cubeRed.position.x = 2;

scene.add(cubeGreen, cubeBlue, cubeRed);

// Agregar una luz direccional y ajustar su posición
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 5;

// Función de animación con rotación y renderizado
function animate() {
    cubeGreen.rotation.x += 0.01; // Rotación original del cubo verde
    cubeGreen.rotation.y += 0.01;
    
    cubeBlue.rotation.x += 0.020; // Rotación media
    cubeBlue.rotation.y += 0.020;
    
    cubeRed.rotation.x -= 0.03; // Rotación más rápida en sentido contrario
    cubeRed.rotation.y -= 0.03;
    
    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);