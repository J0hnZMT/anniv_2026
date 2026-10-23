const hearts = ['♡', '♥', '♡', '♥', '♡', '♥', '♡', '♥', '♡', '♥', '♡', '♥'];

export default function FloatingHearts({ celebration = false }) {
  return (
    <div className={`floating-hearts ${celebration ? 'floating-hearts--celebration' : ''}`} aria-hidden="true">
      {hearts.map((heart, index) => (
        <span className="floating-heart" key={`${heart}-${index}`} style={{
          '--i': index,
          '--left': `${(index * 17 + 5) % 100}%`,
          '--delay': `${(index % 6) * -1.7}s`,
          '--duration': `${11 + (index % 5) * 2}s`,
          '--size': `${14 + (index % 4) * 8}px`,
        }}>{heart}</span>
      ))}
    </div>
  );
}
