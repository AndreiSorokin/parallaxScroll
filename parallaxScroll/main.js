"use strict"

window.onload = function() {
   const parallax = document.querySelector('.parallax');

   if(parallax) {
      const container = document.querySelector('.parallax__container');
      const clouds = document.querySelector('.img__clouds');
      const mountains = document.querySelector('.img__mountains');
      const human = document.querySelector('.img__human');

      const forClouds = 40;
      const forMountains = 20;
      const forHuman = 10;

      const animationSpeed = 0.03;

      let positionX = 0, positionY = 0;
      let coordXpercent = 0, coordYpercent = 0;

      function setMouseParallaxStyle() {
         const distX = coordXpercent - positionX;
         const distY = coordYpercent - positionY;

         positionX = positionX + (distX*animationSpeed);
         positionY = positionY + (distY*animationSpeed);
      
         clouds.style.cssText = `transform:translate(${positionX / forClouds}%, ${positionY / forClouds}%);`;
         mountains.style.cssText = `transform:translate(${positionX / forMountains}%, ${positionY / forMountains}%);`;
         human.style.cssText = `transform:translate(${positionX / forHuman*0.5}%, ${positionY / forHuman*0.5}%);`;
      
         requestAnimationFrame(setMouseParallaxStyle);
      }
      setMouseParallaxStyle();

      parallax.addEventListener("mousemove", function(e) {
         const parallaxWidth = parallax.offsetWidth;
         const parallaxHeight = parallax.offsetHeight;

         const coordX = e.pageX - parallaxWidth/2;
         const coordY = e.pageY - parallaxHeight/2;

         coordXpercent = coordX / parallaxWidth * 100;
         coordYpercent = coordY / parallaxHeight * 100;
      });
   }
}