const sounds = ['jalebi','bulleya','sigma','kalki','mohabate','nil','rowdy','cutie']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()
       document.getElementById(sound).play()
       
    })
    //Js API for audio in html5

    document.getElementById('buttons').appendChild(btn)
})
function stopSongs() {
sounds.forEach(sound => {
const song = document.getElementById(sound)
song.pause()
song.currentTime= 23; 
})
}

