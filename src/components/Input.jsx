export default function Input({ id, label, onChange, value, title, labelClass, inputClass, inputType}) {
  return (
    <>
      <label htmlFor={id} className={labelClass}>{label}</label>
      <input
        type={inputType}
        name={title}
        id={id}
        className={inputClass}
        value={value}
        onChange={onChange} />
    </>
  )
}