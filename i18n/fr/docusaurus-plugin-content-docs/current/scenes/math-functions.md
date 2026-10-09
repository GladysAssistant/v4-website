---
id: math-functions
title: Fonctions mathématiques disponibles
description: "Référence des fonctions mathématiques disponibles dans les scènes Gladys Assistant (arrondis, min/max, moyenne, puissances, logarithmes, trigonométrie) pour des automatisations dynamiques et calculées."
sidebar_label: Fonctions mathématiques
---

Certaines actions de scènes vous permettent d'injecter des variables et d'effectuer des calculs.

C'est le cas des actions :

- Attendre
- Contrôler un appareil
- Définir une variable
- Condition sur variables
- Parler sur une enceinte (volume)

Dans ces actions, l'éditeur de scène affiche un lien **« Fonctions disponibles et syntaxe »** juste sous le champ : il déplie la liste complète de ce que vous pouvez écrire, sans quitter la scène.

## Opérateurs

- `+` : addition
- `-` : soustraction
- `*` : multiplication
- `/` : division
- `%` : modulo
- `^` : puissance
- `( )` : parenthèses, pour regrouper un calcul
- `>`, `>=`, `<`, `<=` : comparaisons

## Fonctions

Une fonction prend ses arguments entre parenthèses, séparés par des virgules. Les fonctions peuvent s'imbriquer : `round(min(100, 3 * 45) / 2)` donne `68`.

**Arrondis et signe**

- `abs(-5)` : valeur absolue (Résultat = 5)
- `round(5.2)` : arrondi (Résultat = 5)
- `round(5.86, 1)` : arrondi avec 1 chiffre après la virgule (Résultat = 5.9)
- `floor(5.8)` : arrondi inférieur (Résultat = 5)
- `ceil(5.2)` : arrondi supérieur (Résultat = 6)
- `fix(-5.8)` : arrondi vers zéro (Résultat = -5)
- `sign(-3)` : signe d'un nombre, -1, 0 ou 1 (Résultat = -1)

**Minimum, maximum et statistiques**

- `min(3, 8, 5)` : plus petite valeur (Résultat = 3)
- `max(3, 8, 5)` : plus grande valeur (Résultat = 8)
- `mean(18, 20, 22)` : moyenne (Résultat = 20)
- `median(3, 8, 5)` : médiane (Résultat = 5)
- `sum(1, 2, 3)` : somme (Résultat = 6)
- `prod(2, 3, 4)` : produit (Résultat = 24)

**Puissances et racines**

- `pow(2, 3)` : puissance (Résultat = 8)
- `sqrt(16)` : racine carrée (Résultat = 4)
- `cbrt(27)` : racine cubique (Résultat = 3)
- `square(4)` : carré (Résultat = 16)
- `cube(3)` : cube (Résultat = 27)
- `nthRoot(16, 4)` : racine n-ième (Résultat = 2)
- `hypot(3, 4)` : hypoténuse, racine carrée de la somme des carrés (Résultat = 5)

**Exponentielle et logarithmes**

- `exp(1)` : exponentielle (Résultat = 2,718…)
- `log(10)` : logarithme népérien (Résultat = 2,302…)
- `log2(8)` : logarithme en base 2 (Résultat = 3)
- `log10(1000)` : logarithme en base 10 (Résultat = 3)

**Nombres entiers**

- `gcd(12, 18)` : plus grand commun diviseur (Résultat = 6)
- `lcm(4, 6)` : plus petit commun multiple (Résultat = 12)

**Aléatoire**

- `random(1, 10)` : nombre décimal aléatoire entre 1 et 10
- `randomInt(1, 10)` : nombre entier aléatoire entre 1 et 9 (le maximum n'est jamais renvoyé)

**Trigonométrie** (en radians)

- `sin(pi / 2)` : sinus (Résultat = 1)
- `cos(0)` : cosinus (Résultat = 1)
- `tan(pi / 4)` : tangente (Résultat = 1)
- `asin`, `acos`, `atan` : fonctions réciproques
- `atan2(y, x)` : angle du point (x, y)

## Constantes

- `pi` : 3,14159…
- `e` : 2,71828…
- `tau` : 2 × pi

## Exemples

Garder une valeur entre deux bornes, ici une consigne entre 17 et 21 °C calculée à partir de la température extérieure, lue dans la première étape de la scène avec « Récupérer le dernier état » :

```
max(17, min(21, 23 - {{0.0.last_value}} / 4))
```

Arrondir au demi-degré le plus proche :

```
round({{0.0.last_value}} * 2) / 2
```

Moyenne de trois capteurs lus plus tôt dans la scène avec « Récupérer le dernier état » :

```
round(mean({{0.0.last_value}}, {{0.1.last_value}}, {{0.2.last_value}}), 1)
```

## Points d'attention

- Les fonctions trigonométriques travaillent en **radians** : écrivez `sin(pi / 2)`, et non `sin(90)`.
- `log` est le logarithme **népérien**. Utilisez `log10` pour la base 10.
- `randomInt(min, max)` ne renvoie jamais `max`.
- Les constantes doivent être multipliées explicitement : écrivez `2 * pi`, et non `2 pi`.
- Les nombres décimaux s'écrivent avec un **point** : `0.5`, et non `0,5`.
- Une formule qui ne peut pas être calculée (fonction inconnue, mauvais nombre d'arguments, division qui mène à un résultat infini) **arrête la scène**, au lieu de la laisser continuer avec une valeur fausse. La raison est écrite dans les logs de Gladys.

:::info
La liste complète des fonctions est disponible depuis Gladys Assistant 5.2. Avant, seuls les opérateurs et `abs`, `round`, `floor`, `ceil` et `random` étaient disponibles.
:::
