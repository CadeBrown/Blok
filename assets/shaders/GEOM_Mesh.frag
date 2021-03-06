#version 330 core
/* GEOM_Mesh.frag - generic mesh shader for the geometry pass */

// inputs from vertex shader
in vec4 fPosition;
in vec2 fUV;
in mat3 fTBN;

// outputs to a render buffer
layout (location = 0) out vec4 gColor;
layout (location = 1) out vec4 gPosition;
layout (location = 2) out vec4 gUV;
layout (location = 3) out vec4 gNormal;

uniform sampler2D texDiffuse;

//uniform vec4 col;

void main() {

    // get the color
    vec4 col = texture(texDiffuse, fUV);
    //vec4 col = vec4(1, 0, 0, 1);

    vec3 N = normalize(fTBN[2]);
    //vec3 ldir = normalize(vec3(0, -1, 1));

    gColor = col;
    gPosition = fPosition;
    gUV = vec4(fUV, 0.0f, 0.0f);
    gNormal = vec4(N, 0.0f);
    //gColor = texture(texDiffuse, fUV);
    //gPosition = fPosition;
    //gUV = vec4(fUV, 0.0f, 0.0f);
    //gNormal = vec4(fTBN[2], 0.0f);
}
