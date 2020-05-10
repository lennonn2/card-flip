export type CardDataType = {
  content: string;
  id: string;
  key: string;
  matched: boolean;
};

export type PlayableCardType = CardDataType & {
  matched: boolean;
};

export type SelectionType = {
  first: string;
  second: string;
};
