var possibleSphereImgs = ["./SphereTextures/2k_mars.jpg", "./SphereTextures/2k_earth_nightmap.jpg"]

var spheregeometry = new THREE.SphereBufferGeometry(4, 32, 32);
var map = new THREE.TextureLoader().load(possibleSphereImgs[Math.floor(Math.random()*2)]);
var sphere = new THREE.Mesh(spheregeometry, new THREE.MeshBasicMaterial({map}));
sphere.position.set(0, -20, -10)
scene.add(sphere); 



var orbitalGeometry = new THREE.BoxGeometry(5, 3, 1);
var orbital1 = new THREE.Mesh(orbitalGeometry, new THREE.MeshLambertMaterial({color: "blue"}));
scene.add(orbital1); 
orbital1.position.y = -10000;




var prevScroll = 0;
var overScroll = 0;
document.onscroll = function(){
    sphere.rotation.y-=(window.pageYOffset - prevScroll )/500
    if(sphere.position.y < 0 || prevScroll - window.pageYOffset > 0){
        if(overScroll < 1){
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
    orbital1.position.set(-8*Math.sin(window.pageYOffset/1000), sphere.position.y, -8*Math.cos(window.pageYOffset/1000) - 10)
}
