let tl = gsap
  .timeline()
  .fromTo(
    '.img-one',
    { x: 0, opacity: 0.3 },
    { x: 620, opacity: 0,  duration: 1, ease: 'Sine.easeIn' }
  )
  .fromTo(
    '.img_two',
    { x: 0, opacity: 0.5 },
    { x: -619, opacity: 0, duration: 1, ease: 'Sine.easeIn' },"-=1"
  )
  .fromTo(
    '.img_three',
    { x: 0, opacity: 0 },
    { x: 0, opacity: 0.8,  ease: 'Sine.easeIn' }
  )
  .fromTo(
    '.img_four',
    { z: 0, opacity: 0 },
    { z: 0, opacity: 0.8,  ease: 'Sine.easeIn' }
  )
  .fromTo(
    '.text',
    { z: 0, opacity: 0 },
    { z: 0, opacity: 1, ease: 'Sine.easeIn' }
  );

ScrollTrigger.create({
  trigger: '.scrollpinHeader',
  start: 'top 0',
  end: '+=200% ',
  //   end: () => '+=' + document.querySelector('.scrollpin').offsetHeight,
  scrub: true,
  pin: true,
  markers: true,
  animation: tl,
  anticipatePin: 1,
  id: 'header',
});



