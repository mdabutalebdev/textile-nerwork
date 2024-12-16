"use client";
import React from "react";
import { Container } from "../shared";

import { SelectCountry } from "../abu-taleb/selectcountry";
import Search_icon from "../../assets/search_icon.svg";
import Country_icon from "../../assets/country_icon.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-[116px] pb-10 md:pt-[216px] md:pb[120px] bg-cover bg-center bg-no-repeat bg-hero-image">
      <Container>
        <div>
          <div className="text-center md:py-10 md:px-[160px]">
            <h5 className="heading_5">Textile & Apparel B2B Network</h5>
            <h1 className="pt-1 pb-3">Find Your Business Needs</h1>
            <p className="text_18">
              The all-in-one platform connecting apparel & textile companies
              with global buyers for endless opportunities
            </p>
          </div>

          {/* <div className="bg-white p-3 rounded-xl mt-4">
            <form
              action=""
              className="flex items-center justify-between gap-y-3 gap-x-2 flex-wrap md:flex-nowrap"
            >
              <div className="flex w-full items-center gap-2 border border-border rounded-lg py-3 px-6 md:order-2">
                <span>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                      stroke="#D0D5DD"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  className="w-full flex-1 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-none focus:border-none"
                  type="search"
                  placeholder="T-shirt manufacturer"
                />
              </div>
              <div className="md:order-1">
                <SelectBox />
              </div>
              <div className="md:order-3">
                <SelectBox />
              </div>
              <div className="flex-1 md:order-4">
                <Button className="w-full md:w-[210px]" type="submit">
                  Search
                </Button>
              </div>
            </form>
          </div> */}

          {/* =======abu-taleb==== */}
          <div className="w-full mx-auto md:w-[1096px] bg-gray-100 rounded-xl md:flex md:justify-between p-2 relative hidden">
            {/* category part start */}
            <div className="border-r border-gray-300">
              <SelectCategori/>
            </div>
            {/* category part end */}

            {/* search part start */}
            <div className="bg-gray-100 relative flex gap-[10px] items-center">
              <Image
                src={Search_icon}
                alt={Search_icon}
                className="cursor-pointer"
              />
              <input
                type="search"
                id="gsearch"
                name="gsearch"
                placeholder="T-shirt manufactures"
                className=" bg-gray-100 py-3 pr-[18px] outline-none rounded-2xl"
              ></input>
            </div>
            {/* search part end */}
            {/* country part start */}
            <div className="relative">
              <Image
                src={Country_icon}
                alt={Country_icon}
                className="absolute top-1/2 -translate-y-1/2 left-5 text-gray-500 cursor-pointer"
              />
              <SelectCountry />
            </div>
            {/* country part end */}
            {/* btn  part start */}
            <div className="">
              <Button type="submit" className="w-[180px] h-full">
                Search
              </Button>
            </div>
            {/* btn  part end */}
          </div>



          {/* responsive start */}
          <div className="w-full mx-auto md:w-[1096px] bg-white rounded-xl   md:justify-between p-2 md:hidden  block">
           

            {/* search part start */}
            <div className="bg-gray-200 flex gap-[10px]  text-center rounded-md">
              <Image
                src={Search_icon}
                alt={Search_icon}
                className="cursor-pointer ml-3"
              />
              <input
                type="search"
                id="gsearch"
                name="gsearch"
                placeholder="T-shirt manufactures"
                className="py-3 bg-gray-200  outline-none rounded-2xl"
              ></input>
            </div>
            {/* search part end */}
             {/* category part start */}

             <div className="flex gap-x-2 mt-3">
             <div className="border border-gray-300 rounded-md">
              <SelectCategori className="w-[120px]"/>
            </div>
            {/* category part end */}
            {/* country part start */}
            <div className="relative mr-3 border border-gray-300 rounded-md">
              <Image
                src={Country_icon}
                alt={Country_icon}
                className="absolute top-1/2 -translate-y-1/2 left-5 text-gray-500 cursor-pointer"
              />
              <SelectCountry className=""/>
            </div>
            </div>
            {/* country part end */}
            {/* btn  part start */}
            <div className="mt-3">
              <Button type="submit" className="w-[270px] h-full">
                Search
              </Button>
            </div>
            {/* btn  part end */}
          </div>
          {/* responsive end */}
          {/* ========= abu-taleb====== */}

          <div className="mt-10 flex justify-center items-center gap-6">
            <Tags tagText="Sports Wear" />
            <Tags tagText="Hoodie" />
            <Tags tagText="Tops" />
            <Tags tagText="Cotton Yarn" />
          </div>
        </div>
      </Container>
    </section>
  );
};

// SELECT ITEM COMPONENT
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Button from "../ui/button";
import { SelectCategori } from "../abu-taleb/selectcategori";
export function SelectBox({ className = "" }) {
  return (
    <Select className={className}>
      <SelectTrigger className="text-gray-700 font-semibold text-sm leading-5 w-[180px] border-border focus:ring-0 focus:ring-offset-0 focus:ring-offset-none">
        <SelectValue
          placeholder="All Categories"
          className="text_16 text-red-400"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="flex gap-2 items-center">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 2.04819C11.7108 1.80032 10.871 1.66669 10 1.66669C5.39765 1.66669 1.66669 5.39765 1.66669 10C1.66669 14.6024 5.39765 18.3334 10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10C18.3334 8.57058 17.9734 7.2252 17.3393 6.04956M14.1667 4.79169H14.1709M8.75007 18.2402L8.75015 16.4041C8.75016 16.3047 8.78574 16.2085 8.85046 16.133L10.9219 13.7162C11.0922 13.5176 11.0394 13.2131 10.8123 13.0833L8.43213 11.7231C8.36746 11.6862 8.31388 11.6326 8.27697 11.5679L6.7254 8.84888C6.64465 8.70737 6.48883 8.62591 6.32655 8.64036L1.72017 9.05064M17.5 5.00002C17.5 6.84097 15.8334 8.33335 14.1667 10C12.5 8.33335 10.8334 6.84097 10.8334 5.00002C10.8334 3.15907 12.3257 1.66669 14.1667 1.66669C16.0076 1.66669 17.5 3.15907 17.5 5.00002ZM14.375 4.79169C14.375 4.90675 14.2817 5.00002 14.1667 5.00002C14.0516 5.00002 13.9584 4.90675 13.9584 4.79169C13.9584 4.67663 14.0516 4.58335 14.1667 4.58335C14.2817 4.58335 14.375 4.67663 14.375 4.79169Z"
                stroke="#F7931E"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Anywhere
          </SelectLabel>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

// Form Design

// label text
export function Tags({ tagText }) {
  return (
    <div className="flex gap-[6px] items-center rounded-md border-border px-[14px] py-2 text-white bg-black/20">
      <span>
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
            stroke="#D0D5DD"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>{tagText}</span>
    </div>
  );
}

export default Hero;
