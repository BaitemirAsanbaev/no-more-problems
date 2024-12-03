import { Column, DataType, Table, Model} from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model<User> {
    @Column({
        type:DataType.UUID,
        unique:true,
        primaryKey:true
    })
    id:number
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    firstname:string
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    lastname:string
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    age:number
    @Column({
        type:DataType.BOOLEAN,
        defaultValue:false,
        allowNull:false
    })
    has_problems:boolean
}
