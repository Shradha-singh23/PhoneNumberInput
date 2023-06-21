import PhoneNumberInput from "./PhoneNumberInput";
import "./styles.css";
import { useState } from "react";

export default function App(): JSX.Element {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (formattedNumber: string) => {
    setPhoneNumber(formattedNumber);
  };

  return (
    <PhoneNumberInput
      phoneNumber={phoneNumber}
      onChange={handlePhoneNumberChange}
      placeholder="(123)456-7890"
    />
  );
}
