import React from 'react';
import { FormConfig } from '../types/FormConfig';
import FormField from './FormField';

interface Props {
  config: FormConfig;
}

const FormRenderer: React.FC<Props> = ({ config }) => {
  return (
    <div className="form-result">
      <h2>{config.title || 'Dynamic Form'}</h2>
      <form>
        {config.items?.map((field, index) => (
          <FormField key={index} field={field} />
        ))}
        {Array.isArray(config.buttons) && config.buttons.length > 0 && (
          <div className="button-row">
            {config.buttons.map((btn, i) => (
              <button key={i} type="button">
                {btn.label}
              </button>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default FormRenderer;
