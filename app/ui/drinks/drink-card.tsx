'use client';
import { useState } from 'react';
import { Drink } from '../lib/definitions';
import Image from "next/image";
import DrinkInfo from "./drink-info";

export default function DrinkCard({ drink }: { drink: Drink }) {
    const [hidden, setHidden] = useState(true);

    function showModal() {
        setHidden(false);
    }
    return (
        <>
            <div className="min-w-30 max-w-60"
                onClick={showModal}
            >
                <Image
                    src={drink.img}
                    alt={drink.name}
                    width={800}
                    height={800}
                    className="rounded-lg"
                />
                <div className="mt-2">
                    <h3 className="text-sm font-semibold">{drink.name}</h3>
                </div>
            </div>
            <div className={hidden ? "hidden" : "block"}>
                <DrinkInfo setHidden={setHidden} drink={drink}/>
            </div>
        </>
    )
}