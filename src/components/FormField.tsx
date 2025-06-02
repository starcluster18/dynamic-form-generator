import React from 'react';
import { FormFieldConfig } from '../types/FormConfig';

const FormField: React.FC<{ field: FormFieldConfig }> = ({ field }) => {
  const { label, type, options } = field;
  const inputId = `field-${label.replace(/\s+/g, '-').toLowerCase()}`;

  switch (type) {
    case 'number':
    case 'string':
    case 'date':
      return (
        <>
          <label htmlFor={inputId}>{label}:</label>
          <input id={inputId} type={type === 'string' ? 'text' : type} />
        </>
      );
    case 'multi-line':
      return (
        <>
          <label htmlFor={inputId}>{label}:</label>
          <textarea id={inputId} rows={3} />
        </>
      );
    case 'boolean':
      return (
        <>
          <label htmlFor={inputId}>{label}:</label>
          <input id={inputId} type="checkbox" />
        </>
      );
    case 'enum':
      return (
        <>
          <span>{label}:</span>
          <div>
            {options?.map((opt, idx) => {
              const radioId = `${inputId}-opt-${idx}`;
              return (
                <label key={idx} htmlFor={radioId}>
                  <input id={radioId} type="radio" name={label} value={opt} />
                  {opt}
                </label>
              );
            })}
          </div>
        </>
      );
    default:
      return null;
  }
};

export default FormField;
