import { Injectable, NotFoundException } from '@nestjs/common';
import { CoffeesDto } from './Types/Coffees';

export interface Coffee {
  id: number;
  nome: string;
  tipo: string;
  descrição: string;
  peso: string;
  tag: string[];
  quantidade: number;
}

@Injectable()
export class CoffesService {
  private cafes: CoffeesDto[] = [
    {
      id: 1,
      nome: "Espresso",
      tipo: "Grão",
      descrição: "Café forte e encorpado, sem adição de leite.",
      peso: "250g",
      tag: ["intenso", "rápido", "tradicional"],
      quantidade: 50
    },
    {
      id: 2,
      nome: "Cappuccino",
      tipo: "Moído",
      descrição: "Mistura equilibrada de café, leite e espuma.",
      peso: "500g",
      tag: ["cremoso", "suave", "italiano"],
      quantidade: 30
    },
    {
      id: 3,
      nome: "Americano",
      tipo: "Grão",
      descrição: "Café diluído com água quente, mais leve que o espresso.",
      peso: "300g",
      tag: ["leve", "suave", "refrescante"],
      quantidade: 40
    },
    {
      id: 4,
      nome: "Mocha",
      tipo: "Moído",
      descrição: "Combinação deliciosa de café, chocolate e leite.",
      peso: "450g",
      tag: ["doce", "chocolate", "suave"],
      quantidade: 25
    },
    {
      id: 5,
      nome: "Macchiato",
      tipo: "Grão",
      descrição: "Café espresso com um toque de leite vaporizado.",
      peso: "200g",
      tag: ["intenso", "cremoso", "suave"],
      quantidade: 35
    },
    {
      id: 6,
      nome: "Latte",
      tipo: "Moído",
      descrição: "Mais leite do que café, perfeito para quem gosta de suavidade.",
      peso: "500g",
      tag: ["suave", "cremoso", "longo"],
      quantidade: 28
    },
    {
      id: 7,
      nome: "Café Gelado",
      tipo: "Grão",
      descrição: "Café resfriado e servido com gelo, refrescante.",
      peso: "350g",
      tag: ["frio", "suave", "verão"],
      quantidade: 22
    },
    {
      id: 8,
      nome: "Café Turco",
      tipo: "Moído",
      descrição: "Preparado tradicionalmente, forte e aromático.",
      peso: "400g",
      tag: ["forte", "tradicional", "exótico"],
      quantidade: 18
    },
    {
      id: 9,
      nome: "Café Descafeinado",
      tipo: "Grão",
      descrição: "Todo o sabor sem a cafeína.",
      peso: "250g",
      tag: ["leve", "sem cafeína", "suave"],
      quantidade: 27
    },
    {
      id: 10,
      nome: "Flat White",
      tipo: "Moído",
      descrição: "Café com leite vaporizado, cremoso e equilibrado.",
      peso: "350g",
      tag: ["cremoso", "suave", "australiano"],
      quantidade: 20
    }
    
  ];

  getHello(): string {
    return 'Hello World';
  }

  getCoffees(): Coffee[] {
    return this.cafes;
  }

  getCoffeeById(id: number): Coffee {
    const cafe = this.cafes.find((c) => c.id === id);
    if (!cafe) throw new NotFoundException(`Café com ID #${id} não encontrado`);
    return cafe;
  }

  addCoffee(coffee: Coffee): Coffee {
    this.cafes.push(coffee);
    return coffee;
  }

  updateCoffee(id: number, updatedData: Partial<Coffee>): Coffee {
    const index = this.cafes.findIndex((c) => c.id === id);
    if (index === -1) throw new NotFoundException(`Café com ID #${id} não encontrado`);

    this.cafes[index] = { ...this.cafes[index], ...updatedData };
    return this.cafes[index];
  }

  deleteCoffee(id: number): void {
    const index = this.cafes.findIndex((c) => c.id === id);
    if (index === -1) throw new NotFoundException(`Café com ID #${id} não encontrado`);

    this.cafes.splice(index, 1);
  }

  createCofee(newCofee:CoffeesDto):CoffeesDto{
    this.cafes.push(newCofee);
    return newCofee
    
  }

}
