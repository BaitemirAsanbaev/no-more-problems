import { ApiProperty } from '@nestjs/swagger'; // Importing ApiProperty

export class UsersDTO {
  
  @ApiProperty({
    description: 'First name of the user',
    type: String,
    example: 'John', // Example value for Swagger UI
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
