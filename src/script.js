// Sticky Header

const sectionHomeEl = document.querySelector(".section-home");
console.log(sectionHomeEl);

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting)
      document.getElementById("root").classList.add("sticky");

    if (ent.isIntersecting)
      document.getElementById("root").classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHomeEl);
