"use client";

import Image from "next/image";
import { useState } from "react";


// import fs from 'fs';
// import path from 'path';


export default function Home() {
  interface Counter {
    name: string;
    description: string;
    imagePath: string;
    backgroundColor: string;
    itemType: string;
  }
  interface Hero {
    id: number;
    name: string;
    imagePath: string;
    counters: Array<number>
  }
  const [selectedHeroes, setSelectedHeroes] = useState<Hero[]>([]);
  // const imagesDir = path.join(process.cwd(), 'public/assets/images/heroes');
  // const filenames = fs.readdirSync(imagesDir);

  // const arrayOfHeroes = filenames.map((filename) => `/assets/images/heroes/${filename}`);
  const counterObject: {[key: number]: Counter} = {
    1: {
      name: "Toxic Bullets",
      description: "",
      imagePath: "/assets/images/Toxic_Bullets.png",
      backgroundColor: "weapon",
      itemType: "Weapon"
    },
    2: {
      name: "Warp Stone",
      description: "",
      imagePath: "/assets/images/Warp_Stone.png",
      backgroundColor: "weapon",
      itemType: "Weapon"
    },
    3: {
      name: "Healbane",
      description: "",
      imagePath: "/assets/images/Healbane.png",
      backgroundColor: "vitality",
      itemType: "Vitality"
    },
    4: {
      name: "Etheral Shift",
      description: "",
      imagePath: "/assets/images/Ethereal_Shift.png",
      backgroundColor: "spirit",
      itemType: "Spirit"
    },
  }
  const arrayOfHeroes: Hero[] = [
    {
      id: 1,
      name: "Abrams",
      counters: [1, 3, 4],
      imagePath: '/assets/images/heroes/Abrams_card.png',
    },
    {
      id: 2,
      name: "Bebop",
      counters: [4],
      imagePath: '/assets/images/heroes/Bebop_card.png',
    },
    {
      id: 3,
      name: "Dynamo",
      counters: [4],
      imagePath: '/assets/images/heroes/Dynamo_card.png',
    },
    {
      id: 4,
      name: "Grey Talon",
      counters: [4],
      imagePath: '/assets/images/heroes/Grey_Talon_card.png',
    },
    {
      id: 5,
      name: "Haze",
      counters: [2],
      imagePath: '/assets/images/heroes/Haze_card.png',
    },
    {
      id: 6,
      name: "Infernus",
      counters: [1, 3],
      imagePath: '/assets/images/heroes/Infernus_card.png',
    },

  ];

  const handleHeroSelection = (singleHero: Hero) => {
    // Everytime a hero is clicked it should grab the icons as well
    setSelectedHeroes((prev: Hero[]) => {
      const isHeroSelect = prev.find((element)=> element.id === singleHero.id)
      if(isHeroSelect){
        return prev.filter((hero)=> hero.id !== singleHero.id);
      }
      return [...prev, singleHero];
    }
    )
  };

  return (
    <div className="">
      <main className="flex flex-col items-center">
        <h1 className="font-serif">Select your opponents:</h1>
        <section className="flex flex-row gap-8 row-start-2 items-center sm:items-start">
          {arrayOfHeroes.map((singleHero: Hero) =>
            <Image
              className="transition duration-500 hover:scale-110 hover:bg-stone-400 hover:cursor-pointer"
              key={singleHero.id}
              src={singleHero.imagePath}
              alt="Next.js logo"
              width={180}
              height={38}
              priority
              onClick={()=>handleHeroSelection(singleHero)}
            />
          )}
        </section>
        <section className="flex flex-row gap-8 row-start-2 items-center sm:items-start">
          {selectedHeroes.map((singleHero: Hero, index) =>
          <>
            <Image
              className="transition duration-500 hover:scale-110 hover:bg-stone-400 hover:cursor-pointer"
              key={index}
              src={singleHero.imagePath}
              alt="Next.js logo"
              width={100}
              height={38}
              priority
            />
            {singleHero.counters.map((singleCounter: number, index)=>
            <div className={`bg-${counterObject[singleCounter].backgroundColor}`}> 
              <Image
              className={`transition duration-500 hover:scale-110 hover:bg-stone-400 hover:cursor-pointer `}
              key={index}
              src={counterObject[singleCounter].imagePath}
              alt="Next.js logo"
              width={100}
              height={38}
              priority
            />
            </div>
            )}
          </>

          )}
        </section>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
