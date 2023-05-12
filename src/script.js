import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from 'dat.gui'
import { Sphere } from "./sphere.js";
import { Cylinder } from "./cylinder.js";


 
const canvas = document.querySelector("canvas.webgl");

const scene = new THREE.Scene();

const gui = new dat.GUI();

const screen_size = {
  width: 1000,
  height: 1000,
};


const camera = new THREE.OrthographicCamera(-5, 5, 5, -5, 0.001, 1000);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 12;
scene.add(camera);


var texture_count = 0

var mode = 'spheres'

var sphere_list = []


var sphere_prop_list = []
var sphere_properties1 = {
  "position" : [-2.5, 2.5, 0],
  "ambientColor" : [1.0, 0.0, 0.0, 1.0],
  "scale" : [3.0, 3.0, 3.0],
  "kDiffuse" : 0.7,
  "kSpecular" : 0.0,
  "kAmbient" : 0.85,
  "alpha" : 100
}
var sphere_properties2 = {
  "position" : [0, 2.5, 0],
  "ambientColor" : [1.0, 0.0, 0.0, 1.0],
  "scale" : [3.0, 3.0, 3.0],
  "kDiffuse" : 1.0,
  "kSpecular" : 0.9,
  "kAmbient" : 1.0,
  "alpha" : 85
}
var sphere_properties3 = {
  "position" : [2.5, 2.5, 0],
  "ambientColor" : [1.0, 0.0, 0.0, 1.0],
  "scale" : [3.0, 3.0, 3.0],
  "kDiffuse" : 1.1,
  "kSpecular" : 1.2,
  "kAmbient" : 1.0,
  "alpha" : 25
}
var sphere_properties4 = {
  "position" : [-2.5, 0, 0],
  "ambientColor" : [1.0, 0.0, 0.0, 1.0],
  "scale" : [3.0, 3.0, 3.0],
  "kDiffuse" : 0.4,
  "kSpecular" : 0.0,
  "kAmbient" : 0.5,
  "alpha" : 100
}
var sphere_properties5 = {
  "position" : [0, 0, 0],
  "ambientColor" : [1.0, 0.0, 0.0, 1.0],
  "scale" : [3.0, 3.0, 3.0],
  "kDiffuse" : 0.4,
  "kSpecular" : 0.8,
  "kAmbient" : 0.5,
  "alpha" : 35
}
var sphere_properties6 = {
  "position" : [2.5, 0, 0],
  "ambientColor" : [1.0, 0.0, 0.0, 1.0],
  "scale" : [3.0, 3.0, 3.0],
  "kDiffuse" : 0.6,
  "kSpecular" : 1.1,
  "kAmbient" : 0.5,
  "alpha" : 15
}
var sphere_properties7 = {
  "position" : [-2.5, -2.5, 0],
  "ambientColor" : [1.0, 0.0, 0.0, 1.0],
  "scale" : [3.0, 3.0, 3.0],
  "kDiffuse" : 0.0,
  "kSpecular" : 0.0,
  "kAmbient" : 0.2,
  "alpha" : 100
}
var sphere_properties8 = {
  "position" : [0, -2.5, 0],
  "ambientColor" : [1.0, 0.0, 0.0, 1.0],
  "scale" : [3.0, 3.0, 3.0],
  "kDiffuse" : 0.0,
  "kSpecular" : 0.95,
  "kAmbient" : 0.2,
  "alpha" : 25
}
var sphere_properties9 = {
  "position" : [2.5, -2.5, 0],
  "ambientColor" : [1.0, 0.0, 0.0, 1.0],
  "scale" : [3.0, 3.0, 3.0],
  "kDiffuse" : 0.65,
  "kSpecular" : 1.1,
  "kAmbient" : 0.2,
  "alpha" : 15
}

sphere_prop_list.push(sphere_properties1)
sphere_prop_list.push(sphere_properties2)
sphere_prop_list.push(sphere_properties3)
sphere_prop_list.push(sphere_properties4)
sphere_prop_list.push(sphere_properties5)
sphere_prop_list.push(sphere_properties6)
sphere_prop_list.push(sphere_properties7)
sphere_prop_list.push(sphere_properties8)
sphere_prop_list.push(sphere_properties9)


for(var k = 0; k < 9; k++){
  sphere_list.push(new Sphere(camera, scene, 0.35, sphere_prop_list[k].position, sphere_prop_list[k].scale, sphere_prop_list[k].ambientColor, sphere_prop_list[k].kDiffuse, sphere_prop_list[k].kSpecular, sphere_prop_list[k].kAmbient, sphere_prop_list[k].alpha, 0 , texture_count))
}


var cylinder_prop_list = []
var cylinder_properties1 = {
  "position" : [-2.5, 3.0, 0],
  "ambientColor" : [1.0, 0.0, 0.0, 1.0],
  "scale" : [3.0, 3.0, 3.0],
  "kDiffuse" : 0.7,
  "kSpecular" : 0.0,
  "kAmbient" : 0.85,
  "alpha" : 100
}
var cylinder_properties2 = {
  "position" : [0, 3.0, 0],
  "ambientColor" : [1.0, 0.0, 0.0, 1.0],
  "scale" : [3.0, 3.0, 3.0],
  "kDiffuse" : 1.0,
  "kSpecular" : 0.9,
  "kAmbient" : 1.0,
  "alpha" : 85
}
var cylinder_properties3 = {
  "position" : [2.5, 3.0, 0],
  "ambientColor" : [1.0, 0.0, 0.0, 1.0],
  "scale" : [3.0, 3.0, 3.0],
  "kDiffuse" : 1.1,
  "kSpecular" : 1.2,
  "kAmbient" : 1.0,
  "alpha" : 25
}
var cylinder_properties4 = {
  "position" : [-2.5, 0, 0],
  "ambientColor" : [1.0, 0.0, 0.0, 1.0],
  "scale" : [3.0, 3.0, 3.0],
  "kDiffuse" : 0.4,
  "kSpecular" : 0.0,
  "kAmbient" : 0.5,
  "alpha" : 100
}
var cylinder_properties5 = {
  "position" : [0, 0, 0],
  "ambientColor" : [1.0, 0.0, 0.0, 1.0],
  "scale" : [3.0, 3.0, 3.0],
  "kDiffuse" : 0.7,
  "kSpecular" : 0.95,
  "kAmbient" : 0.5,
  "alpha" : 35
}
var cylinder_properties6 = {
  "position" : [2.5, 0, 0],
  "ambientColor" : [1.0, 0.0, 0.0, 1.0],
  "scale" : [3.0, 3.0, 3.0],
  "kDiffuse" : 0.90,
  "kSpecular" : 1.2,
  "kAmbient" : 0.5,
  "alpha" : 15
}
var cylinder_properties7 = {
  "position" : [-2.5, -3.0, 0],
  "ambientColor" : [1.0, 0.0, 0.0, 1.0],
  "scale" : [3.0, 3.0, 3.0],
  "kDiffuse" : 0.0,
  "kSpecular" : 0.0,
  "kAmbient" : 0.2,
  "alpha" : 100
}
var cylinder_properties8 = {
  "position" : [0, -3.0, 0],
  "ambientColor" : [1.0, 0.0, 0.0, 1.0],
  "scale" : [3.0, 3.0, 3.0],
  "kDiffuse" : 0.6,
  "kSpecular" : 0.95,
  "kAmbient" : 0.2,
  "alpha" : 25
}
var cylinder_properties9 = {
  "position" : [2.5, -3.0, 0],
  "ambientColor" : [1.0, 0.0, 0.0, 1.0],
  "scale" : [3.0, 3.0, 3.0],
  "kDiffuse" : 0.85,
  "kSpecular" : 1.2,
  "kAmbient" : 0.2,
  "alpha" : 15
}

cylinder_prop_list.push(cylinder_properties1)
cylinder_prop_list.push(cylinder_properties2)
cylinder_prop_list.push(cylinder_properties3)
cylinder_prop_list.push(cylinder_properties4)
cylinder_prop_list.push(cylinder_properties5)
cylinder_prop_list.push(cylinder_properties6)
cylinder_prop_list.push(cylinder_properties7)
cylinder_prop_list.push(cylinder_properties8)
cylinder_prop_list.push(cylinder_properties9)


var cylinder_list = []
for(var k = 0; k < 9; k++){
  cylinder_list.push(new Cylinder(camera, scene, 0.25, 0.75, cylinder_prop_list[k].position, cylinder_prop_list[k].scale, cylinder_prop_list[k].ambientColor, cylinder_prop_list[k].kDiffuse, cylinder_prop_list[k].kSpecular, cylinder_prop_list[k].kAmbient, cylinder_prop_list[k].alpha, 0 , texture_count))
}


var i;
for(i=0;i<sphere_list.length;i++)
{
  scene.add(sphere_list[i].sphereMesh)
}

let mouseCntrl = {
  "controlsEnabled": true
}
let controls;
gui.add(mouseCntrl, "controlsEnabled").name("Enable Controls");

controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enabled = true;


const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(screen_size.width,  screen_size.height);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.physicallyBasedShading = true;



function changeScene(scene, sphereList, cylinderList, toggle){
  var i;
  if(toggle == 'SphereToCylinder'){
    for(i=0;i<sphereList.length;i++)
    {
      scene.remove(sphereList[i].sphereMesh)
    }
    for(i=0;i<cylinderList.length;i++)
    {
      scene.add(cylinderList[i].cylinderMesh)
    }

  }
  else{
    for(i=0;i<cylinderList.length;i++)
    {
      scene.remove(cylinderList[i].cylinderMesh)
    }
    for(i=0;i<sphereList.length;i++)
    {
      scene.add(sphereList[i].sphereMesh)
    }

  }

}

function switchShader(sphereList, cylinderList, mode){
  if(mode == 'spheres')
  {
    mode = 'cylinders'
    for(var i=0;i<sphereList.length;i++)
    {
      if(sphereList[i].texture_count == 0)
      {
        sphereList[i].switchShader()
      }
    }
  }
  else if(mode == "cylinders")
  {
    mode = 'spheres'
    for(var j=0;j<cylinderList.length;j++)
    {
      if(cylinderList[j].texture_count == 0)
      {
        cylinderList[j].switchShader()
      }
    }
  }
}

function switchLighting(scene, sphere_list, cylinderList, mode)
  {
    var i;
    for(i=0;i<sphere_list.length;i++)
    {
      if(mode == 'spheres')
      {
        scene.remove(sphere_list[i].sphereMesh)
      }

      if(sphere_list[i].flag == 0)
      {
        sphere_list[i].flag = 1
      }
      else if(sphere_list[i].flag== 1)
      {
        sphere_list[i].flag = 0
      }
      sphere_list[i].createShading()
      sphere_list[i].LoadObject()

      if(mode == 'spheres')
      {
        scene.add(sphere_list[i].sphereMesh)
      }
    }
    
    for(i=0;i<cylinderList.length;i++)
    {
      if(mode == 'cylinders')
      {
        scene.remove(cylinderList[i].cylinderMesh)
      }

      if(cylinderList[i].flag == 0)
      {
        cylinderList[i].flag = 1
      }
      else if(cylinderList[i].flag == 1)
      {
        cylinderList[i].flag = 0
      }
      cylinderList[i].createShading()
      cylinderList[i].LoadObject()

      if(mode == 'cylinders')
      {
        scene.add(cylinderList[i].cylinderMesh)
      }
    }
}
function switchTextures(scene, sphere_list, cylinder_list, mode){
  var i;
  for(i=0;i<sphere_list.length;i++)
  {
    if(mode == 'spheres')
    {
      scene.remove(sphere_list[i].sphereMesh)
    }

    if(sphere_list[i].texture_count == 2){
      sphere_list[i].texture_count = 0
    }
    else{
      sphere_list[i].texture_count = sphere_list[i].texture_count + 1
    }

    if(sphere_list[i].texture_count == 0)
    {
      if(sphere_list[i].x)
      {
        sphere_list[i].x = false
        sphere_list[i].shader_type = "gouraud"
      }
      sphere_list[i].ambientColor = [1.0,0.0,0.0,1.0]
    }
    else 
    {
      if(sphere_list[i].shader_type == "gouraud"){
        sphere_list[i].x = true
        sphere_list[i].shader_type = "phong"
      }
      sphere_list[i].ambientColor = [1.0,1.0,1.0,1.0]
    }

    sphere_list[i].createShading()
    sphere_list[i].LoadObject()

    if(mode == 'spheres')
    {
      scene.add(sphere_list[i].sphereMesh)
    }
  }
  
  for(i=0;i<cylinder_list.length;i++)
  {
    if(mode == 'cylinder_list')
    {
      scene.remove(cylinder_list[i].cylinderMesh)
    }

    if(cylinder_list[i].texture_count == 2){
      cylinder_list[i].texture_count = 0
    }
    else{
      cylinder_list[i].texture_count = cylinder_list[i].texture_count + 1
    }


    if(cylinder_list[i].texture_count == 0)
    {
      if(cylinder_list[i].x)
      {
        cylinder_list[i].x = false
        cylinder_list[i].shader_type = "gouraud"
      }
      cylinder_list[i].ambientColor = [1.0,0.0,0.0,1.0]
    }
    else 
    {
      if(cylinder_list[i].shader_type == "gouraud"){
        cylinder_list[i].x = true
        cylinder_list[i].shader_type = "phong"
      }
      cylinder_list[i].ambientColor = [1.0,1.0,1.0,1.0]
    }

    cylinder_list[i].createShading()
    cylinder_list[i].LoadObject()

    if(mode == 'cylinders')
    {
      scene.add(cylinder_list[i].cylinderMesh)
    }
  }
}

document.addEventListener("keydown", event => {

  if (event.key == "c")
  {
    if(mode == 'spheres')
    {
      mode = 'cylinders'

      changeScene(scene, sphere_list, cylinder_list, 'SphereToCylinder')
    }
    else if(mode == 'cylinders')
    {
      mode = 'spheres'

      changeScene(scene, sphere_list, cylinder_list, 'CylinderToSphere')
    }
  }

  if(event.key == "s")
  {
    switchShader(sphere_list, cylinder_list, mode)
  }

  if(event.key == "l")
  {
    switchLighting(scene, sphere_list, cylinder_list, mode)

  }

  if(event.key == "t")
  {
    switchTextures(scene, sphere_list, cylinder_list, mode)

  }

});



const clock = new THREE.Clock();
let lastElapsedTime = 0;

const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - lastElapsedTime;
    lastElapsedTime = elapsedTime;


    if(mouseCntrl.controlsEnabled)
    {
        controls.enabled = true;
        controls.update();
    } else 
    {
        controls.enabled = false;
    }

    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
};

tick();