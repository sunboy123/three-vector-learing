// 三大组件 场景、相机、渲染器

// 创建一个场景、相机、渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/
    window.innerHeight,0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 创建一个立方体cube
let geometry = new THREE.BoxGeometry(1,1,1);
let material = new THREE.MeshBasicMaterial({color:0xffffff})
let cube = new THREE.Mesh(geometry,material);
scene.add(cube);// 添加到场景中
scene.color = 0xff00ff

camera.position.z = 5; //默认位置是0 0 0

// 渲染动画
function animate() {
    // 每一帧不断循环渲染
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene,camera);
}
animate()

