import React from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onApply: (config: string) => void;
}

const ConfigEditor: React.FC<Props> = ({ value, onChange, onApply }) => {
  return (
    <div className="form-editor">
      <textarea
        rows={20}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div style={{ textAlign: 'right' }}>
        <button onClick={() => onApply(value)}>Apply</button>
      </div>
    </div>
  );
};

export default ConfigEditor;
