const socialNetworks = [
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

function createElement(socialNetworks = []) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("social-network");

  let newLink = document.createElement("a");
  newLink.href = socialNetworks.link;
  newLink.target = "_blank";
  newLink.textContent = socialNetworks.title;

  newDiv.appendChild(newLink);

  let main_element = document.querySelector("main");
  main_element.appendChild(newDiv);
}

function listElement() {
  for (social of socialNetworks) {
    createElement(social);
  }
}

listElement();
