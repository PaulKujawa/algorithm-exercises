function getRnd1to5() {
  return Math.random() * 4 + 1;
}

function getRnd5to8() {
  return Math.random() * 3 + 5;
}

function getRnd5to7() {
  return (getRnd1to5() / 5) * 2 + 5;
}

console.log(getRnd5to8());
