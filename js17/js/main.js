// Objects
// key-value pairs in curly braces
const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham"
};
// destructuring objects

function sings({ vocals} ) {
  return `${vocals} sings`;
}
console.log(sings(band));

// delete band.drums;
// console.log(band.hasOwnProperty("drums"));

// console.log(Object.keys(band));
// console.log(Object.values(band));

// for (let job in band) {
//   console.log(`On ${job}, it's ${band[job]}!`);
// }