#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float random (vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9893, 78.233))) * 137391.080);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;

    float rnd = random( st * u_time );
        
    float red   = fract(rnd * 40.3);
    float green = fract(rnd * 653.34);
    float blue  = fract(rnd * 145.374);

    gl_FragColor = vec4(red, green, blue, 1.0);
}