---
title: Bilan de l'année 2018 pour Gladys Assistant !
description: Chaque année, je fais un bilan de l'année pour Gladys. Téléchargements, revenu, nombre de visiteurs, vous saurez tout dans cet article !
author: Pierre-Gilles Leymarie
author_title: Fondateur de Gladys Assistant
author_url: https://twitter.com/pierregillesl
author_image_url: /fr/img/pierre-gilles.jpg

image: /assets/images/presentation/bilan-2018-cover.jpg

id: bilan-2018-pour-gladys-assistant
---

Salut à tous,

C'est la tradition : chaque année, je fais un article bilan de l'année où je récapitule toutes les avancées autour de Gladys. En toute transparence, je dévoile tous les chiffres: nombre de téléchargements, visiteurs sur le site et même revenu.

Si vous voulez vous rappeler de l'année précédente, l'article [bilan de l'année 2017 est ici](/fr/blog/bilan-gladys-2017).

<!--truncate-->

### Une année charnière

Vous le savez, à partir d'août 2018, j'ai quitté mon précédent travail d'ingénieur dans une startup pour passer plus de temps sur Gladys.

Cette décision, je l'ai prise uniquement parce que vous m'avez soutenu !

➡️ Que ce soit en achetant le Gladys starter pack

➡️ Ou en étant contributeur sur Gladys Plus

UPDATE: Juillet 2019, le starter pack n'existe plus, tout est regroupé dans Gladys Plus :)

C'est uniquement grâce à vous que j'ai pu financer ce passage à temps partiel sur Gladys.

Pour être encore plus précis, les 3 premiers mois je n'étais pas vraiment à temps partiel : j'étais à temps plein sur Gladys afin de pouvoir sortir au plus vite le Gladys Gateway. Gladys a donc été ma seule source de revenu sur septembre, octobre et novembre.

Je n'aurais jamais pu faire ce choix sans vous, donc encore une fois: MERCI 🙌

### Les téléchargements Gladys

La façon dont Gladys est téléchargée a été changé un bon nombre de fois cette année.

A l'époque, j'utilisais Sourceforge, une plateforme d'hébergement de logiciel, qui avec les années est devenu un monstre plein de pubs, et qui surtout a cessé de fonctionner sans raison pendant 1 semaine au milieu de l'année 2018.

C'était trop pour moi, j'ai décidé de quitter cette plateforme.

Au début, je me suis contenté d'héberger l'image Raspbian Gladys sur GitHub.

Ce que je ne savais pas, c'est que GitHub limite les téléchargements, et on a dû assez vite saturer les limites. Le fichier fait 1.8 Gb tout de même, rien que 100 téléchargements c'est 180 Gb de bande passante, et la bande passante, ça coûte cher.

Après de nombreux retours comme quoi certains n'arrivaient pas à télécharger l'image, j'ai dû penser à une autre solution.

La solution est super simple: j'ai hosté moi même un serveur avec un petit Nginx, et hop le fichier était disponible avec une vitesse record.

Problème: Mon hébergeur ne proposait que 1000 Gb de bande passante par instance (ensuite c'est facturé), et forcément en 555 téléchargements, l'instance a dépassé le plafond.

J'ai du coup switché cette instance chez Scaleway, car cet hébergeur propose une bande passante illimitée.

Problème réglé: on a désormais une super bande passante, et le coût est assez réduit (quelques euros par mois pour un serveur chez Scaleway)

La contrepartie de tout ça, c'est que le compte du nombre de téléchargements est beaucoup moins simple et moins centralisé qu'avant 😛

Je peux néanmoins vous dire que selon mes estimations nous avons à minima 38 200 téléchargements de Gladys au total, et c'est sans compter les téléchargements en direct sur GitHub.

La réalité est problablement proche de 40k téléchargements au total.

C'est une super victoire pour Gladys !

### Le site Gladys

C'est peut-être le seul point où Gladys n'a pas progressé cette année, le traffic sur le site est resté constant par rapport à l'année dernière.

Nous avons fais 700k pages vues cette année, pour 95k visiteurs sur le site.

![Traffic sur le site 2018](/fr/img/articles/bilan-2018/traffic.jpg)

La raison a cela est très simple: j'ai passé beaucoup moins de temps cette année sur le site.

L'année dernière, j'avais fais un gros travail dessus:

- J'avais transformé le site en site statique, bien plus rapide que l'ancien, [entièrement open-source](/fr/blog/site-open-source-et-lancement-gladys-starter-pack) et distribué au plus proche des utiliateurs grâce au CDN CloudFlare.
- J'avais écris 11 articles, soit quasiment 1 par mois
- J'avais retravaillé le design, amélioré l'ergonomie, et bossé sur le SEO/social, et l'engagement avec le nouveau système de commentaire.

Cette année, je n'ai pas travaillé sur ces aspects.

Le site est toujours le même, il n'y a eu que 4 articles, et je n'ai pas plus travaillé sur le SEO.

Je pense que c'est une erreur de ma part, et je compte changer ça en 2019.

Je pense à plusieurs choses:

- Des articles invités sur le blog. Cela peut-être des articles écrit par des membres de la communauté. Au lieu qu'ils soient posté sur le forum, ils auraient une meilleur visilité sur le blog!
- Plus d'articles où je vous tiens au courant des développements en court. Actuellement je publie ça de façon très informel sur le forum, probablement car l'éditeur de Discourse est bien plus attirant que de taper en markdown sur VSCode, et que donc naturellement j'ai tendance à aller écrire là-bas. Peut-être que je devrais trouver un workflow plus attirant pour publier sur le blog.

### La newsletter Gladys

Nous avons désormais 3 372 inscrits à [la newsletter Gladys](https://email-list.gladysassistant.com/subscription/1mXJoEWEl) !

- 2948 inscrits en français
- 424 inscrits en anglais

C'est 872 de plus que l'an dernier!

Un sujet que j'ai du mal à gérer, c'est l'internationalisation du blog et de la newsletter.

Lorsque j'écris un article, j'hésite toujours: Dois-je l'écrire en français ? En anglais ?

Pareil pour la newsletter.

Ce que je fais la plupart du temps, c'est que j'écris l'article en français, puis si le sujet est suffisamment important et que j'ai le temps, je l'écris en anglais. Malheureusemement, je prends rarement ce temps, et ainsi la newsletter est principalement envoyée en français.

Je pense que lorsque le revenu du projet augmentera, je ferais traduire les articles et la newsletter par un traducteur externe afin que je n'ai qu'à travailler en français et que je ne perde pas du temps sur la traduction.

### Le GitHub Gladys

Cette année, nous avons passé les 1 000 stars ⭐ sur le repository [Gladys](https://github.com/gladysassistant/Gladys).

Prochaine étape: Les 10 000 stars!

Gladys est aussi passée en license MIT, afin que son usage soit le plus libre possible!

### Les réseaux sociaux

- [@gladysassistant sur Twitter](https://twitter.com/gladysassistant) rassemble 2 603 followers
- [Gladys Assistant Facebook](https://www.facebook.com/gladysassistant) comptabilise 673 likes
- [@gladysassistant sur instagram](https://www.instagram.com/gladysassistant) rassemble 531 followers

Une progression naturelle comme toujours.

La progression la plus importante cette année est sur [mon Twitter personnel](https://twitter.com/pierregillesl), j'ai préféré tweeter sur ce compte toute l'année afin que ce soit plus personnel. Je suis passé à 1 397 followers alors que je ne devais avoir qu'une centaine en début d'année.

### Un lancement ProductHunt réussi

En octobre, alors que j'étais à l'extérieur avec des amis, quelqu'un a posté Gladys sur ProductHunt (voir le [post ici](https://www.producthunt.com/posts/gladys), un site qui permet à n'importe qui de poster des nouveaux produits innovants.

D'un coup, le site Gladys s'est mis à recevoir des centaines de visiteurs (sans broncher, merci le CDN), et j'ai du gérer ce lancement inattendu en revenant chez moi vers 1h du matin, et ce jusqu'à 3h ^^

Cette publication sur un site à forte audience, notamment dans plein de pays anglophones, a permis de faire connaitre encore plus Gladys. Un vrai succès, inattendu, qui ne fait que confirmer l'intérêt qu'a le public pour des assistants intelligents respectueux de la vie privée de leurs utilisateurs.

### Les événements

2018 a été une année super chargée niveau événement, avec une conférence Gladys à Orléans en début d'année:

<blockquote class="twitter-tweet" data-lang="en"><p lang="fr" dir="ltr">Merci à <a href="https://twitter.com/pierregillesl?ref_src=twsrc%5Etfw">@pierregillesl</a> de venir nous parler de Gladys <a href="https://twitter.com/orleans_tech?ref_src=twsrc%5Etfw">@orleans_tech</a> ! <a href="https://t.co/P0sNh7961G">pic.twitter.com/P0sNh7961G</a></p>&mdash; Orleans Tech (@orleans_tech) <a href="https://twitter.com/orleans_tech/status/958420566565847041?ref_src=twsrc%5Etfw">January 30, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Suivi d'un meetup 100% Gladys à Montpellier en Mars:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Gladys talk <a href="https://twitter.com/Montpellier?ref_src=twsrc%5Etfw">@Montpellier</a> ! <a href="https://t.co/4wUDgkHC7D">https://t.co/4wUDgkHC7D</a></p>&mdash; Gladys Assistant (@gladysassistant) <a href="https://twitter.com/gladysassistant/status/977238509395177472?ref_src=twsrc%5Etfw">March 23, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Et d'une intervention à Brest en Avril sur le futur des assistants intelligents:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I was really happy to talk about Gladys at @ConfDeust2018 in <a href="https://twitter.com/hashtag/Brest?src=hash&amp;ref_src=twsrc%5Etfw">#Brest</a> this week ! 🔥 <a href="https://t.co/l6eRvOhke5">https://t.co/l6eRvOhke5</a> <a href="https://t.co/yKMsUA0rlD">pic.twitter.com/yKMsUA0rlD</a></p>&mdash; Pierre-Gilles Leymarie ✈️ (@pierregillesl) <a href="https://twitter.com/pierregillesl/status/980033453822545925?ref_src=twsrc%5Etfw">March 31, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Ainsi que plein de plus petites rencontres, comme le tournage de la vidéo ["une journée avec Gladys"](https://www.youtube.com/watch?v=Du2j3sXd6w4) tournée chez Mathieu à Orléans, ou le meetup développeur à Paris en décembre.

Et tout ça c'est sans compter tous les appels mensuels avec la communauté, en [août](https://www.youtube.com/watch?v=hULjx1VF5M8), [Septembre](https://www.youtube.com/watch?v=DtmYmY7stsY), [Octobre](https://www.youtube.com/watch?v=piQKudXQbQI) et [Janvier](https://www.youtube.com/watch?v=zBWzbbC7Tsg). (Oui, l'enregistrement du call de Novembre n'était pas d'une grande qualité je ne l'ai pas publié, et avec les fêtes il n'y a pas eu d'appel en décembre ^^)

### Les revenues Gladys

Je veux être transparent sur Gladys, ainsi je publie chaque mois le chiffre d'affaire de Gladys.

Quelques remarques:

1. Ce chiffre d'affaire est affiché en dollar pour tous nos amis à l'international 🙂 Retranchez environ 20% selon le cours pour trouver le montant en euro.

2. Il s'agit d'un chiffre d'affaire, donc pour savoir la part de bénéfice, il faut retirer les dépenses, et ensuite les taxes.

Les dépenses sont diverses:

- Les frais récurrents (serveurs, domaines, services en ligne, etc...)
- Les commissions de paiements des plateformes que j'utilise pour le paiement (Stripe & Selz)
- Les espaces de coworking où je travaille (environ 160/200€ par mois en moyenne)
- Le matériel que j'ai pu acheter, autant domotique que mes outils de travail (laptop & casque à réduction de bruits)
- Les dépenses diverses exceptionnelles.

La plus grosse dépense récente étant le [redesign complet de l'identité visuelle](/fr/blog/une-nouvelle-identite-visuelle-pour-gladys) de Gladys réalisée par un designer professionel, ainsi que l'impression et l'expédition des stickers.

Les taxes c'est assez simple, c'est mon frais n°1 😁

Une partie du CA part dans les taxes, que je paye trimestriellement, ainsi que des charges fixes prélevées annuellement aux entreprises.

Avec ces coûts exceptionnels, peu de mois sont actuellement rentables pour moi pour l'instant, mais je considère que ce sont des investissements pour le futur de Gladys.

Le redesign était une nécessité pour l'image de la marque Gladys Assistant, et les stickers permettent de diffuser cette nouvelle image 🙂

### La suite pour 2019

2018 a été une année hybride pour Gladys: un début d'année plutôt chargé personnellement, vu que je finissais mes études de février à août en passant 6 mois à temps plein en entreprise, ce qui me laissait peu de temps pour Gladys.

Le moment qui m'a fait réaliser que j'avais besoin de plus de temps, c'est la semaine où j'enchainais une semaine de travail chargé, un aller-retour vers Montpellier pour le meetup Gladys, suivi d'une semaine de travail entrecoupé d'un vol vers Brest le mercredi après-midi pour donner ce talk Gladys, finir l'événement vers 23h30, dormir à l'hôtel de Brest vers minuit et me lever à 3h30 du matin pour arriver à 9h au travail à Paris... un mois fatiguant 😅

A partir de Août, j'ai pu me concentrer sur Gladys et me dégager plus de temps pour prendre des pauses et souffler le week-end, afin de que ce soit viable pour moi sur le long terme.

#### Au niveau personnel

Au niveau personnel, c'est mon objectif pour 2019: Arriver à mieux concilier temps pro/temps perso. Je veux pouvoir travailler sur Gladys avec un rytmne soutenu, tout en prenant des temps de pause pour souffler.

Je compte d'ailleurs énormément sur l'indulgence de la communauté là-dessus, notamment au niveau du service client 🙂 Je fais de mon mieux pour répondre à tous vos messages dans les temps, mais comme je suis seul, il y a des temps off (nuit, week-ends, congés), pendant lesquels je ne regarde volontairement pas les messages pour pouvoir me déconnecter un peu, c'est donc normal si parfois je peux être lent pour certaines demandes, ne prenez pas ça personnellement 😉

#### Au niveau de Gladys

J'ai énormément de projets pour 2019 !

Au niveau des développements, 2019 va s'articuler au niveau de deux axes:

- Des nouvelles fonctionnalités pour le Gladys Gateway: Open API, compatibilités Alexa/Google Home, app mobile
- Gladys 4.0, la prochaine version majeure de Gladys. J'ai publié un [manifeste technique](https://docs.google.com/document/d/1zqH0vvIRICOiXsgJVHRanInBgJ8aoTWtnrNpyASW9b0/edit?usp=sharing) en décembre à propos de cette version. Attention le manifeste est en anglais, car il s'agit d'un dossier technique avec du vocabulaire principalement en anglais.

Au niveau du site, de la communauté, de la communication autour de Gladys, je compte dédier plus de temps à ces aspects. Certes, ce que j'aime c'est le développement, mais Gladys manque de beaucoup de choses au niveau communication, documentation, marketing.

Je pense que je dois trouver une organisation du travail qui me permette de répartir mieux mon temps entre le travail sur le produit et la communication autour de celui-ci.

Après je pense qu'à certains moments, comme le développement du Gateway, se plonger 3 mois non-stop dans la conception et le développement était la bonne chose à faire. Ce genre de produit très technique est impossible à développer lorsque l'on doit écrire des articles en même temps ou faire du marketing.

Dans tous les cas, je veux que globalement sur 2019, je passe beaucoup plus de temps sur la communication.

### Merci à tous

Et finalement, j'aimerais remercier la formidable communauté qui permet à Gladys d'exister.

Gladys, c'est un logiciel que nous avons conçu tous ensemble, grâce aux retours de tous les membres de la communauté.

C'est un projet qui progressivement prend ses parts de marchés dans l'écosystème domotique, et qui, j'en suis persuadé, sera un jour un grand dans ce monde.

La route est longue, mais le meilleur est à venir 🚀

Merci pour tout 🙏
