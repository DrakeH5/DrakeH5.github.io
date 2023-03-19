
var scene = new THREE.Scene(); //created a three.js scene

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000) //create a camera

var renderer = new THREE.WebGLRenderer({antialias: true}); //create renderer
renderer.setClearColor("black"); //essentially a background color
renderer.setSize(window.innerWidth,window.innerHeight); //set renderer size to size of the page

document.body.appendChild(renderer.domElement); //creates a canvas with our render's specifications

window.addEventListener('resize', () => { //when the page is resized
  renderer.setSize(window.innerWidth,window.innerHeight); //resize the renderer accordingly
  camera.aspect = window.innerWidth / window.innerHeight; //re adjust aspect ratio

  camera.updateProjectionMatrix(); //just updating our camera
})


var material = new THREE.MeshBasicMaterial();

const drawingCanvas = document.getElementById( 'canvas' );
				const drawingContext = drawingCanvas.getContext( '2d' );

				// draw white background

				drawingContext.fillStyle = 'lightblue';
				drawingContext.fillRect( 0, 0, 128, 128 );

				// set canvas as material.map (this could be done to any map, bump, displacement etc.)

				material.map = new THREE.CanvasTexture( drawingCanvas );

var numberOfProjects = 10
var radius = 20;
for(var i=0; i<numberOfProjects; i++){
    var geometry = new THREE.BoxGeometry(6, 10, 6); //creates box (width, height, depth)
    var mesh = new THREE.Mesh(geometry, material); //creates a mesh out of our box and material
    var theta = (i/numberOfProjects)*360;
    xPos = radius*Math.cos(theta);
    zPos = radius*Math.sin(theta)
    mesh.position.set(xPos, 0, zPos);
    scene.add(mesh); //adds our mesh to the scene
}


var geometry = new THREE.BoxGeometry(100, 1, 100); //creates box (width, height, depth)
var groundMaterial = new THREE.MeshLambertMaterial({color: "lightgreen"}); //creates material
var ground = new THREE.Mesh(geometry, groundMaterial); //creates a mesh out of our box and material
ground.position.y=-8
scene.add(ground); //adds our mesh to the scene



var light = new THREE.PointLight(0xFFFFFF, 5, 500); //creates a light (color, intensity, distance)
light.position.set(0, 0, 0); //sets light position (x, y, z)
scene.add(light); //add the light to the scene



baseRotationRate = -0.002
var render = function() {
  requestAnimationFrame(render);
  camera.rotation.y += baseRotationRate;
  renderer.render(scene, camera); //just render (show) everything on our canvas
}

render();