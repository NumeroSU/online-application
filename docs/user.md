# Documentation utilisateur
Cette documentation est évidemment provisoire, l'application n'étant encore qu'au stade de "démonstrateur".

## 1 - Ajout/suppresion d'objets 3D à la scène et manipulation
Dans l'onglet "models" du menu principal figurent les objets dispoinbles dans la base de données. **Attention à ne pas changer l'url présente!**.

Sous l'url de l'API figurent deux onglets: 
* models available: les modèles 3D présents dans l'API associée
* models loaded: les modèles 3D chargés dans la scène

En cliquant sur un objet de l'onglet "models available", l'objet se charge dans la scène 3D à la position [0,0,0], et devient alors visible dans l'onglet "models loaded", depuis lequel on peut le sélectionner/déselectionner ainsi que le supprimer de la scène (il redeviendra alros disponible dans "models available"):

![screenshot from 2018-06-18 10-07-30](https://user-images.githubusercontent.com/11873158/41525171-5fb614fc-72e0-11e8-9798-be71d889e475.jpg)

#### Manipulations 3D
Une fois des objets chargés dans la scène:
* Clic droit pour sélectionner un objet.
* Ctrl+clic droit (cmd+clic droit sous Mac) pour la sélection multiple.
* Clic gauche + drag sur un ou plusieurs objets sélectionnés pour les déplacer horizontalement
* Clic du milieu + drag pour le déplacement vertical
* Ctrl + Clic droit + drag pour la rotation autour de l'axe vertical


## 2 - Connexion à github
La connexion à github est facultative pour utiliser l'application, mais sera  *obligatoire* pour pouvoir sauvegarder/charger des configurations.

Dans tous les cas, l'utilisateur a accès à l'ensemble des modèles disponibles sur [ce dépot github]() (à mettre à jour avec les nouveaux fragments donc) pour les importer et les manipuler dans la scène, et dépendant de ses "droits":

* Si l'utilisateur fait partie de l'organisation [NumeroSU](), il pourra modifier des configurations de démonstration ("Load default").
* Si l'utilisateur ne fait pas partie de l'organisation [NumeroSU](), il ne pourra pas modifier les démonstrations, mais pourra créer et éditer des configurations sur un dépot qu'il aura créé auparavant.
* Enfin, si l'utilisateur n'a pas de compte github, il ne pourra "que" charger et manipuler les objets de la base de données.

Pour se connecter, rentrer ses identifiants dans l'onglet "login" du menu principal, et valider en cliquant sur le bouton "login":
![screenshot from 2018-06-18 09-30-48](https://user-images.githubusercontent.com/11873158/41523725-50e6fd74-72db-11e8-8b99-ba6477495a88.jpg)


Les boutons "load a private reconstruction" et "save the current reconstruction" de l'onglet "save" deviendront alors actifs.

## 3 - Chargement / Sauvegarde de reconstructions
Dans l'onglet "save" figurent les options pour charger et sauvegarder des reconstructions faites à partir des modèles disponibles dans la base de données.

Par défaut, seul l'accès à une reconstruction par défaut, présente dans ce dépot github, est autorisé, sans droit de modification.
Si l'utilisateur est connecté avec son compte github, il pourra alors créer une nouvelle reconstruction (pas encore implémenté), en charger une existante depuis son compte, ou sauvegarder des modifications appliquées à une reconstruction.

#### Création d'un fichier de sauvegarde
Pour le moment, avant de pouvoir sauvegarder une reconstruction, il faut créer un nouveau dépot dans github, et créer un fichier vide en ".csv" dans ce dépot. Peut être attendre quelques minutes avant de lancer l'application.

Une fois un dépot créé, et l'utilisateur connecté à son compte dans l'application interactive, les boutons "Load a private reconstruction" et "Save current" deviennent disponibles.

#### Sauvegarde 
Pour sauvegarder une reconstitution créée à partir des fragments disponibles, cliquer sur "save current". Une pop-up se charge alors:

![screenshot from 2018-06-18 09-46-19](https://user-images.githubusercontent.com/11873158/41524316-587415a2-72dd-11e8-8ffc-d22c1e77d819.jpg)

Y choisir le nom du dépot github, le nom du fichier de sauvegarde, et écrire un message pour signaler les modifications effectuées ("rajout de l'ensemble b317", "reconstitution partielle de l'arrière droite"). Ce message sera visite par la suite et permettra de recharger la reconstitution à une version précise.


#### Chargement d'un assemblage
 En cliquant sur "load", une pop-up s'affiche, qui demande de choisir le nom du dépot créé, le nom du fichier, ainsi que sa version:

![screenshot from 2018-06-18 09-38-28](https://user-images.githubusercontent.com/11873158/41524015-4701829c-72dc-11e8-9589-4dc0fed60059.jpg)

Une fois ces choix effectués (dépot créé précédemment, et fichier .csv dans sa première version), cliquer sur "OK" pour valider le chargement de la reconstruction.

