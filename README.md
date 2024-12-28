SimplePythonInterpreter

A minimal Java-based interpreter for a Python-like language subset. This interpreter tokenizes, parses, and executes basic programming constructs such as variable assignments, arithmetic operations, conditionals, and loops.

Token & TokenType

TokenType: Enum representing the types of tokens (e.g., PLUS, MINUS, NUMBER, IF, ELSE, etc.). It defines the language's grammar.

Token: A class representing individual tokens with a type and text value.

Lexer (Scanner)

The Lexer converts raw source code into a list of tokens.

tokenize(): Reads characters, groups them into tokens, and handles single-character operators, comparison operators, and keywords.

Whitespace is ignored, while numbers and identifiers are processed through helper functions.

Keyword Matching: Recognizes specific keywords like if, else, while, and print.

Interpreter

The Interpreter evaluates and executes the tokenized source code.

Variables: Stores variable assignments using a HashMap.

Assignment Handling: Identifies and executes assignments (IDENT = expr).

Print Statements: Evaluates and prints expressions within print(expr).

Conditional (if): Executes block statements based on the result of conditional expressions.

Loops (while): Executes loops by repeatedly evaluating conditions and interpreting blocks.

Block Execution: Blocks within {} are interpreted recursively or skipped based on conditions.

The code demonstrates a simple execution flow for basic Python-like programs, focusing on direct interpretation without AST generation.

