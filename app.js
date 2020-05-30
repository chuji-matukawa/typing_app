let p = document.getElementById('text');
let textLists = [
  'Hellow World',
  'This is my app',
  'How are You?',
  'Hellow Hellow'
];
let checkTexts = [];

createText();

function createText() {
  let rnd = Math.floor(Math.random() * textLists.length);

p.textContent = '';

  checkTexts = textLists[rnd].split('').map(function(value){
    let span = document.createElement('span');

    span.textContent = value;
    p.appendChild(span);

    return span;
  });
}


let cnt = document.getElementById('inputed-count');
let startState = false;
let count = 0;
let miss = 0;

document.addEventListener('keydown', keyDown);

function keyDown(e) {
  if(!startState) return;

  let keyCode = e.keyCode;

  if(e.key === checkTexts[0].textContent) {

      count++;

      cnt.textContent = count;

      checkTexts[0].className = 'add-blue';

      checkTexts.shift();

      if(!checkTexts.length) createText();
  }else if (keyCode === 16 || keyCode === 32 || keyCode == 13) {

  }else{
    miss++;
  }
}

let one = document.getElementById('score');
let two = document.getElementById('count');
let three = document.getElementById('miss');

function showModal(){
  $(document).ready(function(){
    $('#score-modal').css('display','block');
    one.textContent = (count - miss) * 100;
    two.textContent = count;
    three.textContent = miss;
  });
}

//ゲームスタート
function startGame(){
  startState = true;
  let tcount = 25;
  cnt.textContent = count;
  let id = setInterval(function(){
    tcount--;
    document.querySelector('#timer').textContent=tcount;
    if(tcount <= 0) {
      clearInterval(id);
      //モーダル表示
      showModal();

    }
  },1000);
}

document.getElementById('restart').onclick = function() {
  $(document).ready(function(){
    $('#score-modal').css('display','none');
    count = 0;
    miss = 0;
    createText();
    startGame();
  })
}

window.onload=function(){
  document.querySelector('#start').addEventListener('click',function(e){
    e.preventDefault();
    startGame();
  });
}
