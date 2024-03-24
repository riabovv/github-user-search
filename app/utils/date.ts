export function formatDateDifference(inputDate: string): string {
  const currentDate = new Date();
  const updatedDate = new Date(inputDate);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const updatedYear = updatedDate.getFullYear();
  const updatedMonth = updatedDate.getMonth();

  const monthsDifference =
    (currentYear - updatedYear) * 12 + currentMonth - updatedMonth;

  if (monthsDifference === 0) {
    return "updated less than a month ago";
  } else if (monthsDifference === 1) {
    return "updated 1 month ago";
  } else if (monthsDifference > 1 && monthsDifference < 12) {
    return `updated ${monthsDifference} months ago`;
  } else {
    const yearsDifference = Math.floor(monthsDifference / 12);

    if (yearsDifference === 1) {
      return "updated 1 year ago";
    } else {
      return `updated ${yearsDifference} years ago`;
    }
  }
}
