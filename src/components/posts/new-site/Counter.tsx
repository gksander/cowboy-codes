import type { ComponentChild } from "preact";
import { useEffect, useState } from "preact/hooks";
import { format } from "date-fns";

export function Counter() {
  const [timeDisplay, setTimeDisplay] = useState(getCurrentTime);
  useEffect(() => {
    const i = setInterval(() => setTimeDisplay(getCurrentTime()), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div class="bg-gray-100 dark:bg-gray-700 rounded p-3 not-prose">
      <p>I'm a Preact component! Here's the time.</p>
      <p class="font-medium">{timeDisplay}</p>
    </div>
  );
}

function getCurrentTime() {
  return format(new Date(), "h:mm:ss a");
}
