var ortibals = []

var orbitalGeometry = new THREE.BoxGeometry(5, 3, 1);


const orbital1Canvas = document.createElement( 'canvas' );
orbital1Canvas.width = 256;
orbital1Canvas.height = 128;
const orbital1Ctx = orbital1Canvas.getContext( '2d' );
orbital1Ctx.fillStyle = 'lightblue';
orbital1Ctx.fillRect( 0, 0, 256, 128);
orbital1Ctx.fillStyle = 'blue';
orbital1Ctx.font = "12px Arial";
orbital1Ctx.fillText("Project 1", 10, 15);
var orbital1 = new THREE.Mesh(orbitalGeometry, new THREE.MeshBasicMaterial({map: new THREE.CanvasTexture( orbital1Canvas )}));
ortibals.push(orbital1)


var orbital2 = new THREE.Mesh(orbitalGeometry, new THREE.MeshLambertMaterial({color: "red"}));
ortibals.push(orbital2)


for(var i=0; i<ortibals.length; i++){
    scene.add(ortibals[i])
    ortibals[i].position.y = -1000;
}
