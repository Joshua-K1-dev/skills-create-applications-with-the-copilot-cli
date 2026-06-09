/**
 * Tests for calculator.js
 *
 * Covers all arithmetic operations:
 *   - Addition
 *   - Subtraction
 *   - Multiplication
 *   - Division (including division-by-zero error handling)
 *   - Modulo (including division-by-zero error handling)
 *   - Power (exponentiation)
 *   - Square root (including negative number error handling)
 */

const assert = require("assert");
const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
} = require("../calculator");

let passed = 0;
let failed = 0;

function test(description, fn) {
  try {
    fn();
    console.log(`  ✓ ${description}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ ${description}`);
    console.error(`    ${err.message}`);
    failed++;
  }
}

// Addition tests
console.log("Addition:");
test("adds two positive numbers", () => assert.strictEqual(add(5, 3), 8));
test("adds a positive and a negative number", () => assert.strictEqual(add(10, -4), 6));
test("adds two negative numbers", () => assert.strictEqual(add(-2, -3), -5));
test("adds zero to a number", () => assert.strictEqual(add(7, 0), 7));

// Subtraction tests
console.log("Subtraction:");
test("subtracts two positive numbers", () => assert.strictEqual(subtract(9, 4), 5));
test("subtracts a larger from a smaller number", () => assert.strictEqual(subtract(3, 10), -7));
test("subtracts zero from a number", () => assert.strictEqual(subtract(5, 0), 5));
test("subtracts negative number", () => assert.strictEqual(subtract(5, -3), 8));

// Multiplication tests
console.log("Multiplication:");
test("multiplies two positive numbers", () => assert.strictEqual(multiply(6, 7), 42));
test("multiplies by zero", () => assert.strictEqual(multiply(5, 0), 0));
test("multiplies a positive and a negative number", () => assert.strictEqual(multiply(4, -3), -12));
test("multiplies two negative numbers", () => assert.strictEqual(multiply(-3, -3), 9));

// Division tests
console.log("Division:");
test("divides two positive numbers", () => assert.strictEqual(divide(10, 2), 5));
test("divides resulting in a decimal", () => assert.strictEqual(divide(7, 2), 3.5));
test("divides a negative number", () => assert.strictEqual(divide(-9, 3), -3));
test("throws on division by zero", () => {
  assert.throws(() => divide(5, 0), /Division by zero is not allowed/);
});

// Modulo tests
console.log("Modulo:");
test("modulo of two positive numbers", () => assert.strictEqual(modulo(10, 3), 1));
test("modulo when evenly divisible", () => assert.strictEqual(modulo(9, 3), 0));
test("modulo with negative dividend", () => assert.strictEqual(modulo(-10, 3), -1));
test("throws on modulo by zero", () => {
  assert.throws(() => modulo(5, 0), /Division by zero is not allowed/);
});

// Power (exponentiation) tests
console.log("Power:");
test("power of two positive numbers", () => assert.strictEqual(power(2, 8), 256));
test("power with exponent zero", () => assert.strictEqual(power(5, 0), 1));
test("power with base zero", () => assert.strictEqual(power(0, 5), 0));
test("power with negative exponent", () => assert.strictEqual(power(2, -1), 0.5));

// Square root tests
console.log("Square root:");
test("square root of a perfect square", () => assert.strictEqual(squareRoot(16), 4));
test("square root of zero", () => assert.strictEqual(squareRoot(0), 0));
test("square root of a non-perfect square", () => assert.ok(Math.abs(squareRoot(2) - Math.SQRT2) < 1e-10));
test("throws on square root of a negative number", () => {
  assert.throws(() => squareRoot(-1), /Square root of a negative number is not allowed/);
});

// Summary
console.log(`\n${passed} passing, ${failed} failing`);
if (failed > 0) process.exit(1);
