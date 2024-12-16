import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"
import Profile_pic from '../../assets/profilepic.jpg' 
import Button from "../ui/button"
import Love from '../../assets/love.svg'
import Star from '../../assets/star.svg'
import Loceation from '../../assets/loceation.svg'
 



const CardRight = () => {
  return (
    
    <Card className="w-full md:w-[505px]">
     
      <div className="flex">
      <CardHeader className="flex">
        <Image
           src={Profile_pic}
           alt='Profile_pic'
           className=' '
        />
        </CardHeader>
        <CardHeader className="">
        <CardTitle className="font-normal text-sm sm:text-md text-brand-500">Media & Marketing</CardTitle>
        <CardDescription className="font-semibold text-md sm:text-2xl sm:leading-8 text-gray-900">Caseworks Pte Ltd</CardDescription>
        </CardHeader>
        <div className="mr-5 mt-6 sm:ml-9 sm:mt-7 border border-brand-300 rounded-md h-9 w-9">
        <Image
           src={Love}
           alt='Love'
           className='mt-2  sm:mt-2 sm:ml-2 cursor-pointer'
        />
        </div>
      </div>
         
    {/* 1st btn start */}
    <CardContent className="flex gap-x-2 mr-2 w-full">
        
      <Button className="w-fulltext-sm font-normal leading-5 rounded-md md:w-[52px] h-[24px] text-gray-700 bg-white border border-gray-300"  type="submit">
      Fabric
     </Button>
      <Button className="w-full text-sm font-normal leading-5 rounded-md md:w-[42px]  h-[24px] text-gray-700 bg-white border border-gray-300"  type="submit">
      Yarn
     </Button>
      <Button className="w-full text-sm font-normal leading-5 rounded-md md:w-[66px]  h-[24px] text-gray-700 bg-white border border-gray-300"  type="submit">
      Washing
     </Button>
      <Button className="w-full text-sm font-normal leading-5 rounded-md md:w-[66px]  h-[24px] text-gray-700 bg-white border border-gray-300 hidden md:flex"  type="submit">
      Printing
     </Button>
      <Button className="w-full hidden sm:visible text-sm font-normal leading-5 rounded-md md:w-[66px]  h-[24px] text-gray-700 bg-white border border-gray-300 md:flex"  type="submit">
      Washin
     </Button>
    </CardContent>
    {/* 1st btn end */}


    {/* peragraph start */}
    <CardContent className="flex gap-x-2">
    <p className="text-gray-500 text-md font-normal leading-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
    </CardContent>
    {/* peragraph end */}


    {/* -------- */}
    <CardContent className="flex justify-between">
          <div className="flex">
                <Image
                src={Star}
                alt='Star'
                className='mr-1'
                />
                <span>4.9</span>
                <p className="text-gray-500 font-normal text-sm pl-2 mt-[2px]">202 reviews</p>
          </div>
          <div className="flex">
                <Image
                src={Loceation}
                alt='Loceation'
                className='mr-2'
                />
                <h3 className="text-md font-medium text-gray-900 leading-6">Singapore</h3>
          </div>
    </CardContent>
    {/* ----------- */}

     {/* last btn start */}
    <CardFooter className="flex gap-2">
    <Button className="w-full text-sm font-normal leading-5 rounded-md md:w-[224px] h-[40px] text-gray-700 bg-white border border-gray-300"  type="submit">
    View Profile
     </Button>
    <Button className="w-full text-sm font-normal leading-5 rounded-md md:w-[224px] h-[40px] text-brand-600 bg-white border border-brand-300"  type="submit">
    Contact supplier
     </Button>
    </CardFooter>
    {/* last btn end */}
  </Card> 
  )
}

export default CardRight
  