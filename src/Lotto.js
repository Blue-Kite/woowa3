class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    for (let n of numbers) {
      if (n < 0 || n > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }

  getWinLottoNum(userLottos) {
    let winLottoNum = 0;

    return winLottoNum;
  }

  getLottoResult(userLottos, bonusLotto) {
    const winLottoNum = this.getWinLottoNum(userLottos);
    return {
      winLottoNum: winLottoNum,
      winBonus: this.#numbers.includes(bonusLotto),
    };
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
