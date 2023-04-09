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



const orbital2Canvas = document.createElement( 'canvas' );
orbital2Canvas.width = 256;
orbital2Canvas.height = 128;
const orbital2Ctx = orbital2Canvas.getContext( '2d' );
orbital2Ctx.fillStyle = '#161b22';
orbital2Ctx.fillRect( 0, 0, 256, 128);
var githubicon = document.getElementById("githubicon");
orbital2Ctx.drawImage(githubicon, 256/2-(256/1.5)/2, 128/2-(128/1.5)/2, 256/1.5, 128/1.5);
orbital2Canvas.addEventListener('click', function() {alert("click")}, false);
var orbital2 = new THREE.Mesh(orbitalGeometry, new THREE.MeshBasicMaterial({map: new THREE.CanvasTexture( orbital2Canvas )}));
ortibals.push(orbital2)



const orbital3Canvas = document.createElement( 'canvas' );
orbital3Canvas.width = 256;
orbital3Canvas.height = 128;
const orbital3Ctx = orbital3Canvas.getContext( '2d' );
orbital3Ctx.fillStyle = '#161b22';
orbital3Ctx.fillRect( 0, 0, 256, 128);
var teachCodingImg = document.getElementById("teachCodingImg");
orbital3Ctx.drawImage(teachCodingImg, 3, 3, 256, 128);
orbital3Ctx.fillStyle = 'white';
orbital3Ctx.font = "30px Comics Sans";
orbital3Ctx.fillText("Teacher", 5, 25);
orbital3Ctx.fillStyle = 'white';
orbital3Ctx.font = "20px Arial";
orbital3Ctx.fillText("Click for Info", 5, 120);
//info
const orbital3InfoCanvas = document.createElement( 'canvas' );
orbital3InfoCanvas.width = 256;
orbital3InfoCanvas.height = 128;
const orbital3InfoCtx = orbital3InfoCanvas.getContext( '2d' );
orbital3InfoCtx.fillStyle = '#161b22';
orbital3InfoCtx.fillRect( 0, 0, 256, 128);
orbital3InfoCtx.fillStyle = 'red';
orbital3InfoCtx.font = "30px Times New Roman";
orbital3InfoCtx.fillText("Created and Taught", 10, 40);
orbital3InfoCtx.fillStyle = 'lightgreen';
orbital3InfoCtx.font = "20px Arial";
orbital3InfoCtx.fillText("a unique curriculum of", 30, 60);
orbital3InfoCtx.fillStyle = 'dodgerblue';
orbital3InfoCtx.font = "16px Comic Sans";
orbital3InfoCtx.fillText("introductionary programing principles", 5, 75);
orbital3InfoCtx.fillText("and game design/creation", 55, 90);
orbital3InfoCtx.fillStyle = 'gold';
orbital3InfoCtx.fillText("over a 4 year period", 100, 120);
orbital3InfoCtx.fillStyle = 'white';
orbital3InfoCtx.font = "20px Arial";
orbital3InfoCtx.fillText("<-Back", 5, 120);
ortibal3material = []
ortibal3material.push(new THREE.MeshBasicMaterial({color: "grey"}))
ortibal3material.push(new THREE.MeshBasicMaterial({color: "grey"}))
ortibal3material.push(new THREE.MeshBasicMaterial({color: "grey"}))
ortibal3material.push(new THREE.MeshBasicMaterial({color: "grey"}))
ortibal3material.push(new THREE.MeshBasicMaterial({map: new THREE.CanvasTexture( orbital3Canvas )}))
ortibal3material.push(new THREE.MeshBasicMaterial({map: new THREE.CanvasTexture( orbital3InfoCanvas )}))
var orbital3 = new THREE.Mesh(orbitalGeometry, ortibal3material);
ortibals.push(orbital3)



for(var i=0; i<ortibals.length; i++){
    scene.add(ortibals[i])
    ortibals[i].position.y = -1000;
}



var ortibal3Rotated = false;

raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
document.addEventListener('mousedown', onMouseDown, false);
function onMouseDown(event) {
    pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    raycaster.setFromCamera( pointer, camera );
				const intersects = raycaster.intersectObjects( scene.children, false );
				if ( intersects.length > 0 ) {
					if ( orbital2 == intersects[ 0 ].object ) {
						window.open("https://github.com/DrakeH5");
					} else if(orbital3 == intersects[ 0 ].object){
						if(ortibal3Rotated){
							this.tl = new TimelineMax().delay(0.3);
							this.tl.to(orbital3.rotation, 1, {x: -6, ease: Expo.easeOut});
							this.tl.to(orbital3.scale, 0.5, {x: 1, ease: Expo.easeOut});
							this.tl.to(orbital3.scale, 0.5, {y: 1, ease: Expo.easeOut});
							this.tl.to(orbital3.rotation, 1, {z: 0, ease: Expo.easeOut});
							this.tl.to(camera.position, 1, {z: 5, ease: Expo.easeOut});
							ortibal3Rotated = false;
						} else {
							this.tl = new TimelineMax().delay(0.3);
							this.tl.to(orbital3.rotation, 1, {x: -3, ease: Expo.easeOut});
							this.tl.to(orbital3.rotation, 1, {z: -3.15, ease: Expo.easeOut});
							this.tl.to(orbital3.scale, 0.5, {x: 3, ease: Expo.easeOut});
							this.tl.to(orbital3.scale, 0.5, {y: 3, ease: Expo.easeOut});
							this.tl.to(camera.position, 1, {z: 20, ease: Expo.easeOut});
							ortibal3Rotated = true;
						}
					}
				}
}