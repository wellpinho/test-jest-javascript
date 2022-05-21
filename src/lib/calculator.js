const sum = (a, b) => {
  const int1 = parseInt(a, 10);
  const int2 = parseInt(b, 10);

  if (isNaN(int1) || isNaN(int2)) {
    throw new Error("Invalid number");
  }

  return int1 + int2;
};

module.exports = sum;
