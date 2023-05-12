export default`
varying vec3 v_normal;
varying vec3 v_position;
// varying mat4 viewMatrix;
varying vec2 tex_coord;

uniform vec3 shader_ObjectCenter;
uniform int texture_count;
uniform sampler2D shader_texture;


vec2 SphericalTextureMap()
{
  float r_sphere = 5.0;
  float r_cylinder;
  float u;
  float v;
  float pi = 3.14159;


  vec3 z_axis = vec3(0, 1, 0);
  vec3 y_axis = vec3(1, 0, 0);
  vec3 x_axis = vec3(0, 0, 1);
  
  v_position[0] = v_position[0] - shader_ObjectCenter[0];
  v_position[1] = v_position[1] - shader_ObjectCenter[1];
  v_position[2] = v_position[2] - shader_ObjectCenter[2];
  
  vec3 position_vec = normalize(v_position);


  float Beta = acos(dot(position_vec, z_axis));
  float Delta = acos(dot(position_vec, y_axis));
  float Gamma = acos(dot(position_vec, x_axis));
  float x_sphere = r_sphere*(cos(Gamma));
  float y_sphere = r_sphere*(cos(Delta));
  float z_sphere = r_sphere*(cos(Beta));


  float x_newpos = x_sphere;
  float y_newpos = y_sphere;
  float z_newpos = z_sphere;

  float gradient = atan(x_sphere, y_sphere);
  float latitude_angle = acos(z_sphere/sqrt(r_sphere*r_sphere + z_sphere*z_sphere));
  vec3 Sp = vec3(0, 0, 1);
  vec3 Se = vec3(0, 1, 0);
  vec3 Sn1 = vec3(x_newpos, y_newpos, z_newpos);
  float len = length(Sn1);
  vec3 Sn = normalize(Sn1);
  vec3 cross_P = vec3(0, 0, 0);
  
  float phi = acos(-(dot(Sn, Sp)));

  float theta;
  v = phi/3.14159;
  if(v == 1.0 || v == 0.0){
   u = 0.0;
  }
  else{
   theta = acos((dot(Se, Sn))/sin(phi));
   theta = theta/(2.0*(3.14159));
  }

  cross_P[0] = Sp[1] * Se[2] - Sp[2] * Se[1];
  cross_P[1] = Sp[2] * Se[0] - Sp[0] * Se[2];
  cross_P[2] = Sp[0] * Se[1] - Sp[1] * Se[0];

  if(cross_P[0]*Sn[0] + cross_P[1]*Sn[1] + cross_P[2]*Sn[2] > 0.0){
   u = theta;
  }
  else{
   u = 1.0 - theta;
  }

  u = (gradient)/(2.0*pi) + 0.5;

  v = (2.0*latitude_angle)/pi - 0.5;

  vec2 tex_coordinates = vec2(u,v);
  return tex_coordinates;

}

vec2 CylindricalTextureMap()
{

  float pi = 3.14159;
  float u;
  float v;

  float radius_cyl = 3.0;
  float height_cylinder = 15.0;
  float x_cylinder;
  float y_cylinder;
  float z_cylinder;



  v_position[0] = v_position[0] - shader_ObjectCenter[0];
  v_position[1] = v_position[1] - shader_ObjectCenter[1];
  v_position[2] = v_position[2] - shader_ObjectCenter[2];
  
  vec3 unit_vec = normalize(v_position);

  float lambda = radius_cyl/sqrt(unit_vec[2]*unit_vec[2] + unit_vec[0]*unit_vec[0]);

  x_cylinder = lambda*unit_vec[2];
  y_cylinder = lambda*unit_vec[0];
  z_cylinder = lambda*unit_vec[1];

  float gradient = atan(x_cylinder, y_cylinder);



  u = (gradient)/(2.0*pi) + 0.5;
  v = z_cylinder/height_cylinder + 0.5;

  
  vec2 tex_coordinates;

  tex_coordinates = vec2(u,v);
  return tex_coordinates;

}

void main() {
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );

    v_normal = normalMatrix * normal;
    v_position = (modelMatrix * vec4( position, 1.0)).xyz;
    
    if(texture_count == 1)
    {
      tex_coord = SphericalTextureMap();
    }
    else 
    {
      tex_coord = CylindricalTextureMap();
    }
    
    
}
`;
