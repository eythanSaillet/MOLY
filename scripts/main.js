moly = document.querySelectorAll('.moly p')
line = document.querySelector('.line')
video = document.querySelector('video')
console.log(moly)

// TweenMax.from(moly[0],1.3,{ease: Power3.easeInOut,top:"100vh"})
// TweenMax.from(moly[1],1.3,{ease: Power3.easeInOut,top:"-100vh"})
// TweenMax.from(moly[2],1.3,{ease: Power3.easeInOut,top:"100vh"})
// TweenMax.from(moly[3],1.3,{ease: Power3.easeInOut,top:"-100vh"})

let molyAnimation = new TimelineMax()


molyAnimation.addLabel("sync")
molyAnimation.from(moly[0],1.3,{ease: Power3.easeInOut,y:"100vh"},"sync")
molyAnimation.from(moly[1],1.3,{ease: Power3.easeInOut,y:"-100vh"},"sync")
molyAnimation.from(moly[2],1.3,{ease: Power3.easeInOut,y:"100vh"},"sync")
molyAnimation.from(moly[3],1.3,{ease: Power3.easeInOut,y:"-100vh"},"sync")
molyAnimation.from(line,1.3,{ease: Power3.easeInOut,width:0},"-=0.2")
molyAnimation.addLabel("bonjour")
molyAnimation.to(line,0.7,{ease: Power3.easeInOut,top:"90vh"},"bonjour+=0.5")
molyAnimation.to(moly,1,{ease: Power3.easeInOut,y:"-100vh"},"bonjour+=0.5")
molyAnimation.addLabel("button")
molyAnimation.from(video,0.7,{ease: Power3.easeInOut,y:"100vh"},"-=0.5")
molyAnimation.from(".shop",0.3,{ease: Power3.easeInOut,opacity:0},"button")
molyAnimation.from(".shop",0.3,{ease: Power3.easeInOut,y:15},"button")
molyAnimation.from(".live",0.3,{ease: Power3.easeInOut,opacity:0},"button")
molyAnimation.from(".live",0.3,{ease: Power3.easeInOut,y:15},"button")

// video.addEventListener("click",function(){
//   play()
// })
//
// function play() {
//   let playPromise = video.play()
//
//   if(playPromise !== undefined){
//     playPromise.then(_ =>{
//       video.play()
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }
// }
