interface Props {
  children: string;
  onClick: () => void;
}

export const Button = ({ children, onClick }: Props) => {
  return (
    <button className="btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};
