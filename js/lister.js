// Check charaterStatusArray.js if character is active

const activeClowns = [];
for (i = 0; i < characters.length; i++) {
    if (characters[i].isActive == true) {
        activeClowns.push(characters[i]);
    }
}

console.log(activeClowns);

const charCardMarkup = `${activeClowns.map(char => `
<div class="card">
<div class="col">
    <div class="card-text card-prop">
        <h2 class="char-name">${char.name}</h2>
        <p>${char.tagline}</p>
        <p>${char.about}</p>
    </div>
</div>
<div class="col">
    <div class="card-img card-prop">
        <img class="center img-fluid" src="${char.image}" alt="Follow ${char.name}">
    </div>

</div>
</div>
`)}`;

// Create markup for character cars based off the Character Array

document.querySelector(' #cardInfo ').innerHTML =charCardMarkup;