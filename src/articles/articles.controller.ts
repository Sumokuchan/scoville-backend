import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/upate-article.dto';
import { ArticlesService } from './articles.service';
import { Article } from './interfaces/article.interface';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  async create(@Body() createArticleDto: CreateArticleDto) {
    this.articlesService.create(createArticleDto);
  }

  @Get()
  async findAll(): Promise<Article[]> {
    return await this.articlesService.findAll();
  }

  @Get(':_id')
  async findOne(@Param('_id') _id) {
    return await this.articlesService.findOne({ _id });
  }

  @Put(':_id')
  async update(@Param('_id') _id, @Body() articleData: CreateArticleDto) {
    return await this.articlesService.update(_id, articleData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} article`;
  }
}
