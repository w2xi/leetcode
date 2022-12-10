/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
	const stack = [];

	for (let item of tokens) {
		if (+item === +item) {
			stack.push(+item);
		} else {
			const x = stack.pop();
			const y = stack.pop();
			const result = helper(x, y, item);
			stack.push(result);
		}
	}

	return stack[0];
};

function helper(x, y, action) {
	switch (action) {
		case '+':
			return x + y;
		case '-':
			return y - x;
		case '*':
			return x * y;
		case '/':
			return parseInt(y / x);
	}
} 