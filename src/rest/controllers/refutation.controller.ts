import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { RefutationService } from '../services/refutation.service';

/**
 * Controller to handle Refutation-related HTTP requests.
 */
@Controller('refutations')
export class RefutationController {
  constructor(private readonly refutationService: RefutationService) {}

  @Get()
  async getAllRefutations(): Promise<any> {
    return this.refutationService.getAllRefutations();
  }

  @Get(':id')
  async getRefutationById(@Param('id') id: string): Promise<any> {
    return this.refutationService.getRefutationById(id);
  }

  @Post()
  async createRefutation(@Body() createRefutationDto: any): Promise<any> {
    return this.refutationService.createRefutation(createRefutationDto);
  }

  @Put(':id')
  async updateRefutation(@Param('id') id: string, @Body() updateRefutationDto: any): Promise<any> {
    return this.refutationService.updateRefutation(id, updateRefutationDto);
  }

  @Delete(':id')
  async deleteRefutation(@Param('id') id: string): Promise<any> {
    return this.refutationService.deleteRefutation(id);
  }
}