import { useEffect, useState } from "react";

const useFormatRupiah = (angka: number) => {
  const [formattedValue, setFormattedValue] = useState("");

  useEffect(() => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });
    const formatted = formatter.format(angka);
    setFormattedValue(formatted);
  }, [angka]);

  return formattedValue;
};

export default useFormatRupiah;
