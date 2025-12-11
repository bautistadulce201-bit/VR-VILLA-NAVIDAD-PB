 import* as THREE from "../js/three.module.js";
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

  export default function d1({x,y,z}){



  /// creacion de personaje

  //Bolita de gorro
   var geometry03 = new RoundedBoxGeometry(3,3,3,12,19);
    var material03 = new THREE.MeshLambertMaterial({
        color: 0xF0F0F0
    });
    var mesh03 = new THREE.Mesh(geometry03, material03);
   // scene.add(mesh03);
    mesh03.position.set(2,32);
    mesh03.rotation.set(0,0,0);
    mesh03.castShadow = true; 

  //Gorro Navideño

var geometry04 = new THREE.CylinderGeometry(.1, 7, 9, 30,30);
    var material04 = new THREE.MeshLambertMaterial({
        color: 0xF57171
    });
    var mesh04 = new THREE.Mesh(geometry04, material04);
    mesh04.position.set(2, 27, 0.3);
    //scene.add(mesh04);
    mesh04.castShadow = true; 

    //Bolita del Gorro

var geometry05 = new THREE.CylinderGeometry(5.9, 7.5, 1.3, 30,30);
    var material05 = new THREE.MeshLambertMaterial({
        color: 0xF0F0F0
    });
    var mesh05 = new THREE.Mesh(geometry05, material05);
    mesh05.position.set(2, 23, 0.3);
    //scene.add(mesh05);
    mesh05.castShadow = true; 

    //Cabeza
   var geometry06 = new RoundedBoxGeometry(10,9,10,12,19);
    var material06 = new THREE.MeshLambertMaterial({
        color: 0xF2D6C9
    });
    var mesh06 = new THREE.Mesh(geometry06, material06);
    //scene.add(mesh06);
    mesh06.position.set(2, 22, 0.3);
    mesh06.rotation.set(0,0,0);
    mesh06.castShadow = true;

     //Nariz
   var geometry07 = new RoundedBoxGeometry(3.7,3,4,12,19);
    var material07 = new THREE.MeshLambertMaterial({
        color: 0xF2D6C9
    });
    var mesh07 = new THREE.Mesh(geometry07, material07);
    //scene.add(mesh07);
    mesh07.position.set(2, 20.9, 6);
    mesh07.rotation.set(0,0,0);
    mesh07.castShadow = true;

    //Cuerpo
   var geometry08 = new RoundedBoxGeometry(12,10,12,12,19);
    var material08 = new THREE.MeshLambertMaterial({
        color: 0xD15656
    });
    var mesh08 = new THREE.Mesh(geometry08, material08);
    //scene.add(mesh08);
    mesh08.position.set(2, 18, 0.3);
    mesh08.rotation.set(0,0,0);
    mesh08.castShadow = true;
 
    //Linea blanca del traje

var geometry09 = new RoundedBoxGeometry(1,5,1,4,200);
    var material09 = new THREE.MeshLambertMaterial({
        color: 0xF0F0F0
    });
    var mesh09 = new THREE.Mesh(geometry09, material09);
    //scene.add(mesh09);
    mesh09.position.set(2,19,6);

    mesh09.castShadow = true; 

     //Manita IZ

var geometry10 = new RoundedBoxGeometry(2,5,2,6,200);
    var material10 = new THREE.MeshLambertMaterial({
        color: 0x0A0A0A
    });
    var mesh10 = new THREE.Mesh(geometry10, material10);
   // scene.add(mesh10);
    mesh10.position.set(7 , 19,4);
    mesh10.rotation.set(1,2.5,-5);
    mesh10.castShadow = true;
    //Brazo IZ
var geometry11 = new RoundedBoxGeometry(2.5,4,2.5,6,200);
    var material11 = new THREE.MeshLambertMaterial({
        color: 0xF57171 
    });
    var mesh11 = new THREE.Mesh(geometry11, material11);
    //scene.add(mesh11);
    mesh11.position.set(7, 19,4);
    mesh11.rotation.set(1,2.5,-5);
    mesh11.castShadow = true;

    //manita DER

var geometry12 = new RoundedBoxGeometry(2,5,2,6,200);
    var material12 = new THREE.MeshLambertMaterial({
        color: 0x0A0A0A
    });
    var mesh12 = new THREE.Mesh(geometry12, material12);
    //scene.add(mesh12);
    mesh12.position.set(-3 , 19,4);
    mesh12.rotation.set(.2,-2.5,-5);
    mesh12.castShadow = true; 
    //Brazo DER
var geometry13 = new RoundedBoxGeometry(2.5,4,2.5,6,200);
    var material13 = new THREE.MeshLambertMaterial({
        color: 0xF57171 
    });
    var mesh13 = new THREE.Mesh(geometry13, material13);
   // scene.add(mesh13);
    mesh13.position.set(-3, 19,4);
    mesh13.rotation.set(.2,-2.5,-5);
    mesh13.castShadow = true; 


    //Peluche blanco

var geometry14 = new THREE.CylinderGeometry(5.6, 7, 2, 30,30);
    var material14 = new THREE.MeshLambertMaterial({
        color: 0xF0F0F0
    });
    var mesh14 = new THREE.Mesh(geometry14, material14);
    mesh14.position.set(2, 16, 0.3);
    //scene.add(mesh14);
    mesh14.castShadow = true; 
 
    //bota IZ

var geometry15 = new RoundedBoxGeometry(2,5,2,6,200);
    var material15 = new THREE.MeshLambertMaterial({
        color: 0x0A0A0A
    });
    var mesh15 = new THREE.Mesh(geometry15, material15);
    //scene.add(mesh15);
    mesh15.position.set(5, 13,4);
    mesh15.rotation.set(1,2,-5);
    mesh15.castShadow = true;
    //pierna IZ
var geometry16 = new RoundedBoxGeometry(2.5,4,2.5,6,200);
    var material16 = new THREE.MeshLambertMaterial({
        color: 0xF57171 
    });
    var mesh16 = new THREE.Mesh(geometry16, material16);
    //scene.add(mesh16);
    mesh16.position.set(5, 13,4);
    mesh16.rotation.set(1,2,-5);
    mesh16.castShadow = true;
    
    //bota DER

var geometry17 = new RoundedBoxGeometry(2,5,2,6,200);
    var material17 = new THREE.MeshLambertMaterial({
        color: 0x0A0A0A
    });
    var mesh17 = new THREE.Mesh(geometry17, material17);
    //scene.add(mesh17);
    mesh17.position.set(-1, 13,4);
    mesh17.rotation.set(.23,-2,-5);
    mesh17.castShadow = true;
    //pierna DER
var geometry18 = new RoundedBoxGeometry(2.5,4,2.5,6,200);
    var material18 = new THREE.MeshLambertMaterial({
        color: 0xF57171 
    });
    var mesh18 = new THREE.Mesh(geometry18, material18);
    //scene.add(mesh18);
    mesh18.position.set(-1, 13,4);
    mesh18.rotation.set(.2,-2,-5);
    mesh18.castShadow = true; 

    //Cinturon

var geometry19= new THREE.CylinderGeometry(6.5, 6.5, .7, 30,30);
    var material19 = new THREE.MeshLambertMaterial({
        color: 0x0A0A0A
    });
    var mesh19 = new THREE.Mesh(geometry19, material19);
    mesh19.position.set(2, 16.6, 0.3);
    //scene.add(mesh19);  
    //mesh19.castShadow = true;  


    /// Duende verde

  //Bolita de gorro
   var geometry20 = new RoundedBoxGeometry(3,3,3,12,19);
    var material20 = new THREE.MeshLambertMaterial({
        color: 0xF0F0F0
    });
    var mesh20 = new THREE.Mesh(geometry20, material20);
    //scene.add(mesh20); 
    mesh20.position.set(-20,32);
    mesh20.rotation.set(0,0,0);
    mesh20.castShadow = true;

  //Gorro Navideño

var geometry21 = new THREE.CylinderGeometry(.1, 7, 9, 30,30);
    var material21 = new THREE.MeshLambertMaterial({
        color: 0x469946
    });
    var mesh21= new THREE.Mesh(geometry21, material21);
    mesh21.position.set(-20, 27, 0.3);
    //scene.add(mesh21);
    mesh21.castShadow = true;  

    //Bolita del Gorro

var geometry22= new THREE.CylinderGeometry(5.9, 7.5, 1.3, 30,30);
    var material22 = new THREE.MeshLambertMaterial({
        color: 0xF0F0F0 
    });
    var mesh22= new THREE.Mesh(geometry22, material22);
    mesh22.position.set(-20, 23, 0.3);
    //scene.add(mesh22); 
    mesh22.castShadow = true; 
 
    //Cabeza
   var geometry23 = new RoundedBoxGeometry(10,9,10,12,19);
    var material23 = new THREE.MeshLambertMaterial({
        color: 0xF2D6C9
    });
    var mesh23 = new THREE.Mesh(geometry23, material23);
    //scene.add(mesh23);
    mesh23.position.set(-20, 22, 0.3);
    mesh23.rotation.set(0,0,0);
    mesh23.castShadow = true;

     //Nariz
   var geometry24 = new RoundedBoxGeometry(3.7,3,4,12,19);
    var material24 = new THREE.MeshLambertMaterial({
        color: 0xF2D6C9
    });
    var mesh24 = new THREE.Mesh(geometry24, material24);
    //scene.add(mesh24);
    mesh24.position.set(-20, 20.9, 6);
    mesh24.rotation.set(0,0,0);
    mesh24.castShadow = true; 

    //Cuerpo
   var geometry25 = new RoundedBoxGeometry(12,10,12,12,19);
    var material25 = new THREE.MeshLambertMaterial({
        color: 0x326E32
    });
    var mesh25 = new THREE.Mesh(geometry25, material25);
    //scene.add(mesh25);
    mesh25.position.set(-20, 18, 0.3);
    mesh25.rotation.set(0,0,0);
    mesh25.castShadow = true;

    //Linea blanca del traje

var geometry26 = new RoundedBoxGeometry(1,5,1,4,200);
    var material26 = new THREE.MeshLambertMaterial({
        color: 0xF0F0F0
    });
    var mesh26 = new THREE.Mesh(geometry26, material26);
    //scene.add(mesh26);
    mesh26.position.set(-20,19,6);
    mesh26.castShadow = true;
 
     //Manita IZ

var geometry27 = new RoundedBoxGeometry(2,5,2,6,200);
    var material27 = new THREE.MeshLambertMaterial({
        color: 0x0A0A0A
    });
    var mesh27 = new THREE.Mesh(geometry27, material27);
    //scene.add(mesh27);
    mesh27.position.set(-15, 19,4);
    mesh27.rotation.set(1,2.5,-5);
    mesh27.castShadow = true; 
    //Brazo IZ
var geometry28 = new RoundedBoxGeometry(2.5,4,2.5,6,200);
    var material28 = new THREE.MeshLambertMaterial({
        color: 0x469946
    });
    var mesh28 = new THREE.Mesh(geometry28, material28);
    //scene.add(mesh28);
    mesh28.position.set(-15, 19,4);
    mesh28.rotation.set(1,2.5,-5);
    mesh28.castShadow = true;

    //manita DER

var geometry29 = new RoundedBoxGeometry(2,5,2,6,200);
    var material29 = new THREE.MeshLambertMaterial({
        color: 0x0A0A0A
    });
    var mesh29 = new THREE.Mesh(geometry29, material29);
    //scene.add(mesh29);
    mesh29.position.set(-25, 19,4);
    mesh29.rotation.set(.2,-2.5,-5); 
    mesh29.castShadow = true;
    //Brazo DER
var geometry30 = new RoundedBoxGeometry(2.5,4,2.5,6,200);
    var material30 = new THREE.MeshLambertMaterial({
        color: 0x469946 
    });
    var mesh30 = new THREE.Mesh(geometry30, material30);
    //scene.add(mesh30);
    mesh30.position.set(-25, 19,4);
    mesh30.rotation.set(.2,-2.5,-5);
    mesh30.castShadow = true;


    //Peluche blanco

var geometry31 = new THREE.CylinderGeometry(5.6, 7, 2, 30,30);
    var material31= new THREE.MeshLambertMaterial({
        color: 0xF0F0F0
    });
    var mesh31= new THREE.Mesh(geometry31, material31);
    mesh31.position.set(-20, 16, 0.3);
    //scene.add(mesh31);
    

    //bota IZ

var geometry32 = new RoundedBoxGeometry(2,5,2,6,200);
    var material32 = new THREE.MeshLambertMaterial({
        color: 0x0A0A0A
    });
    var mesh32= new THREE.Mesh(geometry32, material32);
    //scene.add(mesh32);
    mesh32.position.set(-17, 13,4);
    mesh32.rotation.set(1,2,-5); 
  
    //pierna IZ
var geometry33 = new RoundedBoxGeometry(2.5,4,2.5,6,200);
    var material33 = new THREE.MeshLambertMaterial({
        color: 0x469946 
    });
    var mesh33 = new THREE.Mesh(geometry33, material33);
    //scene.add(mesh33);
    mesh33.position.set(-17, 13,4);
    mesh33.rotation.set(1,2,-5); 
   
    
    //bota DER 

var geometry34 = new RoundedBoxGeometry(2,5,2,6,200);
    var material34 = new THREE.MeshBasicMaterial({
        color: 0x0A0A0A
    });
    var mesh34 = new THREE.Mesh(geometry34, material34);
    //scene.add(mesh34); 
    mesh34.position.set(-23, 13,4);
    mesh34.rotation.set(.23,-2,-5); 
    mesh34.castShadow = true;
    //pierna DER
var geometry35 = new RoundedBoxGeometry(2.5,4,2.5,6,200);
    var material35 = new THREE.MeshLambertMaterial({
        color: 0x469946
    });
    var mesh35 = new THREE.Mesh(geometry35, material35);
    //scene.add(mesh35);
    mesh35.position.set(-23, 13,4);
    mesh35.rotation.set(.2,-2,-5);
    mesh35.castShadow = true;

    //Cinturon

var geometry36 = new THREE.CylinderGeometry(6.5, 6.5, .7, 30,30);
    var material36 = new THREE.MeshLambertMaterial({
        color: 0x0A0A0A
    });
    var mesh36 = new THREE.Mesh(geometry36, material36);
    mesh36.position.set(-20, 16.6, 0.3);
    //scene.add(mesh36);
    mesh36.castShadow = true; 

   

    var duendes = new THREE.Group();
       duendes.add(mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17,mesh18,mesh19,mesh20,mesh21,mesh22,mesh23,mesh24,mesh25,mesh26,mesh27,mesh28,mesh29,mesh30,mesh31,mesh32,mesh33,mesh34,mesh35,mesh36);
       duendes.position.set(x,y,z);
    
       return duendes;   
    } 