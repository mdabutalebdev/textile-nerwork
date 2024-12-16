import React from 'react'
import { Container } from '../shared'
import { AccordionDemo } from './accordiondemo'
import { SelectCountry } from './selectcountry'
import Image from 'next/image'
import Delete_icon from '../../assets/delete_icon.svg'
import Cross from '../../assets/cross.svg'
 


const FilterLeft = ({onClick}) => {
  return (
        
         <Container>
         <div className="border bg-white border-gray-300 w-[305px] rounded-lg">
          <div className="flex justify-between p-5 border-b border-gray-300">
              <div className="flex gap-x-12">
                 <div onClick={onClick}  className="">
                 <Image
               src={Cross}
               alt={Cross}
               className='mr-2 cursor-pointer lg:hidden h-4 w-4 mt-1'
               />
                 </div>
                <h3 className='text-gray-900 text-lg font-semibold leading-7'>Filter</h3>
              </div>
              <div className="flex ">
               <Image
               src={Delete_icon}
               alt={Delete_icon}
               className='mr-2 cursor-pointer z-999'
               />
              <h3 className='text-brand-500 text-sm font-semibold pt-[5px] cursor-pointer'>Clear all</h3>
              </div>

          </div>
           <div className="py-4 border-b border-gray-300 w-[280px] ml-3">
            <label className='text-sm font-semibold text-gray-900 leading-5 mt-10 ml-3'>By Country</label>

           <SelectCountry 
           
           className={`bg-gray-100 w-[278px] h-11`}
           /> 
            </div> 
           <AccordionDemo
          
           />
         </div>
         </Container>
      
  )
}

export default FilterLeft