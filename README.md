# TypeScript

## What is TypeScript?

**TypeScript** is a **Javascript** superset:

- Built up on **Javascript**
- Add new features + advantages to **Javascript**
- Compiled to **Javascript** to run (Features are compiled to JS "workarounds" -> possible errors are thrown)

**TypeScript** adds:

- Types
- Next-gen JS features (compiled down for older browsers)
- Rich configuration option (compiler options)
- Morden tooling that helps even in non TypeScript project
- Non-JS features: `Interfaces`, `Generics`
- Meta-programming features like `Decorators`

## Why TypeScript?

- Help dev write better code (as a type checker)
- Easier to write (IDE support)

## Environment setup

1. Install compiler: 
   - Install **Node.js**
   - Install TypeScript compiler by running `npm install -g typescript`

2. Setup VSCode extensions:
   - ESLint
   - TSLint

## TypeScript Basics

### Core types

**See** `./src/CoreTypes.ts`

`primitives`: `number`, `string`, `boolean`

`object`: Javascript objects with specific type for each key

`Array`: Javascript arrays with type

`Tuple`: Fixed-length array with types

`Enum`: Automatically enumarated global constant identifiers

`any`: Ok, dont check type of this variable

`Union types`: Mix multiple types (Type is a set, union of 2 sets/types is a new type)

`Literial types`: Union type of specific values

### Type alias

**See** `./src/Alias.ts`

Used to provide names to type literal

Think of types like variable (Much like how you can create variables with same name in different scopes)

Support more rich type system features than `interfaces`

![Type alias](/cheat-sheets/Types.png "Type alias")

## Compiler Configuration

## Reference

[History][1]

[Basics Tutorial][1]

[Handbook][2]

## Notes

How to fix error `File C:\Users\Admin\AppData\Roaming\npm\tsc.ps1 cannot be loaded because running scripts is disabled on this system` when using TypeScript compiler tsc in `powershell`:

https://stackoverflow.com/questions/58796490/tsc-ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system

You can run this in PowerShell command. Be sure to run it as administrator:

`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`

[1]: https://www.youtube.com/watch?v=EUlM3wx546o&list=PLcxCpYQgiy85BLXBxPh4hR8Dl88ESiket&index=6&ab_channel=uidotdev
[2]: https://www.youtube.com/watch?v=BwuLxPH8IDs&list=PLcxCpYQgiy85BLXBxPh4hR8Dl88ESiket&index=4&t=27s&ab_channel=Academind
[3]: https://www.TypeScriptlang.org/docs/handbook/intro.html