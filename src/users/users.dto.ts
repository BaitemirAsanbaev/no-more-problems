import { ApiProperty } from '@nestjs/swagger'; 

export class UsersDTO {
  
  @ApiProperty({
    description: 'First name of the user',
    type: String,
    example: 'John',
  })
  readonly firstname: string;

  @ApiProperty({
    description: 'Last name of the user',
    type: String,
    example: 'Doe',
  })
  readonly lastname: string;

  @ApiProperty({
    description: 'Age of the user',
    type: Number,
    example: 30,
  })
  readonly age: number;
}
