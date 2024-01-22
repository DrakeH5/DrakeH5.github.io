
var scene = new THREE.Scene(); //created a three.js scene

var camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,0.1,1000) //create a camera

var renderer = new THREE.WebGLRenderer({antialias: true}); //create renderer
renderer.setClearColor("lightblue"); //essentially a background color
renderer.setSize(window.innerWidth,window.innerHeight); //set renderer size to size of the page
 

document.body.appendChild(renderer.domElement); //creates a canvas with our render's specifications
renderer.domElement.id = "threeJScanvas";

window.addEventListener('resize', () => { //when the page is resized
  renderer.setSize(window.innerWidth,window.innerHeight); //resize the renderer accordingly
  camera.aspect = window.innerWidth / window.innerHeight; //re adjust aspect ratio

  camera.updateProjectionMatrix(); //just updating our camera
})



var numberOfProjects = materials.length
var radius = 40;
for(var i=0; i<numberOfProjects; i++){
    var geometry = new THREE.BoxGeometry(6, 10, 6); //creates box (width, height, depth)
    var mesh = new THREE.Mesh(geometry, materials[i]); //creates a mesh out of our box and material
    var theta = ((i+1)/(numberOfProjects+2))*360;
    xPos = radius*Math.cos(theta);
    zPos = radius*Math.sin(theta)
    mesh.position.set(xPos, 1, zPos);
    scene.add(mesh); //adds our mesh to the scene
    //platform below
    var groundPlatform = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, 1, 32), new THREE.MeshPhongMaterial({color: "#53565A"})); 
    groundPlatform.position.set(xPos, -5, zPos)
    scene.add(groundPlatform);
    var groundPlatformRing = new THREE.Mesh(new THREE.CylinderGeometry(7.1, 7.1, 1, 32), new THREE.MeshPhongMaterial({color: "dodgerblue"})); 
    groundPlatformRing.position.set(xPos, -5.1, zPos)
    scene.add(groundPlatformRing);
    /*var platformThruster = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 4, 32), new THREE.MeshPhongMaterial({color: "dodgerblue"})); 
    platformThruster.position.set(xPos, -6, zPos)
    scene.add(platformThruster);*/
    const light = new THREE.PointLight( 0xffffbb, 3, 100 );
    light.position.set(xPos, -6, zPos)
    scene.add( light ); 
}





groundPlatformRadius = 20;
var groundPlatform = new THREE.Mesh(new THREE.CylinderGeometry(1, groundPlatformRadius, 1, 64), new THREE.MeshLambertMaterial({color: "black"})); 
groundPlatform.position.y=-7
scene.add(groundPlatform);
var outergroundPlatform = new THREE.Mesh(new THREE.CylinderGeometry(1, groundPlatformRadius+1, 1, 64), new THREE.MeshLambertMaterial({color: "blue"})); 
outergroundPlatform.position.y=-7.1
scene.add(outergroundPlatform);


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



baseRotationRate = -0.003
var render = function() {
  requestAnimationFrame(render);
  if(!mouseClicked){
    camera.rotation.y += baseRotationRate;
  }
  renderer.render(scene, camera); //just render (show) everything on our canvas
}

render();


var mouseClicked = false;
document.body.onmousedown = function(evt) {
  mouseClicked = true;
}
document.body.onmouseup = function(evt) {
  mouseClicked = false;
}
document.body.onmousemove = function(event) {
  if(mouseClicked==true){
    camera.rotation.y += event.movementX/(window.innerWidth/2)
  }
}






//clicking 
document.addEventListener('mousedown', onMouseDown, false);

function onMouseDown(e) {
    var vectorMouse = new THREE.Vector3( //vector from camera to mouse
        -(window.innerWidth/2-e.clientX)*2/window.innerWidth,
        (window.innerHeight/2-e.clientY)*2/window.innerHeight,
        -1/Math.tan((55/2)*Math.PI/180)); //55/2 is half of camera frustum angle 45 degree
    vectorMouse.applyQuaternion(camera.quaternion);
    vectorMouse.normalize();        

    for(var i=0; i<numberOfProjects; i++){
      var theta = (i/numberOfProjects)*360;
      var vectorObject = new THREE.Vector3(); //vector from camera to object
      vectorObject.set(radius*Math.cos(theta) - camera.position.x,
                      1 - camera.position.y,
                      radius*Math.sin(theta) - camera.position.z);
      vectorObject.normalize();
      if (vectorMouse.angleTo(vectorObject)*180/Math.PI < 10) {
          console.log("project " + i)
          window.open(links[i], '_blank');
      }
    }
}