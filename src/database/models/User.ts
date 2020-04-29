import { IsUUID, PrimaryKey, Default, DataType, Table, Column, Model, CreatedAt, UpdatedAt } from 'sequelize-typescript'

@Table({ timestamps: true })
export default class User extends Model<User> {
    @IsUUID(4)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string;

    @Column
    firstname: string

    @Column
    lastname: string

    @Column
    mail: string

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
}
