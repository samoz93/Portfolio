uniform float uTime;
uniform float uRadius;
varying vec2 vUv;
varying vec3 vPosition;



void main() {

    vec3 pos = position;
    
    // Calculate the distance of the vertex from the center
    float dist = length(pos.xy - vec2(0.)) - uRadius;


    // Update the vertex position
    pos.z -= smoothstep( -uRadius, uRadius,dist ) * uRadius;
    // pos.z = 

    gl_Position =  projectionMatrix  * modelViewMatrix * vec4(pos, 1.0);
    // csm_PositionRaw =  gl_Position;
    vUv = uv;
    vPosition = pos;

}