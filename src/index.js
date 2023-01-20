module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = [];
  const BRACKETS_PAIR = {};

  let stack = [];

  bracketsConfig.forEach(el => {
      let open = el[0];
      let close = el[1];

      OPEN_BRACKETS.push(open);
      BRACKETS_PAIR[close] = open;
  });

  for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];

      if (OPEN_BRACKETS.includes(currentSymbol)) {
          stack.push(currentSymbol);
      } else { 
          if (stack.length === 0) {
              return false;
          }

          let topElement = stack[stack.length - 1];

          if (BRACKETS_PAIR[currentSymbol] === topElement) { 
              stack.pop();
          } else {
              return false;
          }
      }

      console.log(stack);
  }

  return stack.length === 0;
}
