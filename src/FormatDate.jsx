function formatDate(dateString, options = {}) {
  if (!dateString) return "";

  const date = new Date(dateString);

  // default format: "Monday, Oct 6, 2025"
  const defaultOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", { ...defaultOptions, ...options });
}

function getShortDay(dateString) {
  //   if (!weatherObj || !weatherObj.location || !weatherObj.location.localtime)
  //     return "";

  //   const dateString = weatherObj.location.localtime; // e.g. "2025-10-06 01:00"
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { weekday: "short" });
  // → "Mon", "Tue", etc.
}

function getTime(date) {
  const d = new Date(date);
  const hours = d.getHours().toString().padStart(2, "0");
  const minutes = d.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

export { getShortDay, formatDate, getTime };
