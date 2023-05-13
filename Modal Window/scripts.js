const modal = document.querySelector('.modal'); // Select the modal
const overley = document.querySelector('.overlay'); // Select the overley
const btnCloseModal = document.querySelector('.close-modal'); // Select the close modal button
const btnsShowModal = document.querySelectorAll('.show-modal');


const openModel = function(){
    modal.classList.remove('hidden');
    overley.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
    overley.classList.add('hidden');
}

for (btn of btnsShowModal){
    btn.addEventListener('click', openModel)
}

btnCloseModal.addEventListener('click', closeModal);
overley.addEventListener('click', closeModal);

document.addEventListener('keydown', function(event){
    if(event.key == 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});
