import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './interfaces/article.interface';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel('Article') private readonly articleModel: Model<Article>,
  ) { }

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel(createArticleDto);
    return await createdArticle.save();
  }

  async findAll(): Promise<Article[]> {
    return await this.articleModel.find().exec();
  }

  async findOne(where): Promise<Article> {
    const article = await this.articleModel.findOne(where);
    return article;
  }

  async update(_id: string, createArticleDto: CreateArticleDto): Promise<Article> {
    const editedArticle = await this.articleModel
      .findByIdAndUpdate(_id, createArticleDto, { new: true });
    return editedArticle;
  }

  async delete(_id: string): Promise<Article> {
    const deletedArticle = await this.articleModel.findByIdAndDelete(_id);
    return deletedArticle;
  }
}
