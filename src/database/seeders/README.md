# Database seeders

Dossier contenant les scripts remplissant la base de données.

## Avertissement

Le seeder n'est pas chargé en production !
Il permet d'enrichir les Base de Données de développement et de test.

## Fonctionnement

Pour créer un seeder, il faut utiliser la commande suivante :
```bash
npx sequelize-cli seed:generate --name {{nomDuSeeder}}
```

Pour exécuter les seeder et préremplir la base de données, il faut exécuter la commande suivante :

```bash
npx sequelize-cli db:seed:all
```

## Documentation détaillée

