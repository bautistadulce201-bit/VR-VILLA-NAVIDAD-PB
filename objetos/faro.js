 import* as THREE from "../js/three.module.js";


  export default function f({x,y,z}){




// FARO 1 

//  Base
var geometry2 = new THREE.BoxGeometry(20, 6, 20);
var material2 = new THREE.MeshLambertMaterial({ 
    color: 0x2a2a2a });
var mesh01 = new THREE.Mesh(geometry2, material2);
mesh01.position.y = 3;
//scene.add(mesh02);

// Poste
var geometry3 = new THREE.CylinderGeometry(4, 4, 80, 16);
var material3 = new THREE.MeshLambertMaterial({ 
    color: 0x3a3a3a });
var mesh02 = new THREE.Mesh(geometry3, material3);
mesh02.position.y = 40;
//scene.add(mesh03);

//  Caja de luz
var geometry4 = new THREE.BoxGeometry(22, 22, 22);
var material4 = new THREE.MeshLambertMaterial({
  color: 0xFCFBCC,
});
var mesh03 = new THREE.Mesh(geometry4, material4);
mesh03.position.y = 85;
//scene.add(mesh04);

//  Techo
var geometry5 = new THREE.ConeGeometry(16, 10, 16);
var material5 = new THREE.MeshLambertMaterial({ color: 0x8b0000 });
var mesh04 = new THREE.Mesh(geometry5, material5);
mesh04.position.y = 100;
//scene.add(mesh05);

//  Esfera decorativa
var geometry6 = new THREE.SphereGeometry(4, 16, 16);
var material6 = new THREE.MeshLambertMaterial({ 
    color: 0xffffff });
var mesh05 = new THREE.Mesh(geometry6, material6);
mesh05.position.y = 108;
//scene.add(mesh06);


var faro = new THREE.Group();
       faro.add(mesh01,mesh02,mesh03,mesh04,mesh05);
    
       return faro;   
}
