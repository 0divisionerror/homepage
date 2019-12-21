import * as THREE from "/homepage/web_modules/three.js";

import { FBXLoader } from "/homepage/web_modules/three/examples/jsm/loaders/FBXLoader.js";
import { GLTFLoader } from "/homepage/web_modules/three/examples/jsm/loaders/GLTFLoader.js";

export default class ThreeViewer {
  model: any;
  models: { [key: string]: any } = {};

  constructor(private scene: THREE.Scene) {}

  beforeLoad() {
    if (this.model) {
      this.scene.remove(this.model);
      this.model = undefined;
    }
  }

  loadVrm = (progress: (progress: number) => void) =>
    new Promise(r => {
      this.beforeLoad();

      const address = "assets/blob/otohime.vrm";

      this.model = this.models[address];
      if (this.model) {
        this.scene.add(this.model);
        r();
        return;
      }

      new GLTFLoader().load(
        address,
        gltf => {
          const mesh = (this.models[address] = this.model = gltf.scene);
          mesh.scale.set(1.5, 1.5, 1.5);
          this.scene.add(this.model);
          r();
        },
        xhr => {
          const now = (xhr.loaded / xhr.total) * 100;
          progress(now);
          console.log(now + "% loaded");
        },
        error => {
          console.warn(error);
        }
      );
    });

  loadFbx = (progress: (progress: number) => void) =>
    new Promise(r => {
      this.beforeLoad();

      const address = "assets/blob/unchi_curling.fbx";

      this.model = this.models[address];
      if (this.model) {
        this.scene.add(this.model);
        r();
        return;
      }

      new FBXLoader().load(
        address,
        object => {
          this.model = this.models[address] = object;
          object.scale.set(0.1, 0.1, 0.1);
          object.traverse((child: any) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          this.scene.add(this.model);
          r();
        },
        xhr => {
          const now = (xhr.loaded / xhr.total) * 100;
          progress(now);
          console.log(now + "% loaded");
        },
        error => {
          console.warn(error);
        }
      );
    });
}
