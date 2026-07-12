import type { ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  label: string;
}

export const IconButton = ({ children, label }: IconButtonProps) => {
  return (
    <button
      type="button"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700"
    >
      {children}
    </button>
  );
};
