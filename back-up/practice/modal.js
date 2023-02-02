const modal = document.getElementById('simpleModal');
const modalBtn = document.getElementById('modalBtn')
const closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal(){
  modal.style.display = 'block';
}

function closeModal(){
  modal.style.display = 'none';
}

function outsideClick(e){
  if (e.target == modal){
  modal.style.display = 'none';
  }
}

const mBtn = document.querySelectorAll('btn-2');
function selectModal(){
  mBtn.classList.toggle('active');
}
