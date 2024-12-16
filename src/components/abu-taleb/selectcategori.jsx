import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectCategori() {
  const categories = [
    "All category",
    "Manufacturingory",
    "Machinery",
    "Trading/Buying",
    "Advisor/Consultant",
    "Certifications",
    "Solution",
  ];
  return (
    <Select className="mt-20">
      <SelectTrigger className="md:w-[180px] h-full bg-gray-100 text-black font-semibold py-3 px-[18px]  outline-none ">
        <SelectValue placeholder="All Categories" className="" />
      </SelectTrigger>

      <SelectContent className="text-gray-500">
        {categories.map((el, idx) => {
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
