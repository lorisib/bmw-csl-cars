// <butoni 0 like>
const likeBtn = document.querySelector(".like__btn");
let likeIcon = document.querySelector("#icon"),
  count = document.querySelector("#count");

let clicked = false;


likeBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count.textContent++;
  } else {
    clicked = false;
    likeIcon.innerHTML = `<i class="fa-regular fa-thumbs-up"></i>`;
    count.textContent--;
  }
});
// </butoni 0 like>

// <butoni 1 like>
const likeBtn1 = document.querySelector(".like__btn1");
let likeIcon1 = document.querySelector("#icon1"),
  count1 = document.querySelector("#count1");

let clicked1 = false;


likeBtn1.addEventListener("click", () => {
  if (!clicked1) {
    clicked1 = true;
    likeIcon1.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count1.textContent++;
  } else {
    clicked1 = false;
    likeIcon1.innerHTML = `<i class="fa-regular fa-thumbs-up"></i>`;
    count1.textContent--;
  }
});
// </butoni 1 like>
// <butoni 2 like>
const likeBtn2 = document.querySelector(".like__btn2");
let likeIcon2 = document.querySelector("#icon2"),
  count2 = document.querySelector("#count2");

let clicked2 = false;


likeBtn2.addEventListener("click", () => {
  if (!clicked2) {
    clicked2 = true;
    likeIcon2.innerHTML = `<i class="fas fa-thumbs-up"></i>`;    count2.textContent++;
  } else {
    clicked2 = false;
    likeIcon2.innerHTML = `<i class="fa-regular fa-thumbs-up"></i>`;
    count2.textContent--;
  }
});
// </butoni 2 like>
// <butoni 3 like>
const likeBtn3 = document.querySelector(".like__btn3");
let likeIcon3 = document.querySelector("#icon3"),
  count3 = document.querySelector("#count3");

let clicked3 = false;


likeBtn3.addEventListener("click", () => {
  if (!clicked3) {
    clicked3 = true;
    likeIcon3.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count3.textContent++;
  } else {
    clicked3 = false;
    likeIcon3.innerHTML = `<i class="fa-regular fa-thumbs-up"></i>`;
    count3.textContent--;
  }
});
// </butoni 3 like>
// <butoni 4 like>


const likeBtn4 = document.querySelector(".like__btn4");
let likeIcon4 = document.querySelector("#icon4"),
  count4 = document.querySelector("#count4");

let clicked4 = false;


likeBtn4.addEventListener("click", () => {
  if (!clicked4) {
    clicked4 = true;
    likeIcon4.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count4.textContent++;
  } else {
    clicked4 = false;
    likeIcon4.innerHTML = `<i<i class="fa-regular fa-thumbs-up"></i>`;
    count4.textContent--;
  }
});
  // </butoni 4 like>
  // <butoni 5 like>

const likeBtn5 = document.querySelector(".like__btn5 ");
let likeIcon5 = document.querySelector("#icon5"),
  count5 = document.querySelector("#count5");

let clicked5 = false;


likeBtn5.addEventListener("click", () => {
  if (!clicked5) {
    clicked5 = true;
    likeIcon5.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count5.textContent++;
  } else {
    clicked5 = false;
    likeIcon5.innerHTML = `<i class="fa-regular fa-thumbs-up"></i>`;
    count5.textContent--;
  }
});
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const overlay = document.getElementById('overlay')
// pop-up
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


let button = document.getElementById('btn_calc');

button.addEventListener('click', () => {
    const price = parseInt(document.getElementById('price').value);
    const month = parseInt(document.getElementById('month').value);
    const result = document.getElementById('output');
    let price_status=false, month_status=false;

    if(price === '' || isNaN(price) || (price <= 0)){
        document.getElementById('price_error').innerHTML = 'Please provide a valid price';
    }else{
        document.getElementById('price_error').innerHTML = '';
        price_status=true;
    }

    if(month === '' || isNaN(month) || (month <= 0)){
        document.getElementById('month_error').innerHTML = 'Please provide a valid number of months';
    }else{
        document.getElementById('month_error').innerHTML = '';
        month_status=true;
    }

    if(price_status && month_status){
        const bmi = (price/month).toFixed(2);

        if(bmi){
            result.innerHTML = bmi +'$ per '+ month + ' months';}
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});


// sounds
function play(){
  var audio = document.getElementById("audio");
  audio.play();
}

function play1(){
  var audio = document.getElementById("audio1");
  audio.play();
}

function play2(){
  var audio = document.getElementById("audio2");
  audio.play();
}
function play3(){
  var audio = document.getElementById("audio3");
  audio.play();
}
