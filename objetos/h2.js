 import* as THREE from "../js/three.module.js";
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"


  export default function h2({x,y,z}){

    /// creacion de personaje
  //Cuello

var geometry06 = new THREE.CylinderGeometry(.1, 7.9, 9, 30,30);
    var material06 = new THREE.MeshBasicMaterial({
        color: 0x90A39C
    });
    var mesh01 = new THREE.Mesh(geometry06, material06);
    mesh01.position.set(2, 31, 0.3);
   // scene.add(mesh01);
    mesh01.castShadow = true; 

    //ojo der
   var geometry06 = new RoundedBoxGeometry(1,2,1,12,19);
    var material06 = new THREE.MeshBasicMaterial({
        color: 0x000000
    });
    var mesh02 = new THREE.Mesh(geometry06, material06);
    //scene.add(mesh02);
    mesh02.position.set(5, 33, 5);
    mesh02.castShadow = true;

   //ojo iz
   var geometry06 = new RoundedBoxGeometry(1,2,1,12,19);
    var material06 = new THREE.MeshBasicMaterial({
        color: 0x000000
    });
    var mesh03 = new THREE.Mesh(geometry06, material06);
    //scene.add(mesh03);
    mesh03.position.set(-.4, 33, 5.4);
    mesh03.castShadow = true;

    //Cabeza
   var geometry06 = new RoundedBoxGeometry(11,20,11,12,19);
    var material06 = new THREE.MeshBasicMaterial({
        color: 0xF2D6C9
    });
    var mesh04 = new THREE.Mesh(geometry06, material06);
   // scene.add(mesh04);
    mesh04.position.set(2, 28, 0.3);
    mesh04.rotation.set(0,0,0);
    mesh04.castShadow = true;

     //Nariz
   var geometry06 = new RoundedBoxGeometry(3,3,3,12,19);
    var material06 = new THREE.MeshBasicMaterial({
        color: 0xF5D0AE
    });
    var mesh05= new THREE.Mesh(geometry06, material06);
   // scene.add(mesh05);
    mesh05.position.set(2, 33, 6);
    mesh05.rotation.set(0,0,0);
    mesh05.castShadow = true;

    //Cuerpo
   var geometry06 = new RoundedBoxGeometry(12,24,12,12,19);
    var material06 = new THREE.MeshBasicMaterial({
        color: 0x90A39C
    });
    var mesh06 = new THREE.Mesh(geometry06, material06);
    //scene.add(mesh06);
    mesh06.position.set(2, 20, 0.3);
    mesh06.rotation.set(0,0,0);
    mesh06.castShadow = true;

    //Linea blanca del traje

var geometry06 = new RoundedBoxGeometry(1,12.3,1,4,200);
    var material06 = new THREE.MeshBasicMaterial({
        color: 0xF0F0F0
    });
    var mesh07 = new THREE.Mesh(geometry06, material06);
    //scene.add(mesh07);
    mesh07.position.set(2,22,6);

    mesh07.castShadow = true;

     //Manita IZ
var geometry06 = new RoundedBoxGeometry(3,22,3,6,200);
    var material06 = new THREE.MeshBasicMaterial({
        color: 0xF2D6C9
    });
    var mesh08 = new THREE.Mesh(geometry06, material06);
    //scene.add(mesh08);
    mesh08.position.set(9, 18,1);
    mesh08.rotation.set(0,0,.2);
    mesh08.castShadow = true;
    //Brazo IZ
var geometry06 = new RoundedBoxGeometry(4,20,4,6,200);
    var material06 = new THREE.MeshBasicMaterial({
        color: 0x90A39C 
    });
    var mesh09 = new THREE.Mesh(geometry06, material06);
    //scene.add(mesh09);
    mesh09.position.set(9, 19,1);
    mesh09.rotation.set(0,0,.2);
    mesh09.castShadow = true;

    //manita DER
var geometry06 = new RoundedBoxGeometry(3,22,3,6,200);
    var material06 = new THREE.MeshBasicMaterial({
        color: 0xF2D6C9
    });
    var mesh10 = new THREE.Mesh(geometry06, material06);
    //scene.add(mesh10);
    mesh10.position.set(-5, 18,1);
    mesh10.rotation.set(0,-0,-.2);
    mesh10.castShadow = true;

    //Brazo DER
var geometry06 = new RoundedBoxGeometry(4,20,4,6,200);
    var material06 = new THREE.MeshBasicMaterial({
        color: 0x90A39C
    });
    var mesh11 = new THREE.Mesh(geometry06, material06);
    //scene.add(mesh11);
    mesh11.position.set(-5, 19,1);
    mesh11.rotation.set(0,-0,-.2);
    mesh11.castShadow = true;

    //Peluche blanco

var geometry06 = new THREE.CylinderGeometry(5.6, 7, 2, 30,30);
    var material06 = new THREE.MeshBasicMaterial({
        color: 0xF0F0F0
    });
    var mesh12 = new THREE.Mesh(geometry06, material06);
    mesh12.position.set(2, 17, 0.3);
    //scene.add(mesh12);
    mesh12.castShadow = true; 

    //Cinturon

var geometry06 = new THREE.CylinderGeometry(6.5, 6.5, .7, 30,30);
    var material06 = new THREE.MeshBasicMaterial({
        color: 0x0A0A0A
    });
    var mesh13 = new THREE.Mesh(geometry06, material06);
    mesh13.position.set(2, 17, 0.3);
    //scene.add(mesh13);
    mesh13.castShadow = true; 

    //pie DER
var geometry06 = new RoundedBoxGeometry(3,22,3,6,200);
    var material06 = new THREE.MeshBasicMaterial({
        color: 0x000000
    });
    var mesh14 = new THREE.Mesh(geometry06, material06);
    //scene.add(mesh14);
    mesh14.position.set(-2, 3,1);
    mesh14.rotation.set(0,-0,-.1);
    mesh14.castShadow = true;

    //pantalon DER
var geometry06 = new RoundedBoxGeometry(4,20,4,6,200);
    var material06 = new THREE.MeshBasicMaterial({
        color: 0x90A39C
    });
    var mesh15= new THREE.Mesh(geometry06, material06);
    //scene.add(mesh15);
    mesh15.position.set(-2, 3,1);
    mesh15.rotation.set(0,-0,-.1);
    mesh15.castShadow = true;

    //pie IZ
var geometry06 = new RoundedBoxGeometry(3,22,3,6,200);
    var material06 = new THREE.MeshBasicMaterial({
        color: 0x000000
    });
    var mesh16 = new THREE.Mesh(geometry06, material06);
    //scene.add(mesh16);
    mesh16.position.set(6, 3,1);
    mesh16.rotation.set(0,0,.1);
    mesh16.castShadow = true;
    //pantalon IZ
var geometry06 = new RoundedBoxGeometry(4,20,4,6,200);
    var material06 = new THREE.MeshBasicMaterial({
        color: 0x90A39C
    });
    var mesh17 = new THREE.Mesh(geometry06, material06);
    //scene.add(mesh17);
    mesh17.position.set(6, 3,1);
    mesh17.rotation.set(0,0,.1);
    mesh17.castShadow = true;

var h2= new THREE.Group();
       h2.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17);
    
       return h2;   


}



