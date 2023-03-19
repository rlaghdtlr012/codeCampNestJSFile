import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './apis/boards/boards.module';
import { Board } from './apis/boards/entities/board.entities';
import { ProductCategory } from './apis/productCategory/entities/productCategory.entity';
import { Product } from './apis/products/entities/product.entity';
import { ProductSaleslocation } from './apis/productsSaleslocation/entities/productSaleslocation.entity';
import { ProductTag } from './apis/productTags/entities/productTag.entity';
import { User } from './apis/users/entities/user.entity';
@Module({
  imports: [
    BoardModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1q2w3e4r5t!',
      database: 'myproject',
      //entities: [__dirname + '/apis/**/*.entity.*'],
      entities: [
        Board,
        User,
        ProductCategory,
        Product,
        ProductSaleslocation,
        ProductTag,
      ],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
