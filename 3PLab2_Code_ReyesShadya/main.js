// Crear la escena
const scene = new THREE.Scene();

// Crear la cámara
const camera = new THREE.PerspectiveCamera(
  75,                                 // Campo de visión
  window.innerWidth / window.innerHeight, // Relación de aspecto
  0.1,                                // Plano cercano
  1000                                // Plano lejano
);
camera.position.z = 7; // Alejar la cámara para que se vean todos los objetos

// Crear el renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff);
document.body.appendChild(renderer.domElement);

// Ajustar el lienzo cuando se cambie el tamaño de la ventana
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Añadir una luz
const light = new THREE.PointLight(0xffffff, 1); // color blanco, intensidad 1
light.position.set(10, 10, 10);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Material rosa para todas las figuras
const pinkMaterial = new THREE.MeshStandardMaterial({ color: 0xffc0cb });

// Cubo
const cube = new THREE.Mesh(new THREE.BoxGeometry(), pinkMaterial);
scene.add(cube);

// Esfera
const esfera = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), pinkMaterial);
esfera.position.x = -2; // mover a la izquierda
scene.add(esfera);

// Cono
const cono = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1, 32), pinkMaterial);
cono.position.x = 2; // mover a la derecha
scene.add(cono);

// Toroide
const toroide = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.15, 16, 100), pinkMaterial);
toroide.position.y = -2; // mover hacia abajo
scene.add(toroide);

// Animación
function animate() {
  requestAnimationFrame(animate);

  const time = performance.now() * 0.001;

  // Cubo rota en X y Y
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.position.y = Math.sin(time) * 1;

  // Esfera rota en Y
  esfera.rotation.y += 0.03;
  esfera.position.x = -2 + Math.cos(time * 1.5) * 0.5;

  // Cono rota en X
  cono.rotation.x += 0.02;
  cono.position.y = Math.cos(time) * 1;

  // Toroide rota en Z
  toroide.rotation.z += 0.04;
  toroide.position.x = Math.sin(time * 1.2) * 1.5;
  toroide.position.y = -2 + Math.cos(time * 1.2) * 0.5;

  // Renderizar la escena
  renderer.render(scene, camera);
}

animate();
