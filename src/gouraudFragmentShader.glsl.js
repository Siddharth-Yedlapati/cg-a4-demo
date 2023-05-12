export default`
varying vec3 v_position;
// varying mat4 viewMatrix;
varying vec2 tex_coord;
varying vec3 v_normal;
varying vec4 v_color;

uniform sampler2D shader_texture;
uniform int texture_count;

void main() {

    vec4 tex_col = texture2D(shader_texture, tex_coord);

    if(texture_count == 0) 
    {
        gl_FragColor = v_color;
    }
    else 
    {
        gl_FragColor = vec4(tex_col.xyz, tex_col.a);
    }
}
`;