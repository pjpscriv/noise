#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float random (vec2 st) {

    // return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    
    // return fract(sin(dot(st.xy, vec2(12.9893, 78.233))) * 137391.080);
    
//     return fract(sin(dot(st.xy, vec2(50., 0.))) * 1.);
    
//     return fract(sin(dot(st.xy, vec2(50., 0.))));
    
//     return sin(dot(st.xy, vec2(50., 0.)));
    
//     return dot(st.xy, vec2(50., 0.));
    
//     return dot(st.xy, vec2(1., 0.));
    
    return st.x;
}



void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;

    float rnd = random( st );
        
    float red   = rnd; // * 40.3;
    float green = rnd; // * 653.34;
    float blue  = rnd; // * 145.374;

    gl_FragColor = vec4(red, green, blue, 1.0);
}
