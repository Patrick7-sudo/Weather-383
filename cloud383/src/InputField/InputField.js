export default function InputField({ text, img, onClick, onChange }) {
  return (
    <div>
      <input
        type={text}
        placeholder="Search another location"
        onChange={onChange}
      />
      <button onClick={onClick}>{img}</button>
    </div>
  );
}
