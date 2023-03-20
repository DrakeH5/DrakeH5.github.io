
var scene = new THREE.Scene(); //created a three.js scene

var camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,0.1,1000) //create a camera

var renderer = new THREE.WebGLRenderer({antialias: true}); //create renderer
renderer.setClearColor("lightblue"); //essentially a background color
renderer.setSize(window.innerWidth,window.innerHeight); //set renderer size to size of the page


document.body.appendChild(renderer.domElement); //creates a canvas with our render's specifications

window.addEventListener('resize', () => { //when the page is resized
  renderer.setSize(window.innerWidth,window.innerHeight); //resize the renderer accordingly
  camera.aspect = window.innerWidth / window.innerHeight; //re adjust aspect ratio

  camera.updateProjectionMatrix(); //just updating our camera
})



var numberOfProjects = materials.length
var radius = 30;
for(var i=0; i<numberOfProjects; i++){
    var geometry = new THREE.BoxGeometry(6, 10, 6); //creates box (width, height, depth)
    var mesh = new THREE.Mesh(geometry, materials[i]); //creates a mesh out of our box and material
    var theta = (i/numberOfProjects)*360;
    xPos = radius*Math.cos(theta);
    zPos = radius*Math.sin(theta)
    mesh.position.set(xPos, 0, zPos);
    scene.add(mesh); //adds our mesh to the scene
}


/*
var geometry = new THREE.BoxGeometry(500, 5, 500); //creates box (width, height, depth)
var groundMaterial = new THREE.MeshLambertMaterial({color: "green"}); //creates material
var ground = new THREE.Mesh(geometry, groundMaterial); //creates a mesh out of our box and material
ground.position.y=-8
scene.add(ground); //adds our mesh to the scene*/

var materialArray = [];
/*let texture_lf = new THREE.TextureLoader().load("./mountainProjectSkybox/negx.jpg")
let texture_dn = new THREE.TextureLoader().load("./mountainProjectSkybox/negy.jpg")
let texture_ft = new THREE.TextureLoader().load("./mountainProjectSkybox/negz.jpg")
let texture_rt = new THREE.TextureLoader().load("./mountainProjectSkybox/posx.jpg")
let texture_up = new THREE.TextureLoader().load("./mountainProjectSkybox/posy.jpg")
let texture_bk = new THREE.TextureLoader().load("./mountainProjectSkybox/posz.jpg")
*/
let texture_lf = new THREE.TextureLoader().load("./spaceProjectSkybox/skybox_left.png")
let texture_dn = new THREE.TextureLoader().load("./spaceProjectSkybox/skybox_down.png")
let texture_ft = new THREE.TextureLoader().load("./spaceProjectSkybox/skybox_front.png")
let texture_rt = new THREE.TextureLoader().load("./spaceProjectSkybox/skybox_right.png")
let texture_up = new THREE.TextureLoader().load("./spaceProjectSkybox/skybox_up.png")
let texture_bk = new THREE.TextureLoader().load("./spaceProjectSkybox/skybox_back.png")

materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}))
materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}))
materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}))
materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}))
materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}))
materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}))

for(var i=0; i<6; i++){
  materialArray[i].side = THREE.BackSide;
}

var skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
var skybox = new THREE.Mesh(skyboxGeo, materialArray);
scene.add(skybox)



const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );



baseRotationRate = -0.002
var render = function() {
  requestAnimationFrame(render);
  //camera.rotation.y += baseRotationRate;
  renderer.render(scene, camera); //just render (show) everything on our canvas
}

render();



document.body.onmousemove = function(evt) {
  camera.rotation.y-=evt.movementX/105;
  //if(Math.abs(camera.rotation.x)<1){camera.rotation.x-=evt.movementY/65;}else{camera.rotation.x-=(camera.rotation.x/Math.abs(camera.rotation.x))/100}
};

document.body.onkeydown = function (evt) {
  if(evt.keyCode==38||evt.keyCode==87) { //forwards
    var direction = new THREE.Vector3();
    camera.getWorldDirection( direction );
    camera.position.add( direction );
    camera.position.add( direction );
    camera.position.add( direction );
    camera.position.add( direction );
    camera.position.add( direction );
    camera.position.add( direction );
    camera.position.add( direction );
    camera.position.add( direction );
  }
  if(evt.keyCode==40||evt.keyCode==83) { //backwards
    var direction = new THREE.Vector3();
    camera.getWorldDirection( direction );
    camera.position.sub( direction );
  }
  if(evt.keyCode==32) { //jump
    this.camera = camera;
    this.camera.position.y+=1;
  }
  if(evt.keyCode==17) { //go down //control key
    this.camera = camera;
    this.camera.position.y-=1;
  }
};