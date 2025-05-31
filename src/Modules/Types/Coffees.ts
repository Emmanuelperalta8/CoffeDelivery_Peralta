import { IsString, IsNumber, IsArray, IsNotEmpty,IsDateString  } from "class-validator";

export class CoffeesDto {
    @IsNumber()
    id: number;

    @IsString()
    nome: string;

    @IsString()
    tipo: string;

    @IsString()
    descrição: string;

    @IsString()
    peso: string;

    @IsArray()
    tag: string[];

    @IsNumber()
    quantidade: number;

    @IsDateString()
    date_create: string;
}
