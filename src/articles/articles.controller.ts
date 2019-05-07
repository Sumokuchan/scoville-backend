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
    return this.articlesService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): string {
    return `This action returns a #${params.id} article`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} article`;
  }
}
