export type LogoProps = {
  text: string;
};

export type ButtonProps = {
  text: string;
  type: string;
  dice?: React.RefObject<HTMLDivElement>;
  onOpen?: () => void;
  id?: string;
  plate?: JSX.Element;
  enter?: boolean;
};

export type ArrowProps = {
  type: string;
};

export type CrossProps = {
  type: string;
};

export type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

export type LabelTextProps = {
  text: string;
};

export type TitlePlaygroundProps = {
  text: string;
};
