export enum SelectedPage { // Renamed the enum
    "Home" = "home",
     Benefits = "benefits",
     ContactUs = "contactus",
     OurClasses = "ourclasses"
   }

   export interface BenfitType{
    icon:JSX.Element,
    title: string,
    description: string

   }

   export interface ClassType{
    name:string,
    description?:string,
    image:string
   }