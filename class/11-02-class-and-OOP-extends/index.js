const aaa = new Date();
console.log(aaa.getFullYear());
console.log(aaa.getMonth() + 1);

class Monster {
  power = 10;
  constructor(aaa) {
    this.power = aaa;
  }
  attack = () => {
    console.log("공격하자");
    console.log("내 공격력은 " +this.power);
  }
}

class SkyMonster extends Monster {
  constructor(qqq) {
    super(qqq);
  }
  run = () => {
    console.log("날아서 도망가자");
  }
}

class GroundMonster extends Monster {
  constructor(www) {
    super(www);
  }
  run = () => {
    console.log("걸어서 도망가자");
  }
}

const myMonster1 = new SkyMonster(30);
myMonster1.attack();
myMonster1.run();

const myMonster2 = new GroundMonster(70);
myMonster2.attack();
myMonster2.run();