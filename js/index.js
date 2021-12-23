class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = "!<>-_\\/[]{}—=+*^?#________";
      this.update = this.update.bind(this);
    }
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => (this.resolve = resolve));
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
    update() {
      let output = "";
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}
let phrases = [];

let el;
let fx;

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => { });
  counter = (counter + 1) % phrases.length;
};


const aboutUs = document.querySelector("#aboutUs > .heading > span");
const events = document.querySelector("#events > .heading > span");
// const contact = document.querySelector("#contact > .heading > span");
// const videos = document.querySelector("#videos > .heading > span");
// const speakers = document.querySelector("#speakers > .heading > span");
// const workshops = document.querySelector("#workshops > .heading > span");
// const home = document.querySelector("#home .register-button");


let isAboutUsAnimated = false;
let isEventsAnimated = false;
// let isContactAnimated = false;
// let isVideoAnimated = false;
// let isSpeakersAnimated = false;
// let isWorkshopsAnimated = false;

let activePage = "home";

const isInViewport = function (elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
    (window.innerWidth || document.documentElement.clientWidth)
  );
};

const setActivePage = (idAsString) => {
  console.log(activePage);
  activePage = idAsString;
  str = activePage + "Pagination";
  document.querySelectorAll(".individual").forEach((ele) => {
    if (ele.id == str) {
      ele.classList.add("opacity1Class");
    } else {
      ele.classList.remove("opacity1Class");
    }
  });
  // console.log(document.getElementById("allEvents").style.display);
//   if (document.getElementById("allEvents").style.display == "" || document.getElementById("allEvents").style.display == "none") {
//     setPaginationDisplay(null);
//   }
//   else {
//     setPaginationDisplay("none");
//   }
};

window.addEventListener(
  "wheel",
  function (e) {
    if (isInViewport(aboutUs)) {
      setActivePage("aboutUs");
      if (!isAboutUsAnimated) {
        phrases = ["About Us"];
        el = aboutUs;
        fx = new TextScramble(el);
        isAboutUsAnimated = true;
        next();
      }
    }  
    else if (isInViewport(events)) {
        setActivePage("events");
        if (!isEventsAnimated) {
          phrases = ["Events"];
          el = events;
          fx = new TextScramble(el);
          isEventsAnimated = true;
          next();
        }
      }
    else if (isInViewport(contact)) {
      setActivePage("contact");
      if (!isContactAnimated) {
        phrases = ["Contact Us"];
        el = contact;
        fx = new TextScramble(el);
        isContactAnimated = true;
        next();
      }
    } 
    else if (isInViewport(videos)) {
      setActivePage("videos");
      if (!isVideoAnimated) {
        phrases = ["Videos"];
        el = videos;
        fx = new TextScramble(el);
        isVideoAnimated = true;
        next();
      }
    }
    else if (isInViewport(speakers)) {
      setActivePage("speakers");
      if (!isSpeakersAnimated) {
        phrases = ["Speakers"];
        el = speakers;
        fx = new TextScramble(el);
        isSpeakersAnimated = true;
        next();
      }
    }
    else if (isInViewport(workshops)) {
      setActivePage("speakers");
      if (!isWorkshopsAnimated) {
        phrases = ["Workshops"];
        el = workshops;
        fx = new TextScramble(el);
        isWorkshopsAnimated = true;
        next();
      }
    }
    else if (isInViewport(events)) {
      setActivePage("events");
      if (!isEventsAnimated) {
        phrases = ["Events"];
        el = events;
        fx = new TextScramble(el);
        isEventsAnimated = true;
        next();
      }
    }
    else if (isInViewport(home)) {
      setActivePage("home");
    } 
    
  },
  false
);

window.addEventListener(
  "scroll",
  function (e) {
    if (isInViewport(aboutUs)) {
      setActivePage("aboutUs");
      if (!isAboutUsAnimated) {
        phrases = ["About Us"];
        el = aboutUs;
        fx = new TextScramble(el);
        isAboutUsAnimated = true;
        next();
      }
    }
    else if (isInViewport(events)) {
        setActivePage("events");
        if (!isEventsAnimated) {
          phrases = ["Events"];
          el = events;
          fx = new TextScramble(el);
          isEventsAnimated = true;
          next();
        }
      }
    else if (isInViewport(contact)) {
      setActivePage("contact");
      if (!isContactAnimated) {
        phrases = ["Contact Us"];
        el = contact;
        fx = new TextScramble(el);
        isContactAnimated = true;
        next();
      }
    }
    else if (isInViewport(videos)) {
      setActivePage("videos");
      if (!isVideoAnimated) {
        phrases = ["Videos"];
        el = videos;
        fx = new TextScramble(el);
        isVideoAnimated = true;
        next();
      }
    }
    else if (isInViewport(speakers)) {
      setActivePage("speakers");
      if (!isSpeakersAnimated) {
        phrases = ["Speakers"];
        el = speakers;
        fx = new TextScramble(el);
        isSpeakersAnimated = true;
        next();
      }
    }
    else if (isInViewport(workshops)) {
      setActivePage("workshops");
      if (!isWorkshopsAnimated) {
        phrases = ["Workshops"];
        el = workshops;
        fx = new TextScramble(el);
        isWorkshopsAnimated = true;
        next();
      }
    }
    else if (isInViewport(home)) {
      setActivePage("home");
    }
    
  },
  false
);