---
id: math-functions
title: Math functions available
description: "Reference of the math functions available in Gladys Assistant scenes (rounding, min/max, average, powers, logarithms, trigonometry) to build dynamic, calculated automations."
sidebar_label: Math functions
---

Some scene actions allow you to inject variables and perform calculations.

This is the case for the following actions:

- Wait
- Set device value
- Set a variable
- Condition on variables
- Talk on a speaker (volume)

In these actions, the scene editor has an **"Available functions and syntax"** link just under the field: it opens the full list of what you can type, without leaving the scene.

## Operators

- `+` : addition
- `-` : subtraction
- `*` : multiplication
- `/` : division
- `%` : modulo
- `^` : power
- `( )` : parentheses, to group a calculation
- `>`, `>=`, `<`, `<=` : comparisons

## Functions

A function takes its arguments between parentheses, separated by commas. Functions can be nested: `round(min(100, 3 * 45) / 2)` gives `68`.

**Rounding and sign**

- `abs(-5)` : absolute value (Result = 5)
- `round(5.2)` : rounding (Result = 5)
- `round(5.86, 1)` : rounding with 1 decimal place (Result = 5.9)
- `floor(5.8)` : floor rounding (Result = 5)
- `ceil(5.2)` : ceiling rounding (Result = 6)
- `fix(-5.8)` : rounding towards zero (Result = -5)
- `sign(-3)` : sign of a number, -1, 0 or 1 (Result = -1)

**Minimum, maximum and statistics**

- `min(3, 8, 5)` : smallest value (Result = 3)
- `max(3, 8, 5)` : largest value (Result = 8)
- `mean(18, 20, 22)` : average (Result = 20)
- `median(3, 8, 5)` : median (Result = 5)
- `sum(1, 2, 3)` : sum (Result = 6)
- `prod(2, 3, 4)` : product (Result = 24)

**Powers and roots**

- `pow(2, 3)` : power (Result = 8)
- `sqrt(16)` : square root (Result = 4)
- `cbrt(27)` : cube root (Result = 3)
- `square(4)` : square (Result = 16)
- `cube(3)` : cube (Result = 27)
- `nthRoot(16, 4)` : nth root (Result = 2)
- `hypot(3, 4)` : hypotenuse, square root of the sum of the squares (Result = 5)

**Exponential and logarithms**

- `exp(1)` : exponential (Result = 2.718…)
- `log(10)` : natural logarithm (Result = 2.302…)
- `log2(8)` : base 2 logarithm (Result = 3)
- `log10(1000)` : base 10 logarithm (Result = 3)

**Integers**

- `gcd(12, 18)` : greatest common divisor (Result = 6)
- `lcm(4, 6)` : least common multiple (Result = 12)

**Random**

- `random(1, 10)` : random decimal number between 1 and 10
- `randomInt(1, 10)` : random integer between 1 and 9 (the maximum is never returned)

**Trigonometry** (in radians)

- `sin(pi / 2)` : sine (Result = 1)
- `cos(0)` : cosine (Result = 1)
- `tan(pi / 4)` : tangent (Result = 1)
- `asin`, `acos`, `atan` : inverse functions
- `atan2(y, x)` : angle of the point (x, y)

## Constants

- `pi` : 3.14159…
- `e` : 2.71828…
- `tau` : 2 × pi

## Examples

Keep a value between two bounds, here a setpoint between 17 and 21 °C computed from the outdoor temperature, read in the first step of the scene with "Get device value":

```
max(17, min(21, 23 - {{0.0.last_value}} / 4))
```

Round to the nearest half degree:

```
round({{0.0.last_value}} * 2) / 2
```

Average of three sensors read earlier in the scene with "Get device value":

```
round(mean({{0.0.last_value}}, {{0.1.last_value}}, {{0.2.last_value}}), 1)
```

## Things to watch out for

- Trigonometric functions work in **radians**: write `sin(pi / 2)`, not `sin(90)`.
- `log` is the **natural** logarithm. Use `log10` for base 10.
- `randomInt(min, max)` never returns `max`.
- Constants must be multiplied explicitly: write `2 * pi`, not `2 pi`.
- Decimal numbers are written with a **dot**: `0.5`, not `0,5`.
- A formula that cannot be computed (unknown function, wrong number of arguments, division leading to an infinite result) **stops the scene**, instead of letting it continue with a wrong value. The reason is written in the Gladys logs.

:::info
The full list of functions is available since Gladys Assistant 5.2. Before that, only the operators and `abs`, `round`, `floor`, `ceil` and `random` were available.
:::
