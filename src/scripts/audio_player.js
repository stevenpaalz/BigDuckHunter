export function toggleMute() {
    const sound = document.getElementById('sound');
    const audioImg = document.querySelector('#sound img');
    if (sound.dataset.muted === "true") {
        audioImg.src = "../BigDuckHunter/assets/sound.png";
        sound.dataset.muted = "false";
        unmutePage();
    } else { 
        audioImg.src = "../BigDuckHunter/assets/mute.png";
        sound.dataset.muted = "true";
        mutePage();
    }
}

function mutePage() {
        let elems = document.querySelectorAll("audio");
        elems.forEach((elem)=>{
            elem.muted = true;
            elem.pause();
        })
}

function unmutePage() {
    let elems = document.querySelectorAll("audio");
    elems.forEach((elem)=>{
        elem.muted = false;
        elem.play();
    })
}

