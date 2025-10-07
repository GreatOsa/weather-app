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

export { getShortDay, formatDate };
