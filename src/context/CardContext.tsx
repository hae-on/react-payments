import { createContext, useState } from 'react';
import type { CardItemInfo } from '../types/Card';
import { cardLocalStorage } from '../components/domain/CardLocalStorage';

interface CardProviderProps {
  children: React.ReactNode;
}

interface CardContextType {
  cardName: string;
  setCardName: React.Dispatch<React.SetStateAction<string>>;
  bankName: string;
  setBankName: React.Dispatch<React.SetStateAction<string>>;
  cardList: CardItemInfo[];
  setCardList: React.Dispatch<React.SetStateAction<CardItemInfo[]>>;
  card: CardItemInfo;
  setCard: React.Dispatch<React.SetStateAction<CardItemInfo>>;
}

export const CardContext = createContext<CardContextType>({
  cardName: '',
  setCardName: () => {},
  bankName: '',
  setBankName: () => {},
  cardList: [],
  setCardList: () => {},
  card: {
    id: 0,
    cardNumber: ['', '', '', ''],
    expirationDate: ['', ''],
    name: '',
    bankName: '',
    cardName: '',
  },
  setCard: () => {},
});

export const CardContextProvider = ({ children }: CardProviderProps) => {
  const [cardName, setCardName] = useState('');
  const [bankName, setBankName] = useState('기타 은행');
  const [cardList, setCardList] = useState<CardItemInfo[]>(
    cardLocalStorage.getCardList() || []
  );
  const [card, setCard] = useState<CardItemInfo>({
    id: 0,
    cardNumber: ['', '', '', ''],
    expirationDate: ['', ''],
    name: '',
    bankName: '',
    cardName: '',
  });

  return (
    <CardContext.Provider
      value={{
        cardName,
        setCardName,
        bankName,
        setBankName,
        cardList,
        setCardList,
        card,
        setCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
