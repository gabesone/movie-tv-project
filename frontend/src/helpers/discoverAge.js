export function discoverAge(birthday) {
  const today = new Date();
  const birth = new Date(birthday);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  // Adjust age if the birthday hasn't occurred yet this year
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
}

export function stringDate(inputDate) {
  const options = {
    day: "numeric",
    year: "numeric",
    month: "long",
  };

  const currentDate = new Date(inputDate);
  const stringDate = currentDate.toLocaleDateString("en-us", options);
  return stringDate;
}

export function discoverDeathAge(birthday, deathday) {
  const dayBirth = new Date(birthday);
  const dayDeath = new Date(deathday);
  let deathAge = dayBirth.getFullYear() - dayDeath.getFullYear();
  const monthDifference = dayDeath.getMonth() - dayBirth.getMonth();

  // Adjust the day of death to get a more precisely age
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && dayDeath.getDate() < dayBirth.getDate())
  ) {
    deathAge--;
  }

  return deathAge;
}
