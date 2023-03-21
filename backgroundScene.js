
var scene = new THREE.Scene(); //created a three.js scene

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000) //create a camera
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer({antialias: true}); //create renderer
renderer.setClearColor("black"); //essentially a background color
renderer.setSize(window.innerWidth,window.innerHeight); //set renderer size to size of the page

document.body.appendChild(renderer.domElement); //creates a canvas with our render's specifications
renderer.domElement.id = "threeJScanvas";

window.addEventListener('resize', () => { //when the page is resized
  renderer.setSize(window.innerWidth,window.innerHeight); //resize the renderer accordingly
  camera.aspect = window.innerWidth / window.innerHeight; //re adjust aspect ratio

  camera.updateProjectionMatrix(); //just updating our camera
})



var geometry = new THREE.BoxGeometry(3, 3, 3); //creates box (width, height, depth)
var material = new THREE.MeshLambertMaterial({color: "lightblue"}); //creates material
var mesh = new THREE.Mesh(geometry, material); //creates a mesh out of our box and material

scene.add(mesh); //adds our mesh to the scene


var light = new THREE.PointLight(0xFFFFFF, 1, 500); //creates a light (color, intensity, distance)
light.position.set(10, 0, 25); //sets light position (x, y, z)
scene.add(light); //add the light to the scene

var meshVeolocity = 0.05;

var render = function() {
  requestAnimationFrame(render);
/*
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  mesh.rotation.z += 0.01;
  if(Math.abs(mesh.position.z) > 3) {meshVeolocity=meshVeolocity*-1;} //if the box is past either -3 or 3 it changes the box's direction
  mesh.position.z += meshVeolocity; //moves box on z axis
*/
  mesh.rotation.z=-window.pageYOffset/1000
  renderer.render(scene, camera); //just render (show) everything on our canvas
}

render();

var loadAnimationDone = false;

this.tl = new TimelineMax().delay(0.3); //creates a new timeline with a delay of 0.3 seconds (the delay is so it doesn't look jaggy)
this.tl.to(this.mesh.scale, 1, {y: 2, ease: Expo.easeOut}); //using the timeline, we scale our box over 1 second on the y axis (width) by 2. We also make it an exponintial ease out so it does it gradualy
this.tl.to(this.mesh.position, 2, {z: -3, ease: Expo.easeOut}); //using the timeline, we move our box over 2 second on the z axis by -3. We also make it an exponintial ease out so it does it gradualy
this.tl.to(this.mesh.rotation, 3, {x: 45, ease: Expo.easeOut}); //using the timeline, we rotate our box over 3 second on the x axis by 45 degrees. We also make it an exponintial ease out so it does it gradualy
setInterval(function(){loadAnimationDone=true;},6300)

/*document.body.onwheel = function(evt) {
    if(loadAnimationDone!=false){
      mesh.rotation.z-=evt.deltaY/500;window.pageYOffset
    }
  };*/