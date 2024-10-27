
 const handleFirstTab = (e) => {
    if(e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing')
  
      window.removeEventListener('keydown', handleFirstTab)
      window.addEventListener('mousedown', handleMouseDownOnce)
    }
  
  }
  
  const handleMouseDownOnce = () => {
    document.body.classList.remove('user-is-tabbing')
  
    window.removeEventListener('mousedown', handleMouseDownOnce)
    window.addEventListener('keydown', handleFirstTab)
  }
  
  window.addEventListener('keydown', handleFirstTab)
  
  const backToTopButton = document.querySelector(".back-to-top");
  let isBackToTopRendered = false;
  
  let alterStyles = (isBackToTopRendered) => {
    backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
    backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
    backToTopButton.style.transform = isBackToTopRendered
      ? "scale(1)"
      : "scale(0)";
  };
  
  
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      isBackToTopRendered = true;
      alterStyles(isBackToTopRendered);
    } else {
      isBackToTopRendered = false;
      alterStyles(isBackToTopRendered);
    }
  });
  
  
  function toggleButton( element) {
    toggleClass(element); // Use the custom toggleClass function
    element.textContent = element.classList.contains("active") ? "Light " : "Dark";
  
    if (element.classList.contains("active")) {
      document.body.style.backgroundColor = "white";
      document.querySelectorAll("h3").forEach(h3 => h3.style.color = "black");
      document.querySelectorAll("h2").forEach(h2 => h2.style.color = "black");
      document.querySelectorAll("p").forEach(p => p.style.color = "black");
      document.querySelectorAll("span").forEach(span => span.style.color = "white");
      document.querySelectorAll("a").forEach(a => a.style.color = "black");
      document.querySelectorAll("li").forEach(li => li.style.color = "black");
      const headerTextBox = document.querySelector(".header__text-box");
      headerTextBox.style.backgroundColor = "white";
      headerTextBox.style.color = "black";
      document.querySelector("p-web").style.color = "white";
      // document.querySelector(".nav__item").style.backgroundColor = "white";
      } else {
      document.body.style.backgroundColor = "black";
      document.querySelectorAll("h3").forEach(h3 => h3.style.color = "white");
      document.querySelectorAll("h2").forEach(h2 => h2.style.color = "white");
      document.querySelectorAll("p").forEach(p => p.style.color = "white");
      document.querySelectorAll("span").forEach(span => span.style.color = "white");
      document.querySelectorAll("a").forEach(a => a.style.color = "white");
      document.querySelectorAll("li").forEach(li => li.style.color = "white");
    }
  }
  
  function toggleClass(element) {
    element.classList.toggle("active");
  }
  