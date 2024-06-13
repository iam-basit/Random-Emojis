const btnEl = document.getElementById("btnClick");
const emojiName = document.getElementById("emojiName");
const emoji = [];

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=187d5f0d5137df7cf71e2be437c0cd9fe7cefcdd"
  );
  data = await response.json();
  console.log(data);
  for (i = 0; i < 1500; i++) {
    emoji.push({
      character: data[i].character,
      description: data[i].unicodeName,
    });
  }
}
getEmoji();

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNum].character;
  emojiName.innerText = emoji[randomNum].description;
});
