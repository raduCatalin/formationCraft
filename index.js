//https://github.com/newlight77/bootstraps
const equivalences = [
  { number: 3, label: "Foo" },
  { number: 5, label: "Bar" },
  { number: 7, label: "Qix" },
];

const compute = (input) => {
  const number = parseFloat(input);
  let res = "";

  if (!isNaN(number)) {
    res = getDivisibleEquivalence(number, res);
  }

  res = getReplacedEquivalence(input, res);

  if (!res) {
    return input;
  }

  return res;
};

const getDivisibleEquivalence = (number, res) => {
  equivalences.forEach((equivalence) => {
    if (number % equivalence.number === 0) {
      res += equivalence.label;
    }
  });

  return res;
};

const getReplacedEquivalence = (input, res) => {
  equivalences.forEach((equivalence) => {
    const founded = input.match(new RegExp(equivalence.number, "g")) || [];
    founded.forEach((item) => {
      res += equivalence.label;
    });
  });

  return res;
};

module.exports = compute;
