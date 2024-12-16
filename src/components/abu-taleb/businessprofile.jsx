"use client";

import React, { useState } from "react";
import { Container } from "../shared";
import ProfileCard from "./profilecard";
import CountCard from "./countcard";
import CardRight from "./cardright";
import TabComponents from "./tabcomponents";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Shadow from '../../assets/shadow.png'
import Shadow_right from '../../assets/shadow_right.png'

const BusinessProfile = ({ num, headding }) => {
  const count = [
    {
      num: 12,
      headding: "Total inquiries received",
    },
    {
      num: 5,
      headding: "Total buying queries",
    },
    {
      num: 12,
      headding: "Total inquiries received",
    },
    {
      num: 12,
      headding: "Total inquiries received",
    },
  ];

  let tabs = [
    "Personal settings",
    "Saved listings",
    "Awards",
    "Certifications",
    "Rating",
    "Contacts",
    "FAQ",
  ];
  let [active, setactive] = useState(tabs[0]);
  return (
    <section className="bg-gray-100 py-40">
      <Container>
        {/* profile card start */}
        <div className="">
          <ProfileCard />
        </div>
        {/* profile card end */}
        {/* count card start */}
        <div className="lg:flex lg:justify-between">
          {count.map((el, idx) => {
            return (
              <div key={idx} className="mt-10 ">
                <CountCard num={el.num} headding={el.headding} />
              </div>
            );
          })}
        </div>
        {/* count card end */}

        {/* tabs part start */}
         
         <ul className="md:h-[64px] md:flex hidden w-full bg-white shadow-sm rounded-2xl  gap-x-8 text-center my-6 py-5 pl-6  mt-4 border ">
          
          {
          tabs.map((el, idx) => {
            return (
              <li key={idx} className="">
                <h3
                  onClick={() => setactive(el)}
                  className={`pb-3 w-16 lg:w-full text-md font-semibold ${
                    active == el ? "border-b-2 border-brand-600" : false
                  }`}
                >
                  {el}
                </h3>
              </li>
            );
          })
          }
          
        </ul>

        {/* responsive tab */}
        <ul className="md:h-[64px] w-full bg-white shadow-sm rounded-2xl text-center my-6 py-5 pl-6  mt-4 border lg:hidden block">
             <Splide options={{
                    perPage: 2,
                    perMove: 1,
                    arrows: false,
                    pagination:false
                }}>
          {
          tabs.map((el, idx) => {
            return (
              <SplideSlide key={idx} className="">
                <h3
                  onClick={() => setactive(el)}
                  className={`pb-3 w-16 lg:w-full text-sm font-medium ${
                    active == el ? "border-b-2 border-brand-600" : false
                  }`}
                >
                  {el}
                </h3>
              </SplideSlide>
            );
          })
          }
          </Splide>
        </ul>
          {/* responsive tab  end*/}
          {/* tabs part end */}
        {/* contact part start */}
        <div className="mb-32">
          {tabs.map((el, idx) => {
            if (active == el) {
              return <TabComponents key={idx} el={el} />;
            }
          })}
        </div>
        {/* card slider */}

        <div className="bg-white mt-5 shadow-sm rounded-2xl hidden lg:block relative">
          <h3 className="text-lg font-semibold text-gray-900 pl-6 pt-3">Saved listings</h3>
          <Splide options={{perPage:5, padding:"12rem", gap:10, type:"loop", pagination:false}} className="py-8 savelist" >
            <SplideSlide>
              <CardRight className=" "/>
            </SplideSlide>
            <SplideSlide>
              <CardRight />
            </SplideSlide>
            <SplideSlide>
              <CardRight />
            </SplideSlide>
            <SplideSlide>
              <CardRight />
            </SplideSlide>
            <SplideSlide>
              <CardRight />
            </SplideSlide>
          </Splide>
          <div className="">
            <Image
            src={Shadow}
            alt="Shadow" 
            className="absolute top-20 left-0"
            
            />
            <Image
            src={Shadow_right}
            alt="Shadow_right" 
            className="absolute top-[75px] right-0"
            
            />
         
          </div>

        </div>
        {/* card slider end */}
        {/* card responsive */}
        <div className="w-full bg-white mt-5 shadow-sm rounded-2xl lg:hidden block">
          <h3 className="text-lg font-semibold text-gray-900 pl-6 pt-3">Saved listings</h3>
          <Splide options={{perPage:1, type:"loop", arrows: false, pagination:false}} className="py-8 savelist" >
            <SplideSlide>
              <CardRight className=" "/>
            </SplideSlide>
            <SplideSlide>
              <CardRight />
            </SplideSlide>
            <SplideSlide>
              <CardRight />
            </SplideSlide>
            <SplideSlide>
              <CardRight />
            </SplideSlide>
            <SplideSlide>
              <CardRight />
            </SplideSlide>
          </Splide>
          
        </div>
        {/* card responsive end */}

        {/* contact part end */}
      </Container>
    </section>
  );
};

export default BusinessProfile;
