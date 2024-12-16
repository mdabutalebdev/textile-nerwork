import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
 import Image from "next/image"
import Code_blue from '../../assets/Code_blue.jpg'
import Shield_tick from '../../assets/shield_tick.svg'
import Edit_icon from '../../assets/edit_icon.svg'
import Update_plan from '../../assets/update_plan.svg'
import Button from "../ui/button"



const ProfileCard = () => {
  return (
    <Card className="bg-white border-none shadow-sm md:flex justify-between py-5">
   
     <div className="flex ml-4">
      
        <Image
           src={Code_blue}
           alt='Code_blue'
           className=''
        />
         
          
       <div className="mt-6 ml-4">
         <CardTitle className="font-normal text-xs sm:text-md text-brand-500">CodeBlue Clothing Pvt Ltd</CardTitle>
         <div className="flex">
         <Image
           src={Shield_tick}
           alt='Shield_tick'
           className=' '
        />
        <CardDescription className="font-semibold text-md pt-1 sm:text-2xl sm:leading-8 text-gray-900">Basic member</CardDescription>
        </div>
       </div>
       
       </div>
       
        <div className="flex gap-x-5 mt-5 mr-4 ml-2">
        <div className="relative w-full">
        <Button className="w-full text-xs md:text-sm font-normal leading-5 rounded-md md:w-[180px] h-[48px] text-gray-700 bg-white border border-gray-300"  type="submit">
        Edit profile
        <Image
           src={Edit_icon}
           alt='Edit_icon'
           className='absolute top-3 md:left-6 left-2'
        />
     </Button>
        </div>
     <div className="relative w-full">
     <Button className="w-full text-xs md:text-sm font-normal leading-5 rounded-md md:w-[180px] h-[48px] text-brand-600 bg-white border border-brand-300 pr-2"  type="submit">
     Upgrade plan
    
        
     </Button>
     <Image
           src={Update_plan}
           alt='Update_plan'
           className='absolute top-4 md:left-5 left-1'
        />
     </div>
        </div>
     
        
  </Card>
  
  )
}

export default ProfileCard  