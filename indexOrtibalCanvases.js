var ortibals = []

var orbitalGeometry = new THREE.BoxGeometry(5, 3, 1);


const orbital1Canvas = document.createElement( 'canvas' );
orbital1Canvas.width = 256;
orbital1Canvas.height = 128;
const orbital1Ctx = orbital1Canvas.getContext( '2d' );
orbital1Ctx.fillStyle = 'lightblue';
orbital1Ctx.fillRect( 0, 0, 256, 128);
orbital1Ctx.fillStyle = 'blue';
orbital1Ctx.font = "25px Arial";
orbital1Ctx.fillText("Skills:", 100, 20);
orbital1Ctx.fillStyle = 'black';
orbital1Ctx.font = "15px Arial";
orbital1Ctx.fillText("•Javascript", 10, 40);
orbital1Ctx.fillText("•Python", 10, 60);
orbital1Ctx.fillText("•C++", 10, 80);
orbital1Ctx.fillText("•Golang", 10, 100);
orbital1Ctx.fillText("•Web Dev", 10, 120);
orbital1Ctx.fillText("•Arduino", 160, 40);
orbital1Ctx.fillText("•Raspbery Pi", 160, 60);
orbital1Ctx.fillText("•ReactJS", 160, 80);
orbital1Ctx.fillText("•NodeJs", 160, 100);
orbital1Ctx.fillText("•MongoDb", 160, 120);
var orbital1 = new THREE.Mesh(orbitalGeometry, new THREE.MeshBasicMaterial({map: new THREE.CanvasTexture( orbital1Canvas )}));
ortibals.push(orbital1)


var orbital2 = new THREE.Mesh(orbitalGeometry, new THREE.MeshLambertMaterial({color: "red"}));
ortibals.push(orbital2)


for(var i=0; i<ortibals.length; i++){
    scene.add(ortibals[i])
    ortibals[i].position.y = -1000;
}
