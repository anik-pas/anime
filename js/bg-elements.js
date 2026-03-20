const bgElements = () => {
  const elements = document.querySelectorAll(".set-bg");

  for (let i = 0; i < elements.length; i++) {
    const src = elements[i].dataset.setbg;

    // elements[i].style.backgroundImage = "url(" + src + ")"; эту строчку можно упростить см. ниже
    elements[i].style.backgroundImage = `url(${src})`;
    // console.dir(elements[i]);
  }
};

bgElements();
