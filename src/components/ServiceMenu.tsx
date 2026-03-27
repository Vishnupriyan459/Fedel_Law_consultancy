"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { url } from "inspector";
import { Link } from "react-router-dom";

const content = [
  {
    label: "Property & Real Estate",
    service: [
      "Title verification",
      "Property disputes",
      "Partition, injunction, and possession suits",
      "Builder-Buyer disputes",
      "Property documentation",
    ],
    url:"property-real-estate"
  },
  {
    label: "Matrimonial & Family Law",
    service: [
      "Divorce matters",
      "Child custody",
      "Maintenance claims",
      "Domestic violence",
      "Family settlements",
    ],
    url:"matrimonial-family-law"
  },
  {
    label: "Criminal Law Services",
    service: [
      "Criminal trials",
      "Bail matters",
      "PMLA defence",
      "FEMA cases",
      "GST & Taxation Opinions",
    ],
    url:"criminal-law"
  },
  {
    label: "Consumer Cases",
    service: [
      "Consumer complaints",
      "Service deficiency",
      "Unfair trade claims",
      "Insurance disputes",
      "Consumer appeals",
    ],
    url:"consumer-protection"
  },
  {
    label: "Pan-India Representation",
    service: [
      "Nationwide litigation",
      "Trial court cases",
      "High court matters",
      "Tribunal representation"
    ],
    url:"pan-india-representation"
  },
  { label: "Other service", 
    service: ["Legal Opinions","FEMA Opinions","PMLA Opinions"],
    url:"other-services" 
  },
  
];
const ServiceMenu = () => {
  return (
    <NavigationMenu className="relative ">
      <NavigationMenuList>
        <NavigationMenuItem className="">
          <NavigationMenuTrigger className="
bg-transparent 
hover:bg-transparent 
focus:bg-transparent 
data-[state=open]:bg-transparent 
shadow-none border-none 
font-sans lg:text-[10px] xl:text-sm 
text-primary-foreground/80 
hover:text-gold 
focus:text-gold 
data-[state=open]:text-gold 
transition-colors duration-200
">
            Legal Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="lg:w-[600px] xl:w-[800px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:gap-6 border border-gold/10 bg-white p-6 rounded mt-2 bg-cream bg-opacity-50"  >
            {content.map((item) => (
              <div key={item.label} className="lg:p-3 xl:p-4">
                <h3 className="font-semibold lg:text-sm xl:text-md hover:text-gold mb-2 cursor-pointer">
                  <Link to={`/services/${item.url}`}>{item.label}</Link>
                  
                </h3>
                <ul className="space-y-1">
                  {item.service?.map((service) => (
                    <li
                      key={service}
                      className="lg:text-[10px] xl:text-xs text-black opacity-50 hover:text-gold transition-colors"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ServiceMenu;
