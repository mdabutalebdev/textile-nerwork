import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { Checkbox } from "@/components/ui/checkbox"


  
  
  export function AccordionDemo() {

    const byCategory = ["All category","Manufacturing","Retail","Machinery","Dyeing","Trading/Buying","Advisor/Consultant","Media/Publications","Certifications","Trading/Buying","Advisor/Consultant","Media/Publications","Certifications","Solution","Others",]
    const byType = ["All Types","Raw","Yarn","Fabric","Dyeing","Washing","Apparel","Printing","Embroidery","Trims & Accessories","Knitting","Chemical","Outwear","Sportswear","Nightwear","Sweater","Jacket","Cap","Woven","Denim","Home Textile",]
    const byCertifications = ["Small (Below 1000 Manpower)","Medium (1000-10000 Manpower)","Large (Above 10000 Manpower)"]
    const byCompliance = ["Sedex","Eokotex","Leed Gold","Leed Platinum","Green","Disney","Bluesign","ZDHC","REACH","OCS","FWF","RCS","C2C","ISO","RDS","Higg","WRAP",]
    return (
        <Accordion type="single" collapsible className="">
          {/* item one start */}
        <AccordionItem value="item-1" className="w-[300px]">
          <AccordionTrigger className="bg-white hover:no-underline text-sm font-semibold text-gray-900 leading-5">By Category</AccordionTrigger>
          {
              byCategory.map((el, idx) => {
                return (
                    // <SelectItem key={idx} value={el} className="">{el}</SelectItem>
                    <AccordionContent className="text-sm font-medium text-gray-600 leading-5 ml-5" key={idx} value={el} >
                    <Checkbox label={el} className="p-2"/>
                  </AccordionContent>
              )
              })
          }
          
        </AccordionItem>
        {/* item one end */}


        {/* item two start */}
        <AccordionItem value="item-2" className="w-[300px]">
          <AccordionTrigger className=" bg-white hover:no-underline text-sm font-semibold text-gray-900 leading-5">By Type</AccordionTrigger>

          {
              byType.map((el, idx) => {
                return (
                    // <SelectItem key={idx} value={el} className="">{el}</SelectItem>
                    <AccordionContent className="text-sm font-medium text-gray-600 leading-5 ml-5" key={idx} value={el} >
                    <Checkbox label={el} className="p-2"/>
                  </AccordionContent>
              )
              })
         
          }
         
        </AccordionItem>
        {/* item two end */}
        {/* item three start */}
        <AccordionItem value="item-3" className="w-[300px]">
          <AccordionTrigger className="bg-white hover:no-underline text-sm font-semibold text-gray-900 leading-5">By Certifications</AccordionTrigger>
          {
              byCertifications.map((el, idx) => {
                return (
                    // <SelectItem key={idx} value={el} className="">{el}</SelectItem>
                    <AccordionContent className="text-sm font-medium text-gray-600 leading-5 ml-5" key={idx} value={el} >
                    <Checkbox label={el} className="p-2"/>
                  </AccordionContent>
              )
              })
         
          }
          
        </AccordionItem>
        {/* item three end */}
        {/* item four start */}
        <AccordionItem value="item-4" className="w-[300px]">
          <AccordionTrigger className="bg-white hover:no-underline text-sm font-semibold text-gray-900 leading-5">By Compliance</AccordionTrigger>
          {
              byCompliance.map((el, idx) => {
                return (
                    // <SelectItem key={idx} value={el} className="">{el}</SelectItem>
                    <AccordionContent className="text-sm font-medium text-gray-600 leading-5 ml-5" key={idx} value={el} >
                    <Checkbox label={el} className="p-2"/>
                  </AccordionContent>
              )
              })
         
          }
          
        </AccordionItem>
        {/* item four end */}
      </Accordion>
 
    )
  }
   