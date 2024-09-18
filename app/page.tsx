"use client";

import { isThenable } from "next/dist/client/components/router-reducer/router-reducer-types";
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
    counters: Array<number>;
  }
  interface HeroCounters {
    [counterName: string]: Array<Hero>;
  }
  const [selectedHeroes, setSelectedHeroes] = useState<HeroCounters>({});

  const counterObject: { [key: number]: Counter } = {
    1: {
      name: "Toxic Bullets",
      description: "",
      imagePath: "/assets/images/Toxic_Bullets.png",
      backgroundColor: "bg-weapon",
      itemType: "Weapon"
    },
    2: {
      name: "Warp Stone",
      description: "",
      imagePath: "/assets/images/Warp_Stone.png",
      backgroundColor: "bg-weapon",
      itemType: "Weapon"
    },
    3: {
      name: "Healbane",
      description: "",
      imagePath: "/assets/images/Healbane.png",
      backgroundColor: "bg-vitality",
      itemType: "Vitality"
    },
    4: {
      name: "Etheral Shift",
      description: "",
      imagePath: "/assets/images/Ethereal_Shift.png",
      backgroundColor: "bg-spirit",
      itemType: "Spirit"
    },
    5: {
      name: "Decay",
      description: "",
      imagePath: "/assets/images/Decay.png",
      backgroundColor: "bg-spirit",
      itemType: "Spirit"
    },
    6: {
      name: "Debuff Remover",
      description: "",
      imagePath: "/assets/images/Debuff_Remover.png",
      backgroundColor: "bg-vitality",
      itemType: "Vitality"
    },
    7: {
      name: "Rescue Beam",
      description: "",
      imagePath: "/assets/images/Rescue_Beam.png",
      backgroundColor: "bg-vitality",
      itemType: "Vitality"
    },
    8: {
      name: "Reactive Barrier",
      description: "",
      imagePath: "/assets/images/Reactive_Barrier.png",
      backgroundColor: "bg-vitality",
      itemType: "Vitality"
    },
    9: {
      name: "Soul Rebirth",
      description: "",
      imagePath: "/assets/images/Soul_Rebirth.png",
      backgroundColor: "bg-vitality",
      itemType: "Vitality"
    },
    10: {
      name: "Unstoppable",
      description: "",
      imagePath: "/assets/images/Unstoppable.png",
      backgroundColor: "bg-vitality",
      itemType: "Vitality"
    },
    11: {
      name: "Knockdown",
      description: "",
      imagePath: "/assets/images/Knockdown.png",
      backgroundColor: "bg-spirit",
      itemType: "Spirit"
    },
    12: {
      name: "Return Fire",
      description: "",
      imagePath: "/assets/images/Return_Fire.png",
      backgroundColor: "bg-vitality",
      itemType: "Vitality"
    },
    13: {
      name: "Metal Skin",
      description: "",
      imagePath: "/assets/images/Metal_Skin.png",
      backgroundColor: "bg-vitality",
      itemType: "Vitality"
    },
    14: {
      name: "Slowing Hex",
      description: "",
      imagePath: "/assets/images/Slowing_Hex.png",
      backgroundColor: "bg-spirit",
      itemType: "Spirit"
    },
    15: {
      name: "Silence Glyph",
      description: "",
      imagePath: "/assets/images/Silence_Glyph.png",
      backgroundColor: "bg-spirit",
      itemType: "Spirit"
    },
    16: {
      name: "Silencer",
      description: "",
      imagePath: "/assets/images/Silencer.png",
      backgroundColor: "bg-weapon",
      itemType: "Weapon"
    },
    17: {
      name: "Monster Rounds",
      description: "",
      imagePath: "/assets/images/Monster_Rounds.png",
      backgroundColor: "bg-weapon",
      itemType: "Weapon"
    },
    18: {
      name: "Debuff Reducer",
      description: "",
      imagePath: "/assets/images/Debuff_Reducer.png",
      backgroundColor: "bg-vitality",
      itemType: "Vitality"
    },
  }
  const arrayOfHeroes: Hero[] = [
    {
      id: 1,
      name: "Abrams",
      counters: [1, 3, 4, 5],
      imagePath: '/assets/images/heroes/Abrams_card.png',
    },
    {
      id: 2,
      name: "Bebop",
      counters: [4, 6],
      imagePath: '/assets/images/heroes/Bebop_card.png',
    },
    {
      id: 3,
      name: "Dynamo",
      counters: [4, 7, 8, 9, 10],
      imagePath: '/assets/images/heroes/Dynamo_card.png',
    },
    {
      id: 4,
      name: "Grey Talon",
      counters: [4, 6, 11],
      imagePath: '/assets/images/heroes/Grey_Talon_card.png',
    },
    {
      id: 5,
      name: "Haze",
      counters: [2,12,13],
      imagePath: '/assets/images/heroes/Haze_card.png',
    },
    {
      id: 6,
      name: "Infernus",
      counters: [1, 3, 5,6,14],
      imagePath: '/assets/images/heroes/Infernus_card.png',
    },
    {
      id: 7,
      name: "Ivy",
      counters: [1,2, 3, 5, 15],
      imagePath: '/assets/images/heroes/Ivy_card.png',
    },
    {
      id: 8,
      name: "Kelvin",
      counters: [1, 3, 4, 5,],
      imagePath: '/assets/images/heroes/Kelvin_card.png',
    },
    {
      id: 9,
      name: "Lady Geist",
      counters: [1, 3, 5,15,16],
      imagePath: '/assets/images/heroes/Lady_Geist_card.png',
    },
    {
      id: 10,
      name: "Lash",
      counters: [4,14,15,16],
      imagePath: '/assets/images/heroes/Lash_card.png',
    },
    {
      id: 11,
      name: "McGinnis",
      counters: [1, 3, 5,17],
      imagePath: '/assets/images/heroes/McGinnis_card.png',
    },
    {
      id: 12,
      name: "Mo & Krill",
      counters: [1, 3, 5,8, 14,15],
      imagePath: '/assets/images/heroes/Mo_&_Krill_card.png',
    },
    {
      id: 13,
      name: "Paradox",
      counters: [4],
      imagePath: '/assets/images/heroes/Paradox_card.png',
    },
    {
      id: 14,
      name: "Pocket",
      counters: [6,15,16,18],
      imagePath: '/assets/images/heroes/Pocket_card.png',
    },

  ];

  const handleHeroSelection = (singleHero: Hero) => {
    // Everytime a hero is clicked it should grab the icons as well
    // When a hero is selected map the counters instead
    const tempSelectedHeroes = { ...selectedHeroes };
    // first find the hero and remove it

    if (singleHero.counters) {
      // [1,2,3]
      singleHero.counters.forEach((counter: number) => {
        // {1: []}?
        if (tempSelectedHeroes[counter]) {
          if (tempSelectedHeroes[counter].find((element) => element.id === singleHero.id)) {
            tempSelectedHeroes[counter] = tempSelectedHeroes[counter].filter((filteredHero) => filteredHero.id !== singleHero.id)
          } else {
            tempSelectedHeroes[counter] = [...tempSelectedHeroes[counter], singleHero];
          }
        } else {
          tempSelectedHeroes[counter] = [singleHero];
        }

        tempSelectedHeroes[counter].length === 0 && delete tempSelectedHeroes[counter];
      })
    }
    setSelectedHeroes(tempSelectedHeroes)
  };

  const arrayOfCounterKeys = Object.keys(selectedHeroes);
  return (
    <div className="">
      <main className="flex flex-col items-center">
        <h1 className="font-serif">Select your opponents:</h1>
        <section className="flex flex-row flex-wrap gap-8 row-start-2 items-center sm:items-start">
          {arrayOfHeroes.map((singleHero: Hero) =>
            <Image
              className="transition duration-500 hover:scale-110 hover:bg-stone-400 hover:cursor-pointer"
              key={singleHero.id}
              src={singleHero.imagePath}
              alt="Next.js logo"
              width={180}
              height={38}
              priority
              onClick={() => handleHeroSelection(singleHero)}
            />
          )}
        </section>
        <table >
          <tbody className="flex flex-col gap-8 row-start-2 items-center sm:items-start m-2">

          {arrayOfCounterKeys.map((counterIndex: any, index) =>
            <tr key={counterIndex}>
              <th scope="row">
                <Image
                  className={`${counterObject[counterIndex].backgroundColor}`}
                  key={counterObject[counterIndex].backgroundColor}
                  src={counterObject[counterIndex].imagePath}
                  alt={`${counterObject[counterIndex].name}'s picture`}
                  width={100}
                  height={38}
                  priority
                />
              </th>
              {selectedHeroes[counterIndex].map((singleHero: Hero, index)=>
            <td key={singleHero.id + singleHero.name}> 
              <Image
              key={singleHero.id}
              src={singleHero.imagePath}
              alt={`Image for Item`}
              width={100}
              height={38}
              priority
            />
            </td>
            )}
            </tr>

          )}
          </tbody>
        </table>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
