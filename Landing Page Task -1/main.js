  // Handling Hamburger Click event 

  const handleClick = () => {
    document.getElementById("ul").style.display = "block";
    document.getElementById("btn").style.display = "none";
    document.getElementById("btn2").style.display = "block";
  }

  const handleClick2 = () => {
    document.getElementById("ul").style.display = "none";
    document.getElementById("btn").style.display = "block";
    document.getElementById("btn2").style.display = "none";
  }



window.addEventListener('scroll', () => {

    document.getElementById("navBar").style.backgroundColor = "rgba(0, 128, 0, 0.329)";
    document.getElementById("navBar").style.border = "3px solid rgba(65, 135, 65, 0.772)"
});
