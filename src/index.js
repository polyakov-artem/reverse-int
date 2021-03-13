module.exports = function reverse (n) {
  const reversedString = `${n}`.split('').reverse().join('');
  return parseInt(reversedString,10)
}