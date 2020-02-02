export default (function polyfills() {
  if (typeof Number.isFinite !== 'function') {
    Number.isFinite = function isFinite(value) {
      // 1. If Type(number) is not Number, return false.
      if (typeof value !== 'number') {
        return false;
      }
      // 2. If number is NaN, +∞, or −∞, return false.
      // eslint-disable-next-line no-self-compare
      if (value !== value || value === Infinity || value === -Infinity) {
        return false;
      }
      // 3. Otherwise, return true.
      return true;
    };
  }
})();
