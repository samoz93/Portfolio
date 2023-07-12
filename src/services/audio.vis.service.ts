import { gsap } from "gsap";
import * as THREE from "three";

class AudioVisController {
  listener = new THREE.AudioListener();
  private sound = new THREE.Audio(this.listener);
  private loader = new THREE.AudioLoader();
  private analyser = new THREE.AudioAnalyser(this.sound, 32);

  load(path: string) {
    this.sound.stop();

    this.loader.load(path, (buffer) => {
      this.sound.setBuffer(buffer);
      this.sound.setLoop(true);
      this.sound.setVolume(0.2);
      this.sound.play();
    });
  }

  getFrequency() {
    return Math.max(this.analyser.getAverageFrequency() - 50, 0) / 60;
  }

  updateMaterialUniform(material: THREE.ShaderMaterial) {
    const freq = this.getFrequency();
    const freqUniform = material.uniforms["uFrequency"];

    gsap.to(freqUniform, {
      duration: 1,
      ease: "slow.easeOut",
      value: freq,
    });
  }
}

export const AudioVisualizerController = new AudioVisController();
