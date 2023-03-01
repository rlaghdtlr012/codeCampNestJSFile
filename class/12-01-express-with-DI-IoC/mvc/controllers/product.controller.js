export class ProductController {
  moneyService = 10; // 이거 없어도 됨
  constructor(moneyService, productService) {
    this.moneyService = moneyService;
    this.productService = productService;
  }
  buyProduct = (req, res) => {
    // 1. 가진 돈을 검증하는 코드
    // const cashService = new CashService(); 강한 결합 클래스 안에 클래스 생성
    const hasMoney = this.moneyService.checkValue();

    // 2. 판매 여부 검증하는 코드
    // const productService = new ProductService();
    const isSoldOut = this.productService.checkSoldOut();

    // 3. 상품 구매하는 코드
    if (hasMoney && !isSoldOut) {
      res.send("상품 구매 완료!!");
    }
  }
  refundProduct = (req, res) => {
    // 1. 판매여부 검증하는 코드
    // const productService = new ProductService();
    const isSoldOut = this.productService.checkSoldOut();

    // 2. 상품 환불하는 코드
    if (!isSoldOut) {
      console.log("상품 환불 완료!!!!");
    }
  }
}