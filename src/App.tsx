import React, { useState } from 'react';

const App: React.FC = () => {
  const [tab, setTab] = useState<'config' | 'result'>('config');

  return (
    <div className="container">
      <div className="tabs">
        <button onClick={() => setTab('config')}>Config</button>
        <button onClick={() => setTab('result')}>Result</button>
      </div>
      <div>
        {tab === 'config' ? <div>Config Editor</div> : <div>Form Preview</div>}
      </div>
    </div>
  );
};

export default App;
