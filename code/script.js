const box = document.querySelectorAll('.box');
const percin = document.getElementById('percin');

box[2].addEventListener('mouseover', () => {
    percin.classList.add('hovered');
    console.log('you just hovered this element');
});

box[2].addEventListener('mouseleave', () => {
    percin.classList.remove('hovered');
    console.log('you just left this element');
});
