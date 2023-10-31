import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { Vehicle } from 'src/entity/vehicle.entity';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get()
  findAll() {
    return this.vehicleService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.vehicleService.findOneById(id);
  }

  @Get(':model/model')
  findByModel(@Param('model') model: string) {
    return this.vehicleService.findByModel(model);
  }

  @Post()
  create(@Body() vehicle: Vehicle) {
    return this.vehicleService.create(vehicle);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() vehicle: Vehicle) {
    return this.vehicleService.update(id, vehicle);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.vehicleService.delete(id);
  }
}
