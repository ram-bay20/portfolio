var changer = document.querySelector(':root');
const light = document.querySelector('#light');
const purple = document.querySelector('#purple');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');
const reddish = document.querySelector('#reddish');

light.addEventListener('click', lightTheme)
function lightTheme(){
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

purple.addEventListener('click', purpleTheme)
function purpleTheme(){
     changer.style.setProperty('--primary-color', '#a15b92');
     changer.style.setProperty('--secondary-color', '#612a53');
     changer.style.setProperty('--border-color', '#cf98c3');
     changer.style.setProperty('--primary-text', '#fff');
     changer.style.setProperty('--secondary-text', '#ddd');
     changer.style.setProperty('--theme-border', '#333');
     changer.style.setProperty('--preview-shadow', '#ee77ee');
     changer.style.setProperty('--preview-background', '#ee77ee99');
     changer.style.setProperty('--btn-color', '#fd2bf3');
     changer.style.setProperty('--link-color', '#48df39');
}

blue.addEventListener('click', blueTheme)
function blueTheme(){
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

green.addEventListener('click', greenTheme)
function greenTheme(){
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

reddish.addEventListener('click', redTheme)
function redTheme(){
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