var tl=gsap.timeline();
gsap.from(".home .home-content .text,.button", {
    duration:2,
    opacity: 0,
    delay:2,
    x: -100,
    // scale:0,
    // stagger: 0.2, 
  });

tl.from(".logo",{
    duration: 2,
    opacity:0,
    y: -100,
})
tl.from(".menu li", {
    duration: 0.5,
    opacity: 0,
    y: -100,
    stagger: 0.2,
  });
  
  tl.from(".media-icons a", {
    duration: 0.5,
    opacity: 0,
    y: -100,
    stagger: 0.2,
  });
 
tl.from(".about img", {
    duration: 0.5,
    opacity: 0,
    scale:0,
    stagger: 0.2, 
    scrollTrigger:
    {
        trigger:".about",
        start:"top 80%",
        end:"bottom 80%",
        scrub:3
    }
  });