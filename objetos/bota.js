 import* as THREE from "../js/three.module.js";
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

  export default function b1({x,y,z}){


//Blanco de arriba
var geometry01 = new THREE.CylinderGeometry(5, 6, 2, 30,30);
    var material01 = new THREE.MeshLambertMaterial({
        color: 0xF0F0F0
    });
    var mesh01 = new THREE.Mesh(geometry01, material01);
    mesh01.position.set(2, 23, 0.3);
    //scene.add(mesh01);
    mesh01.castShadow = true; 

//fondo
var geometry02 = new THREE.CylinderGeometry(5, 5, 2, 30,30);
    var material02 = new THREE.MeshLambertMaterial({
        color: 0x525050
    });
    var mesh02 = new THREE.Mesh(geometry02, material02);
    mesh02.position.set(2, 23, 0.3);
    //scene.add(mesh02);
    mesh02.castShadow = true; 

//Bota
var geometry03 = new THREE.CylinderGeometry(5, 5, 10, 30,30);
    var material03 = new THREE.MeshLambertMaterial({
        color: 0xF54927
    });
    var mesh03 = new THREE.Mesh(geometry03, material03);
    mesh03.position.set(2, 18, 0.3);
    //scene.add(mesh03);
    mesh03.castShadow = true;
    //pie
   var geometry04 = new RoundedBoxGeometry(9.7,8,15,12,19);
    var material04 = new THREE.MeshLambertMaterial({
        color: 0xF54927
    });
    var mesh04 = new THREE.Mesh(geometry04, material04);
    //scene.add(mesh06);
    mesh04.position.set(2,12,2.8);
    mesh04.rotation.set(0,0,0);
    mesh04.castShadow = true;

    
//Dulce 1
var geometry05 = new RoundedBoxGeometry(1,5,1,4,200);
    var material05 = new THREE.MeshLambertMaterial({
        color: 0xBF1313
    });
    var mesh05 = new THREE.Mesh(geometry05, material05);
    //scene.add(mesh05);
    mesh05.position.set(1,24,1);

//Dulce 2
var geometry06 = new RoundedBoxGeometry(1,5,1,4,200);
    var material06 = new THREE.MeshLambertMaterial({
        color: 0x299129
    });
    var mesh06 = new THREE.Mesh(geometry06, material06);
    //scene.add(mesh06);
    mesh06.position.set(3,24,3);
//Dulce 3
var geometry07 = new RoundedBoxGeometry(1,5,1,4,200);
    var material07 = new THREE.MeshLambertMaterial({
        color: 0xDBC627
    });
    var mesh07 = new THREE.Mesh(geometry07, material07);
    //scene.add(mesh07);
    mesh07.position.set(-2,23,1);
    //Dulce 4
var geometry08 = new RoundedBoxGeometry(1,5,1,4,200);
    var material08 = new THREE.MeshLambertMaterial({
        color: 0xC940C3
    });
    var mesh08 = new THREE.Mesh(geometry08, material08);
    //scene.add(mesh08);
    mesh08.position.set(3,23,4);
    //Dulce 5
var geometry09 = new RoundedBoxGeometry(1,5,1,4,200);
    var material09 = new THREE.MeshBasicMaterial({
        color: 0x30BAB3
    });
    var mesh09 = new THREE.Mesh(geometry09, material09);
    //scene.add(mesh09);
    mesh09.position.set(5,24,-2);
    //Dulce 6
var geometry10 = new RoundedBoxGeometry(1,5,1,4,200);
    var material10 = new THREE.MeshLambertMaterial({
        color: 0xD48933
    });
    var mesh10 = new THREE.Mesh(geometry10, material10);
    //scene.add(mesh10);
    mesh10.position.set(1,24,-2);
    //Dulce 7
var geometry11 = new RoundedBoxGeometry(1,5,1,4,200);
    var material11= new THREE.MeshLambertMaterial({
        color: 0xF774D8
    });
    var mesh11 = new THREE.Mesh(geometry11, material11);
    //scene.add(mesh11);
    mesh11.position.set(-1,24,3);
    //Dulce 8
var geometry12 = new RoundedBoxGeometry(1,5,1,4,200);
    var material12 = new THREE.MeshLambertMaterial({
        color: 0x784B94
    });
    var mesh12 = new THREE.Mesh(geometry12, material12);
   // scene.add(mesh12);
    mesh12.position.set(1,23,-4);
    //Dulce 9
var geometry14 = new RoundedBoxGeometry(1,5,1,4,200);
    var material14 = new THREE.MeshLambertMaterial({
        color: 0x2B5BBA
    });
    var mesh14 = new THREE.Mesh(geometry14, material14);
    //scene.add(mesh06);
    mesh14.position.set(2,24,-3);
    //Dulce 10
var geometry15 = new RoundedBoxGeometry(1,5,1,4,200);
    var material15 = new THREE.MeshLambertMaterial({
        color: 0xB9EB65
    });
    var mesh15 = new THREE.Mesh(geometry15, material15);
    //scene.add(mesh15);
    mesh15.position.set(4,24,-1);


    var bota = new THREE.Group();
       bota.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh14,mesh15);
bota.position.set(x,y,z);
    
       return bota;   
  }