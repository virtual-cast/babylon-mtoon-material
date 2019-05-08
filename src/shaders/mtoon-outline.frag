uniform vec3 vOutlineColor;

#include<fogFragmentDeclaration>

void main(void) {
    vec4 color = vec4(vOutlineColor, 1.0);

#include<fogFragment>

    gl_FragColor = color;
}
