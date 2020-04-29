# Database Models

Dossier contenant les modèles liés à la base de données.

## Fonctionnement
Tous les modèles doivent étendre la classe `Model` et posséder le décorrateur `@Table`

```javascript
import { Model, Table } from 'sequelize-typescript'

@Table
export default class CustomModel extends Model<CustomModel> {
    // Mon CustomModel
}

```

Un exemple est disponible dans le fichier `User.ts` fourni lors de l'initialisation du projet.

Les modèles sont chargés automatiquement lors de l'initialisation à la base de données.

## Documentation détaillée
Une documentation plus détaillée de ce qui est possible de mettre comme décorrateur est disponible sur le github de [sequelize-typescript](https://github.com/RobinBuschmann/sequelize-typescript)

