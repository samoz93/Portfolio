precision mediump float;
varying vec2 vUv;
varying float vNoise;

void main() {
    gl_FragColor =  vec4(vec3(vUv,vNoise) * 1.1,1.);
}
