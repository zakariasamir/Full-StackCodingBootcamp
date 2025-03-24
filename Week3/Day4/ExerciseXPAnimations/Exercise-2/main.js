function myMove() {
  const animate = document.getElementById("animate");
  const container = document.getElementById("container");

  let position = 0;
  const containerWidth = container.clientWidth;
  const animateWidth = animate.clientWidth;

  const intervalId = setInterval(() => {
    if (position >= containerWidth - animateWidth) {
      clearInterval(intervalId);
    } else {
      position++;
      animate.style.left = position + "px";
    }
  }, 1);
}