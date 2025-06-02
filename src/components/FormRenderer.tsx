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
        {config.items.map((field, index) => (
          <FormField key={index} field={field} />
        ))}
        <div className="button-row" style={{ marginTop: 20 }}>
          {(config.buttons || [{ label: 'Submit' }]).map((btn, i) => (
            <button key={i} type="button" style={{ marginRight: 10 }}>
              {btn.label}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
};

export default FormRenderer;
