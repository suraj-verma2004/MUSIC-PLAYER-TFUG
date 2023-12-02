
let title=document.querySelector(".songname")
let artist=document.querySelector(".artist")
let image=document.querySelector(".img")
let progress=document.getElementById("range")
// console.log(play)

let audio= new Audio()
audio.title="aku";
audio.src="aku.mp3";

let Allsongs=[{img:'./img/moye.jpg',songname:'Moye Moye',artist:'Daler Mehndi',song:'./au/moye moye.mp3'},
{img:'./img/About_img.jpg',songname:'Aku-Sayang',artist:'Harissa Adlynn', song:'./au/aku.mp3'} ,
{img:'./img/LLMY.jpg',songname:'Time-traveller',artist:'M.I.A',song:'./au/time.mp3'},
{img:'./img/Shape-of-You.jpg',songname:'Shape of You',artist:'xxanteria',song:'./au/soy.mp3'},
{img:'./img/LLMY.jpg',songname:'Let me love you',artist:'Unknown',song:'./au/lmly.mp3'},
{img:'./img/DPC.jpg',songname:'abc',artist:'Loise Fonsi, Daddy Yanki',song:'./au/despacito.mp3'},
{img:'./img/Unstopable.jpg',songname:'Unstopable',artist:'Unknown',song:'./au/unstopable.mp3'},  
]
// shong on screen
let i=0;
let l=Allsongs.length;


var song=new Audio(Allsongs[i].song);
image.src=Allsongs[i].img
title.innerHTML=Allsongs[i].songname
artist.innerHTML=Allsongs[i].artist

//previous song
let prev = document.querySelector(".back")
prev.addEventListener("click",()=>{
i=i-1;
if(i<=0){
    i=l-1;
}
    console.log("i")
    song.pause(i);
    image.src=Allsongs[i].img
title.innerHTML=Allsongs[i].songname
artist.innerHTML=Allsongs[i].artist
song= new Audio(Allsongs[i].song)
 song.play(i);
 play.classList.add("fa-pause");
 play.classList.remove("fa-play");
 // song.pause();
})

//play song

let play=document.querySelector(".play");
play.addEventListener("click",()=>{
    console.log("i");
    // song.play();

});
// playpause
function playpause(){
    if (play.classList.contains("fa-pause")){
       song.pause();
       play.classList.remove("fa-pause");
       play.classList.add("fa-play");
    }
 
    else{
        song.play();
        play.classList.add("fa-pause");
        play.classList.remove("fa-play");
        // song.pause();

    }}



//NEXT SONG
let next = document.querySelector(".forward")
next.addEventListener("click",()=>{
i=i+1;
if(i>=Allsongs.length){
        i=0;
}
    console.log("i")
    song.pause(i);
    image.src=Allsongs[i].img
title.innerHTML=Allsongs[i].songname
artist.innerHTML=Allsongs[i].artist
song= new Audio(Allsongs[i].song)
song.play(i);
play.classList.add("fa-pause");
play.classList.remove("fa-play");
// song.pause();
})

song.onloadedmetadata=function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}
if(song.play()){
    setInterval(()=>{
        range.value=song.currentTime;
    
    },500);
}
progress.onchange=function(){
    song.play();
    song.currentTime=range.value
}


