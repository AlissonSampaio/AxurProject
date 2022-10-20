import { HTMLProps, useState } from "react";
interface InputProps extends HTMLProps<HTMLInputElement> {
  onValueChange: (text: string) => void;
  mx?: number;
  mt?: number;
  mb?: number;
}
export const Input = ({ onValueChange, mx, mt, mb, ...rest }: InputProps) => {
  return (
    <div
      style={{
        marginTop: mt && mt / 4 + "rem",
        marginBottom: mb && mb / 4 + "rem",
        marginLeft: mx && mx / 4 + "rem",
        marginRight: mx && mx / 4 + "rem",
      }}
      className={`flex flex-row items-center px-6 py-4 rounded-xl bg-grey1`}
    >
      <input
        className="bg-transparent w-full h-full"
        type="text"
        onChange={(e) => onValueChange(e.target.value)}
      />
    </div>
  );
};
