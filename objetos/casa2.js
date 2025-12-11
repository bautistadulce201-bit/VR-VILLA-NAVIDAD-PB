 import* as THREE from "../js/three.module.js";


  export default function c({x,y,z}){

    // Paredes tipo galleta 
    var geometry1 = new THREE.BoxGeometry(150, 100, 120);
    var material1 = new THREE.MeshLambertMaterial({ color: 0x6EF0F5
 });
    var mesh01  = new THREE.Mesh(geometry1, material1);
    mesh01.position.y = 50;
    //scene.add(mesh01);

    // Techo rojo
    var geometry2 = new THREE.ConeGeometry(110, 90, 4);
    var material2 = new THREE.MeshLambertMaterial({ 
        color: 0xaa0000 });
    var mesh02 = new THREE.Mesh(geometry2, material2);
    mesh02.rotation.y = Math.PI / 4;
  mesh02.position.set(0,145,0);
    //scene.add(mesh02);

    
    // Puerta
    var geometry4 = new THREE.BoxGeometry(30, 50, 2);
    var material4 = new THREE.MeshLambertMaterial({ 
        color: 0x8b4b23 });
    var mesh04 = new THREE.Mesh(geometry4, material4);
    mesh04.position.set(0, 25, 65);
    //scene.add(mesh04);

    // Marco nevado de la puerta
    var geometry5 = new THREE.BoxGeometry(34, 54, 2);
    var material5 = new THREE.MeshLambertMaterial({ 
        color: 0xffffff });
    var mesh05 = new THREE.Mesh(geometry5, material5);
    mesh05.position.set(0, 25, 63.5);
    //scene.add(mesh05);

    // Ventanas laterales 
    var geometry6 = new THREE.BoxGeometry(22, 22, 2);
    var material6 = new THREE.MeshLambertMaterial({ color: 0x87cefa });

    var mesh06 = new THREE.Mesh(geometry6, material6);
    mesh06.position.set(-40, 55, 62);
    //scene.add(mesh06);

    var mesh07 = new THREE.Mesh(geometry6, material6);
    mesh07.position.set(40, 55, 62);
    //scene.add(mesh07);

    // Ventana circular
    var geometry8 = new THREE.CircleGeometry(12, 32);
    var material8 = new THREE.MeshLambertMaterial({ color: 0x87cefa });
    var mesh08 = new THREE.Mesh(geometry8, material8);
    mesh08.position.set(0, 80, 63);
    //scene.add(mesh08);

    // Chimenea
    var geometry9 = new THREE.BoxGeometry(25, 60, 25);
    var material9 = new THREE.MeshLambertMaterial({ color: 0x5b3824 });
    var mesh09 = new THREE.Mesh(geometry9, material9);
    mesh09.position.set(60, 125, -20);
    //scene.add(mesh09);

    // Borde nevado de chimenea
    var geometry10 = new THREE.BoxGeometry(30, 6, 30);
    var material10 = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var mesh10 = new THREE.Mesh(geometry10, material10);
    mesh10.position.set(60, 155, -20);
    //scene.add(mesh10);

//Techo de nive
    var geometry11= new THREE.BoxGeometry(165, 4, 170);
    var material11 = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var mesh11 = new THREE.Mesh(geometry11, material11);
    mesh11.position.set(0, 101, 0);
    //scene.add(mesh11);

    var casa = new THREE.Group();
           casa.add(mesh01,mesh02,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11);
        
           return casa;   

  }