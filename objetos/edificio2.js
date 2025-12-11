 import* as THREE from "../js/three.module.js";
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

  export default function e({x,y,z}){
//  PISO 1 DEL EDIFICIO
    var geometry2 = new THREE.BoxGeometry(180, 80, 140);
    var material2 = new THREE.MeshLambertMaterial({ 
        color: 0xC787FF });
    var mesh02 = new THREE.Mesh(geometry2, material2);
    mesh02.position.y = 40;
   // scene.add(mesh02);

    //  Ventanas piso 1
    var geometry3 = new THREE.BoxGeometry(22, 28, 2);
    var material3 = new THREE.MeshLambertMaterial({ color: 0x87cefa });

    var mesh03 = new THREE.Mesh(geometry3, material3);
    mesh03.position.set(-50, 45, 71);
   // scene.add(mesh03);
    
    var mesh05 = new THREE.Mesh(geometry3, material3);
    mesh05.position.set(50, 45, 71);
    //scene.add(mesh05);

    // -------------------------------------------------------
    // PISO 2 DEL EDIFICIO
    var geometry4 = new THREE.BoxGeometry(160, 80, 120);
    var material4 = new THREE.MeshLambertMaterial({ color:
         0xC787FF });
    var mesh06 = new THREE.Mesh(geometry4, material4);
    mesh06.position.y = 120;
    //scene.add(mesh06);

    //  Ventanas piso 2
    var geometry5 = new THREE.BoxGeometry(22, 26, 2);
    var material5 = new THREE.MeshLambertMaterial({ color: 0x87cefa });

    var mesh07 = new THREE.Mesh(geometry5, material5);
    mesh07.position.set(-40, 125, 61);
    //scene.add(mesh07);

    var mesh08 = new THREE.Mesh(geometry5, material5);
    mesh08.position.set(0, 125, 61);
   // scene.add(mesh08);

    var mesh09 = new THREE.Mesh(geometry5, material5);
    mesh09.position.set(40, 125, 61);
    //scene.add(mesh09);

    // -------------------------------------------------------
    // PISO 3 DEL EDIFICIO
    var geometry6 = new THREE.BoxGeometry(130, 70, 100);
    var material6 = new THREE.MeshLambertMaterial({ color: 
        0xC787FF });
    var mesh10 = new THREE.Mesh(geometry6, material6);
    mesh10.position.y = 195;
    //scene.add(mesh10);

    //  Ventanas piso 3
    var geometry7 = new THREE.BoxGeometry(20, 24, 2);
    var material7 = new THREE.MeshLambertMaterial({ color: 0x87cefa });

    var mesh11 = new THREE.Mesh(geometry7, material7);
    mesh11.position.set(-30, 195, 51);
   // scene.add(mesh11);

    var mesh12 = new THREE.Mesh(geometry7, material7);
    mesh12.position.set(30, 195, 51);
    //scene.add(mesh12);

    // -------------------------------------------------------
    //  TECHO NAVIDEÑO
    var geometry8 = new THREE.ConeGeometry(90, 70, 4);
    var material8 = new THREE.MeshLambertMaterial({ color: 0xaa0000 });
    var mesh13 = new THREE.Mesh(geometry8, material8);
    mesh13.rotation.y = 0.78;
    mesh13.position.set(0, 265, 0);
    //scene.add(mesh13);

    // nieve sobre los pisos
    var geometry9 = new THREE.BoxGeometry(185, 4, 145);
    var material9 = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var mesh14 = new THREE.Mesh(geometry9, material9);
    mesh14.position.y = 80;
    //scene.add(mesh14);

    var geometry10 = new THREE.BoxGeometry(165, 4, 125);
    var material10 = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var mesh15 = new THREE.Mesh(geometry10, material10);
    mesh15.position.y = 160;
    //scene.add(mesh15);

    var geometry11 = new THREE.BoxGeometry(135, 4, 135);
    var material11 = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var mesh16 = new THREE.Mesh(geometry11, material11);
    mesh16.position.y = 230;
    //scene.add(mesh16);

    // -------------------------------------------------------
    //  ENTRADA NAVIDEÑA
    var geometry12 = new THREE.BoxGeometry(30, 50, 2);
    var material12 = new THREE.MeshLambertMaterial({ 
        color: 0x8b4513 });
    var mesh17 = new THREE.Mesh(geometry12, material12);
    mesh17.position.set(0, 25, 75);
    //scene.add(mesh17);

    var geometry13 = new THREE.BoxGeometry(36, 56, 2);
    var material13 = new THREE.MeshLambertMaterial({ color: 0xffffff });
    var mesh18 = new THREE.Mesh(geometry13, material13);
    mesh18.position.set(0, 25, 72.5);
    //scene.add(mesh18);

    // -------------------------------------------------------
    

    // Esferas
    var geometry15 = new THREE.SphereGeometry(5, 16, 16);
    var material15 = new THREE.MeshLambertMaterial({ color: 0xff0000 });

    var mesh21 = new THREE.Mesh(geometry15, material15);
    mesh21.position.set(-40, 78, 75);
    //scene.add(mesh21);

    var mesh22 = new THREE.Mesh(geometry15, material15);
    mesh22.position.set(40, 78, 75);
    //scene.add(mesh22);

    var mesh23 = new THREE.Mesh(geometry15, material15);
    mesh23.position.set(-35, 160, 65);
    //scene.add(mesh23);

    var mesh24 = new THREE.Mesh(geometry15, material15);
    mesh24.position.set(35, 160, 65);
    //scene.add(mesh24);

    //bolita ultima
var geometry16 = new THREE.SphereGeometry(9, 16, 16);
    var material16 = new THREE.MeshLambertMaterial({ color: 0xffffff });
var mesh25 = new THREE.Mesh(geometry16, material16);
    mesh25.position.set(0, 305, 0);
    //scene.add(mesh25);



var edificio = new THREE.Group();
       edificio.add(mesh02,mesh03,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17,mesh18,mesh21,mesh22,mesh23,mesh24,mesh25);
       return edificio;   


  }