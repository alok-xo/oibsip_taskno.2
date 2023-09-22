let tl = gsap.timeline();

tl.from(".para1 p", {
  opacity: 0,
  delay: 0.5,
});
tl.from(".nav", {
  x: -150,
  duration: 0.5,
});
tl.from(".main .img1", {
  y: -100,
  opacity: 0,
  duration: 0.4,
});
tl.from(".main .img2", {
  y: 100,
  opacity: 0,
  duration: 0.4,
});
tl.to(".main h3", {
  y: 20,
  repeat: -1,
  duration: 0.8,
  yoyo: true,
  opacity:.5
});
