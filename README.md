# 🧩 TokenType.java – Token Definitions for Interpreter

This file defines the core `TokenType` enum, representing the various tokens used by the interpreter during lexical analysis. Tokens are the smallest building blocks of source code, such as operators, keywords, and literals.

## 📋 Token Categories
- **Operators** – `PLUS`, `MINUS`, `STAR`, `SLASH`, `MOD`
- **Delimiters** – `LPAREN`, `RPAREN`, `LBRACE`, `RBRACE`, `EQ`, `COLON`
- **Comparisons** – `GT`, `GTE`, `LT`, `LTE`, `EQEQ`, `NEQ`
- **Literals** – `IDENT`, `NUMBER`
- **Keywords** – `IF`, `ELSE`, `WHILE`, `PRINT`
- **Utility** – `EOF` (End of File marker)

## 🛠️ Purpose
The `TokenType` enum categorizes input from the source code, enabling the interpreter to classify and process each component accurately. This is a crucial step in parsing and executing code.

---

✨ **More files coming soon to support the full interpreter!**
