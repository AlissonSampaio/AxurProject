import clsx from "clsx";

export enum ButtonVariant {
  default,
  danger,
}

export type ButtonProps = {
  onClick: () => void;
  label: string;
  variant?: ButtonVariant;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = ButtonVariant.default,
}) => (
  <button
    className={clsx("rounded-xl px-5 ml-2 h-10 font-medium  text-sm", {
      "bg-[#ff5823] text-white hover:bg-[#f54813] ":
        variant === ButtonVariant.default,
      "border border-red-700 text-red-700 hover:bg-red-800 hover:text-white transition-all":
        variant === ButtonVariant.danger,
    })}
    onClick={onClick}
  >
    {label}
  </button>
);
