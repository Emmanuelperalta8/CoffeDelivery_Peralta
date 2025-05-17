import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { AppService, Coffee } from './app.service';

@Controller('coffees') 
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCoffees(): Coffee[] {
    return this.appService.getCoffees();
  }

  @Get(':id/detalhes')
  getCoffeeDetails(@Param('id') id: string): Coffee {
    return this.appService.getCoffeeById(Number(id));
  }

  @Post()
  addCoffee(@Body() coffee: Coffee): Coffee {
    return this.appService.addCoffee(coffee);
  }

  @Put(':id')
  updateCoffee(@Param('id') id: string, @Body() updatedData: Partial<Coffee>): Coffee {
    return this.appService.updateCoffee(Number(id), updatedData);
  }

  @Delete(':id')
  deleteCoffee(@Param('id') id: string): void {
    return this.appService.deleteCoffee(Number(id));
  }
}
