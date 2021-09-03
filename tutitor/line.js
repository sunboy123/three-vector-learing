// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75,window.innerWidth/
//     window.innerHeight,0.1, 1000);
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement)

let renderer;
let scene;
let camera;
let light;
let cube;

function initScene() {
    //场景
    scene = new THREE.Scene();
}

function initCamrea() {
    //相机
    camera = new THREE.PerspectiveCamera(45,width / height, 1, 1000);
    camera.position.set(0,1000,0)
    camera.lookAt(0,0,0)

    // camera.up.x = 0;
    // camera.up.y = 0;
    // camera.up.z = 0;
    // camera.lookAt({
    //     x:0,
    //     y:0,
    //     z:0
    // })

}

function initLight() {
    light = new THREE.DirectionalLight(0xFF0000,1.0,0);
    light.position.set(100,100,200);
    scene.add(light);

}

function initObject() {
    let geometry = new THREE.BufferGeometry();
    let material = new THREE.LineBasicMaterial({vertexColors:true});
    const points = [];

    // let color1 = new THREE.Color(0x444444), color2 = new THREE.Color(0xFF0000);

    // 线的材质由两点的颜色决定
    let p1 = new THREE.Vector3(-100,0,100);
    let p2 = new THREE.Vector3(100,0,-100);
    points.push(p1);
    points.push(p2);

    geometry.setFromPoints(points)

    let line = new THREE.Line(geometry,material)
    scene.add(line);
    renderer.render(scene,camera)
}

function initThree() {
    width = document.getElementById("canvas-frame").clientWidth;
    height = document.getElementById('canvas-frame').clientHeight;
    renderer = new  THREE.WebGLRenderer({
        //antialias 为true 会耗费更大的cpu和gpu 资源
        antialias:false
    })
    renderer.setSize(width,height);
    document.getElementById('canvas-frame').appendChild(renderer.domElement);
    // renderer.setClearColor(0xFFFFFF,1.0)

}

function start() {
    initThree();
    initCamrea();
    initScene();
    initLight();
    initObject();
    renderer.clear()
}
// start()