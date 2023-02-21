// OOP 와 클래스를 이용한 API 구현 실습
import express from "express";
import { CashService } from "./cash.js";
import { ProductService } from "./product.js";
import { ProductController, CouponController } from "../11-05-express-with-OOP-coupon/index.js";
const app = express();

// 상품 API
const productController = new ProductController();
app.post("/products/buy", productController.buyProduct) // 상품 구매하기
app.post("/products/refund", productController.refundProduct) // 상품 환불하기

// 쿠폰 구매하기
const couponController = new CouponController();
app.post("/coupons/buy", couponController.buyCoupon);

app.listen(3000);