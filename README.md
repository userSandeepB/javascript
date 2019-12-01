# JavaScript

JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

# Fundamental of Variables and Data Types

Variables and Data Types are the fundamental concept of JavaScript.

## Variables

Variables are a fundamental concept of every programming langauge. Variable is like a container in which we can store a value in order to use it over and over again in our code.

- Variable name cannot start with numbers or symbols except (\$ and \_).
- We cannot use JavaScript reserved keyword as variable name for example: function, if, for.

## Data Types

- Primitive Data Types

  - **Numbers**: Floating point numbers, for decimals and integers
  - **String**: Sequence of characters, used for text
  - **Boolean**: Logical data type that can only be true or false
  - **Undefined**: Data type of a variable that does not have a value yet
  - **Null**: Also means 'non-existent'

- Reference Data Types

  - **Object**

> **JavaScript has dynamic typing**: data types are automatically assigned to variables.

# Type Coercion in JavaScript :unlock:

**Type Coercion**: JavaScript automatically converts the type as it needed for example:

```javascript
var nameAndAge = "John" + 28;
console.log(nameAndAge);
```
