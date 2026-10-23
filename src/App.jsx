import { useState } from 'react';
import Invitation from './components/Invitation';
import Celebration from './components/Celebration';
import { loveConfig } from './config/loveConfig';

export default function App() {
  const [accepted, setAccepted] = useState(false);
  const [noClicks, setNoClicks] = useState(0);

  return (
    <div className="app-shell">
      {accepted
        ? <Celebration config={loveConfig} onReplay={() => { setAccepted(false); setNoClicks(0); }} />
        : <Invitation config={loveConfig} onYes={() => setAccepted(true)} noClicks={noClicks} setNoClicks={setNoClicks} />}
    </div>
  );
}
