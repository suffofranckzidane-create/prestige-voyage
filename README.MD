# Prestige Voyage

Site vitrine statique pour **Prestige Voyage**, une agence qui accompagne les personnes souhaitant trouver des opportunités professionnelles et un logement en Europe.

## Présentation

La page présente :

- un accueil avec une barre de recherche visuelle ;
- quatre destinations : Marseille, Flandre, Palerme et Stuttgart ;
- quatre solutions de logement ;
- une section blog avec des images et des vidéos ;
- une présentation de l'agence ;
- les coordonnées et un formulaire de contact.

## Technologies utilisées

- HTML5
- CSS3
- JavaScript natif
- Images et vidéos locales

## Installation et lancement

1. Installer [XAMPP](https://www.apachefriends.org/).
2. Copier le dossier `voyage` dans `C:\xampp\htdocs\`.
3. Démarrer le module **Apache** depuis le panneau de contrôle XAMPP.
4. Ouvrir l'adresse suivante dans un navigateur :

	`http://localhost/voyage/`

Le site peut également être ouvert directement en lançant `index.html` dans un navigateur, mais Apache est recommandé pour un fonctionnement plus proche d'un hébergement réel.

## Structure du projet

```text
voyage/
├── index.html       # Structure de la page
├── style.css        # Mise en forme et responsive design
├── script.js        # Menu mobile et navigation fluide
├── README.MD        # Documentation du projet
└── images/          # Logo, photos et vidéos du site
```

## Fonctionnalités

- Navigation entre les différentes sections de la page.
- Défilement fluide lors des clics sur les liens.
- Menu hamburger pour les petits écrans.
- En-tête qui évolue lors du défilement.
- Galerie d'images et lecteurs vidéo dans la section blog.
- Formulaire de contact avec champs obligatoires côté navigateur.

## À noter

Le projet est actuellement un site statique :

- la barre de recherche n'est pas reliée à un moteur de recherche ;
- le formulaire de contact ne possède pas encore de traitement serveur ;
- les liens sans section associée servent de liens de navigation visuels.

Pour ajouter ces traitements, il faudra connecter le site à une API ou à un backend.

## Contact

- Téléphone : `+33 7 59 04 06 57`
- E-mail : `prestigevoyage974@gmail.com`
- Adresse : 123 Rue de la Paix, 75000 Paris, France
