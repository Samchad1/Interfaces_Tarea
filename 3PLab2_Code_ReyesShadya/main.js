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
renderer.setClearColor(0xeeeeee);
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

// Cubo
const geometryCubo = new THREE.BoxGeometry();
const materialCubo = new THREE.MeshStandardMaterial({ color: 0x0077ff });
const cube = new THREE.Mesh(geometryCubo, materialCubo);
scene.add(cube);

// Esfera
const geometryEsfera = new THREE.SphereGeometry(0.5, 32, 32);
const materialEsfera = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const esfera = new THREE.Mesh(geometryEsfera, materialEsfera);
esfera.position.x = -2; // mover a la izquierda
scene.add(esfera);

// Cono
const geometryCono = new THREE.ConeGeometry(0.5, 1, 32);
const materialCono = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cono = new THREE.Mesh(geometryCono, materialCono);
cono.position.x = 2; // mover a la derecha
scene.add(cono);

// Toroide
const geometryToroide = new THREE.TorusGeometry(0.4, 0.15, 16, 100);
const materialToroide = new THREE.MeshStandardMaterial({ color: 0xffff00 });
const toroide = new THREE.Mesh(geometryToroide, materialToroide);
toroide.position.y = -2; // mover hacia abajo
scene.add(toroide);

// Animación
function animate() {
  requestAnimationFrame(animate);

  // Cubo rota en X y Y
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Esfera rota en Y
  esfera.rotation.y += 0.03;

  // Cono rota en X
  cono.rotation.x += 0.02;

  // Toroide rota en Z
  toroide.rotation.z += 0.04;

  // Renderizar la escena
  renderer.render(scene, camera);
}

animate();
