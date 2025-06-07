import { Injectable, NotFoundException } from '@nestjs/common';
import { CoffeesDto } from './Types/Coffees';
import { Prisma } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

export interface Coffee {
  id: number;
  nome: string;
  tipo: string;
  descrição: string;
  peso: string;
  tag: string[];
  quantidade: number;
  date_create: string;
}

@Injectable()
export class CoffesService {  
  constructor(private prisma: PrismaService){}  
  private cafes: CoffeesDto[] = [
    {
      id: 1,
      nome: "Espresso",
      tipo: "Grão",
      descrição: "Café forte e encorpado, sem adição de leite.",
      peso: "250g",
      tag: ["intenso", "rápido", "tradicional"],
      quantidade: 50,
      date_create: new Date("2025-04-02T10:15:00.000Z").toISOString()
    },
    {
      id: 2,
      nome: "Cappuccino",
      tipo: "Moído",
      descrição: "Mistura equilibrada de café, leite e espuma.",
      peso: "500g",
      tag: ["cremoso", "suave", "italiano"],
      quantidade: 30,
      date_create: new Date("2025-04-05T14:25:00.000Z").toISOString()
    },
    {
      id: 3,
      nome: "Americano",
      tipo: "Grão",
      descrição: "Café diluído com água quente, mais leve que o espresso.",
      peso: "300g",
      tag: ["leve", "suave", "refrescante"],
      quantidade: 40,
      date_create: new Date("2025-04-10T09:45:00.000Z").toISOString()
    },
    {
      id: 4,
      nome: "Mocha",
      tipo: "Moído",
      descrição: "Combinação deliciosa de café, chocolate e leite.",
      peso: "450g",
      tag: ["doce", "chocolate", "suave"],
      quantidade: 25,
      date_create: new Date("2025-04-18T16:30:00.000Z").toISOString()
    },
    {
      id: 5,
      nome: "Macchiato",
      tipo: "Grão",
      descrição: "Café espresso com um toque de leite vaporizado.",
      peso: "200g",
      tag: ["intenso", "cremoso", "suave"],
      quantidade: 35,
      date_create: new Date("2025-04-22T11:50:00.000Z").toISOString()
    },
    {
      id: 6,
      nome: "Latte",
      tipo: "Moído",
      descrição: "Mais leite do que café, perfeito para quem gosta de suavidade.",
      peso: "500g",
      tag: ["suave", "cremoso", "longo"],
      quantidade: 28,
      date_create: new Date("2025-04-28T08:20:00.000Z").toISOString()
    },
    {
      id: 7,
      nome: "Café Gelado",
      tipo: "Grão",
      descrição: "Café resfriado e servido com gelo, refrescante.",
      peso: "350g",
      tag: ["frio", "suave", "verão"],
      quantidade: 22,
      date_create: new Date("2025-05-03T13:10:00.000Z").toISOString()
    },
    {
      id: 8,
      nome: "Café Turco",
      tipo: "Moído",
      descrição: "Preparado tradicionalmente, forte e aromático.",
      peso: "400g",
      tag: ["forte", "tradicional", "exótico"],
      quantidade: 18,
      date_create: new Date("2025-05-10T17:40:00.000Z").toISOString()
    },
    {
      id: 9,
      nome: "Café Descafeinado",
      tipo: "Grão",
      descrição: "Todo o sabor sem a cafeína.",
      peso: "250g",
      tag: ["leve", "sem cafeína", "suave"],
      quantidade: 27,
      date_create: new Date("2025-05-18T12:05:00.000Z").toISOString()
    },
    {
      id: 10,
      nome: "Flat White",
      tipo: "Moído",
      descrição: "Café com leite vaporizado, cremoso e equilibrado.",
      peso: "350g",
      tag: ["cremoso", "suave", "australiano"],
      quantidade: 20,
      date_create: new Date("2025-05-27T09:55:00.000Z").toISOString()
    }
  ];

  getCoffees(): CoffeesDto[] {
    return this.cafes;
  }

  getCoffeeById(id: number): CoffeesDto {
    const cafe = this.cafes.find(c => c.id === id);
    if (!cafe) throw new NotFoundException(`Café com ID #${id} não encontrado`);
    return cafe;
  }

  addCoffee(coffee: CoffeesDto): CoffeesDto {
    this.cafes.push(coffee);
    return coffee;
  }

  updateCoffee(id: number, updatedData: Partial<CoffeesDto>): CoffeesDto {
    const index = this.cafes.findIndex(c => c.id === id);
    if (index === -1) throw new NotFoundException(`Café com ID #${id} não encontrado`);

    this.cafes[index] = { ...this.cafes[index], ...updatedData };
    return this.cafes[index];
  }

  deleteCoffee(id: number): void {
    const index = this.cafes.findIndex(c => c.id === id);
    if (index === -1) throw new NotFoundException(`Café com ID #${id} não encontrado`);

    this.cafes.splice(index, 1);
  }

  createCoffee(newCoffee: CoffeesDto): CoffeesDto {
    this.cafes.push(newCoffee);
    return newCoffee;
  }

  filterCoffeesByPeriod(startDate: string, endDate: string): CoffeesDto[] {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      throw new Error('Datas inválidas fornecidas.');
    }

    return this.cafes.filter(coffee => {
      const coffeeDate = new Date(coffee.date_create);
      return coffeeDate >= start && coffeeDate <= end;
    });
  }
}
