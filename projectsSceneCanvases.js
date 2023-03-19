var material = new THREE.MeshBasicMaterial();
const project1Canvas = document.getElementById( 'canvas' );
const project1CanvasCtx = project1Canvas.getContext( '2d' );
project1CanvasCtx.fillStyle = 'lightblue';
project1CanvasCtx.fillRect( 0, 0, 64, 64);
project1CanvasCtx.fillStyle = 'black';
project1CanvasCtx.font = "12px Arial";
project1CanvasCtx.fillText("Project 1", 1, 15);
material.map = new THREE.CanvasTexture( project1Canvas );