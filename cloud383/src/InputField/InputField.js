import css from "./InputField.module.css";

export default function InputField({ text, onClick, onChange }) {
  return (
    <div className={css.container}>
      <input
        className={css.input}
        type={text}
        placeholder="Change location..."
        onChange={onChange}
      />
      <button className={css.button} onClick={onClick}>
        Search
      </button>
    </div>
  );
}
