
//url del video
const url ="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

//llamando a la etiqueta que contiene el video
const mountNode = document.getElementById("app");

//creando el contenedor del video
const container = document.createElement("div");
container.id ="video_container";
container.className ="p-4 flex justify-center";


//Creando etiqueta video
const video = document.createElement("video");
video.src = url;
video.controls =true;
video.style.maxHeight = "360px"

//creando los hijos de los contenedores
mountNode.appendChild(container);
container.appendChild(video);





