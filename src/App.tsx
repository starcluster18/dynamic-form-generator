import React, { useState } from 'react';
import ConfigEditor from './components/ConfigEditor';
import FormRenderer from './components/FormRenderer';
import { FormConfig } from './types/FormConfig';
import './App.css';

const defaultJson = `{
  "title": "User Feedback",
  "items": [
    { "label": "Count", "type": "number" },
    { "label": "Is Editable", "type": "boolean" },
    { "label": "Caption", "type": "string" },
    { "label": "Description", "type": "multi-line" },
    { "label": "Birthday", "type": "date" },
    { "label": "Gender", "type": "enum", "options": ["Male", "Female", "Other"] }
  ],
  "buttons": [
    { "label": "Cancel" },
    { "label": "Save" }
  ]
}`;

const App: React.FC = () => {
  const [tab, setTab] = useState<'config' | 'result'>('config');
  const [config, setConfig] = useState<FormConfig | null>(null);
  const [configText, setConfigText] = useState<string>(defaultJson);

  const handleApply = (text: string) => {
    try {
      const parsed = JSON.parse(text);
      setConfig(parsed);
      setTab('result');
    } catch {
    }
  };

  return (
    <div className="container">
      <div className="tabs">
        <button className={tab === 'config' ? 'active' : ''} onClick={() => setTab('config')}>Config</button>
        <button className={tab === 'result' ? 'active' : ''} onClick={() => setTab('result')}>Result</button>
      </div>

      {tab === 'config' && (
        <ConfigEditor
          value={configText}
          onChange={setConfigText}
          onApply={handleApply}
        />
      )}

      {tab === 'result' && config && <FormRenderer config={config} />}

    </div>
  );
};

export default App;
