//console.dir(selectPlanButton);  //shows array of elements
//console.log(backdrop);

var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener("click", function() {
      // modal.style.display = "block";
      // backdrop.style.display = "block";
      // modal.className = 'open'  //this will actually overwrite the complete class list
      modal.classList.add('open');
      backdrop.classList.add('open');
    });
  }
  
backdrop.addEventListener("click", function(){
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  closeModal();
});
  //wrap up modalNoButton cause it exists only on first main page, excluding others
if(modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}
  
  function closeModal() {
    // backdrop.style.display = "none";
    // modal.style.display = "none";
    //wrap up modal cause it exists only on first main page, excluding others
   if (modal) {
     modal.classList.remove('open');
   }
    backdrop.classList.remove('open');
  }

  toggleButton.addEventListener('click', function(){
    // mobileNav.style.display = 'block';
    // backdrop.style.display = "block";
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
  });