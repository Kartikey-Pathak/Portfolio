console.log("Hello world");

let btn=document.querySelector(".mail");

let logo=document.querySelector("#logo");

let email=document.querySelector("#email");

const mobileView = window.matchMedia("(max-width: 1080px)");

btn.addEventListener('click',()=>{
    logo.classList.add('hide');
      email.innerHTML="kartikeypathak08@gmail.com";
      if (mobileView.matches) {
        // For mobile screens
      email.style.fontSize='4vh';
      }else{
        email.style.fontSize='2vh';
      }
      btn.style.cursor='pointer';
       // Create an anchor element
    let mailtoLink = document.createElement('a');
    mailtoLink.href = 'mailto:kartikeypathak8@gmail.com';  // Set mailto link with your email
    mailtoLink.click();  // Simulate a click to open the default email client
})

btn.addEventListener('mouseout',()=>{
    email.innerHTML="Contact";
    logo.classList.remove('hide');
    if (mobileView.matches) {
        // For mobile screens
      email.style.fontSize='12vh';
      }else{
        email.style.fontSize='3vh';
      }

})






