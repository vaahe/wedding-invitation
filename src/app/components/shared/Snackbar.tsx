import React from "react";

interface SnackbarProps {
  content: string;
}

export const Snackbar: React.FC<SnackbarProps> = ({ content }) => {
  return (
    <div className="absolute bottom-2 left-2 min-w-1/2 p-4 flex items-center justify-center bg-green-600 text-white rounded-2xl shadow-md">
      <span>{content}</span>
    </div>
  );
};
