var expect = function (val) {
  return {
    toBe: val2 => {
      if (val !== val2) throw new Error('Not Equal');
      else return true;
    },
    notToBe: val2 => {
      if (val === val2) throw new Error('Equal');
      else return true;
    },
  };
};

// let rev = expect(5).ToBe(2);
let rev = expect(5).notToBe(1);
console.log(rev);
module.exports = expect;
