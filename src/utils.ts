export const formatPhoneNumber = (number: string): string => {
  const input = number.replace(/\D/g, "");
  let formattedNumber = "";
  if (input.length > 0) {
    formattedNumber = formattedNumber + input;
  }
  if (input.length >= 4) {
    formattedNumber = "(" + input.slice(0, 3);
    formattedNumber = formattedNumber + ")" + input.slice(3, 6);
    if (input.length >= 7) {
      formattedNumber = formattedNumber + "-" + input.slice(6, 10);
    }
  }
  return formattedNumber;
};
