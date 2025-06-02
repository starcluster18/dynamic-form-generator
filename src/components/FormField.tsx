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
          <label className="form-label" htmlFor={inputId}>{label}:</label>
          <input
            id={inputId}
            className="form-input"
            type={type === 'string' ? 'text' : type}
          />
        </>
      );

    case 'multi-line':
      return (
        <>
          <label className="form-label" htmlFor={inputId}>{label}:</label>
          <textarea
            id={inputId}
            className="form-input"
            rows={3}
          />
        </>
      );

    case 'boolean':
      return (
        <>
          <label className="form-label" htmlFor={inputId}>{label}:</label>
          <input id={inputId} type="checkbox" />
        </>
      );

    case 'enum':
      return (
        <>
          <span className="form-label">{label}:</span>
          <div className="form-input">
            {options?.map((opt, idx) => {
              const radioId = `${inputId}-opt-${idx}`;
              return (
                <label key={idx} htmlFor={radioId}>
                  <input
                    id={radioId}
                    type="radio"
                    name={label}
                    value={opt}
                  /> {opt}
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
