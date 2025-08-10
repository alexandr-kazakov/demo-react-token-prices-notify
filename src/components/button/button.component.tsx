import type { ButtonProps } from "./button.types";

export const Button: React.FC<ButtonProps> = ({ onClick, children, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      padding: '6px 12px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: '#1A5CF9',
      color: '#fff',
      border: 'none',
      borderRadius: 4
    }}
  >
    {children}
  </button>
);