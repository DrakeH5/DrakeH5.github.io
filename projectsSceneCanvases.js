
var material1 = new THREE.MeshBasicMaterial();
window.addEventListener("load",function() {
  const project1Canvas = document.getElementById( 'canvas1' );
  const project1CanvasCtx = project1Canvas.getContext( '2d' );
  project1CanvasCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
  project1CanvasCtx.fillStyle = 'lightblue';
  project1CanvasCtx.fillRect( 0, 0, 128, 128);
  project1CanvasCtx.fillStyle = 'black';
  project1CanvasCtx.font = "8.6px Arial";
  project1CanvasCtx.fillText("Enigma Machine", 0, 14);
  project1CanvasCtx.drawImage(document.getElementById("enigmaMachineImg"), 0, 20, 64, 60);
  material1.map = new THREE.CanvasTexture( project1Canvas );
}, false)
  
var material2 = new THREE.MeshBasicMaterial();
window.addEventListener("load",function() {
  const project2Canvas = document.getElementById( 'canvas2' );
  const project2CanvasCtx = project2Canvas.getContext( '2d' );
  project2CanvasCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
  project2CanvasCtx.fillStyle = 'black';
  project2CanvasCtx.fillRect( 0, 0, 128, 128);
  project2CanvasCtx.fillStyle = 'white';
  project2CanvasCtx.font = "11px Arial";
  project2CanvasCtx.fillText("GloVe Word", 2, 10);
  project2CanvasCtx.fillText("Embeddings", 2, 20);
  project2CanvasCtx.drawImage(document.getElementById("GloveImg"), 0, 26, 60, 60);
  material2.map = new THREE.CanvasTexture( project2Canvas );
}, false)

  
var material3 = new THREE.MeshBasicMaterial();
window.addEventListener("load",function() {
  const project3Canvas = document.getElementById( 'canvas3' );
  const project3CanvasCtx = project3Canvas.getContext( '2d' );
  project3CanvasCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
  project3CanvasCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
  project3CanvasCtx.fillStyle = 'yellow';
  project3CanvasCtx.fillRect( 0, 0, 128, 128);
  project3CanvasCtx.fillStyle = 'red';
  project3CanvasCtx.font = "6px Arial";
  project3CanvasCtx.fillText("Sorting", 5, 6);
  project3CanvasCtx.fillText("Algorithm", 2, 12);
  project3CanvasCtx.drawImage(document.getElementById("sortingAlgoPic"), 0, 12, 40, 20);
  material3.map = new THREE.CanvasTexture( project3Canvas );
}, false)
  
  
var material4 = new THREE.MeshBasicMaterial();
window.addEventListener("load",function() {
  const project4Canvas = document.getElementById( 'canvas4' );
  const project4CanvasCtx = project4Canvas.getContext( '2d' );
  project4CanvasCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
  project4CanvasCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
  project4CanvasCtx.fillStyle = '#70B237';
  project4CanvasCtx.fillRect( 0, 0, 128, 128);
  project4CanvasCtx.fillStyle = '#61371F';
  project4CanvasCtx.font = "4px Arial";
  project4CanvasCtx.fillText("Minecraft Clone", 1, 6);
  project4CanvasCtx.drawImage(document.getElementById("minecraftPic"), 0, 10, 40, 40);
  material4.map = new THREE.CanvasTexture( project4Canvas );
}, false)
  
  
  
var material5 = new THREE.MeshBasicMaterial();
window.addEventListener("load",function() {
  const project5Canvas = document.getElementById( 'canvas5' );
  const project5CanvasCtx = project5Canvas.getContext( '2d' );
  project5CanvasCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
  project5CanvasCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
  project5CanvasCtx.fillStyle = 'white';
  project5CanvasCtx.fillRect( 0, 0, 128, 128);
  project5CanvasCtx.fillStyle = 'black';
  project5CanvasCtx.font = "5px Arial";
  project5CanvasCtx.fillText("Chess Engine", 1, 6);
  project5CanvasCtx.drawImage(document.getElementById("chessEnginePic"), 0, 10, 40, 40);
  material5.map = new THREE.CanvasTexture( project5Canvas );
}, false)
  
  
var material6 = new THREE.MeshBasicMaterial();
window.addEventListener("load",function() {
  const project6Canvas = document.getElementById( 'canvas6' );
  const project6CanvasCtx = project6Canvas.getContext( '2d' );
  project6CanvasCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
  project6CanvasCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
  project6CanvasCtx.fillStyle = 'black';
  project6CanvasCtx.fillRect( 0, 0, 64, 64);
  project6CanvasCtx.fillStyle = 'gold';
  project6CanvasCtx.font = "5px Arial";
  project6CanvasCtx.fillText("Lifting Log", 4, 4);
  project6CanvasCtx.drawImage(document.getElementById("liftinglogPic"), 2.5, 5, 28, 28);
  material6.map = new THREE.CanvasTexture( project6Canvas );

  console.log("hey")

}, false)

  
  
  var materials = [material1, material2, material3, material4, material5, material6]
  var links = ["https://github.com/DrakeH5/Enigma-Machine?tab=readme-ov-files", "https://github.com/DrakeH5/GloVe-Word-Embeddings", "https://github.com/DrakeH5/3d-Sorting-Animation", "https://github.com/DrakeH5/Minecraft-Three.js-Summer-Camp-lesson-plans-", "https://github.com/DrakeH5/Chess-Engine", "https://github.com/DrakeH5/LiftingLog"]

