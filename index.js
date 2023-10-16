const catList = document.querySelector("#catList");
const dogList = document.querySelector("#dogList");
const emojis = {
  catEmojis: ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🐱"],
  dogEmojis: ["🐶", "🐕", "🦮", "🐩", "🐾", "🐺", "🦊", "🦝", "🐕‍🦺", "🐩"],
};

function catlist() {
  for (i = 0; i < emojis.catEmojis.length; i++) {
    const catEmoji = document.createElement("li");
    catEmoji.innerText = emojis.catEmojis[i];

    catList.appendChild(catEmoji);
  }
}

function doglist() {
  for (i = 0; i < emojis.dogEmojis.length; i++) {
    const dogEmoji = document.createElement("li");
    dogEmoji.innerText = emojis.dogEmojis[i];

    dogList.appendChild(dogEmoji);
  }
}
