
    window.addEventListener('load', function() {
      const liItems = document.querySelectorAll('#bulid-slider li');
      for(let i = 0; i < liItems.length; i++) {
        liItems[i].style.display = 'none';
      }
      let slideIndex = 0;
      let slideTimer = setInterval(function() {
        if(slideIndex < liItems.length) {
          for(let i = 0; i < liItems.length; i++) {
            if(i !== slideIndex) {
              liItems[i].style.display = "none";
            } else {
              liItems[i].style.display = "block";
            }
          }
          slideIndex++;
        } else {
          slideIndex = 0;
        }
      }, 3000);
    });

    const hamburgericon = document.querySelector('#hamburger');
    const hamburgerDiv = document.querySelectorAll('#hamburger div');
    // console.dir(hamburgerDiv[2]);
    const menu = document.querySelector('#menu');
    const menuitem = document.querySelector('#textbox');
    const mainBg = document.querySelector('main-bg');

    console.dir(window);

    window.addEventListener('scroll', function() {
      // alert('hello');
      console.log(window.scrollY);
      if(window.scrollY > 50) {
        console.log(menu);
        menu.style.top = 0;
      } else {
        (window.scrollY <= 50) 
          menu.style.top = 50 + "px";
      }
    });


    hamburgericon.addEventListener('click', function() {
      if ( hamburgericon.classList.toggle("showmenu")) {
        menu.style.opacity = "100";
        // mainBg.style.backgroundColor = "#000";
        hamburgerDiv[0].style.transform = "rotate(45deg)";
        hamburgerDiv[0].style.top = "12px";
        hamburgerDiv[0].style.transition = .35 + "s";
        hamburgerDiv[1].style.opacity = 0;
        hamburgerDiv[2].style.transform = "rotate(-45deg)";
        hamburgerDiv[2].style.top = "12px"
        hamburgerDiv[2].style.transition = .35 + "s";
        console.dir(hamburgerDiv);
      } else {
        hamburgericon.classList.toggle("removemenu");
        menu.style.opacity = "0";
        menu.style.transition = .3 + "s";
        hamburgerDiv[0].style.transform = "rotate(-180deg)"
        hamburgerDiv[0].style.top = "0px";
        hamburgerDiv[1].style.opacity = 1;
        hamburgerDiv[2].style.transform = "rotate(180deg)"
        hamburgerDiv[2].style.top = "20px";
      }
    });

