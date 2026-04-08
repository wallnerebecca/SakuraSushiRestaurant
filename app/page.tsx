import { fetchRestaurant } from "./lib/api";
import { Restaurant } from "./lib/definitions";
import AddressCard from "./ui/address";
import SushiWrapper from "./ui/sushi/sushi-wrapper";
import DrinksWrapper from "./ui/drinks/drink-wrapper";
import { headers } from 'next/headers';
import Image from "next/image";

export default async function Overview() {
  const headersList = await headers();
  const url = `http://${headersList.get('host')}/sushis.json`;
  const restaurant: Restaurant = await fetchRestaurant(url);


  return (
    <div className="h-screen grid gap-1 grid-rows-[auto_auto_1fr_auto_auto] bg-zinc-50 font-sans py-8 px-4">
      <div className="row-start-1">
        <div className="flex items-center">
          <Image
            src={restaurant.img}
            alt={restaurant.name}
            width={100}
            height={100}
            className="object-cover block"
          />
          <h1 className="text-4xl font-bold text-pink-400">{restaurant.name}</h1>
        </div>
        <AddressCard address={restaurant.address} />
      </div>
      <div className="h-5 w-5 bg-gradient-to-b from-transparent via-black/50 to-black">

      </div>

      <div className="row-start-2">
        <h2 className="text-2xl font-bold">Sushi</h2>
      </div>

      <div className="row-start-3 overflow-auto">
        <SushiWrapper sushis={restaurant.offered_sushi} />
      </div>

      <div className="row-start-4">
        <h2 className="text-2xl font-bold">Drinks</h2>
      </div>

      <div className="row-start-5 overflow-x-auto">
        <DrinksWrapper drinks={restaurant.offered_drinks} />
      </div>
    </div>
  );
}
