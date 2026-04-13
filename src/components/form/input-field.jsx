import styles from "./input-field.module.css";

export function InputField({
  label,
  type = "text",
  name,
  placeholder,
  as = "input",
  rows = 5,
  inputRef,
}) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>{label}</span>

      {as === "textarea" ? (
        <textarea
          ref={inputRef}
          name={name}
          placeholder={placeholder}
          rows={rows}
          className={styles.input}
          
        />
      ) : (
        <input
          ref={inputRef}
          type={type}
          name={name}
          placeholder={placeholder}
          className={styles.input}
          required
        />
      )}
    </label>
  );
}