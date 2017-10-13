const compose = (...fns) => (...args) => (
  fns.reduceRight((acc, fn) => [fn(...acc)], args)[0]
);

export { compose };
