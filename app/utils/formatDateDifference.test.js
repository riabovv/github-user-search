import { formatDateDifference } from "./date";

describe("formatDateDifference", () => {
  it('should return "updated less than a month ago" for recent date', () => {
    const inputDate = new Date().toISOString();
    expect(formatDateDifference(inputDate)).toBe(
      "updated less than a month ago"
    );
  });

  it('Custom date: should return "updated less than a month ago" for recent date', () => {
    const inputDate = "2024-02-04T11:55:33.534Z";

    expect(formatDateDifference(inputDate)).toBe("updated 1 month ago");
  });

  it('should return "updated 1 month ago" for a date one month ago', () => {
    const inputDate = new Date();
    inputDate.setMonth(inputDate.getMonth() - 1);
    expect(formatDateDifference(inputDate.toISOString())).toBe(
      "updated 1 month ago"
    );
  });

  it('should return "updated 2 months ago" for a date two months ago', () => {
    const inputDate = new Date();
    inputDate.setMonth(inputDate.getMonth() - 2);
    expect(formatDateDifference(inputDate.toISOString())).toBe(
      "updated 2 months ago"
    );
  });

  it('should return "updated 1 year ago" for a date one year ago', () => {
    const inputDate = new Date();
    inputDate.setFullYear(inputDate.getFullYear() - 1);
    expect(formatDateDifference(inputDate.toISOString())).toBe(
      "updated 1 year ago"
    );
  });

  it('should return "updated 2 years ago" for a date two years ago', () => {
    const inputDate = new Date();
    inputDate.setFullYear(inputDate.getFullYear() - 2);
    expect(formatDateDifference(inputDate.toISOString())).toBe(
      "updated 2 years ago"
    );
  });
});
