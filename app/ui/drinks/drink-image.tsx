import { Drink } from '../lib/definitions';
import Image from "next/image";

export default function DrinkImage({ drink }: { drink: Drink}) {
    const imageUrl = drink.img;
    const drinkName = drink.name;

    return (
        <Image
            src={imageUrl}
            alt={drinkName}
            width={800}
            height={800}
            className="w-full h-full object-cover block items-center max-w-2xl"
        />
    )
}
