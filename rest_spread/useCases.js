const MathLibrary = {
  calculateProduct(a, b) {
    return a * b;
  },  
  // this is the situation. Now I want to change the name of function.
};

const MathLib = {
  calculateSomething(...rest) {
    console.log('Please use the multiply methoed instead');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
}

