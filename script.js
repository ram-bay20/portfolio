var changer = document.querySelector(':root');
const light = document.querySelector('#light');
const purple = document.querySelector('#purple');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');
const reddish = document.querySelector('#reddish');


//------CLICK---EVENTS------

light.addEventListener('click', lightTheme);
purple.addEventListener('click', purpleTheme);
blue.addEventListener('click', blueTheme);
green.addEventListener('click', greenTheme);
reddish.addEventListener('click', redTheme);


//------FUNCTIONS------

function lightTheme(){

     const current =document.querySelector('.current');

     current.classList.remove('current');
     light.classList.add('current');

     changer.style.setProperty('--primary-color', 'ededed');
     changer.style.setProperty('--secondary-color', '#fff');
     changer.style.setProperty('--border-color', '#a1a1a1');
     changer.style.setProperty('--primary-text', '#000');
     changer.style.setProperty('--secondary-text', '#432');
     changer.style.setProperty('--theme-border', '#333');
     changer.style.setProperty('--preview-shadow', '#77ee77');
     changer.style.setProperty('--preview-background', '#77ee7799');
     changer.style.setProperty('--btn-color', '#000');
     changer.style.setProperty('--link-color', '#4884df');
     
}

function purpleTheme(){

     const current =document.querySelector('.current');

     current.classList.remove('current');
     purple.classList.add('current');

     changer.style.setProperty('--primary-color', '#a15b92');
     changer.style.setProperty('--secondary-color', '#612a53');
     changer.style.setProperty('--border-color', '#cf98c3');
     changer.style.setProperty('--primary-text', '#fff');
     changer.style.setProperty('--secondary-text', '#ddd');
     changer.style.setProperty('--theme-border', '#dd0');
     changer.style.setProperty('--preview-shadow', '#ee77ee');
     changer.style.setProperty('--preview-background', '#ee77ee99');
     changer.style.setProperty('--btn-color', '#fd2bf3');
     changer.style.setProperty('--link-color', '#48df39');
}

function blueTheme(){

     const current =document.querySelector('.current');

     current.classList.remove('current');
     blue.classList.add('current');

     changer.style.setProperty('--primary-color', '#586cc2');
     changer.style.setProperty('--secondary-color', '#133a75');
     changer.style.setProperty('--border-color', '#cf98c3');
     changer.style.setProperty('--primary-text', '#fff');
     changer.style.setProperty('--secondary-text', '#eee');
     changer.style.setProperty('--theme-border', '#f3f');
     changer.style.setProperty('--preview-shadow', '#aa33ee');
     changer.style.setProperty('--preview-background', '#aa33ee99');
     changer.style.setProperty('--btn-color', '#0ac');
     changer.style.setProperty('--link-color', '#3fd');
}

function greenTheme(){

     const current =document.querySelector('.current');

     current.classList.remove('current');
     green.classList.add('current');

     changer.style.setProperty('--primary-color', '#4f6');
     changer.style.setProperty('--secondary-color', '#7e7');
     changer.style.setProperty('--border-color', '#756');
     changer.style.setProperty('--primary-text', '#fff');
     changer.style.setProperty('--secondary-text', '#222');
     changer.style.setProperty('--theme-border', '#000');
     changer.style.setProperty('--preview-shadow', '#ccc');
     changer.style.setProperty('--preview-background', '#aaa9');
     changer.style.setProperty('--btn-color', '#e43');
     changer.style.setProperty('--link-color', '#444');
}

function redTheme(){

     const current =document.querySelector('.current');

     current.classList.remove('current');
     reddish.classList.add('current');

     changer.style.setProperty('--primary-color', '#Fd4343');
     changer.style.setProperty('--secondary-color', '#F55f01');
     changer.style.setProperty('--border-color', '#345');
     changer.style.setProperty('--primary-text', '#fff');
     changer.style.setProperty('--secondary-text', '#222');
     changer.style.setProperty('--theme-border', '#000');
     changer.style.setProperty('--preview-shadow', '#50ecf7');
     changer.style.setProperty('--preview-background', '#50ecf799');
     changer.style.setProperty('--btn-color', '#2bec2b');
     changer.style.setProperty('--link-color', '#392bec');
}