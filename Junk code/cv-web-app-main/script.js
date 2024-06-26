const pictureBackground = document.getElementById('picture_background');
const allH2Elements = document.querySelectorAll('h2')
const photoshop = document.querySelector('#photoshop');
// const illustrator = document.querySelector('#illustrator');
const picture = document.querySelector('#picture');
const contact_text = document.querySelector('.main_text')
const contact_form = document.querySelector('.contact_form')
const span = document.querySelector('.span')
const languages = document.querySelector('.languages')








// Social media icons 
const github =document.getElementById('github')
const dribbble =document.getElementById('dribbble')
const instagram =document.getElementById('instagram')
const linkedin =document.getElementById('linkedin')
const youtube =document.getElementById('youtube')

linkedin.addEventListener('mouseover', ()=>{
linkedin.src='assets/Social media icons_linkedin_hover.png'
})
linkedin.addEventListener('mouseleave', ()=>{
    linkedin.src='assets/Social media icons_linkedin.png'
})

dribbble_effect =dribbble.addEventListener('mouseover', ()=>{
    dribbble.src='assets/Social media icons_dribbble_hover.png'
    })
    dribbble.addEventListener('mouseleave', ()=>{
        dribbble.src='assets/Social media icons_dribbble.png'
    })
instagram.addEventListener('mouseover', ()=>{
    instagram.src='assets/Social media icons_instagram_hover.png'
    })
    instagram.addEventListener('mouseleave', ()=>{
        instagram.src='assets/Social media icons_instagram.png'
    })
youtube.addEventListener('mouseover', ()=>{
    youtube.src='assets/Social media icons_youtube_hover.png'
    })
    youtube.addEventListener('mouseleave', ()=>{
        youtube.src='assets/Social media icons_youtube.png'
    })
github.addEventListener('mouseover', ()=>{
    github.src='assets/Social media icons_github_hover.png'
    })
    github.addEventListener('mouseleave', ()=>{
        github.src='assets/Social media icons_github.png'
    })


let togggleContact = false
let drvo = 0

contact_text.addEventListener('click', function(){
    togggleContact = !togggleContact
    if(togggleContact){
        contact_form.style.transition ='0.5s ease'
        contact_form.style.display='block'
    }
    else{
        contact_form.style.display=''
    }
})

photoshop.addEventListener('click', function() {
    
    drvo ++ 
    console.log(`drvo ${drvo}`)
    
    if (drvo === 1) {
    picture.src="assets/sun-glasess2.png"
    }
    if (drvo === 2){
    picture.src="assets/sun-glasess-gold-chain.png"
        
    }
    else if (drvo === 3){
        picture.src='assets/Profile-picture.png'
        drvo = 0
    }
    
  });

//   let uranium = 0

//   illustrator.addEventListener('click', function() {
    
//     uranium ++ 
//     console.log(`uranium ${uranium}`)
    
//     if (uranium === 1) {
//     picture.src="assets/illustration.png"
//     }
//     if (uranium === 2){
//         picture.src='assets/Profile-picture.png'
//         uranium = 0
//     }
//   });

let count = 0
const cyan = [1, 5,  9, ]
const magenta = [2, 6, 10, ]
const yellow = [3, 7, 11, ]
const key = [4, 8, 12, ]
pictureBackground.addEventListener('mouseover',function(){
count ++
console.log(count)

if(cyan.includes(count)){
pictureBackground.style.background="#7FCFD5"
allH2Elements.forEach(function (h2Element) {
    h2Element.style.transition ='color 0.5s ease'
    h2Element.style.color = '#7FCFD5';
    span.style.bottom ="18px"
  });
} 

else if(magenta.includes(count)){
    pictureBackground.style.background="#C36AAA"
    allH2Elements.forEach(function (h2Element) {
        h2Element.style.transition ='color 0.5s ease'
        h2Element.style.color = '#C36AAA';
        span.style.bottom ="36px"
      });
}

else if(yellow.includes(count)){
    pictureBackground.style.background="#F4943D"
    allH2Elements.forEach(function (h2Element) {
        h2Element.style.transition ='color 0.5s ease'
        h2Element.style.color = '#F4943D';
        span.style.bottom = `${(36+17)}px`
      });
    }

else if(key.includes(count)){
    pictureBackground.style.background="#000000"
    allH2Elements.forEach(function (h2Element) {
        h2Element.style.transition ='color 0.5s ease'
        h2Element.style.color = '#000000';
        span.style.bottom =""
      });
    }

    pictureBackground.addEventListener('mouseleave',function(){
        pictureBackground.style.background=''
    })
    if (count === 12){
        count = 1
    }
})





