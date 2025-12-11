 import* as THREE from "../js/three.module.js";


  export default function a1({x,y,z}){


/// ______creacion de arbol base 1_________
 var geometry01 = new THREE.ConeGeometry(85, 70, 60);
 var material01 = new THREE.MeshLambertMaterial({
        color: 0x0a7f2e,
    });  
    var mesh01 = new THREE.Mesh(geometry01, material01);
    mesh01.position.set(0, 90, 0);
    //scene.add(mesh01); 

/// ______creacion de arbol base 2_________
 var geometry02 = new THREE.ConeGeometry(65, 70, 60);
 var material02 = new THREE.MeshLambertMaterial({
        color: 0x0a7f2e,
    });  
    var mesh02 = new THREE.Mesh(geometry02, material02);
    mesh02.position.set(0, 135, 0);
   // scene.add(mesh02); 

    /// ______creacion de arbol base 3 punta _________
 var geometry03 = new THREE.ConeGeometry(60, 70, 60);
 var material03 = new THREE.MeshLambertMaterial({
        color: 0x0a7f2e,
    });   
    var mesh03 = new THREE.Mesh(geometry03, material03);
    mesh03.position.set(0, 180, 0);
   // scene.add(mesh03);
    //_____TRONCO______  
var geometry04 = new THREE.CylinderGeometry(0, 20, 60, 70);
    var material04 = new THREE.MeshLambertMaterial({ 
        color: 0x8b5a2b 
    });

    var mesh04 = new THREE.Mesh(geometry04, material04);
    mesh04.position.set(0, 40, 0); 
    //scene.add(mesh04);
 // Estrellax
    var geometry05= new THREE.OctahedronGeometry(10);
    var material05 = new THREE.MeshLambertMaterial({ 
        color: 0xffd700, 
        shininess: 200 });
    var mesh05 = new THREE.Mesh(geometry05, material05);
    mesh05.position.set(0, 220, 0);
    //scene.add(mesh05);

    var arbol2 = new THREE.Group();
       arbol2.add(mesh01,mesh02,mesh03,mesh04,mesh05);
       arbol2.position.set(x,y,z);
    
       return arbol2;   
    } 