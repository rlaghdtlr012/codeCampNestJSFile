export class CouponController {
  constructor(moneyService) {
    this.moneyService = moneyService;
  }
  buyCoupon = () => {
    // 1. 가진 돈 검증하는 코드
    // const cashService = new CashService();
    const hasMoney = this.moneyService.checkValue(); // true 또는 false 리턴
    // 2. 쿠폰 구매하는 코드
    if (hasMoney) {
      res.send("상품 구매 완료!!");
    }
  }
}