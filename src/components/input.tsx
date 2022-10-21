import { HTMLProps, useState } from "react";
interface InputProps extends HTMLProps<HTMLInputElement> {
  onValueChange: (text: string) => void;
  mx?: number;
  mt?: number;
  mb?: number;
}
export const Input = ({ onValueChange, mx, mt, mb, ...rest }: InputProps) => {
  return (
    <input
      className="bg-transparent w-full h-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
      type="text"
      onChange={(e) => onValueChange(e.target.value)}
      {...rest}
    />
  );
};
