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

function createElement(socialMedia = []) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("social-network");

  let newLink = document.createElement("a");
  newLink.href = socialMedia.link;
  newLink.target = "_blank";
  newLink.textContent = socialMedia.title;

  newDiv.appendChild(newLink);

  let mainElement = document.querySelector("main");
  mainElement.appendChild(newDiv);
}

function listElement() {
  for (let social of socialMedia) {
    createElement(social);
  }
}

listElement();
