import "./style.css";
import * as THREE from "three";
import gouraudVertexShader from "./gouraudVertexShader.glsl.js";
import gouraudFragmentShader from "./gouraudFragmentShader.glsl.js";
import phongVertexShader from "./phongVertexShader.glsl.js";
import phongFragmentShader from "./phongFragmentShader.glsl.js";


export class Sphere
{
    constructor(camera, scene, radius, position, scale, ambientColor, kDiffuse, kSpecular, kAmbient, alpha, light_flag, texture_count)
    {
        this.shader_type = "gouraud"
        this.camera = camera
        this.ambientColor = ambientColor

        this.kAmbient = kAmbient
        this.kSpecular = kSpecular
        this.kDiffuse = kDiffuse
        this.radius = radius
        this.alpha = alpha
        this.scene = scene
        this.flag = light_flag
        this.x = false
        this.texture_count = texture_count
        this.position = position
        this.scale = scale
        this.LightSource_Array = []


        var LightSource1 = {
            lightPos : new THREE.Vector3(-13.5, 24, 22),
            diffuseColor : new THREE.Vector4(1.0,1.0,1.0,1.0),
            specularColor : new THREE.Vector4(1.0,1.0,1.0,1.0),
          
            a : 0.012,
            b : 0.012,
            c : 0.00092
          };
          
        var LightSource2 = {
            lightPos : new THREE.Vector3(30, -24, 22),
            diffuseColor : new THREE.Vector4(1.0,1.0,1.0,1.0),
            specularColor : new THREE.Vector4(1.0,1.0,1.0,1.0),
          
            a : 0.0012,
            b : 0.0012,
            c : 0.00092
          };

        this.LightSource1 = LightSource1
        this.LightSource2 = LightSource2

        var i;
        this.LightSource_Array.push({
            shader_lightPos: this.LightSource1.lightPos,
            shader_diffuseColor: this.LightSource1.diffuseColor,
            shader_specularColor: this.LightSource1.specularColor,
            shader_a : this.LightSource1.a,
            shader_b : this.LightSource1.b,
            shader_c : this.LightSource1.c
        })

        this.LightSource_Array.push({
            shader_lightPos: this.LightSource2.lightPos,
            shader_diffuseColor: this.LightSource2.diffuseColor,
            shader_specularColor: this.LightSource2.specularColor,
            shader_a : this.LightSource2.a,
            shader_b : this.LightSource2.b,
            shader_c : this.LightSource2.c
        })

        this.createShading()

        this.sphereGeometry = new THREE.SphereGeometry(this.radius, 40, 40);
        this.sphereMaterial = this.gouraud_material
        this.sphereMesh = new THREE.Mesh(this.sphereGeometry, this.sphereMaterial);
        this.sphereMesh.position.set(this.position[0], this.position[1], this.position[2]);
        this.sphereMesh.scale.set(this.scale[0], this.scale[1], this.scale[2]);
    }

    createShadingPhong()
    {
        this.phong_material = new THREE.ShaderMaterial(  
            {
                uniforms: {
                    "texture_count" : {
                        value: this.texture_count
                    },
                    
                    "flag" : { 
                        value: this.flag
                    },
    
                    "LightSource_Array" : {
                        value : this.LightSource_Array
                    },
              
                    'shader_cameraPos' : {value : new THREE.Vector3(
                        this.camera.position.x,
                        this.camera.position.y,
                        this.camera.position.z
                    )},
    
              
                    'shader_kDiffuse' : {value : this.kDiffuse},
                    'shader_kAmbient' : {value : this.kAmbient},
                    'shader_kSpecular' : {value : this.kSpecular},
                    'shader_alpha' : {value : this.alpha},
                    'shader_ambientColor' : {value: this.ambientColor},
                    'shader_ObjectCenter' : {value: this.position},
                    'shader_texture' : {value: new THREE.TextureLoader().load("/textures/texture.jpg")}
                },
              vertexShader: phongVertexShader,
              fragmentShader: phongFragmentShader
              }
            );
            
            this.phong_material.side = THREE.DoubleSide
    
    }

    createShadingGouraud(){
        this.gouraud_material = new THREE.ShaderMaterial(         {
            uniforms: {
                
                "texture_count" : {
                    value: this.texture_count
                },
                "flag" : { 
                    value: this.flag
                },

                "LightSource_Array" : {
                    value : this.LightSource_Array
                },
          
                'shader_cameraPos' : {value : new THREE.Vector3(
                    this.camera.position.x,
                    this.camera.position.y,
                    this.camera.position.z
                )},
          
                'shader_kDiffuse' : {value : this.kDiffuse},
                'shader_kAmbient' : {value : this.kAmbient},
                'shader_kSpecular' : {value : this.kSpecular},
                'shader_alpha' : {value : this.alpha},
                'shader_ambientColor' : {value: this.ambientColor},
                'shader_texture' : {value: new THREE.TextureLoader().load("/textures/texture.jpg")}
    
            },
          vertexShader: gouraudVertexShader,
          fragmentShader: gouraudFragmentShader
          } );
        
        this.gouraud_material.side = THREE.DoubleSide
    }

    createShading()
    {
        this.createShadingPhong()
        this.createShadingGouraud()
    }

    switchShader()
    {
        if(this.shader_type == "gouraud")
        {
            this.shader_type = "phong"
            this.sphereMaterial = this.phong_material
        }
        else if(this.shader_type == "phong")
        {
            this.shader_type = "gouraud"
            this.sphereMaterial = this.gouraud_material
        }
        this.scene.remove(this.sphereMesh)
        this.sphereMesh = new THREE.Mesh(this.sphereGeometry, this.sphereMaterial);

        this.sphereMesh.scale.set(this.scale[0], this.scale[1], this.scale[2]);
        this.sphereMesh.position.set(this.position[0], this.position[1], this.position[2]);

        this.scene.add(this.sphereMesh)
        
    }

    LoadObject()
    {
        if(this.shader_type == "phong")
        {
            this.sphereMaterial = this.phong_material
        }
        else if(this.shader_type == "gouraud")
        {
            this.sphereMaterial = this.gouraud_material
        }
        this.sphereMesh = new THREE.Mesh(this.sphereGeometry, this.sphereMaterial);

        this.sphereMesh.scale.set(this.scale[0], this.scale[1], this.scale[2]);
        this.sphereMesh.position.set(this.position[0], this.position[1], this.position[2]);


    }
}