module.exports = class DepthCalculator {
  constructor() {
    this.maxDepth = 0;
  }

  calculateDepth(arr, depth = 1) {
    arr.forEach((el) => {

      if (Array.isArray(el)) {
        this.maxDepth = this.calculateDepth(el, depth + 1);
      }

    });
    this.maxDepth = this.maxDepth > depth ? this.maxDepth : depth;
    let result = this.maxDepth;
    this.maxDepth = 0;
    return result;
  }
};