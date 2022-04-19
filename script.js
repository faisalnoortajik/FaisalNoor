



const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  const line2 =  document.querySelector('.line2');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        

    });


}

    
navSlide();