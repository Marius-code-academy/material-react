import styles from "./Button.module.css";

function Button({ onClick, children, variant = "primary", disabled, ...rest }) {
  const variantClass = {
    primary: styles.primary,
    danger: styles.danger,
    secondary: styles.secondary,
  }[variant];

  console.log(rest);

  return (
    <button {...rest} disabled={disabled} className={`${styles.buttonBase} ${variantClass}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
