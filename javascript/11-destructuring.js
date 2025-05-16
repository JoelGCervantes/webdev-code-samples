console.log('\n========== JavaScript Destructuring ==========\n');

const character = {
  first: 'Daenerys',
  last: 'Targaryen',
  house: 'Targaryen',
  culture: 'Valyrian',
  born: 'In 284 AC, at Dragonstone',
  parents: {
    mother: 'Queen Rhaella',
    father: 'King Aerys II',
  },
  dragons: ['Drogon', 'Rhaegal', 'Viserion'],
};

// Destructuring the 'first' name and the 'house'
const { first, house } = character;

// Destructuring from the 'parents' object
const { mother, father } = character.parents;

console.log(`${first} of house ${house}, daughter of ${mother} and ${father}.`);
// Daenerys of house Targaryen, daughter of Queen Rhaella and King Aerys II.

const [__, dragon2, dragon3] = character.dragons;

console.log(`The two dragons who do not make it are ${dragon2} and ${dragon3}`);
// The two dragons who do not make it are Rhaegal and Viserion.
