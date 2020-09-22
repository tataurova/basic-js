module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2 ** disksNumber - 1;
  const seconds = Math.trunc(turns / turnsSpeed * 3600);
  return {
    turns,
    seconds,
  };
};
