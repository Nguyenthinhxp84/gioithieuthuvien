
  //khai báo biến slideIndex đại diện cho slide hiện tại
  var slideIndex;
  // KHai bào hàm hiển thị slide
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
 
      slides[slideIndex].style.display = "block";  
      dots[slideIndex].className += " active";
      //chuyển đến slide tiếp theo
      slideIndex++;
      //nếu đang ở slide cuối cùng thì chuyển về slide đầu
      if (slideIndex > slides.length - 1) {
        slideIndex = 0
      }    
      //tự động chuyển đổi slide sau 5s
      setTimeout(showSlides, 3000);
  }
  //mặc định hiển thị slide đầu tiên 
  showSlides(slideIndex = 0);
 
 
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

const menuTitle = document.querySelector(".menu-hs-title");
menuTitle.addEventListener("click",function(x) {
  if(x.target.classList.contains("menus-button")){
    const Target = x.target.getAttribute("data-title");
    // console.log(Target)
    menuTitle.querySelector(".active").classList.remove("active");
    x.target.classList.add("active");

    const menuItem = document.querySelector(".menu-hs");
    menuItem.querySelector(".menu-item-content.active").classList.remove("active");
    menuItem.querySelector(Target).classList.add("active")
  }
})