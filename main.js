/*==========SHOW MENU ========*/
    const showMenu=(toggleId,navId)=>{
       const toggle=document.getElementById(toggleId),
       nav = document.getElementById(navId)
      
      
       //validate that variable exist
       if(toggle &&  nav){
          toggle.addEventListener('click',()=>{
              //we add the show-menu class to the div tag with the nav_menu class
              nav.classList.toggle('show-menu')
          })
       }
    }
    showMenu('nav-toggle','nav-menu')
    
    /*=========REMOVE MENU MOBILE==========*/
    const nav_link =document.querySelectorAll('.nav__link')
    function linkAction(){
        const navMenu=document.getElementById('.nav-menu')
        //when we click on each nav_link,we remove the show-menu class
        navMenu.classList.remove('show-menu')
        
    }         
    nav_link.forEach(n => n.addEventListener('click',linkAction))
    
    /*=========SCROLL ACTIVE LINK==========*/
    const sections = document.querySelectorAll('section[id]')
    function scrollActive() {
       const scrollY = window.pageYoffset
       
       sections.forEach(current => {
         const sectionHeight= current.offsetHeight
         const sectionTop= current.offsetTop -50;
         sectionId= current.getAttribute('Id')
         
         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
             document.querySelector('nav__menu a[href* =' + sectionId + ']').classList.add('active-link')
         }else{
             document.querySelector('nav__menu a[href* =' + sectionId + ']').classList.remove('active-link')
         }
       })
    }
    window.addEventListener('scroll',scrollActive)

    /*=========CHANGE BACKGROUND HEADER========*/
    function scrollHeader() {
    const nav = document.getElementById('header')
    //when the scroll is greater then 200 viewport height,add the scroll-header class to the header tag//
    if(this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
    }
    
    window.addEventListener('scroll',scrollHeader)

    /*=========SHOW SCROLL TOP=========*/
    function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    //when the scroll is Higher then 560 viewport height,add the show-scroll class to the tag with the scroll-top class//
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top');
    else scrollTop.classList.remove('show-scroll');
    }
    
    window.addEventListener('scroll',scrollTop)


   /*=========SLIDESHOW=========*/ 
   var slideIndex =1;
   showSlides(slideIndex);

   // Next/previous controls
   function plusSlides(n){
        showSlides(slideIndex += n);
   }

   // Thumbnail image controls
   function currentSlide(n){
        showSlides(slideIndex = n);
   }

   function showSlides(n){
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i=0; i < slides.length; i++){
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++){
            dots[i].className = dots[i].className.replace("active","");
        }
        slides[slideIndex-1].style.display = "black";
        dots[slideIndex-1].classsName += "active"
   }