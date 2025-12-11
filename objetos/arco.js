import* as THREE from "../js/three.module.js";
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"


  export default function a({x,y,z}){
    
    
  /// creacion de objeto
//columna iz
   var geometry01 = new THREE.BoxGeometry(8,30,15);
    var material01 = new THREE.MeshBasicMaterial({
        color: 0x8F1515
    });
    var mesh01 = new THREE.Mesh(geometry01, material01);
    //scene.add(mesh01);
    mesh01.position.set(-30,15);
    mesh01.rotation.set(0,0,0);
    mesh01.castShadow = true;

//columna der
   var geometry02 = new THREE.BoxGeometry(8,30,15);
    var material02 = new THREE.MeshBasicMaterial({
        color: 0x8F1515
    });
    var mesh02 = new THREE.Mesh(geometry02, material02);
    //scene.add(mesh02);
    mesh02.position.set(20,15);
    mesh02.rotation.set(0,0,0);
    mesh02.castShadow = true;

//columna iz abajo
   var geometry03 = new THREE.BoxGeometry(11,5,18);
    var material03 = new THREE.MeshBasicMaterial({
        color: 0x6E0000
    });
    var mesh03 = new THREE.Mesh(geometry03, material03);
    //scene.add(mesh03);
    mesh03.position.set(-30,2.7);
    mesh03.rotation.set(0,0,0);
    mesh03.castShadow = true;

//columna der abajo
   var geometry04 = new THREE.BoxGeometry(11,5,18);
    var material04 = new THREE.MeshBasicMaterial({
        color: 0x6E0000
    });
    var mesh04 = new THREE.Mesh(geometry04, material04);
  //  scene.add(mesh04);
    mesh04.position.set(20,2.7);
    mesh04.rotation.set(0,0,0);
    mesh04.castShadow = true;

//columna iz superior
   var geometry05 = new THREE.BoxGeometry(11,5,18);
    var material05 = new THREE.MeshBasicMaterial({
        color: 0x6E0000
    });
    var mesh05 = new THREE.Mesh(geometry05, material05);
    //scene.add(mesh05);
    mesh05.position.set(-30,30);
    mesh05.rotation.set(0,0,0);
    mesh05.castShadow = true;

//columna der superior
   var geometry06 = new THREE.BoxGeometry(11,5,18);
    var material06 = new THREE.MeshBasicMaterial({
        color: 0x6E0000
    });
    var mesh06 = new THREE.Mesh(geometry06, material06);
    //scene.add(mesh06);
    mesh06.position.set(20,30);
    mesh06.rotation.set(0,0,0);
    mesh06.castShadow = true;

//columna iz hasta abajo
   var geometry07 = new THREE.BoxGeometry(15,3,22);
    var material07 = new THREE.MeshBasicMaterial({
        color: 0xE6DFDF
    });
    var mesh07 = new THREE.Mesh(geometry07, material07);
    //scene.add(mesh07);
    mesh07.position.set(-30,1.7);
    mesh07.rotation.set(0,0,0);
    mesh07.castShadow = true;

//columna der hasta abajo
   var geometry08 = new THREE.BoxGeometry(15,3,22);
    var material08 = new THREE.MeshBasicMaterial({
        color: 0xE6DFDF
    });
    var mesh08 = new THREE.Mesh(geometry08, material08);
    //scene.add(mesh08);
    mesh08.position.set(20,1.7);
    mesh08.rotation.set(0,0,0);
    mesh08.castShadow = true;

//Curva del arco
    var geometry09 = new THREE.TorusGeometry(25, 5, 28, 100, Math.PI);
     var material09 = new THREE.MeshBasicMaterial({ 
         color: 0x8F1515
    });
    var mesh09 = new THREE.Mesh(geometry09, material09);
    //scene.add(mesh09);
    mesh09.position.set(-5, 30, 0);
    mesh09.rotation.set(Math.PI / 100, 0, 0);
    mesh09.castShadow = true;
    
//Lineas del Arco
    var geometry010 = new THREE.TorusGeometry(25, 3, 3, 100, Math.PI);
     var material010 = new THREE.MeshBasicMaterial({ 
         color: 0xE6DFDF
    });
    var mesh010 = new THREE.Mesh(geometry010, material010);
    //scene.add(mesh010);
    mesh010.position.set(-5, 30, 5);
    mesh010.rotation.set(Math.PI / 100, 0, 0);
    mesh010.castShadow = true;

    //Lineas del Arco trasero
    var geometry11 = new THREE.TorusGeometry(25, 3, 3, 100, Math.PI);
     var material11 = new THREE.MeshBasicMaterial({ 
         color: 0xE6DFDF
    });
    var mesh11 = new THREE.Mesh(geometry11, material11);
    //scene.add(mesh11);
    mesh11.position.set(-5, 30, -5);
    mesh11.rotation.set(Math.PI / 100, 0, 0);
    mesh11.castShadow = true;
    
//lineas de columna iz
   var geometry12 = new THREE.BoxGeometry(4,30,17);
    var material12 = new THREE.MeshBasicMaterial({
        color: 0xE6DFDF
    });
    var mesh12 = new THREE.Mesh(geometry12, material12);
    //scene.add(mesh12);
    mesh12.position.set(-30,15);
    mesh12.rotation.set(0,0,0);
    mesh12.castShadow = true;

//lineas de columna der
   var geometry13 = new THREE.BoxGeometry(4,30,17);
    var material13 = new THREE.MeshBasicMaterial({
        color: 0xE6DFDF
    });
    var mesh13 = new THREE.Mesh(geometry13, material13);
    //scene.add(mesh13);
    mesh13.position.set(20,15);
    mesh13.rotation.set(0,0,0);
    mesh13.castShadow = true;

    //Cartel
   var geometry15 = new THREE.BoxGeometry(50,15,2);
    var material15 = new THREE.MeshBasicMaterial({
        color: 0x6E0000
    });
    var mesh15 = new THREE.Mesh(geometry15, material15);
    //scene.add(mesh15);
    mesh15.position.set(-5,40,9);
    mesh15.rotation.set(0,0,0);
    mesh15.castShadow = true;
var arco= new THREE.Group();
       arco.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh010,mesh11,mesh12,mesh13,mesh15);
    
       return arco;   


}



