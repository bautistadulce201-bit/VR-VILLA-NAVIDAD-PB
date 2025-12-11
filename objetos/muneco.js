 import* as THREE from "../js/three.module.js";


  export default function m1({x,y,z}){


//  comienza codigo Espacio para colocar los objetos
  
//_______base muneco de nieve________

var geometry02 = new THREE.SphereGeometry(80, 32, 32,100);
var material02 = new THREE.MeshLambertMaterial({ 
color: 0xFFFFFF
     });

var mesh02 = new THREE.Mesh(geometry02, material02); 
//scene.add(mesh02);
mesh02.position.set(0, 100,0);

//_____Panza______

var geometry03 = new THREE.SphereGeometry(60, 32, 32,100);
var material03= new THREE.MeshLambertMaterial({ 
color: 0xFFFFFF
     });

var mesh03 = new THREE.Mesh(geometry03, material03); 
//scene.add(mesh03);
mesh03.position.set(0, 200,0);
//________CABEZA_______

var geometry01 = new THREE.SphereGeometry(50, 32, 32,100);
var material01= new THREE.MeshLambertMaterial({ 
color: 0xFFFFFF
     });

var mesh01 = new THREE.Mesh(geometry01, material01); 
//scene.add(mesh03);
mesh01.position.set(0, 290,0);
//________ojo_______

var geometry04 = new THREE.SphereGeometry(5, 16, 16);
    var material04 = new THREE.MeshLambertMaterial({ 
        color: 0x000000 
    });
    var mesh04 = new THREE.Mesh(geometry04, material04); 
//scene.add(mesh04);
mesh04.position.set(-15, 300,45);
    
//________ojo 2_______

var geometry05= new THREE.SphereGeometry(5, 16, 16);
    var material05 = new THREE.MeshLambertMaterial({ 
        color: 0x000000 
    });
    var mesh05 = new THREE.Mesh(geometry05, material05); 
//scene.add(mesh05);
mesh05.position.set(15, 300,45);
//_______Nariz_______-
var geometry06 = new THREE.ConeGeometry(8, 40, 150);
    var material06 = new THREE.MeshLambertMaterial({
         color: 0xff6600 
        });
    var mesh06 = new THREE.Mesh(geometry06, material06);
    mesh06.rotation.x = Math.PI / 2;
    mesh06.position.set(0, 285, 55);
    //scene.add(mesh06); 
//_______SOMBRERO_______

 var geometry07 = new THREE.CylinderGeometry(50, 20, 12, 60);
    var material07 = new THREE.MeshLambertMaterial({ 
        color: 0x000000 
    });
    var mesh07 = new THREE.Mesh(geometry07, material07);
    mesh07.position.set(0, 330, 0);
 //scene.add(mesh07); 
 //_______SOMBRERO_______

 var geometry08= new THREE.CylinderGeometry(20, 30, 50, 90);
    var material08 = new THREE.MeshLambertMaterial({ 
        color: 0x000000 
    });
    var mesh08 = new THREE.Mesh(geometry08, material08);
    mesh08.position.set(0, 355, 0);
 //scene.add(mesh08); 
 //______ Bufanda_______
 var geometry09 = new THREE.TorusGeometry(45, 10, 50, 100);
    var material09 = new THREE.MeshBasicMaterial({ 
        color: 0xff0000
     });
    var mesh09 = new THREE.Mesh(geometry09, material09);
    mesh09.rotation.x = Math.PI / 2;
    mesh09.position.set(0, 250, -1);
    //scene.add(mesh09);  
//______Brazos______

var geometry10= new THREE.CylinderGeometry(3, 4, 100, 10);
 var material10 = new THREE.MeshBasicMaterial({ 
    color: 0x8b4513 
});
 var mesh10 = new THREE.Mesh(geometry10, material10);
    mesh10.position.set(65, 200, 10);
//scene.add(mesh10);
mesh10.rotation.z = 2.37;

  //______Brazo 2______

var geometry11= new THREE.CylinderGeometry(3, 4, 100, 10);
 var material11 = new THREE.MeshBasicMaterial({ 
    color: 0x8b4513 
});
 var mesh11 = new THREE.Mesh(geometry11, material11);
    mesh11.position.set(-65, 200, 10);
//scene.add(mesh11);
mesh11.rotation.z = -2.37;
//_______ BOTONES 3______

var geometry12 = new THREE.SphereGeometry(7.5, 16, 16);
    var material12 = new THREE.MeshLambertMaterial({ 
        color: 0x000000 
    });
    var mesh12 = new THREE.Mesh(geometry12, material12); 
//scene.add(mesh12);
mesh12.position.set(0, 200,56); 

//_______ BOTONES 2______

var geometry13 = new THREE.SphereGeometry(7.5, 16, 16);
    var material13 = new THREE.MeshLambertMaterial({ 
        color: 0x000000 
    });
    var mesh13 = new THREE.Mesh(geometry13, material13); 
//scene.add(mesh13);
mesh13.position.set(0, 170,49);  

//_______ BOTONES 1______

var geometry14 = new THREE.SphereGeometry(7.5, 16, 16);
    var material14 = new THREE.MeshLambertMaterial({ 
        color: 0x000000 
    });
    var mesh14 = new THREE.Mesh(geometry14, material14); 
//scene.add(mesh14);
mesh14.position.set(0, 227,50); 
  
//_______BocA 1_____

var geometry15 = new THREE.SphereGeometry(2, 16, 16);
    var material15 = new THREE.MeshLambertMaterial({ 
        color: 0x000000 
    });
    var mesh15 = new THREE.Mesh(geometry15, material15); 
//scene.add(mesh15);
mesh15.position.set(0, 270,45); 

//_______BocA 2_____

var geometry16 = new THREE.SphereGeometry(2, 16, 16);
    var material16 = new THREE.MeshLambertMaterial({ 
        color: 0x000000 
    });
    var mesh16 = new THREE.Mesh(geometry16, material16); 
//scene.add(mesh16);
mesh16.position.set(5, 270,45); 
//_______BocA 3_____

var geometry17 = new THREE.SphereGeometry(2, 16, 16);
    var material17 = new THREE.MeshLambertMaterial({ 
        color: 0x000000 
    });
    var mesh17 = new THREE.Mesh(geometry17, material17); 
//scene.add(mesh17);
mesh17.position.set(-5, 271,45); 
//_______BocA 4____

var geometry18 = new THREE.SphereGeometry(2, 16, 16);
    var material18 = new THREE.MeshLambertMaterial({ 
        color: 0x000000 
    });
    var mesh18 = new THREE.Mesh(geometry18, material18); 
//scene.add(mesh18);
mesh18.position.set(10, 271,45); 
//_______BocA 5____

var geometry20 = new THREE.SphereGeometry(2, 16, 16);
    var material20 = new THREE.MeshLambertMaterial({ 
        color: 0x000000 
    });
    var mesh20 = new THREE.Mesh(geometry20, material20); 
//scene.add(mesh20);
mesh20.position.set(15, 273,45); 
//_______BocA 6____

var geometry19 = new THREE.SphereGeometry(2, 16, 16);
    var material19 = new THREE.MeshLambertMaterial({ 
        color: 0x000000 
    });
    var mesh19 = new THREE.Mesh(geometry19, material19); 
//scene.add(mesh19);
mesh19.position.set(-10, 273,45); 

var muneco = new THREE.Group();
       muneco.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17,mesh18,mesh19,mesh20);
    
       return muneco;   
    } 