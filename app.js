// let shader_vs = `
// #version 300 es
// precision highp float;
// in vec2 vPos;

// void main() {
// 	gl_Position = vec4(vPos, 0.0, 1.0);
// }
// `;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000.0);
camera.position.set(0, 0, 2);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('#e0e0e0');
document.body.appendChild(renderer.domElement);



let ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5);
scene.add(ambientLight);
let pointLight = new THREE.PointLight(0xFFEEDD, 0.3);
pointLight.position.set(1,1,1);
scene.add(pointLight);

let sphere_mat = new THREE.MeshLambertMaterial({color: 0xEEEEEE, transparent: true, opacity: 0.3});
let sphere_geom = new THREE.SphereGeometry( 0.98, 64, 64 );
let sphere = new THREE.Mesh(sphere_geom, sphere_mat);
sphere.name = "sphere";
scene.add(sphere);



// MAIN LOOP
function start()
{
    rendering_loop();
}

function update()
{

}

function render()
{
    renderer.render(scene, camera);
}

function rendering_loop()
{
    update();
    render();

    requestAnimationFrame(rendering_loop);
}

start();