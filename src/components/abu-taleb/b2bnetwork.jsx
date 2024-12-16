"use client";
import React, { useState } from "react";
import { SelectCategori } from "./selectcategori";
import Image from "next/image";
import Search_icon from "../../assets/search_icon.svg";
import Button from "../ui/button";
import Country_icon from "../../assets/country_icon.svg";
import { SelectCountry } from "./selectcountry";
import { Container } from "../shared";
import FilterLeft from "./filterleft";
import Cross from "../../assets/cross.svg";
import Grid from "../../assets/grid.svg";
import Layer_icon from "../../assets/layer_icon.svg";
import User_icon from "../../assets/user_icon.svg";
import Batch_icon from "../../assets/batch_icon.svg";
import Show_icon from "../../assets/show_icon.svg";
import CardRight from "./cardright";

const B2Network = () => {
  const [showCard, setShowCard] = useState(false);

  const handleToggleCard = () => {
    setShowCard(!showCard);
  };

  return (
    <section className="py-40">
      {/* title start */}
      <Container>
        <div className="mx-auto text-center">
          <p className="text-gray-500 text-xs sm:text-sm uppercase font-semibold leading-5">
            Textile & Apparel B2B Network
          </p>
          <h3 className="text-gray-900   font-semibold text-3xl sm:text-5xl md:leading-[60px]">
            Expand Your Reach, Grow Globally
          </h3>
          <p className="text-gray-500 w-full font-normal text-sm md:text-lg leading-7">
            The all-in-one platform connecting apparel & textile companies with
            global buyers for endless opportunities
          </p>
        </div>
      </Container>
      {/* title end */}

      <Container>
        <div className="w-full mx-auto md:w-[1096px] bg-white shadow md:shadow-none md:bg-gray-100 rounded-xl md:flex md:justify-between p-2 mt-8">
          {/* category part start */}
          <div className="hidden md:flex border-r border-gray-300 ">
            <SelectCategori />
          </div>
          {/* category part end */}

          {/* search part start */}
          <div className=" bg-gray-100 relative flex gap-[10px] items-center rounded-xl">
            <Image
              src={Search_icon}
              alt={Search_icon}
              className="absolute top-3 md:top-4 left-8 cursor-pointer"
            />
            <input
              type="search"
              id="gsearch"
              name="gsearch"
              placeholder="T-shirt manufactures"
              className="bg-gray-100 py-3 pr-[18px] outline-none rounded-2xl ml-16 w-full"
            ></input>
          </div>
          {/* search part end */}
          {/* country part start */}
          <div className="relative hidden md:flex">
            <Image
              src={Country_icon}
              alt={Country_icon}
              className="absolute top-1/2 -translate-y-1/2 left-5 text-gray-500 cursor-pointer"
            />
            <SelectCountry />
          </div>
          {/* country part end */}
          {/* btn  part start */}
          <div className="flex gap-2 items-center">
            <Button
              className="w-[180px] h-full md:bg-transparent md:border md:border-brand-300 md:text-brand-500"
              type="submit"
            >
              Search
            </Button>

            <Button onClick={handleToggleCard} className="bg-transparent">
              <Image
                src={Show_icon}
                alt={Show_icon}
                className="cursor-pointer sm:hidden w-full h-full"
              />
            </Button>
          </div>
          {/* btn  part end */}
        </div>

        {/* filter and card part stare here */}
        <div className="md:flex gap-5 pt-[78px]">
          {/* filter left start */}

          <div
            className={`md:relative fixed top-0 left-0 md:block ${
              !showCard ? "md:block hidden" : "md:block block"
            }`}
          >
            <FilterLeft onClick={handleToggleCard} />
          </div>

          {/* filter left end */}

          {/* card right side start */}

          <div className="">
            <div className="">
              <h3 className="text-gray-900 text-xl font-semibold">
                T-shirt manufactures: 66 Resutls
              </h3>
            </div>
            <div className="flex gap-x-5 mt-8">
              {/* btn one start */}
              <div className="relative">
                <Image
                  src={Country_icon}
                  alt={Country_icon}
                  className="absolute top-[8px] left-5 text-gray-500"
                />
                <Image
                  src={Cross}
                  alt={Cross}
                  className="absolute top-[14px] right-3 text-gray-500 cursor-pointer"
                />

                <Button
                  className="w-full text-sm font-normal leading-5 rounded-[32px] md:w-[167px] h-[36px] text-gray-700 bg-white border border-gray-300 pr-0"
                  type="submit"
                >
                  Bangladesh
                </Button>
              </div>
              {/* btn one end */}
              {/* btn two start */}
              <div className="relative">
                <Image
                  src={Grid}
                  alt={Grid}
                  className="absolute top-[8px] left-5 text-gray-500"
                />
                <Image
                  src={Cross}
                  alt={Cross}
                  className="absolute top-[14px] right-3 text-gray-500 cursor-pointer"
                />

                <Button
                  className="w-full text-sm font-normal leading-5 rounded-[32px] md:w-[167px] h-[36px] text-gray-700 bg-white border border-gray-300 pr-2"
                  type="submit"
                >
                  Machinery
                </Button>
              </div>
              {/* btn two end */}
              {/* btn three start */}
              <div className="relative hidden md:flex">
                <Image
                  src={User_icon}
                  alt={User_icon}
                  className="absolute top-[8px] left-5 text-gray-500"
                />
                <Image
                  src={Cross}
                  alt={Cross}
                  className="absolute top-[14px] right-3 text-gray-500 cursor-pointer"
                />

                <Button
                  className="w-full text-sm font-normal leading-5 rounded-[32px] md:w-[167px] h-[36px] text-gray-700 bg-white border border-gray-300 pr-2"
                  type="submit"
                >
                  Yarn
                </Button>
              </div>
              {/* btn three end */}
              {/* btn four start */}
              <div className="relative hidden md:flex">
                <Image
                  src={Layer_icon}
                  alt={Layer_icon}
                  className="absolute top-[8px] left-5 text-gray-500"
                />
                <Image
                  src={Cross}
                  alt={Cross}
                  className="absolute top-[14px] right-3 text-gray-500 cursor-pointer"
                />

                <Button
                  className="w-full text-sm font-normal leading-5 rounded-[32px] md:w-[167px] h-[36px] text-gray-700 bg-white border border-gray-300 pr-2"
                  type="submit"
                >
                  Small
                </Button>
              </div>
              {/* btn four end */}
              {/* btn five start */}
              <div className="relative hidden md:flex">
                <Image
                  src={Batch_icon}
                  alt={Batch_icon}
                  className="absolute top-[8px] left-5 text-gray-500"
                />
                <Image
                  src={Cross}
                  alt={Cross}
                  className="absolute top-[14px] right-3 text-gray-500 cursor-pointer"
                />

                <Button
                  className="w-full text-sm font-normal leading-5 rounded-[32px] md:w-[167px] h-[36px] text-gray-700 bg-white border border-gray-300 pr-2"
                  type="submit"
                >
                  Leed Platinum
                </Button>
              </div>
              {/* btn five end */}
            </div>

            <div className="md:flex flex-wrap gap-[33px] mt-10">
              <CardRight />
              <CardRight />
              <CardRight />
              <CardRight />
              <CardRight />
              <CardRight />
              <CardRight />
              <CardRight />
            </div>
          </div>

          {/* card right side end */}
        </div>
        {/* filter and card part end here */}
      </Container>
    </section>
  );
};

export default B2Network;
