import { ProductCategory } from 'src/apis/productCategory/entities/productCategory.entity';
import { ProductSaleslocation } from 'src/apis/productsSaleslocation/entities/productSaleslocation.entity';
import { ProductTag } from 'src/apis/productTags/entities/productTag.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  isSoldout: boolean;

  // ProductSaleslocation 엔티티랑 1대1로 연결할 수 있게 해주는 외래키
  @JoinColumn()
  @OneToOne(() => ProductSaleslocation) //productSaleslocation과 1대1로 연결할 것이다.
  productSaleslocation: ProductSaleslocation; // 그저 타입지정

  // ProductCategory 엔티티랑 다대일 관계로 연결시켜주는 외래키
  @ManyToOne(() => ProductCategory)
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  user: User;

  @JoinTable()
  @ManyToMany(() => ProductTag, (productTags) => productTags.products)
  productTags: ProductTag[];
}
