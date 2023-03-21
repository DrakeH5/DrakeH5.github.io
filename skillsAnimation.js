/*
var imgSrc = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
]

var images = []

for(var i=0; i<imgSrc.length; i++){
    images[i] = document.createElement("img")
    images[i].src = imgSrc[i];
    images[i].style.width = "15%"
    document.getElementById("skillsImages").appendChild(images[i])
}
*/
/*
images[0].style.position = "relative"
images[0].style.top = "100%"

document.body.onscroll = function(){
    var amountScrolled = document.body.scrollTop
    if(amountScrolled > window.screen.height*2){
    images[0].style.left = amountScrolled/100 + "%"
    }
}*/
/*

var materialArray = []
for(var i=0; i<images.length; i++){
    var texture = new THREE.TextureLoader().load(images[i].src)
    materialArray.push(new THREE.MeshBasicMaterial({map: texture}))    
}

var createdSkillBox = false;
document.body.onscroll = function(){
    if(document.body.scrollTop > window.screen.height*1.15 && !createdSkillBox){
        createdSkillBox = true;
        var skillBox = new THREE.BoxGeometry(3, 3, 3);
        var skillBox = new THREE.Mesh(skillBox, materialArray);
        skillBox.position.x = -20
        skillBox.position.z = -2
        scene.add(skillBox)
        this.tl = new TimelineMax().delay(0.3); 
        this.tl.to(this.mesh.position, 0.5, {z: -20}); 
        this.tl.to(skillBox.position, 1, {x: 0}); 
        this.tl.to(skillBox.rotation, 2, {x: -4.5});
        this.tl.to(skillBox.rotation, 2, {z: 4.5});
        this.tl.to(skillBox.rotation, 1, {y: -2});
        this.tl.to(skillBox.position, 2, {y: -40});
        this.tl.to(this.mesh.position, 0.5, {z: -3}); 
    }
}
*/

var bookshelfImg = "./samplebookshelfskillsimg.png";
var materialArray = []
for(var i=0; i<6; i++){
    if(i==1){
        var texture = new THREE.TextureLoader().load(bookshelfImg)
        materialArray.push(new THREE.MeshBasicMaterial({map: texture}))  
    } else {
        materialArray.push(new THREE.MeshLambertMaterial({color: "lightblue"}))
    }
} 
mesh.material = materialArray;
