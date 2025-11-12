COMPLETE_CODE.md  # Complete Project Files

All remaining code files for the alx-project-0x00 Next.js project.

## File: components/Card.tsx

```typescript
import Image from "next/image";
import React from "react";
import Pill from "./Pill";

const Card: React.FC = () => {
  return (
    <div className="h-[422px] w-[378.56px] cursor-pointer hover:shadow-md hover:rounded-lg ">
      <div className="bg-gray-300 rounded-lg h-[299.37px] w-full"></div>
      <div className="p-2 flex gap-2 mt-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className=" font-semibold text-[22px]">Villa Arrecife Beach House</h3>
          <p className=" font-medium text=[17px] text-[#929292]">Sideman, Bali, Indonesia</p>
        </div>
        <div className="flex items-center">
          <p className=" font-medium text=[17px] ml-2">4.76</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className=" grid grid-cols-3 border w-[156px] rounded-full px-2 py-1">
          <div className="flex items-center">
            <p className="ml-1 text-[12.95px] font-medium">4</p>
          </div>
          <div className="flex items-center">
            <p className="ml-1 text-[12.95px] font-medium">2</p>
          </div>
          <div className="flex items-center">
            <p className="ml-1 text-[12.95px] font-medium">2-4</p>
          </div>
        </div>
        <p className=" text-[22px] font-semibold">$2,450<span className=" text-[14px] text-[#787878]">/n</span></p>
      </div>
    </div>
  )
}

export default Card;
```

## File: components/Button.tsx

```typescript
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`${styles} px-6 py-2 font-medium transition-all`}>
      {title}
    </button>
  )
}

export default Button;
```

## File: pages/index.tsx

```typescript
const Home: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
      <h1>Airbnb Application Clone system</h1>
      <button className=" border px-3 py-1 text-lg mt-3  bg-blue-500 text-white rounded-full">Get Started</button>
    </main>
  )
}

export default Home;
```

## File: pages/landing.tsx

```typescript
import Card from "@/components/Card";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
    </div>
  )
}

export default Landing;
```

## File: pages/about.tsx

```typescript
const About: React.FC =  () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">About Page</h1>
    </div>
  )
}

export default About;
```
