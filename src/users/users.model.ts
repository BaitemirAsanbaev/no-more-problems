import { randomUUID } from 'crypto';
import { Column, DataType, Table, Model } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger'; // Importing ApiProperty

@Table({ tableName: 'users' })
export class User extends Model<User> {
  
  @ApiProperty({
    description: 'Unique identifier of the user (UUID)',
    type: String, // Specify that it is a string (UUID)
    example: 'd9a91c28-f998-4f88-bac9-d458879a2893',
  })
  @Column({
    type: DataType.UUID,
    unique: true,
    primaryKey: true,
    defaultValue: randomUUID,
  })
  id: string;

  @ApiProperty({
    description: 'First name of the user',
    type: String,
    example: 'John',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstname: string;

  @ApiProperty({
    description: 'Last name of the user',
    type: String,
    example: 'Doe',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastname: string;

  @ApiProperty({
    description: 'Age of the user',
    type: Number,
    example: 30,
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;

  @ApiProperty({
    description: 'Flag indicating if the user has problems',
    type: Boolean,
    example: true,
  })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  has_problems: boolean;
}
