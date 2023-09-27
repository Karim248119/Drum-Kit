function playAudio(buttonNum){
    var playButton = document.querySelector(`.button${buttonNum}`);
    var audioPlayer = document.querySelector(`.audio${buttonNum}`);
    playButton.addEventListener('click', function() {
    audioPlayer.play();
    });
}

for(var i=1; i<8; i++){
    playAudio(i)
}























// document.addEventListener('DOMContentLoaded', function() {
//     for(var i=1; i<8; i++){
//         var playButton = document.querySelector(`.button${i}`);
//         var audioPlayer = document.querySelector(`.audio${i}`);

//         playButton.addEventListener('click', function() {
//         audioPlayer.play();
//         });
//     }
// });

// var i=5
// var playButton = document.querySelectora(`.button${i}`);
// var audioPlayer = document.querySelector(`.audio${i}`);

// playButton.addEventListener('click', function() {
//     audioPlayer.play();
//     });



// for(var i=1; i<8; i++){
//     var playButton = document.querySelector(`.button${i}`);
//     var audioPlayer = document.querySelector(`.audio${i}`);

//     playButton.addEventListener('click', function() {
//     audioPlayer.play();
//     });
// }

// var buttons = document.querySelectorAll('.grid-container div')
// var players = document.querySelectorAll('audio')

// buttons.forEach(function(e){
//     e.onclick =function(){
//         players.forEach(function(ee){
//             ee.play()
//         })
//     }
// })


// for(var i=1; i<8; i++){
//     var playButton = document.querySelector(`.button${i}`);
//     var audioPlayer = document.querySelector(`.audio${i}`);
//     playButton.addEventListener('click', function() {
//     audioPlayer.play();
//     });
// }


// playAudio(1)
// playAudio(2)
// playAudio(3)
// playAudio(4)
// playAudio(5)
// playAudio(6)
// playAudio(7)

