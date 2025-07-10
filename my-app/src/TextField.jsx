export default function TextField({ label = '', hint = '', value, onChange, ...restProps }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label>
        {label && `${label}:`}
        <input
          {...restProps}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </label>
      {hint && (
        <div
          style={{
            marginTop: '4px',
            fontSize: '11px'
          }}>
          {hint}
        </div>
      )}
    </div>
  )
}