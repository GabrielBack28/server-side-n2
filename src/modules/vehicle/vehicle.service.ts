import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from 'src/entity/vehicle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
  ) {}

  findAll(): Promise<Vehicle[]> {
    return this.vehicleRepository.find();
  }

  findOneById(id: number): Promise<Vehicle> {
    return this.vehicleRepository.findOne({
      where: {
        id,
      },
    });
  }

  findByModel(model: string): Promise<Vehicle[]> {
    return this.vehicleRepository.find({
      where: {
        model,
      },
    });
  }

  create(vehicle: Vehicle): Promise<Vehicle> {
    return this.vehicleRepository.save(vehicle);
  }

  async update(id: number, vehicle: Vehicle): Promise<Vehicle> {
    await this.vehicleRepository.update(id, vehicle);

    return this.vehicleRepository.findOne({
      where: {
        id,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.vehicleRepository.delete(id);

    return;
  }
}
