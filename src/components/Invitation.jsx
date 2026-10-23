import { Heart, Utensils } from 'lucide-react';
import FloatingHearts from './FloatingHearts';
import { useNoButtonMovement } from '../hooks/useNoButtonMovement';

export default function Invitation({ config, onYes, noClicks, setNoClicks }) {
  const { buttonRef, position, isFloating, moveButton } = useNoButtonMovement();
  const yesFontSize = 18 + noClicks * 20;

  const handleNo = () => {
    setNoClicks((count) => count + 1);
    moveButton();
  };

  return (
    <main className="page invitation-page">
      <FloatingHearts />
      <div className="invitation-wrap">
        <article className="invitation-card">
          <div className="eyebrow"><span className="eyebrow-line" /> A LITTLE NOTE FOR YOU <span className="eyebrow-line" /></div>
          <div className="hero-art" aria-hidden="true">
            <span className="hero-sparkle sparkle-one">✦</span><span className="hero-sparkle sparkle-two">✧</span>
            <div className="heart-orbit"><span className="heart-orbit-dot" /></div>
            <div className="heart-main"><Heart size={68} strokeWidth={1.15} fill="currentColor" /></div>
            <span className="mini-heart mini-heart-one">♥</span><span className="mini-heart mini-heart-two">♡</span>
            <span className="dinner-icon"><Utensils size={21} strokeWidth={1.6} /></span>
          </div>
          <p className="for-line">For my favorite person, <strong>{config.wifeName}</strong> <span aria-hidden="true">❤️</span></p>
          <h1>{config.invitationQuestion} <span className="question-heart" aria-hidden="true">♥</span></h1>
          <p className="invitation-subtitle">{config.invitationSubtitle}</p>
          <div className="choice-area">
            <button className="choice-button yes-button" style={{ '--yes-font-size': `${yesFontSize}px` }} onClick={onYes}>
              {config.yesButtonText}
            </button>
            
            <button
              ref={buttonRef}
              className={`choice-button no-button ${isFloating ? "no-button-floating" : ""}`}
              style={
                isFloating && position
                  ? {
                      position: "fixed",
                      left: `${position.x}px`,
                      top: `${position.y}px`,
                      zIndex: 1000,
                    }
                  : undefined
              }
              onClick={() => {
                setNoClicks((count) => count + 1);
                moveButton();
              }}
            >
              {config.noButtonText}
            </button>
          </div>
          <p className="tiny-hint" aria-live="polite">{noClicks > 0 ? 'Hehe… I still hope you choose yes. 🥹' : 'Choose wisely… there may be hugs involved. 🤭'}</p>
          <div className="card-footer"><span>made with all my love</span><span className="footer-heart">♥</span></div>
        </article>
        <p className="outside-footer">{config.footerText}</p>
      </div>
    </main>
  );
}
