import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CommentService } from '../services/comment.service';

/**
 * Controller to handle Comment-related HTTP requests.
 */
@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async getAllComments(): Promise<any> {
    return this.commentService.getAllComments();
  }

  @Get(':id')
  async getCommentById(@Param('id') id: string): Promise<any> {
    return this.commentService.getCommentById(id);
  }

  @Post()
  async createComment(@Body() createCommentDto: any): Promise<any> {
    return this.commentService.createComment(createCommentDto);
  }

  @Put(':id')
  async updateComment(@Param('id') id: string, @Body() updateCommentDto: any): Promise<any> {
    return this.commentService.updateComment(id, updateCommentDto);
  }

  @Delete(':id')
  async deleteComment(@Param('id') id: string): Promise<any> {
    return this.commentService.deleteComment(id);
  }
}