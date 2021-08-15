let base = document.querySelector('.base');
let height = document.querySelector('.height');
let areaDiv = document.querySelector('.area');
let formFour = document.querySelector('#four');

formFour.addEventListener('submit', function calculateArea(e) {

    e.preventDefault();

    area = (base.value * height.value) * 0.5;
    areaDiv.innerText = `The area of the triangle is ${area} units.`;
    
});