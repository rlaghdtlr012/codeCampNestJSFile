// OOP 와 클래스를 이용한 API 구현 실습
import express from "express";
import { CashService } from "./mvc/controllers/services/cash.service.js";
import { ProductService } from "./mvc/controllers/services/product.service.js";
import { ProductController } from "./mvc/controllers/product.controller.js";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import { PointService } from "./mvc/controllers/services/point.service.js";

const app = express();

// 캐시서비스, 프로덕트서비스, 포인트서비스 얘네들이 다 하나의 객체임. 
// 하나의 객체로 여기저기 다 쓰면 싱글톤 패턴, 
// 하나의 클래스로 객체 여러개 만들어서 주입시키면 싱글톤패턴x
const cashService = new CashService();
const productService = new ProductService(); // new 한 번으로 모든 곳에서 재사용 가능
const pointService = new PointService(); // 쿠폰 구매 방식이 포인트 결제로 변경됨
// 상품 API
const productController = new ProductController(cashService, productService);
app.post("/products/buy", productController.buyProduct) // 상품 구매하기
app.post("/products/refund", productController.refundProduct) // 상품 환불하기

// 쿠폰 구매하기
const couponController = new CouponController(pointService);
app.post("/coupons/buy", couponController.buyCoupon);

app.listen(3000);