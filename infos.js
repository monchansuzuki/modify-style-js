let ele = document.getElementById('contenu');
let  getCssInfo = getComputedStyle(ele);
let widthEle = document.createElement("p");
let heigthEle = document.createElement("p");
widthEle.textContent= 'longueur du texte ' +getCssInfo.width;
heigthEle.textContent= 'largeur du texte ' +getCssInfo.height;
document.getElementById('infos').appendChild(widthEle);
document.getElementById('infos').appendChild(heigthEle);
