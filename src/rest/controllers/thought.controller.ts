import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ThoughtService } from '../services/thought.service';

/**
 * Controller to handle Thought-related HTTP requests.
 */
@Controller('thoughts')
export class ThoughtController {
  constructor(private readonly thoughtService: ThoughtService) {}

  @Get()
  async getAllThoughts(): Promise<any> {
    return this.thoughtService.getAllThoughts();
  }

  @Get(':id')
  async getThoughtById(@Param('id') id: string): Promise<any> {
    return this.thoughtService.getThoughtById(id);
  }

  @Post()
  async createThought(@Body() createThoughtDto: any): Promise<any> {
    return this.thoughtService.createThought(createThoughtDto);
  }

  @Put(':id')
  async updateThought(@Param('id') id: string, @Body() updateThoughtDto: any): Promise<any> {
    return this.thoughtService.updateThought(id, updateThoughtDto);
  }

  @Delete(':id')
  async deleteThought(@Param('id') id: string): Promise<any> {
    return this.thoughtService.deleteThought(id);
  }
}