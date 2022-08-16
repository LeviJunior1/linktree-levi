import "../src/main.css";
import "../src/assets/me.jpeg";

const socialMedia = [
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/levi-junior-130719130/",
  },
  {
    title: "GitHub",
    link: "https://github.com/LeviJunior1",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/levijun1or/",
  },
];

function createLink(media = {}) {
  let newLink = document.createElement("a");
  newLink.href = media.link;
  newLink.target = "_blank";
  newLink.textContent = media.title;
  return newLink;
}

function setLinkDOM(link) {
  let mainElement = document.querySelector("main");
  mainElement.appendChild(link);
}

function createElement(socialMedia = {}) {
  const link = createLink(socialMedia);
  setLinkDOM(link);
}

function listElement() {
  for (let social of socialMedia) {
    createElement(social);
  }
}

listElement();
