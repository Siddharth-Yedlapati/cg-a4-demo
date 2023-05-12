export default`
struct LightSource {
    vec3 shader_lightPos;
    vec4 shader_diffuseColor;
    vec4 shader_specularColor;
    float shader_a;
    float shader_b;
    float shader_c;
};

uniform int flag;
uniform float shader_alpha;
uniform int texture_count;
uniform LightSource LightSource_Array[2];
uniform vec3 shader_cameraPos;
uniform float shader_kSpecular;
uniform float shader_kDiffuse;
uniform float shader_kAmbient;

uniform vec4 shader_ambientColor;
uniform sampler2D shader_texture;

varying vec3 v_position;
// varying mat4 viewMatrix;
varying vec2 tex_coord;
varying vec3 v_normal;


vec3 LightSourceEffect(LightSource pl, vec3 unitNormal) {


    vec3 revLightWorld = normalize(pl.shader_lightPos - v_position);


    vec3 revLightView = (viewMatrix * vec4( revLightWorld, 0.0)).xyz;



    float diffuseAmt = max(0.0, dot(revLightView, unitNormal));
    vec3 diffuseCont = vec3(shader_kDiffuse * pl.shader_diffuseColor.xyz * diffuseAmt);


    vec3 vertToCam = normalize(shader_cameraPos - v_position);
    vec3 halfwayVectorWorld = normalize(vertToCam + revLightWorld);
    vec3 halfwayVectorView = (viewMatrix * vec4( halfwayVectorWorld, 0.0)).xyz;
    
    float specAmt = pow(
        max(0.0, dot(halfwayVectorView, unitNormal)),
        shader_alpha
    );

    vec3 specCont = vec3(shader_kSpecular * pl.shader_specularColor.xyz * specAmt);



    float dis = length(pl.shader_lightPos - v_position);
    float atten = 1.0/(pl.shader_a + pl.shader_b * dis + pl.shader_c * dis * dis);



    vec3 ambientCont = vec3(shader_kAmbient * shader_ambientColor);


    return (atten * (diffuseCont + specCont) + ambientCont);
}

void main() {

    vec3 unitNormal = normalize(v_normal); 

    vec3 result = vec3(0.0,0.0,0.0);

    if(flag == 0){
        result += LightSourceEffect(LightSource_Array[0], unitNormal);     
    }
    else{
        result += LightSourceEffect(LightSource_Array[0], unitNormal); 
        result += LightSourceEffect(LightSource_Array[1], unitNormal); 
    }

    vec4 tex_col = texture2D(shader_texture, tex_coord);

    if(texture_count == 0) 
    {
        gl_FragColor = vec4(result, 1.0);
    }
    else 
    {
        gl_FragColor = vec4(tex_col.xyz * result, tex_col.a);
    }


}
`;