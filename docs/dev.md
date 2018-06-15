# Documentation développeur
Informations sur le fonctionnement, l'installation et la mise à jour, et le développement de nouvelles fonctionnalités.

Sur cette page:
* I - Technologies et architecture
* II - Développement
  * II.1 - Installation et configuration
  * II.2 - Méthodologie: où développer et que faire?
* III - Déploiement
  * III.1 - Principe
  * III.2 - Méthodologie

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

### I.2 - "Architecture" du projet: qui vit où ?
L'application, une fois "déployée" (la procédure est décrite plus bas), est hébergée sur un serveur web, pour l'instant un de ceux offerts par le système des pages github: [https://loicnorgeot.github.io/numero/numero](https://loicnorgeot.github.io/numero/numero).

Le "serveur d'API" qui permet de servir les modèles 3D à partir d'une base de données est lui exécuté sur un autre serveur - provisoirement mon ordinateur à l'ISCD - qui contient un dossier avec l'ensemble des fichiers 3D au format .mesh. Ce serveur est pour l'instant localisé à l'adresse IP 134.157.66.221, et n'est accessible que depuis le réseau interne de l'UPMC...

Enfin, les fichiers de sauvegarde et les différentes configurations sont créées et sauvegardées sur un dépot github, rendu accessible par l'authentification de l'utilisateur. 

L'application web, qui s'exécute dans un navigateur, communique donc avec le dépot github pour le mécanisme de sauvegarde, via des appels à l'API github, et avec le serveur contenant les modèles 3D (mon ordinateur), via des appels à l'API créée en python.

## II - Développement

Cette partie documente la manière d'installer et de configurer les différents outils uniquement, mais pas le déploiement de l'application ainsi réalisée (partie suivante).

### II.1 - Installation et configuration 

L'application peut se développer depuis windows, Mac ou Linux, et sur à peu près tous les ordinateurs, dans à peu près tous les navigateurs.

**Installation de blender/blend4web**
1. Installer blender (testé avec 2.79) à partir de la [page de téléchargement](https://www.blender.org/download/)
2. Installer blend4web (testé avec 17.12) à partir de la [page de téléchargement](https://www.blend4web.com/en/downloads/). La version CE_lite, disponible en bas de la page suffit (téléchargement plus léger).
3. Configurer blender pour prendre en compte blend4web en suivant [ces instructions](https://www.blend4web.com/doc/en/setup.html)

**Import du projet dans blend4web**
1. Pour se familiariser avec le workflow de blend4web, suivre les instructions de [cette page](https://www.blend4web.com/doc/en/workflow.html).
2. Pour importer le projet, suivre les instructions de [cette page](https://www.blend4web.com/doc/en/project_manager.html#project-import), en important le fichier en "_dev.zip" disponible sur [cette page](https://github.com/loicNorgeot/numero/releases)
3. Le projet devrait désormais être disponible dans l'arborescence de blend4web (cheminversb4w/projects/numero), et les fichiers éditables via n'importe quel éditeur de texte! 
4. Ouvrir le fichier .html depuis le project manager de blend4web devrait maintenant permettre d'en voir la dernière version.

**Mise en place de l'API pour les fichiers**
1. Télécharger le fichier script.pyn, installer avec pip: flask...
2. Créer un répertoire appelé data dans le même dossier que le fichier server.py
3. Créer des certificats pour l'API. Sous linux ou MacOS: 
```
openssl genrsa 1024 > host.key
chmod 400 host.key
openssl req -new -x509 -nodes -sha1 -days 365 -key host.key -out host.cert
```
4. Exécuter la commande `python server.py` et laisser tourner le serveur ainsi créé, qui par défaut sera hébergé sur le port 5003 de l'adresse IP 127.0.0.1. Pour tester que cette étape ait fonctionné, se connecter depuis un navigateur web à l'adresse http://127.0.0.1:5003/models , la liste des modèles présents dans data devrait alors s'afficher. Victoire!

### II.2 - Méthodologie: où développer et que faire?

## III - Déploiement

### III.1 - Principe

L'idée est, à chaque fois que le développement semble satisfaisant sur la machine locale, d'envoyer la dernière version sur ce dépot github: code source, scènes blender, version prête à être réimportée et version à déployer sur un serveur web.

En respectant cette méthode, il est alors possible de garder trace des modifications faites, de mettre à jour simplement la version en ligne de l'application, et de permettre à d'autres collaborateurs de faire des modifications sur l'application.

### III.2 - Méthodologie
Une fois le projet validé sur la version locale, suivre ces instructions pour mettre à jour le dépôt:
1. check modules
2. build project
3. vérifier la version de build.html depuis le project manager
4. deploy project -> Download
5. Extraire l'archive et ouvrir la page html pour vérifier le succès
6. Enregistrer cette archive comme "project_deploy.zip"
7. Commiter les fichiers sur la branche gh-pages. La version en ligne sera mise à jour.
8. Depuis le project manager, faire un export du projet: "project_dev.zip"
9. Commiter les fichiers du projet sur la branche master, sans le répertoire build, mais avec les fichiers cachés (.b4w_project et .b4w_icon.png)
10. Faire une release, comprenant "project_deploy.zip", "project_dev.zip" ainsi qu'éventuellement le fichier server.py.


