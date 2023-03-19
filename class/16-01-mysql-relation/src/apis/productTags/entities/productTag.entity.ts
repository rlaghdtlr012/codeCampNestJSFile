import { Product } from 'src/apis/products/entities/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductTag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  // 반대편이 날 생각할 때 어떻게 생각하는지를 중점으로 변수 작성
  @ManyToMany(() => Product, (products) => products.productTags)
  products: Product[];
}
