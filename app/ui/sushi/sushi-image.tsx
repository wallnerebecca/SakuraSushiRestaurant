import { Sushi } from '../lib/definitions';
import Image from "next/image";

export default function SushiImage({ sushi }: { sushi: Sushi}) {
    const imageUrl = sushi.info.img;
    const sushiName = sushi.name;

    return (
        <Image
            src={imageUrl}
            alt={sushiName}
            width={640}
            height={481}
            className={`w-full h-full object-cover block `}
        />
    )
}
