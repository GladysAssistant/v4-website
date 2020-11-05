---
id: recuperer-la-meteo
title: Récupérer la météo
description: Pour nous réveiller en douceur, nous prévenir quand nous sortons qu'il va pleuvoir, Gladys doit pouvoir récupérer la météo !
image: /img/presentation/weatherlow.jpg
author: Pierre-Gilles Leymarie
author_title: Fondateur de Gladys Assistant
author_url: https://twitter.com/pierregillesl
author_image_url: /fr/img/pierre-gilles.jpg
---

<div class="alert alert--danger" role="alert">
  Update: 21/07/2020: Ce tutoriel a été écrit il y a plusieurs années, il ne concerne pas Gladys v4 ! 
</div>

Pour avoir la météo au réveil, ou pour pouvoir nous prévenir quand nous partons de chez nous qu'il pleut... Gladys doit avoir accès à la météo ! Nous allons utiliser ici l'API d'[OpenWeatherMap](http://openweathermap.org/API#forecast), une API gratuite ! ( du moins, tant qu'on ne fait pas trop d'appels ).

<!--truncate-->

## Utilisation de l'API

Il y a deux manières de spécifier à l'API l'endroit où nous souhaitons avoir la météo :

### Avec le nom de la ville.

Il suffit d'appeler l'URL suivante :

```
http://api.openweathermap.org/data/2.5/forecast/daily?q=NOM_VILLE&cnt=14&mode=json&units=metric&lang=fr
```

Ici vous avez juste à remplacer NOM_VILLE par le nom de votre ville ( perspicace non ? :D ), "cnt=14" signifie que vous voulez avoir 14 jours de prévisions, "units=metric" que vous voulez les unités métriques (degré celsius), et "lang=fr", la météo en français !

### Avec les coordonnées géographique du lieu ( Latitude et Longitude )

Ce qui a l'avantage d'être beaucoup plus fiable qu'avec juste le nom de la ville, car il arrive qu'OpenWeatherMap se trompe de ville.

```
http://api.openweathermap.org/data/2.5/forecast/daily?lat=LATITUDE&lon=LONGITUDE&cnt=14&mode=json&units=metric&lang=fr
```

Vous pouvez bien évidemment coupler ça à un système de localisation pour pouvoir avoir la météo du lieu exact où vous vous trouvez!

## Récupérer la météo depuis Node.js

Tout d'abord, installez le module Node.js "request", qui va nous permettre de faire des requêtes simplement, avec la commande :

```
sudo npm install request
```

Pour récupérer la météo depuis Node.js, nous allons tout simplement faire une requête à l'URL que nous avons créé précédemment, et nous allons sortir les informations qui nous intéressent de ce que retourne OpenWeatherMap.

Voilà une petite fonction qui fait le travail proprement (pensez à mettre votre latitude et votre longitude lors de l'appel de la fonction) :

```
var request = require('request');

var openweathermeteo = function(latitude, longitude, callback){
	var  url = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat='+latitude+'&lon='+longitude+'&cnt=14&mode=json&units=metric&lang=fr';

	request(url, function(err, response, body){
		try{
			var result = JSON.parse(body);
			var previsions = {
				temperature : result.list[0].temp.day,
				city : result.city.name
			};

			callback(null, previsions);
		}catch(e){
			callback(e);
		}
	});
}

openweathermeteo(48.869777, 2.308186, function(err, previsions){
	if(err) return console.log(err);

	console.log('A ' + previsions.city + ', la température est de ' + previsions.temperature + '°C');
});
```

Ici les données que l'on analyse sont celles du jour actuel. Mais si nous voulons savoir le temps qu'il fera demain, il suffit d'avancer dans le tableau "list" ( Remplacer "result.list[0].temp.day" par "result.list[1].temp.day" pour avoir la météo du lendemain par exemple ).

C'est ici un exemple d'une phrase généré par Gladys pour le réveil du matin. Mais nous pourrions faire une analyse de la température, ou du temps qu'il fait, pour prévenir par exemple en cas de pluie/neige/basse température !

## Analyse des données

Pour détecter si de la pluie est prévue aujourd'hui selon la météo, il suffit d'analyser la variable "main" dans le tableau "weather"

```
if(result.list[0].weather[0].main == "Rain") {

}
```

Pour vérifier si une température précise est atteinte :

```
if(Math.round(result.list[0].temp.day) <= 0) {

}

```

( Ici on test si il fait moins de 0°C ! On peut prévenir l'utilisateur qu'il fait très froid dehors... )

## Conclusion

Les possibilités sont infinies ! N'hésitez pas à analyser par vous même ce que vous renvoie OpenWeatherMap pour extraire ce qui vous intéresse... Les fonctions créées ci-dessus peuvent être appelées tous les matins par exemple, et les résultats stockés dans une base de donnée. Et si jamais l'utilisateur sort de chez lui et que Gladys a enregistré que de la pluie était prévue, Gladys peut immédiatement notifier l'utilisateur que le temps n'est pas beau, et qu'il devrait prévoir un parapluie par exemple... A vous d'être imaginatif ;)
