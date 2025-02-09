import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { CARD_COLOR } from '../../utils/Constants';
import type { CardItemInfo } from '../../types/Card';

interface CardItemProps {
  card: CardItemInfo;
  onOpen?: () => void;
}

const CardItem = ({ card, onOpen }: CardItemProps) => {
  const location = useLocation();
  const cardColor = CARD_COLOR[card.bankName];

  const handleBankChange = () => {
    if (location.pathname !== '/') {
      onOpen && onOpen();
    }
  };

  return (
    <CardItemContainer cardColor={cardColor}>
      {card && (
        <>
          <BankChangeBtn onClick={handleBankChange}>
            {card.bankName}
          </BankChangeBtn>
          <ICChip />
          <CardNumberContainer>
            <p>{card.cardNumber[0]}</p>
            <p>{card.cardNumber[1]}</p>
            <SecurityCardNumber
              type='password'
              value={card.cardNumber[2]}
              disabled
            />
            <SecurityCardNumber
              type='password'
              value={card.cardNumber[3]}
              disabled
            />
          </CardNumberContainer>
          <CardInfoContainer>
            <CardNameContainer>{card.name || 'NAME'}</CardNameContainer>
            <p>{`${card.expirationDate[0] || 'MM'}/${
              card.expirationDate[1] || 'YY'
            }`}</p>
          </CardInfoContainer>
        </>
      )}
    </CardItemContainer>
  );
};

const CardItemContainer = styled.div<{ cardColor?: string }>`
  width: 213px;
  height: 133px;

  padding: 14px;

  box-sizing: border-box;

  background: ${({ cardColor }) => cardColor || 'var(--black-color)'};
  box-shadow: 3px 3px 5px var(--shadow-color);
  border-radius: 5px;

  font-size: 12px;
  font-weight: 700;

  color: var(--white-color);
`;

const BankChangeBtn = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  color: var(--white-color);
  font-weight: 700;

  cursor: pointer;
`;

const ICChip = styled.div`
  width: 40px;
  height: 26px;

  margin: 20px 0 10px 0;

  background: var(--yellow-color);
  border-radius: 4px;
`;

const CardNumberContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 12px;

  font-size: 14px;
  letter-spacing: 3px;

  > p,
  input {
    width: 20%;
  }
`;

const CardInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 10px;
`;

const CardNameContainer = styled.p`
  width: 60%;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SecurityCardNumber = styled.input`
  background: none;
  border: none;
  color: var(--white-color);

  text-align: center;
  letter-spacing: 5px;
`;

export default CardItem;
