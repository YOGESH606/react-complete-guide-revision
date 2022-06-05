// Implementing Memoization in JS
// Memoization is an optimazation technique that can be used to reduce
// time-consuming calculations by saving previous input to something called cache and
// returning result from it
export const Memo = () => {
  let sum = 0;
  const calc = (n) => {
    for (let i = 0; i <= n; i++) {
      sum += i;
    }
    return sum;
  };

  const memoize = (fun) => {
    let cache = {};

    return function (...args) {
      let n = args[0];
      if (n in cache) {
        console.log("cache");
        return cache[n];
      } else {
        console.log("first time");
        let result = fun(n);
        cache[n] = result;
        return result;
      }
    };
  };
  const res = memoize(calc);

  console.time();
  console.log(res(20));
  console.timeEnd();

  console.time();
  console.log(res(20));
  console.timeEnd();

  return <></>;
};
