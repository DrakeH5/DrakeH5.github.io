var material1 = new THREE.MeshBasicMaterial();
const project1Canvas = document.getElementById( 'canvas1' );
const project1CanvasCtx = project1Canvas.getContext( '2d' );
project1CanvasCtx.fillStyle = 'lightblue';
project1CanvasCtx.fillRect( 0, 0, 64, 64);
project1CanvasCtx.fillStyle = 'black';
project1CanvasCtx.font = "12px Arial";
project1CanvasCtx.fillText("Project 1", 10, 15);
material1.map = new THREE.CanvasTexture( project1Canvas );

var material2 = new THREE.MeshBasicMaterial();
const project2Canvas = document.getElementById( 'canvas2' );
const project2CanvasCtx = project2Canvas.getContext( '2d' );
project2CanvasCtx.fillStyle = '#a5633c';
project2CanvasCtx.fillRect( 0, 0, 64, 64);
project2CanvasCtx.fillStyle = 'white';
project2CanvasCtx.font = "12px Arial";
project2CanvasCtx.fillText("Project 2", 10, 15);
material2.map = new THREE.CanvasTexture( project2Canvas );



var materials = [material1, material2]