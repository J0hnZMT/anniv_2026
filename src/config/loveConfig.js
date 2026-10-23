
const valueOr = (value, fallback) => {
  const cleaned = typeof value === "string" ? value.trim() : "";
  return cleaned || fallback;
};

const multiline = (value, fallback) =>
  valueOr(value, fallback).replace(/\\n/g, "\n");

const parseBoolean = (value, fallback = false) => {
  if (typeof value !== "string" || value.trim() === "") {
    return fallback;
  }

  return value.trim().toLowerCase() === "true";
};

export const loveConfig = {
  wifeName: valueOr(import.meta.env.VITE_WIFE_NAME, "Clariza"),
  husbandName: valueOr(
    import.meta.env.VITE_HUSBAND_NAME,
    "Your Loving Husband"
  ),

  invitationQuestion: valueOr(
    import.meta.env.VITE_INVITATION_QUESTION,
    "Will you go on a surprise dinner date with me?"
  ),

  invitationSubtitle: valueOr(
    import.meta.env.VITE_INVITATION_SUBTITLE,
    "I have a little surprise planned just for us."
  ),

  yesButtonText: valueOr(import.meta.env.VITE_YES_BUTTON_TEXT, "Yes! ❤️"),
  noButtonText: valueOr(import.meta.env.VITE_NO_BUTTON_TEXT, "No 🙈"),

  celebrationTitle: valueOr(
    import.meta.env.VITE_CELEBRATION_TITLE,
    "Yaaay! It’s a date! ❤️"
  ),

  loveMessage: multiline(
    import.meta.env.VITE_LOVE_MESSAGE,
    "My Love, Clariza ❤️\n\n" +
      "Even if we’ve already shared so many beautiful memories together, " +
      "I still want to keep finding little ways to make you smile.\n\n" +
      "Tonight, I want to take you out on a special dinner date—not just " +
      "to enjoy good food, but to spend quality time with the woman who " +
      "makes my life more beautiful.\n\n" +
      "Thank you for being my partner, my best friend, and my answered " +
      "prayer. No matter how busy life gets, I always want to make time " +
      "for us.\n\n" +
      "So get ready, beautiful. Your husband has a little surprise for you! 🥰\n\n" +
      "I love you always."
  ),

  dateLabel: valueOr(
    import.meta.env.VITE_DATE_LABEL,
    "Our Special Dinner Date"
  ),
  dateValue: valueOr(import.meta.env.VITE_DATE_VALUE, "Tonight"),
  timeValue: valueOr(import.meta.env.VITE_TIME_VALUE, "To be revealed"),
  locationValue: valueOr(
    import.meta.env.VITE_LOCATION_VALUE,
    "It’s a surprise!"
  ),

  extraNote: valueOr(
    import.meta.env.VITE_EXTRA_NOTE,
    "Just bring your beautiful smile."
  ),

  signature: valueOr(
    import.meta.env.VITE_SIGNATURE,
    "Forever yours, your loving husband. ❤️"
  ),

  footerText: valueOr(
    import.meta.env.VITE_FOOTER_TEXT,
    "You will always be my favorite person. ❤️"
  ),

  enableDateDetails: parseBoolean(
    import.meta.env.VITE_ENABLE_DATE_DETAILS,
    true
  ),
};
