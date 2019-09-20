//console.dir(selectPlanButton);  //shows array of elements
//console.log(backdrop);

var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector(".main-nav__item--cta");


// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener("click", function() {
      // modal.style.display = "block";
      // modal.className = 'open'  //this will actually overwrite the complete class list
      modal.classList.add('open');
      backdrop.style.display = "block";
      // backdrop.classList.add('open');
      setTimeout(function(){
        backdrop.classList.add('open');
      }, 10);
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
    //backdrop.style.display = "none";
    backdrop.classList.remove('open');
    setTimeout(function(){
      backdrop.classList.remove('none');
    }, 200);
  }

  toggleButton.addEventListener('click', function(){
    // mobileNav.style.display = 'block';
    
    mobileNav.classList.add('open');
    backdrop.style.display = "block";
    setTimeout(function(){
      backdrop.classList.add('open');
    }, 10);
    
  });

  ctaButton.addEventListener('animationstart', function(event){
    console.log('Animation started', event);
  })

  ctaButton.addEventListener('animationend', function(event){
    console.log('Animation ended', event);
  })
  ctaButton.addEventListener('animationiteration', function(event){
    console.log('Animation iteration', event);
  })