
var spheregeometry = new THREE.SphereGeometry(4, 32, 32);
var spherematerial = new THREE.MeshLambertMaterial({color: "red"});
var sphere = new THREE.Mesh(spheregeometry, spherematerial);
sphere.position.set(0, -20, -10)
scene.add(sphere); 

var prevScroll = 0;
var overScroll = 0;
document.onscroll = function(){
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
}
