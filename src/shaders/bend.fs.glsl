precision mediump float;
uniform float uTime;
varying vec2 vUv;

void main() {
    gl_FragColor =  vec4(vec3(vUv * .01,0.),1.);
}
