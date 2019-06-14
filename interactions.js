// const reel = document.querySelector('.section-wrapper');
// const tab1 = document.querySelector('.tab1');
// const tab2 = document.querySelector('.tab2');
// const panel1 = document.querySelector('.tab_panel1');
// const panel2 = document.querySelector('.tab_panel2');

function interestsClick() {
    // console.log('test')
    // document.getElementById("interestsBody").classList.add('interestsBody--show');
    // document.getElementById("profileBody").classList.add('profileBody--hide');
    // document.getElementById("profileBody").classList.remove('profileBody--show');
    document.querySelector('.section-wrapper').style.transform = "translateX(0%)"
}
function volunteerClick() {
    // document.getElementById("profileBody").classList.add('profileBody--show');
    // document.getElementById("profileBody").classList.remove('profileBody--hide');
    // document.getElementById("interestsBody").classList.remove('interestsBody--show');
    document.querySelector('.section-wrapper').style.transform = "translateX(-100%)"
}

// function slideLeft(e) {
//     tab2.classList.remove('active');
//     this.classList.add('active');
//     reel.style.transform = "translateX(0%)"
// }

// function slideRight(e) {
//     tab1.classList.remove('active');
//     this.classList.add('active');
//     reel.style.transform = "translateX(-50%)"
// }