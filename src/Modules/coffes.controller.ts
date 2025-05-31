import { Controller, Get, Param, Post, Body, Put, Delete, Query } from '@nestjs/common';
import { CoffesService, Coffee } from './coffes.service';
import { CoffeesDto } from './Types/Coffees';
import { get } from 'http';

@Controller('coffees') 
export class CoffesController {
  constructor(private readonly CoffesService: CoffesService) {}

  @Get()
  getCoffees(): Coffee[] {
    return this.CoffesService.getCoffees();
  }

  @Get(':id/detalhes')
  getCoffeeDetails(@Param('id') id: string): Coffee {
    return this.CoffesService.getCoffeeById(Number(id));
  }

  @Post()
  addCoffee(@Body() coffee: Coffee): Coffee {
    return this.CoffesService.addCoffee(coffee);
  }

  @Put(':id')
  updateCoffee(@Param('id') id: string, @Body() updatedData: Partial<Coffee>): Coffee {
    return this.CoffesService.updateCoffee(Number(id), updatedData);
  }

  @Delete(':id')
  deleteCoffee(@Param('id') id: string): void {
    return this.CoffesService.deleteCoffee(Number(id));
  }

  @Post ('coffes/creat')
  createCofee(@Body()newCofee:CoffeesDto):CoffeesDto{
    return this.CoffesService.createCoffee(newCofee);
  }
  
  @Get ('/coffee-query-all/:id')
  coffeeQueryAll(@Query() coffee: CoffeesDto, @Param() id: string){
    console.log(coffee, id);
  }
  @Get('filter')
  filterByDate(
    @Query('start') startDate: string,
    @Query('end') endDate: string
  ): CoffeesDto[] {
    return this.CoffesService.filterCoffeesByPeriod(startDate, endDate);
  }

  
}
