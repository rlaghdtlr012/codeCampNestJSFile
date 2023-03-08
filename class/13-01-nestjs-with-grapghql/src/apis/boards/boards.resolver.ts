import { Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './boards.service';
@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Query(() => String) // API Docs가 알아서 만들어짐
  getHello() {
    return this.boardService.aaa;
  }
}
