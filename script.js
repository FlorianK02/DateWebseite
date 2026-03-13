const scenes = [
  {
    text: "Hi Jessy",
    image: "images/HuskSmirk.jpg"
  },
  {
    text: "hier ist Husk",
    image: "images/HuskCute.jpg"
  },
  {
    text: "Ich bin hier gerade etwas Mysteriösem auf der Spur",
    image: "images/HuskRamble.jpg"
  },
  {
    text: "Das Hazbin Hotel hat zwei neue Bewohner bekommen. Sie heißen Lulu und Kayama",
    image: "images/HuskRamble.jpg"
  },
  {
    text: "Kayama hat es faustdick hinter den Ohren, sag ich dir",
    image: "images/HuskDrink.jpg"
  },
  {
    text: "Damn",
    image: "images/HuskDrink.jpg"
  },
  {
    text: " ",
    image: "images/HuskDrinkFinger.jpg"
  },
  {
    text: "Jeden Abend sitzen sie an meiner Bar und hecken neue Verbrechen aus",
    image: "images/HuskPlanning.jpg"
  },
  {
    text: "Heute Abend lenke ich sie ab und du hörst ihnen heimlich zu",
    image: "images/HuskPlanning.jpg"
  },
  {
    text: "Vielleicht wollen sie auch die Hölle übernehmen, so wie Vox vor ein paar Tagen",
    image: "images/HuskScared.jpg"
  },
  {
    text: "Ich hab hier wirklich nie meine Ruhe…",
    image: "images/HuskDrink.jpg"
  },
  {
    text: "Oh, pass auf. Hier kommen sie schon",
    image: "images/HuskPlanning.jpg"
  },
  {
    text: "Hey Lulu, da bist du ja!",
    image: "images/HeyLulu.jpg"
  },
  {
    text: "Oh, hallo Kayama!",
    image: "images/HalloKayama.jpg"
  },
  {
    text: "Ich habe Neuigkeiten über Jessy mitgebracht",
    image: "images/Neuigkeiten.jpg"
  },
  {
    text: "Erzähl, erzähl!",
    image: "images/erzaehl.jpg"
  },
  {
    text: "In letzter Zeit schläft bei ihr immer dieser Flori von dir",
    image: "images/Neuigkeiten.jpg"
  },
  {
    text: "Ich glaube er hat Jessy echt gern",
    image: "images/lieb.jpg"
  },
  {
    text: "Aber er ist auch ein mega gutes Kissen für mich",
    image: "images/schlaf.jpg"
  },
  {
    text: "Das hat er davon, dass er immer auf Jessy liegen darf >:(",
    image: "images/schlaf.jpg"
  },
  {
    text: "Oh ja. Wenn du nur wüsstest, wie oft er an sie denkt",
    image: "images/DenktOft.jpg"
  },
  {
    text: "Aber lass uns über unsere Pläne reden",
    image: "images/Plaene.jpg"
  },
  {
    text: "Wie läuft deine Mission mehr Snacks zu bekommen?",
    image: "images/Plaene.jpg"
  },
  {
    text: "Leider nicht so gut :(",
    image: "images/schlecht.jpg"
  },
  {
    text: "Ich kann zwar schon den Schrank öffnen, aber meine Leckerlis werden von einer magischen Schutzschicht aus Plastik beschützt",
    image: "images/schlecht.jpg"
  },
  {
    text: "Das tuff bro 🌹",
    image: "images/tuff.jpg"
  },
  {
    text: "Hast du es schon geschafft den roten Punkt auf dem Boden zu fangen?",
    image: "images/punkt.jpg"
  },
  {
    text: "Bor ne der ist viel zu schnell",
    image: "images/schlecht.jpg"
  },
  {
    text: "Ich glaube langsam Jessy hat etwas damit zu tun. Aber mir fehlen noch Beweise.",
    image: "images/jessy.jpg"
  },
  {
    text: "Wenn ich den Punkt kriege gibt’s was auf die Mütze",
    image: "images/muetze.jpg"
  },
  {
    text: "Valid",
    image: "images/tuff.jpg"
  },
  {
    text: "Glaubst du, wir könnten Jessy und Flori dazu bringen, uns mehr Leckerlis zu geben, wenn sie gute Laune haben?",
    image: "images/dick.jpg"
  },
  {
    text: "Wir könnten sie vielleicht auf ein Date schicken",
    image: "images/DenktOft.jpg"
  },
  {
    text: "Ich bin mir sicher, dass Flori das lieben würde. Der steht wirklich sehr auf Jessy xD",
    image: "images/DenktOft.jpg"
  },
  {
    text: "Uh, hast du das gehört?",
    image: "images/HuskSmirk.jpg"
  },
  {
    text: "Diese Katzen sind echt nicht subtil… aber die Idee gefällt mir",
    image: "images/HuskSmirk.jpg"
  },
  {
    text: "Also Jessy… hättest du Lust, nächste Woche mit Flori auf ein Date zu gehen? x3",
    image: "images/HuskCute.jpg",
    showChoices: true
  }
];

let currentScene = 0;

const textElement = document.getElementById("story-text");
const imageElement = document.getElementById("story-image");
const nextButton = document.getElementById("next-btn");
const choiceButtons = document.getElementById("choice-buttons");

function typeText(text) {

  let i = 0;
  textElement.textContent = "";

  const interval = setInterval(() => {

    textElement.textContent += text[i];
    i++;

    if (i >= text.length) {
      clearInterval(interval);
    }

  }, 25);
}

function launchHearts() {

  for (let i = 0; i < 25; i++) {

    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    heart.style.animationDuration = (2 + Math.random() * 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }

}

nextButton.addEventListener("click", () => {

  currentScene++;

  if (currentScene < scenes.length) {

    const scene = scenes[currentScene];

    typeText(scene.text);
    imageElement.src = scene.image;

    if (scene.showChoices) {

      nextButton.classList.add("hidden");
      choiceButtons.classList.remove("hidden");

    }

  }

});

let noClickCount = 0;

// YES BUTTON
document.getElementById("yes-btn").addEventListener("click", () => {
  textElement.textContent = "YAYYYY x3 Hab dich lieb <3";
  imageElement.src = "images/Cute Raccoon.jpg";

  document.body.classList.add("celebrate");
  launchHearts();

  choiceButtons.classList.add("hidden");

  // Kleiner Delay bevor die Date-Vorschläge erscheinen
  setTimeout(() => {
    const dateChoices = document.getElementById("date-choices");
    dateChoices.classList.remove("hidden");

    typeText("Was sollen wir zum Date machen?");
  }, 1200);
});

// --- HIER kommen die Eventlistener für die Date-Vorschläge ---
document.getElementById("cafe-btn").addEventListener("click", () => {
  typeText("Supi! Dann gehen wir ins Katzen Café hehe x3 🐱☕");
  document.getElementById("date-choices").classList.add("hidden");
});

document.getElementById("bastel-btn").addEventListener("click", () => {
  typeText("Yayyy! Dann machen wir ein Bastel Date ✂️🎨 Wir könnten die Staffelei bemalen oder wieder nach Perlen suchen :>");
  document.getElementById("date-choices").classList.add("hidden");
});

document.getElementById("museum-btn").addEventListener("click", () => {
  typeText("Yippieee! Dann besuchen wir das Aquarium oder Naturkundemuseum 🐠🦖");
  document.getElementById("date-choices").classList.add("hidden");
});

document.getElementById("no-btn").addEventListener("click", () => {

  noClickCount++;

  if (noClickCount === 1) {

    textElement.textContent = "A u sure?";
    imageElement.src = "images/sure.jpg";

  }

});