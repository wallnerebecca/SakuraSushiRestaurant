'use client';
import { useState } from 'react';
import { Drink } from "@/app/lib/definitions";
import Image from "next/image";
import DrinkInfo from "./drink-info";
import ItemImage from "@/app/ui/item-image";

export default function DrinkCard({ drink }: { drink: Drink; }) {
    const [hidden, setHidden] = useState(true);

    function showModal() {
        setHidden(false);
    }

    return (
        <>
            <div className="min-w-30 max-w-60"
                onClick={showModal}
            >
                <div className="rounded-lg overflow-hidden">
                    <ItemImage item={drink} />
                </div>

                <div className="mt-2">
                    <h3 className="text-sm font-semibold">{drink.name}</h3>
                </div>
            </div>
            <div className={hidden ? "hidden" : "block"}>
                <DrinkInfo setHidden={setHidden} drink={drink} />
            </div>
        </>
    );
}