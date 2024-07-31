// components/CopyToClipboardButton.tsx
import { useState } from "react";
import copy from "clipboard-copy";

interface CopyToClipboardButtonProps {
  text: string;
}

const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = ({
  text,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(text);
      setIsCopied(true);
    } catch (error) {
      console.error("Failed to copy text to clipboard", error);
    }
  };

  return (
    <div>
      <button onClick={handleCopyClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-6"
        >
          <path d="M464 0H144c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM362 464H54a6 6 0 0 1 -6-6V150a6 6 0 0 1 6-6h42v224c0 26.5 21.5 48 48 48h224v42a6 6 0 0 1 -6 6zm96-96H150a6 6 0 0 1 -6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1 -6 6z" />
        </svg>
      </button>
    </div>
  );
};

export default CopyToClipboardButton;
