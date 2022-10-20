export enum ButtonVariant {
  primary,
  secondary,
  text,
}

type ButtonProps = {
  label: string;
  isLoading?: boolean;
  onClick: () => void;
  className?: string;
  mx?: number;
  mt?: number;
  mb?: number;
};

export const Button = ({
  label,
  onClick,
  className,
  isLoading,
  mx = 32,
  mt,
  mb,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        marginTop: mt && mt / 4 + "rem",
        marginBottom: mb && mb / 4 + "rem",
        marginLeft: mx && mx / 4 + "rem",
        marginRight: mx && mx / 4 + "rem",
      }}
    >
      {label}
    </button>
  );
};
