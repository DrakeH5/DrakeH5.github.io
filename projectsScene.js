
var scene = new THREE.Scene(); //created a three.js scene

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000) //create a camera

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


var geometry = new THREE.BoxGeometry(500, 5, 500); //creates box (width, height, depth)
var groundMaterial = new THREE.MeshLambertMaterial({color: "green"}); //creates material
var ground = new THREE.Mesh(geometry, groundMaterial); //creates a mesh out of our box and material
ground.position.y=-8
scene.add(ground); //adds our mesh to the scene



const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );



baseRotationRate = -0.005
var render = function() {
  requestAnimationFrame(render);
  camera.rotation.y += baseRotationRate;
  renderer.render(scene, camera); //just render (show) everything on our canvas
}

render();