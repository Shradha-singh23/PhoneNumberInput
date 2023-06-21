import "./styles.css";
import { formatPhoneNumber } from "./utils";

type PhoneNumberInputProps = {
  phoneNumber: string;
  onChange: (formattedNumber: string) => void;
  placeholder: string;
};

export default function PhoneNumberInput(
  props: PhoneNumberInputProps
): JSX.Element {
  const { phoneNumber, onChange, placeholder } = props;
  const handlePhoneNumberChange = (event: any) => {
    const formattedNumber = formatPhoneNumber(event.target.value);
    onChange(formattedNumber);
  };

  return (
    <input
      type="text"
      value={phoneNumber}
      onChange={handlePhoneNumberChange}
      placeholder={placeholder}
    />
  );
}
