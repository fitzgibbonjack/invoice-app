export function generateId() {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // 2 random letters
  for (let i = 0; i < 2; i++) {
    const randomInt = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomInt);
  }
  // random 4 digit int
  result += Math.floor(1000 + Math.random() * 9000);

  return result;
}
