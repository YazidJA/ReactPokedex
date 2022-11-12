const properCase = (string) => {
  let properText = [string[0].toUpperCase()];
  for (let i = 1; i < string.length; i++) {
    properText.push(string[i].toLowerCase());
  }
  return properText.join("");
};

export default properCase;
