import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ResponseService } from '../services/response.service';

/**
 * Controller to handle Response-related HTTP requests.
 */
@Controller('responses')
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}

  @Get()
  async getAllResponses(): Promise<any> {
    return this.responseService.getAllResponses();
  }

  @Get(':id')
  async getResponseById(@Param('id') id: string): Promise<any> {
    return this.responseService.getResponseById(id);
  }

  @Post()
  async createResponse(@Body() createResponseDto: any): Promise<any> {
    return this.responseService.createResponse(createResponseDto);
  }

  @Put(':id')
  async updateResponse(@Param('id') id: string, @Body() updateResponseDto: any): Promise<any> {
    return this.responseService.updateResponse(id, updateResponseDto);
  }

  @Delete(':id')
  async deleteResponse(@Param('id') id: string): Promise<any> {
    return this.responseService.deleteResponse(id);
  }
}