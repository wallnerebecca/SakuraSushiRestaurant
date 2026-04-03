import Image from "next/image";
import { MenuItem } from '../lib/definitions';
import { Sushi } from '../lib/definitions';

export default function ItemImage({ item }: { item: MenuItem}) {

    function isSushi(item: MenuItem): item is Sushi {
        return "info" in item;
    }

    const isSushiItem = isSushi(item);

    const src = isSushiItem ? item.info.img : item.img;

    const available = isSushiItem ? item.info.in_stock ?? true : true;

    const{ w, h} = isSushiItem
        ? { w:640, h:481 }
        : { w:800, h:800 };

    return (

        <Image
            src={src}
            alt={item.name}
            width={w}
            height={h}
            className={`w-full h-full block ${
                isSushiItem ? "object-cover" : "object-contain"
            } ${available ? "" : "grayscale"}`}
        />
    )
}
