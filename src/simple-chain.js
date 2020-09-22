const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value = ``) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (this.chain[position - 1]) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw Error(`THROWN`);
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = this.chain.join(`~~`);
    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;
