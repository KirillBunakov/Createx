// const navBar = document.getElementsByClassName('navigation')

// navBar.onclick = function () {
//   navBar.style.backgroundColor = 'black'
// }


// const card = document.getElementById('first_card')
// const card = document.getElementsByClassName('first_card')
const card = document.querySelector('.first_card')

// card.onclick = function () {
//   card.style.backgroundColor = 'red'
// }

// card.addEventListener('click', function () {
//   card.style.backgroundColor = 'red'
// })

// card.onclick = function () {
//   card.classList.toggle('companyBgrColor')
// }

// card.onclick = function () {
//   card.style.backgroundImage = "url('/CreatexConstruction/img/ourserviceimage3hover.jpg')"
// }

card.addEventListener('mouseenter', () => {
  card.style.backgroundImage = "url('/CreatexConstruction/img/ourserviceimage3hover.jpg')"
}, true)

card.addEventListener('mouseleave', () => {
  card.style.backgroundImage = ""
})




const newsDiv = document.querySelector('.home_8th_news_div')

// newsDiv.firstElementChild.addEventListener('mouseenter', () => {
//   newsDiv.firstElementChild.style.border = '1px solid black'
//   newsDiv.firstElementChild.style.scale = '1.1'
// })

// newsDiv.firstElementChild.addEventListener('mouseleave', () => {
//   newsDiv.firstElementChild.style.border = ''
//   newsDiv.firstElementChild.style.scale = ''
// })


// console.log((newsDiv.children)[0]);

const newsDivParent = document.querySelector('.home_8th_news_div').children

const fristNewsDiv = newsDivParent[0]
const secondNewsDiv = newsDivParent[1].children[0]
const thirdNewsDiv = newsDivParent[1].children[1]

console.log(fristNewsDiv);
console.log(secondNewsDiv);
console.log(thirdNewsDiv);


fristNewsDiv.addEventListener('mouseenter', () => {
  fristNewsDiv.style.border = '1px solid black'
  fristNewsDiv.style.scale = '1.05'
})

secondNewsDiv.addEventListener('mouseenter', () => {
  secondNewsDiv.style.border = '1px solid black'
  secondNewsDiv.style.scale = '1.05'
})

thirdNewsDiv.addEventListener('mouseenter', () => {
  thirdNewsDiv.style.border = '1px solid black'
  thirdNewsDiv.style.scale = '1.05'
})

fristNewsDiv.addEventListener('mouseleave', () => {
  fristNewsDiv.style.border = ''
  fristNewsDiv.style.scale = ''
})

secondNewsDiv.addEventListener('mouseleave', () => {
  secondNewsDiv.style.border = ''
  secondNewsDiv.style.scale = ''
})

thirdNewsDiv.addEventListener('mouseleave', () => {
  thirdNewsDiv.style.border = ''
  thirdNewsDiv.style.scale = ''
})

const portfolioBtn = document.querySelector('.home_6th_btn2')

portfolioBtn.onclick = function () {
  this.scrollTo({
    top: 100,
    left: 0,
    behavior: 'smooth'
  })
}

portfolioBtn.onclick = function () {
  portfolioBtn.style.color = 'black'
}
