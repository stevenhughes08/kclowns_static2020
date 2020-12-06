// Check charaterStatusArray.js if character is active

const activeClowns = [];
for (i = 0; i < characters.length; i++) {
    if (characters[i].isActive == true) {
        activeClowns.push(characters[i]);
    }
}

console.log(activeClowns);

const charCardMarkup = `${activeClowns.map(char => `
<div class="char-card">
<ul id="charData">
<li class="charPic"><img src="${char.image}" alt="character pic"></li>
<li class="charName">${char.name}</li>
<li class="charTagline">${char.tagline}</li>
<li class="charAbout">${char.about}</li>
</ul>
</div>
`)}`;

// Create markup for character cars based off the Character Array

document.querySelector(' #cardInfo ').innerHTML =charCardMarkup;