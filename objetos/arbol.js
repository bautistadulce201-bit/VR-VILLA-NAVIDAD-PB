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
//_____Esfera_______

var geometry06 = new THREE.SphereGeometry(5, 16, 16);
var material06 = new THREE.MeshLambertMaterial({ 
        color: 0x8b5 
    });
    var mesh06 = new THREE.Mesh(geometry06, material06);
    mesh06.position.set(0, 200, 14);
    //scene.add(mesh06);
    //_____Esfera 2_______

var geometry07 = new THREE.SphereGeometry(5, 16, 16);
var material07 = new THREE.MeshLambertMaterial({ 
        color: 0x85ff7865
    });
    var mesh07 = new THREE.Mesh(geometry07, material07);
    mesh07.position.set(30, 180, 14);
    //scene.add(mesh07);
//_____Esfera 3_______

var geometry08 = new THREE.SphereGeometry(5, 16, 16);
var material08 = new THREE.MeshLambertMaterial({ 
        color: 0xF5F527
    });
    var mesh08 = new THREE.Mesh(geometry08, material08);
    mesh08.position.set(-30, 180, 14);
    //scene.add(mesh08);

//_____Esfera 4_______

var geometry09 = new THREE.SphereGeometry(5, 16, 16);
var material09 = new THREE.MeshLambertMaterial({ 
        color: 0xF5F5
    });
    var mesh09 = new THREE.Mesh(geometry09, material09);
    mesh09.position.set(0, 180, 30);
   // scene.add(mesh09);

 //_____Esfera 5_______

var geometry10 = new THREE.SphereGeometry(5, 16, 16);
var material10 = new THREE.MeshLambertMaterial({ 
        color: 0xF58427
    });
    var mesh10 = new THREE.Mesh(geometry10, material10);
    mesh10.position.set(-35, 180, -6);
   // scene.add(mesh10); 
mesh10.rotation.z = -2

//_____Esfera 6_______

var geometry11 = new THREE.SphereGeometry(5, 16, 16);
var material11 = new THREE.MeshLambertMaterial({ 
        color: 0xF584
    });
    var mesh11 = new THREE.Mesh(geometry11, material11);
    mesh11.position.set(-15, 180, -30);
    //scene.add(mesh11); 
mesh11.rotation.z = -2
 
//_____Esfera 7_______

var geometry12 = new THREE.SphereGeometry(5, 16, 16);
var material12 = new THREE.MeshLambertMaterial({ 
        color: 0xF58
    });
    var mesh12 = new THREE.Mesh(geometry12, material12);
    mesh12.position.set(15, 180, -30);
   // scene.add(mesh12); 
mesh12.rotation.z = -2

//_____Esfera 8_______

var geometry121 = new THREE.SphereGeometry(5, 16, 16);
var material121 = new THREE.MeshLambertMaterial({ 
        color: 0xF58
    });
    var mesh121 = new THREE.Mesh(geometry121, material121);
    mesh121.position.set(15, 180, -30);
    //scene.add(mesh121); 
mesh121.rotation.z = -2

//_____Esfera 9_______

var geometry13 = new THREE.SphereGeometry(5, 16, 16);
var material13 = new THREE.MeshLambertMaterial({ 
        color: 0xEB0564
    });
    var mesh13 = new THREE.Mesh(geometry13, material13);
    mesh13.position.set(33, 181, -10); 
    //scene.add(mesh13); 
mesh13.rotation.z = -2
 
//_____esfera abajo

//_____Esfera 2_______

var geometry14 = new THREE.SphereGeometry(5, 16, 16);
var material14 = new THREE.MeshLambertMaterial({ 
        color: 0xDD9EF7
    });
    var mesh14 = new THREE.Mesh(geometry14, material14);
    mesh14.position.set(30, 160, 40); 
    //scene.add(mesh14);
//_____Esfera 3_______ 

var geometry15 = new THREE.SphereGeometry(5, 16, 16);
var material15 = new THREE.MeshLambertMaterial({ 
        color: 0xA2C0FA
    });
    var mesh15 = new THREE.Mesh(geometry15, material15);
    mesh15.position.set(-30, 160, 40);
    //scene.add(mesh15);

//_____Esfera 4_______

var geometry16 = new THREE.SphereGeometry(5, 16, 16);
var material16 = new THREE.MeshLambertMaterial({ 
        color: 0xFFFFFF
    });
    var mesh16 = new THREE.Mesh(geometry16, material16);
    mesh16.position.set(0, 160, 50);
   // scene.add(mesh16);

 //_____Esfera 5_______

var geometry17 = new THREE.SphereGeometry(5, 16,16);
var material17 = new THREE.MeshLambertMaterial({ 
        color: 0xF58427
    });
    var mesh17 = new THREE.Mesh(geometry17, material17);
    mesh17.position.set(-50, 160, 10);
   // scene.add(mesh17);  
 

//_____Esfera 6_______ 

var geometry18 = new THREE.SphereGeometry(5, 16, 16);
var material18 = new THREE.MeshLambertMaterial({ 
        color: 0xA1F7FF
    });
    var mesh18 = new THREE.Mesh(geometry18, material18);
    mesh18.position.set(50, 160, 10);
    //scene.add(mesh18); 
 
//_____Esfera 7_______

var geometry19 = new THREE.SphereGeometry(5, 16, 16);
var material19 = new THREE.MeshLambertMaterial({ 
        color: 0xA1F7FF
    });
    var mesh19 = new THREE.Mesh(geometry19, material19);
    mesh19.position.set(-45, 160, -20);
//    scene.add(mesh19); 


//_____Esfera 8_______

var geometry20 = new THREE.SphereGeometry(5, 16, 16);
var material20 = new THREE.MeshLambertMaterial({ 
        color: 0xF580014
    });
    var mesh20 = new THREE.Mesh(geometry20, material20);
    mesh20.position.set(25, 160, -45);
    //scene.add(mesh20);  


//_____Esfera 9_______

var geometry21 = new THREE.SphereGeometry(5, 16, 16);
var material21= new THREE.MeshLambertMaterial({ 
        color: 0x7C48CF
    });
    var mesh21 = new THREE.Mesh(geometry21, material21);
    mesh21.position.set(45, 161, -15); 
   // scene.add(mesh21); 
 
//_____Esfera 9_______

var geometry22 = new THREE.SphereGeometry(5, 16, 16);
var material22= new THREE.MeshLambertMaterial({ 
        color: 0x7C48CF4
    });
    var mesh22 = new THREE.Mesh(geometry22, material22);
    mesh22.position.set(1, 161, -50); 
    //scene.add(mesh22); 
 //_____Esfera 10______

var geometry23 = new THREE.SphereGeometry(5, 16, 16);
var material23= new THREE.MeshLambertMaterial({ 
        color: 0xCF57A1

    });
    var mesh23 = new THREE.Mesh(geometry23, material23);
    mesh23.position.set(-25, 161, -45); 
    //scene.add(mesh23); 
 
    //_________-___CAPA 2 esferas___________
 //_____Esfera 2_______

var geometry24 = new THREE.SphereGeometry(5, 16, 16);
var material24 = new THREE.MeshLambertMaterial({ 
        color: 0xFF123e
    });
    var mesh24 = new THREE.Mesh(geometry24, material24);
    mesh24.position.set(30, 120, 40); 
    //scene.add(mesh24); 
//_____Esfera 3_______   

var geometry25 = new THREE.SphereGeometry(5, 16, 16);
var material25 = new THREE.MeshLambertMaterial({ 
        color: 0xA2C0FA
    });
    var mesh25 = new THREE.Mesh(geometry25, material25);
    mesh25.position.set(-30, 120, 40);
    //scene.add(mesh25);
 
//_____Esfera 4_______

var geometry26 = new THREE.SphereGeometry(5, 16, 16);
var material26 = new THREE.MeshLambertMaterial({ 
        color: 0xF55
    });
    var mesh26 = new THREE.Mesh(geometry26, material26);
    mesh26.position.set(0, 120, 50);
    //scene.add(mesh26);

 //_____Esfera 5_______

var geometry27 = new THREE.SphereGeometry(5, 16,16);
var material27 = new THREE.MeshLambertMaterial({ 
        color: 0xF58f23
    });
    var mesh27 = new THREE.Mesh(geometry27, material27);
    mesh27.position.set(-50, 120, 10);
   // scene.add(mesh27);  
 

//_____Esfera 6_______ 

var geometry28 = new THREE.SphereGeometry(5, 16, 16);
var material28 = new THREE.MeshLambertMaterial({ 
        color: 0xA1F7112
    });
    var mesh28 = new THREE.Mesh(geometry28, material28);
    mesh28.position.set(50, 120, 10);
    //scene.add(mesh28);  
 
//_____Esfera 7_______

var geometry29 = new THREE.SphereGeometry(5, 16, 16);
var material29 = new THREE.MeshLambertMaterial({ 
        color: 0xA1F71
    });
    var mesh29 = new THREE.Mesh(geometry29, material29);
    mesh29.position.set(-45, 120, -20);
    //scene.add(mesh29); 

 
//_____Esfera 8_______

var geometry30 = new THREE.SphereGeometry(5, 16, 16);
var material30 = new THREE.MeshLambertMaterial({ 
        color: 0xF580000
    });
    var mesh30 = new THREE.Mesh(geometry30, material30);
    mesh30.position.set(25, 120, -45);
    //scene.add(mesh30);  


//_____Esfera 9_______

var geometry31 = new THREE.SphereGeometry(5, 16, 16);
var material31= new THREE.MeshLambertMaterial({ 
        color: 0xD41234e
    });
    var mesh31 = new THREE.Mesh(geometry31, material31);
    mesh31.position.set(45, 121, -15); 
    //scene.add(mesh31); 
 
//_____Esfera 9_______ 

var geometry32 = new THREE.SphereGeometry(5, 16, 16);
var material32= new THREE.MeshLambertMaterial({ 
        color: 0x13D4BD
    });
    var mesh32 = new THREE.Mesh(geometry32, material32);
    mesh32.position.set(1, 121, -50); 
    //scene.add(mesh32); 
 //_____Esfera 10______

var geometry33 = new THREE.SphereGeometry(5, 16, 16);
var material33= new THREE.MeshLambertMaterial({ 
        color: 0x87Dee23 

    });
    var mesh33 = new THREE.Mesh(geometry33, material33);
    mesh33.position.set(-25, 121, -45); 
    //scene.add(mesh33); 
    //________ESFERAS CAPA 3________

  //_____Esfera 2_______

var geometry34 = new THREE.SphereGeometry(5, 16, 16);
var material34 = new THREE.MeshLambertMaterial({ 
        color: 0x85ff7865
    });
    var mesh34 = new THREE.Mesh(geometry34, material34);
    mesh34.position.set(30, 75, 55); 
   // scene.add(mesh34);
//_____Esfera 3_______

var geometry35 = new THREE.SphereGeometry(5, 16, 16);
var material35 = new THREE.MeshLambertMaterial({ 
        color: 0xF5F527
    });
    var mesh35 = new THREE.Mesh(geometry35, material35);
    mesh35.position.set(-30, 75, 55);
    //scene.add(mesh35);

//_____Esfera 4_______

var geometry36 = new THREE.SphereGeometry(5, 16, 16);
var material36 = new THREE.MeshLambertMaterial({ 
        color: 0xF5F5
    });
    var mesh36 = new THREE.Mesh(geometry36, material36);
    mesh36.position.set(0, 75, 65);
    //scene.add(mesh36);

 //_____Esfera 5_______

var geometry37 = new THREE.SphereGeometry(5, 16, 16);
var material37 = new THREE.MeshLambertMaterial({ 
        color: 0xF58427
    });
    var mesh37 = new THREE.Mesh(geometry37, material37);
    mesh37.position.set(-35, 75, -55);
    //scene.add(mesh37); 

//_____Esfera 6_______

var geometry38 = new THREE.SphereGeometry(5, 16, 16);
var material38 = new THREE.MeshLambertMaterial({ 
        color: 0xF584
    });
    var mesh38 = new THREE.Mesh(geometry38, material38);
    mesh38.position.set(-15, 75, -65);
    //scene.add(mesh38); 

 
//_____Esfera 7_______

var geometry39 = new THREE.SphereGeometry(5, 16, 16);
var material39 = new THREE.MeshLambertMaterial({ 
        color: 0xF58
    });
    var mesh39 = new THREE.Mesh(geometry39, material39);
    mesh39.position.set(15, 75, -65);
   //scene.add(mesh12); 
mesh39.rotation.z = -2

//_____Esfera 8_______

var geometry40 = new THREE.SphereGeometry(5, 16, 16);
var material40 = new THREE.MeshLambertMaterial({ 
        color: 0xF58
    });
    var mesh40 = new THREE.Mesh(geometry40, material40);
    mesh40.position.set(55, 75, 30);
    //scene.add(mesh40); 
 

//_____Esfera 9_______

var geometry41 = new THREE.SphereGeometry(5, 16, 16);
var material41 = new THREE.MeshLambertMaterial({ 
        color: 0xEB0564
    });
    var mesh41 = new THREE.Mesh(geometry41, material41);
    mesh41.position.set(33, 75, -55); 
    //scene.add(mesh41); 

//_____Esfera 10_______

var geometry42 = new THREE.SphereGeometry(5, 16, 16);
var material42 = new THREE.MeshLambertMaterial({ 
        color: 0xEffff23
    });
    var mesh42 = new THREE.Mesh(geometry42, material42);
    mesh42.position.set(60, 77, 1); 
    //scene.add(mesh42); 
//_____Esfera 9_______

var geometry43 = new THREE.SphereGeometry(5, 16, 16);
var material43 = new THREE.MeshLambertMaterial({ 
        color: 0xEffff2
    });
    var mesh43 = new THREE.Mesh(geometry43, material43);
    mesh43.position.set(-60, 75, 25);  
    //scene.add(mesh43);  
///esferas///

var geometry44= new THREE.SphereGeometry(5, 16, 16);
var material44 = new THREE.MeshLambertMaterial({ 
        color: 0xEff
    });
    var mesh44= new THREE.Mesh(geometry44, material44);
    mesh44.position.set(-66, 75, -1);   
   // scene.add(mesh44);  
///esferas///

var geometry45= new THREE.SphereGeometry(5, 16, 16);
var material45 = new THREE.MeshLambertMaterial({ 
        color: 0x674335e
    });
    var mesh45= new THREE.Mesh(geometry45, material45);
    mesh45.position.set(-56, 75, -35);   
    //scene.add(mesh45);  
//esferas///

var geometry46= new THREE.SphereGeometry(5, 16, 16);
var material46 = new THREE.MeshLambertMaterial({ 
        color: 0x617335e
    });
    var mesh46= new THREE.Mesh(geometry46, material46);
    mesh46.position.set(4, 75, -65);   
   // scene.add(mesh46);   
//esfera

var geometry47= new THREE.SphereGeometry(5, 16, 16);
var material47 = new THREE.MeshLambertMaterial({ 
        color: 0xff45e
    });
    var mesh47= new THREE.Mesh(geometry47, material47);
    mesh47.position.set(55, 75, -35);   
    //scene.add(mesh47);   

    var arbol = new THREE.Group();
       arbol.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17,mesh18,mesh19,mesh20,mesh21,mesh22,mesh23,mesh24,mesh25,mesh26,mesh27,mesh28,mesh29,mesh30,mesh31,mesh32,mesh33,mesh34,mesh35,mesh36,mesh37,mesh38,mesh39,mesh40,mesh41,mesh41,mesh42,mesh43,mesh44,mesh45,mesh46,mesh47,mesh121);
       arbol.position.set(x,y,z);
    
       return arbol;   
    } 