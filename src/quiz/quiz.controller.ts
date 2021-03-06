import { Body, Controller, Post } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}
  @Post()
  async create(@Body() createQuizDto: CreateQuizDto) {
    this.quizService.create(createQuizDto);
  }
}
