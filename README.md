# Simple Python Interpreter

This project demonstrates a minimal Java-based interpreter for a subset of a Python-like language. The interpreter includes a lexer, parser, and execution engine, allowing for basic variable assignments, arithmetic operations, conditional statements, and loops.

## Features

- **Lexer**: Tokenizes input source code into a list of tokens.
- **Parser**: Parses tokens into statements (currently a naive implementation).
- **Interpreter**: Executes parsed statements, supporting:
  - Variable assignments
  - Arithmetic operations
  - Conditional statements (`if`)
  - Loops (`while`)
  - Print statements

## Token Types

The interpreter recognizes the following token types:

- **Operators**: `+`, `-`, `*`, `/`, `%`, `=`, `==`, `!=`, `>`, `<`, `>=`, `<=`
- **Literals**: Identifiers and numbers
- **Keywords**: `if`, `else`, `while`, `print`
- **Braces**: `{`, `}`, `(`, `)`

## Example Usage

Here is a small code snippet that can be interpreted by the interpreter:

```python
x = 5
y = 10
z = x + y
if z > 12: {
  print(z)
}
while x < 10: {
  print(x)
  x = x + 1
}
