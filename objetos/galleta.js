 import* as THREE from "../js/three.module.js";


  export default function g1({x,y,z}){
    // Cabeza
var geometry2 = new THREE.SphereGeometry(22, 32, 32);
var material2 = new THREE.MeshLambertMaterial({ 
    color: 0xc67a3a });
var mesh02 = new THREE.Mesh(geometry2, material2);
mesh02.position.y = 80;
//scene.add(mesh02);

// Cuerpo
var geometry3 = new THREE.BoxGeometry(45, 60, 20);
var material2 = new THREE.MeshLambertMaterial({ 
    color: 0xc67a3a });
var mesh03 = new THREE.Mesh(geometry3, material2);
mesh03.position.y = 35;
//scene.add(mesh03);

// Brazos
var geometry4 = new THREE.CylinderGeometry(7, 7, 40, 32);

var mesh04 = new THREE.Mesh(geometry4, material2);
mesh04.position.set(-35, 40, 0);
mesh04.rotation.z = 1.5708;
//scene.add(mesh04);

var mesh05 = new THREE.Mesh(geometry4, material2);
mesh05.position.set(35, 40, 0);
mesh05.rotation.z = 1.5708;
//scene.add(mesh05);

// Piernas
var geometry5 = new THREE.BoxGeometry(18, 45, 18);

var mesh06 = new THREE.Mesh(geometry5, material2);
mesh06.position.set(-12, -10, 0);
//scene.add(mesh06);

var mesh07 = new THREE.Mesh(geometry5, material2);
mesh07.position.set(12, -10, 0);
//scene.add(mesh07);

// Ojos
var material3 = new THREE.MeshLambertMaterial({ 
    color: 0xffffff });
var material4 = new THREE.MeshLambertMaterial({ 
    color: 0x000000 });

var geometry6 = new THREE.SphereGeometry(4, 16, 16);
var geometry7 = new THREE.SphereGeometry(2, 16, 16);

var mesh08 = new THREE.Mesh(geometry6, material3);
mesh08.position.set(-8, 85, 18);
//scene.add(mesh08);

var mesh09 = new THREE.Mesh(geometry6, material3);
mesh09.position.set(8, 85, 18);
//scene.add(mesh09);

var mesh10 = new THREE.Mesh(geometry7, material4);
mesh10.position.set(-8, 85, 21);
//scene.add(mesh10);

var mesh11 = new THREE.Mesh(geometry7, material4);
mesh11.position.set(8, 85, 21);
//scene.add(mesh11);

// Boca
var geometry8 = new THREE.TorusGeometry(8, 1.2, 16, 100, Math.PI);
var material5 = new THREE.MeshLambertMaterial({ color: 0xaa0000 });
var mesh12 = new THREE.Mesh(geometry8, material5);
mesh12.rotation.x = 1.5708;
mesh12.position.set(0, 73, 14);
//scene.add(mesh12);

// Botones
var material6 = new THREE.MeshLambertMaterial({ color: 0xff0000 });
var material7 = new THREE.MeshLambertMaterial({ color: 0x00ff00 });

var geometry9 = new THREE.SphereGeometry(4, 16, 16);

var mesh13 = new THREE.Mesh(geometry9, material6);
mesh13.position.set(0, 55, 12);
//scene.add(mesh13);

var mesh14 = new THREE.Mesh(geometry9, material7);
mesh14.position.set(0, 40, 12);
//scene.add(mesh14);

var mesh15 = new THREE.Mesh(geometry9, material6);
mesh15.position.set(0, 25, 12);
//scene.add(mesh15);


var galleta = new THREE.Group();
       galleta.add(mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15);
    
       return galleta;   

  }
