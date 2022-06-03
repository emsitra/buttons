import './Button.css';

export const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};
