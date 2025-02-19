export function formatCurrency(value) {
  const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return intl.format(value);
}

export function formatRuntime(runtime) {
  let hours = 0;
  let minutes;

  if (runtime) {
    while (runtime >= 60) {
      hours++;
      runtime -= 60;
    }
    minutes = runtime;
  } else {
    return undefined;
  }

  hours += "h";
  minutes += "min";

  return { hours, minutes };
}
