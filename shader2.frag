#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
    // Normalise pixel position (range of 0 - 1)
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    
    //  red  = horizontal position
    // green = vertical position
    gl_FragColor = vec4(st.x, st.y, 0.0 ,1.0);
}
