import { CalendarHeart, Clock3, MapPin, Sparkles } from 'lucide-react';

export default function DinnerDetails({ config }) {
  const details = [
    { Icon: CalendarHeart, label: config.dateLabel, value: config.dateValue },
    { Icon: Clock3, label: 'Time', value: config.timeValue },
    { Icon: MapPin, label: 'Where', value: config.locationValue },
  ];
  return (
    <section className="dinner-details" aria-label="Dinner date details">
      {details.map(({ Icon, label, value }) => (
        <div className="detail-item" key={label}>
          <span className="detail-icon"><Icon size={19} strokeWidth={1.8} /></span>
          <div><span className="detail-label">{label}</span><span className="detail-value">{value}</span></div>
        </div>
      ))}
      {config.extraNote && <p className="detail-note"><Sparkles size={16} aria-hidden="true" /> {config.extraNote}</p>}
    </section>
  );
}
