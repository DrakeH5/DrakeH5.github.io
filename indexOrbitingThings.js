var possibleSphereImgs = ["./SphereTextures/2k_mars.jpg", "./SphereTextures/2k_earth_nightmap.jpg"]

var spheregeometry = new THREE.SphereBufferGeometry(4, 32, 32);
var map = new THREE.TextureLoader().load(possibleSphereImgs[Math.floor(Math.random()*2)]);
var sphere = new THREE.Mesh(spheregeometry, new THREE.MeshBasicMaterial({map}));
sphere.position.set(0, -20, -10)
scene.add(sphere); 



var prevScroll = 0;
var overScroll = 0;
document.onscroll = function(){
    sphere.rotation.y-=(window.pageYOffset - prevScroll )/500
    if(sphere.position.y < 0 || prevScroll - window.pageYOffset > 0 || window.pageYOffset > 9000){
        if(overScroll < 1 || window.pageYOffset > 9000){
            sphere.position.y+=(window.pageYOffset - prevScroll )/200
            mesh.rotation.z=-window.pageYOffset/1000
            mesh.position.y+=(window.pageYOffset - prevScroll)/300
        } else {
            overScroll += window.pageYOffset - prevScroll;
        }
    } else {
        overScroll += window.pageYOffset - prevScroll;
    }
    prevScroll = window.pageYOffset;
    for(var i=1; i<=ortibals.length; i++){
        var theata = (2*Math.PI)*(i/ortibals.length);
        ortibals[i-1].position.set(-8*Math.sin((window.pageYOffset/1000)+theata), sphere.position.y, -8*Math.cos((window.pageYOffset/1000)+theata) - 10)
    }
}

/*
import { glTFLoader } from 'https://unpkg.com/three@0.126.0/examples/js/loaders/GLTFLoader.js';
const loader = new glTFLoader();

loader.load( 'sputnik.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} ); */