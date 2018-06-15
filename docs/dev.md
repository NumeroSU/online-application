# Documentation développeur
Informations sur le fonctionnement, l'installation et la mise à jour, et le développement de nouvelles fonctionnalités.


## I - Technologies et Architecture

### I.1 - frameworks utilisés
L'application a été créée, et est basée sur plusieurs frameworks web / logiciels, présentés ci dessous.

#### blender et blend4web
Le coeur de l'application repose sur le framework Blend4web (B4W), lui même basé sur blender. 

* [Site officiel de blender](https://www.blender.org/)
* [Site officiel de B4W](https://www.blend4web.com/en/)
* [Documentation de B4W](https://www.blend4web.com/doc/en/index.html)

B4W permet de créer un projet web à partir d'une scène 3D de blender, en y ajoutant de l'interactivité grâce à sa puissante API Javascript, et d'y rajouter une interface graphique grâce à html/css.

L'import, export, compilation et le développement d'un projet B4W se fait via le Project Manager, une interface graphique livrée avec B4W.

* [API Javascript](https://www.blend4web.com/api_doc/index.html)
* [Project Manager de B4W](https://www.blend4web.com/doc/en/project_manager.html)

#### Bulma - FontAwesome - Jquery
L'interface graphique est conçue pour sa partie visuelle via Bulma, un framework CSS léger, complet et surtout simple d'utilisation, à l'image de Bootstrap. L'interaction est quant à elle réalisée via l'API jQuery.

* [Site officiel de Bulma](https://bulma.io/)
* [Documentation de Bulma](https://bulma.io/documentation/)
* [Icones de FontAwesome](https://fontawesome.com/icons?d=gallery)
* [Documentation de jQuery](http://api.jquery.com/)

#### API github
La logique derrière la gestion des utilisateurs et des différentes versions des reconstructions est mise en place via des appels à l'API de github.

* [github.com](http://github.com)
* [Documentation de l'API github](https://developer.github.com/v3/)

#### python et flask
Un script python permet de gérer une API "maison", servant les modèles 3D à partir d'un serveur. Ce script est simple à modifier, et est basé sur python et flask. 

