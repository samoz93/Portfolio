uniform float uTime;
varying vec3 vColor;
uniform vec3 uColors[5];
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

void main() {
    vec3 pos = position;
    vUv = uv;
    gl_Position =  projectionMatrix  * modelViewMatrix * vec4(pos, 1.0);
    vPosition = pos;
    vNormal = normal;
}