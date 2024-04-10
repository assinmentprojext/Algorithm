/*
출력: 체력, 마나, 방어력, 파이어볼(메서드 결과값)
필요 요소: 체력, 마나, 방어력, 출력 메서드
*/
class Wizard {
    constructor(health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack() {
        console.log("파이어볼");
    }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
