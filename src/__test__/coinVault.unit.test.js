import { CoinVault } from '../domain/CoinVault.ts';

test('자판기가 최초 보유한 금액은 0원이다.', () => {
  const coinValut = new CoinVault();
  expect(coinValut.getCoins().coin500).toStrictEqual(0);
  expect(coinValut.getCoins().coin100).toStrictEqual(0);
  expect(coinValut.getCoins().coin50).toStrictEqual(0);
  expect(coinValut.getCoins().coin10).toStrictEqual(0);
  expect(coinValut.getBalance()).toStrictEqual(0);
});

test('자판기 보유 금액은 최대 100,000원 이다.', () => {
  const coinValut = new CoinVault();
  try {
    coinValut.chargeMoney(110000);
  } catch (err) {
    expect(err).toStrictEqual(new Error('돈통이 가득찼어요! 100,000원 까지만 보관 가능합니다.'));
  }
});

test('자판기 잔돈은 10원 단위만 투입 가능하다', () => {
  const coinValut = new CoinVault();
  try {
    coinValut.chargeMoney(1234);
  } catch (err) {
    expect(err).toStrictEqual(new Error('상평통보는 안 받습니다. 10원단위로 넣어주세요!'));
  }
});

test('자판기 보유 금액만큼의 동전이 무작위로 생성된다.', () => {
  const coinValut = new CoinVault();
  coinValut.chargeMoney(5000);
  expect(coinValut.getCoins()).toStrictEqual('');
});