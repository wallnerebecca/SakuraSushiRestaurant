'use client';

import { Sushi } from '../../lib/definitions';
import SushiInfo from './sushi-info';
import { useState } from 'react';
import Image from "next/image";
import ItemImage from "../item-image";

export default function SushiCard({ sushi }: { sushi: Sushi }) {
    const [hidden, setHidden] = useState(true);

    function showModal() {
        setHidden(false);
    }

    const available = (sushi.info.in_stock === undefined || sushi.info.in_stock)

    return (
        <>
            <div
                className="bg-pink-50 rounded-2xl shadow-sm overflow-hidden"
                onClick={showModal}
            >
                <div className="relative">
                    <ItemImage item={sushi} />
                    {available ? (
                        <div className="absolute bottom-3 right-3 bg-pink-400 text-white text-md font-semibold px-3 py-1 rounded-full">
                            {sushi.price_usd} USD
                        </div>
                    ):
                    (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/80 px-4 py-2 rounded-full text-sm font-medium">
                                Currently not available
                            </div>
                        </div>
                    )}
                </div>
                <div className={`flex justify-between font-semibold items-center p-4 ${available ? '' : 'line-through'}`}>
                    <h3 className="text-xl ">{sushi.name}</h3>
                    <span className="text-sm text-gray-500">{sushi.weight_grams}</span>
                </div>
            </div>
            <div className={hidden ? "hidden" : "block"}>
                <SushiInfo setHidden={setHidden} sushi={sushi}/>
            </div>
            </>
    )
}