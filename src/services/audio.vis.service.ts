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

  getFrequency(freqThreshold: number) {
    return Math.max(this.analyser.getAverageFrequency() - 60, 0) / 50;
  }

  updateMaterialUniform(material: THREE.ShaderMaterial, freqThreshold = 60) {
    const freq = this.getFrequency(freqThreshold);
    const freqUniform = material.uniforms["uFrequency"];

    gsap.to(freqUniform, {
      duration: 1,
      ease: "slow.easeOut",
      value: freq,
    });
  }
}

export const AudioVisualizerController = new AudioVisController();
