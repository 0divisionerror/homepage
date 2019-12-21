import * as THREE from "/homepage/web_modules/three.js";

import { OrbitControls } from "/homepage/web_modules/three/examples/jsm/controls/OrbitControls.js";

export default class ThreeScene {
  renderer: THREE.WebGLRenderer = undefined as any;
  scene: THREE.Scene = undefined as any;

  constructor(private onUpdate: (viewer: ThreeScene) => void) {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
  }

  start = (div: HTMLDivElement) => {
    const { scene, renderer: renderer } = this;
    const camera = new THREE.PerspectiveCamera(75, 1.7, 0.1, 1000);
    camera.position.set(0, 1, -3);

    this.resize();
    div.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1, 0);
    controls.update();

    renderer.setClearColor(0x000000, 0);
    renderer.gammaOutput = true;

    const ambient = new THREE.AmbientLight("#85b2cd");
    scene.add(ambient);

    const render = () => {
      requestAnimationFrame(render);
      controls.update();
      this.onUpdate(this);
      renderer.render(scene, camera);
    };

    render();
  };
  resize = () => {
    const renderer = this.renderer;
    const width = window.innerWidth - (window.innerWidth / 10) * 2;
    const height = width / 1.7;
    renderer.setSize(width, height);
  };
}
