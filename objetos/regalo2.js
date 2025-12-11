 import* as THREE from "../js/three.module.js";
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"


  export default function re2({x,y,z}){

     //regalo
   var geometry03 = new THREE.BoxGeometry(20,20,20);
    var material03 = new THREE.MeshBasicMaterial({
        color: 0x1849C9
    });
    var mesh03 = new THREE.Mesh(geometry03, material03);
    //scene.add(mesh03);
    mesh03.position.set(0,13);
    mesh03.rotation.set(0,0,0);
    mesh03.castShadow = true;

//regalo tapa
   var geometry03 = new THREE.BoxGeometry(21.3,5,21.3);
    var material03 = new THREE.MeshBasicMaterial({
        color: 0x631808

    });
    var mesh04 = new THREE.Mesh(geometry03, material03);
    //scene.add(mesh04);
    mesh04.position.set(0,22);
    mesh04.rotation.set(0,0,0);
    mesh04.castShadow = true;

//Lineas amarillas 1
   var geometry03 = new THREE.BoxGeometry(3,17,20.3);
    var material03 = new THREE.MeshBasicMaterial({
        color: 0xEBDF57
    });
    var mesh05 = new THREE.Mesh(geometry03, material03);
    //scene.add(mesh05);
    mesh05.position.set(0,11.6);
    mesh05.rotation.set(0,0,0);
    mesh05.castShadow = true;

//Lineas amarillas 2
   var geometry03 = new THREE.BoxGeometry(3,17,20.3);
    var material03 = new THREE.MeshBasicMaterial({
        color: 0xEBDF57
    });
    var mesh06 = new THREE.Mesh(geometry03, material03);
    //scene.add(mesh06);
    mesh06.position.set(0,11.6);
    mesh06.rotation.set(0,55,0);
    mesh06.castShadow = true;

//Moño
   var geometry06 = new RoundedBoxGeometry(4,4,4,12,19);
    var material06 = new THREE.MeshBasicMaterial({
        color: 0xEBDF57
    });
    var mesh07 = new THREE.Mesh(geometry06, material06);
    //scene.add(mesh07);
    mesh07.position.set(0,25,0);
    mesh07.rotation.set(0,0,0);
    mesh07.castShadow = true; 

//Moño der

    var geometry01 = new THREE.TorusGeometry(2,1, 5,50,20);
    var material01 = new THREE.MeshBasicMaterial({
        color: 0xEBDF57
    });
    var mesh08 = new THREE.Mesh(geometry01, material01);
    mesh08.position.set(2, 26.4, 0);
   // scene.add(mesh08);
    mesh08.castShadow = true; 

//Moño iz

    var geometry01 = new THREE.TorusGeometry(2,1, 5,50,20);
    var material01 = new THREE.MeshBasicMaterial({
        color: 0xEBDF57
    });
    var mesh09 = new THREE.Mesh(geometry01, material01);
    mesh09.position.set(-2, 26.4, 0);
    //scene.add(mesh09);
    mesh09.castShadow = true; 


var regalo2= new THREE.Group();
       regalo2.add(mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09);
    
       return regalo2;   


}