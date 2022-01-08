var navbarLinks = document.querySelectorAll(".mobnav")[0];
// var toggler = document.querySelectorAll(".toggleicon")[0];

function myToggler(){
  navbarLinks.classList.toggle("d-none");
  // toggler.classList.toggle("clicked");
  if(navbarLinks.classList.contains("d-none")){
    let newHTML = "<i class=\"fa fa-bars\" style=\"color: aliceblue;\"></i>";
  document.querySelectorAll(".toggleicon")[0].innerHTML = newHTML;
  }
  else{
    let newHTML = "<i class=\"fas fa-times\" style=\"color: aliceblue;\"></i>";
  document.querySelectorAll(".toggleicon")[0].innerHTML = newHTML;
  }
  
}
