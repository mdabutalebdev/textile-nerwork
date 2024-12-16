import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectCountry({ className }) {
  const country = [
    "Afganisthan",
    "Africa",
    "Bangladesh",
    "india",
    "nepal",
    "chin",
  ];
  return (
    <Select>
      <SelectTrigger
        className={`h-full  w-[130px] md:w-[180px] bg-white text-black font-semibold py-3 px-[18px] border border-gray-300 outline-none rounded-xl pl-12  ${className}`}
      >
        <SelectValue placeholder="Anywhere" className="" />
      </SelectTrigger>
      <SelectContent className="text-gray-500">
        {country.map((el, idx) => {
          return (
            <SelectItem key={idx} value={el} className="">
              {el}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
