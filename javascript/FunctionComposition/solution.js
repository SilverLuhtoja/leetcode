/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((acc, func) => func(acc), x);
  };
};

module.exports = compose;
