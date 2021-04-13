let isPlaying = false;
const vid = document.querySelector('video');
vid.addEventListener('click' , ()=>{
    isPlaying = !isPlaying;
    if(isPlaying)
        vid.play();
    else
        vid.pause();    
})

function volum(e){
    console.log(e);
}



const volume = document.querySelector('input[name="volume"]');
volume.addEventListener('change',volum);
