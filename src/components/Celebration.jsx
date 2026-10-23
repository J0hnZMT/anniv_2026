import { useRef, useState } from 'react';
import { Heart, PartyPopper, RotateCcw } from 'lucide-react';
import FloatingHearts from './FloatingHearts';
import DinnerDetails from './DinnerDetails';

export default function Celebration({ config, onReplay }) {
  const [burst, setBurst] = useState(false);
  const messageRef = useRef(null);
  const triggerCelebration = () => {
    setBurst(false);
    requestAnimationFrame(() => setBurst(true));
    window.setTimeout(() => setBurst(false), 1500);
  };

  const readMessageAgain = () => {
    messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    messageRef.current?.focus({ preventScroll: true });
  };

  return (
    <main className="page celebration-page">
      <FloatingHearts celebration />
      {burst && <div className="confetti-burst" aria-hidden="true">{Array.from({ length: 22 }, (_, i) => <span key={i} style={{ '--i': i }}>{['♥', '✦', '♡', '✧', '💕'][i % 5]}</span>)}</div>}
      <div className="celebration-wrap">
        <div className="celebration-topline"><span>JUST FOR YOU, {config.wifeName.toUpperCase()}</span><Heart size={15} fill="currentColor" /></div>
        <section className="celebration-card">
          <div className="celebration-illustration" aria-hidden="true"><span className="celebration-glow" /><span
  className={`celebration-heart ${burst ? 'heart-expanded' : ''}`}
>
  <Heart
    size={54}
    fill="currentColor"
    strokeWidth={1.2}
  />
</span><span className="celebration-twinkle twinkle-a">✦</span><span className="celebration-twinkle twinkle-b">✧</span><span className="celebration-twinkle twinkle-c">♡</span></div>
          <p className="celebration-kicker">I KNEW YOU’D SAY YES! 🥹</p>
          <h1>{config.celebrationTitle}</h1>
          <p className="celebration-intro">You just made your husband the happiest guy. 💗</p>
          {config.enableDateDetails && <DinnerDetails config={config} />}
          <div className="love-message" ref={messageRef} tabIndex={-1} aria-label="A message from your husband">
            {config.loveMessage.split('\n').map((paragraph, index) => paragraph.trim() ? <p key={index}>{paragraph}</p> : <div className="message-space" key={index} aria-hidden="true" />)}
          </div>
          <div className="signature"><span className="signature-rule" /><p>{config.signature}</p><span className="signature-heart">♥</span></div>
          <div className="celebration-actions">
          </div>
        </section>
        <p className="celebration-footer">A little date, a lot of love. <span aria-hidden="true">♥</span></p>
      </div>
    </main>
  );
}
