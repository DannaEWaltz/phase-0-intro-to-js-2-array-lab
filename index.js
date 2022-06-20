// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
cats;
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });
function destructivelyAppendCat() {
    destructivelyAppendCat = cats.push("Ralph");
}
function destructivelyPrependCat() {
    destructivelyPrependCat = cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    destructivelyRemoveLastCat = cats.pop();
}
function destructivelyRemoveFirstCat() {
    destructivelyRemoveFirstCat = cats.shift();
}
function appendCat(name) {
    return [...cats, name];
}
function prependCat(name) {
    return [name, ...cats];
}
function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}
function removeFirstCat() {
    return cats.slice(1);
}
