---
id: math-functions
title: Funciones matemáticas disponibles
description: "Referencia de las funciones matemáticas disponibles en las escenas de Gladys Assistant (redondeos, mín./máx., media, potencias, logaritmos, trigonometría) para crear automatizaciones dinámicas y calculadas."
sidebar_label: Funciones matemáticas
---

Algunas acciones de escena te permiten insertar variables y realizar cálculos.

Es el caso de las siguientes acciones:

- Esperar
- Establecer valor del dispositivo
- Establecer una variable
- Condición sobre variables
- Hablar en un altavoz (volumen)

En estas acciones, el editor de escenas muestra un enlace **«Funciones disponibles y sintaxis»** justo debajo del campo: despliega la lista completa de lo que puedes escribir, sin salir de la escena.

## Operadores

- `+` : suma
- `-` : resta
- `*` : multiplicación
- `/` : división
- `%` : módulo
- `^` : potencia
- `( )` : paréntesis, para agrupar un cálculo
- `>`, `>=`, `<`, `<=` : comparaciones

## Funciones

Una función recibe sus argumentos entre paréntesis, separados por comas. Las funciones se pueden anidar: `round(min(100, 3 * 45) / 2)` da `68`.

**Redondeo y signo**

- `abs(-5)` : valor absoluto (Resultado = 5)
- `round(5.2)` : redondeo (Resultado = 5)
- `round(5.86, 1)` : redondeo con 1 decimal (Resultado = 5.9)
- `floor(5.8)` : redondeo hacia abajo (Resultado = 5)
- `ceil(5.2)` : redondeo hacia arriba (Resultado = 6)
- `fix(-5.8)` : redondeo hacia cero (Resultado = -5)
- `sign(-3)` : signo de un número, -1, 0 o 1 (Resultado = -1)

**Mínimo, máximo y estadística**

- `min(3, 8, 5)` : valor más pequeño (Resultado = 3)
- `max(3, 8, 5)` : valor más grande (Resultado = 8)
- `mean(18, 20, 22)` : media (Resultado = 20)
- `median(3, 8, 5)` : mediana (Resultado = 5)
- `sum(1, 2, 3)` : suma (Resultado = 6)
- `prod(2, 3, 4)` : producto (Resultado = 24)

**Potencias y raíces**

- `pow(2, 3)` : potencia (Resultado = 8)
- `sqrt(16)` : raíz cuadrada (Resultado = 4)
- `cbrt(27)` : raíz cúbica (Resultado = 3)
- `square(4)` : cuadrado (Resultado = 16)
- `cube(3)` : cubo (Resultado = 27)
- `nthRoot(16, 4)` : raíz n-ésima (Resultado = 2)
- `hypot(3, 4)` : hipotenusa, raíz cuadrada de la suma de los cuadrados (Resultado = 5)

**Exponencial y logaritmos**

- `exp(1)` : exponencial (Resultado = 2,718…)
- `log(10)` : logaritmo natural (Resultado = 2,302…)
- `log2(8)` : logaritmo en base 2 (Resultado = 3)
- `log10(1000)` : logaritmo en base 10 (Resultado = 3)

**Números enteros**

- `gcd(12, 18)` : máximo común divisor (Resultado = 6)
- `lcm(4, 6)` : mínimo común múltiplo (Resultado = 12)

**Aleatorio**

- `random(1, 10)` : número decimal aleatorio entre 1 y 10
- `randomInt(1, 10)` : número entero aleatorio entre 1 y 9 (nunca devuelve el máximo)

**Trigonometría** (en radianes)

- `sin(pi / 2)` : seno (Resultado = 1)
- `cos(0)` : coseno (Resultado = 1)
- `tan(pi / 4)` : tangente (Resultado = 1)
- `asin`, `acos`, `atan` : funciones inversas
- `atan2(y, x)` : ángulo del punto (x, y)

## Constantes

- `pi` : 3,14159…
- `e` : 2,71828…
- `tau` : 2 × pi

## Ejemplos

Mantener un valor entre dos límites, aquí una consigna entre 17 y 21 °C calculada a partir de la temperatura exterior, leída en el primer paso de la escena con «Obtener valor del dispositivo»:

```
max(17, min(21, 23 - {{0.0.last_value}} / 4))
```

Redondear al medio grado más cercano:

```
round({{0.0.last_value}} * 2) / 2
```

Media de tres sensores leídos antes en la escena con «Obtener valor del dispositivo»:

```
round(mean({{0.0.last_value}}, {{0.1.last_value}}, {{0.2.last_value}}), 1)
```

## Puntos a tener en cuenta

- Las funciones trigonométricas trabajan en **radianes**: escribe `sin(pi / 2)`, no `sin(90)`.
- `log` es el logaritmo **natural**. Usa `log10` para la base 10.
- `randomInt(min, max)` nunca devuelve `max`.
- Las constantes se multiplican de forma explícita: escribe `2 * pi`, no `2 pi`.
- Los números decimales se escriben con **punto**: `0.5`, no `0,5`.
- Una fórmula que no se puede calcular (función desconocida, número de argumentos incorrecto, división que da un resultado infinito) **detiene la escena**, en lugar de dejar que continúe con un valor erróneo. El motivo queda escrito en los logs de Gladys.

:::info
La lista completa de funciones está disponible desde Gladys Assistant 5.2. Antes, solo estaban disponibles los operadores y `abs`, `round`, `floor`, `ceil` y `random`.
:::
