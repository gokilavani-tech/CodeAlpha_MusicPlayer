const songs=[

{

title:"Dhinam Oru Kavithai",

artist:"Sriram Srinivasan",

src:"songs/song1.mp3",

cover:"images/song1.jpg"

},

{

title:"Vizhigalile",

artist:"Karthik",

src:"songs/song2.mp3",

cover:"images/song2.jpg"

},

{

title:"Ilakana Kavithai",

artist:"Chimayi",

src:"songs/song3.mp3",

cover:"images/song3.jpg"

}

];

const audio=document.getElementById("audio");

const title=document.getElementById("title");

const artist=document.getElementById("artist");

const cover=document.getElementById("cover");

const playBtn=document.getElementById("play");

const prevBtn=document.getElementById("prev");

const nextBtn=document.getElementById("next");

const progress=document.getElementById("progress");

const volume=document.getElementById("volume");

const current=document.getElementById("current");

const duration=document.getElementById("duration");

const playlist=document.getElementById("playlist");

let index=0;

function loadSong(){

title.innerHTML=songs[index].title;

artist.innerHTML=songs[index].artist;

cover.src=songs[index].cover;

audio.src=songs[index].src;

}

loadSong();

playBtn.onclick=function(){

if(audio.paused){

audio.play();
cover.style.animation = "spin 10s linear infinite";

playBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

}

else{

audio.pause();
cover.style.animation = "none";

playBtn.innerHTML='<i class="fa-solid fa-play"></i>';

}

}

nextBtn.onclick=function(){

index++;

if(index>=songs.length){

index=0;

}

loadSong();

audio.play();

playBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

}

prevBtn.onclick=function(){

index--;

if(index<0){

index=songs.length-1;

}

loadSong();

audio.play();

playBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

}

audio.addEventListener("loadedmetadata",function(){

progress.max=audio.duration;

duration.innerHTML=format(audio.duration);

});

audio.addEventListener("timeupdate",function(){

progress.value=audio.currentTime;

current.innerHTML=format(audio.currentTime);

});

progress.oninput=function(){

audio.currentTime=progress.value;

}

volume.oninput=function(){

audio.volume=volume.value;

}

function format(time){

let min=Math.floor(time/60);

let sec=Math.floor(time%60);

if(sec<10){

sec="0"+sec;

}

return min+":"+sec;

}

songs.forEach(function(song,i){

let li=document.createElement("li");

li.innerHTML=song.title+" - "+song.artist;

li.onclick=function(){

index=i;

loadSong();

audio.play();

playBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

}

playlist.appendChild(li);

});

audio.onended=function(){

index++;

if(index>=songs.length){

index=0;

}

loadSong();

audio.play();

}