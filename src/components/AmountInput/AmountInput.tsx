import React from "react";

interface AmountInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  validationHint: string;
  showValidationHint: boolean;
}

export const AmountInput: React.FC<AmountInputProps> = ({
  label,
  value,
  onChange,
  validationHint,
  showValidationHint,
}) => {
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) =>
    e.target.select();

  return (
    <div className="amount-input">
      <label htmlFor="amount">{label}</label>
      <input
        value={value}
        name="amount"
        type="number"
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          onChange(parseFloat(e.currentTarget.value))
        }
        onFocus={handleFocus}
      />
      <p className={showValidationHint ? "visible" : ""}>{validationHint}</p>
    </div>
  );
};
