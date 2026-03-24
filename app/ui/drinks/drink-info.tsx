import { Dispatch, SetStateAction } from 'react';
import { Drink } from '../lib/definitions';
import DrinkImage from './drink-image';

export default function DrinkInfo({ drink, setHidden }: { drink: Drink, setHidden: Dispatch<SetStateAction<boolean>> }) {

    function hideModal() {
        setHidden(true);
    }

    return (
        <div className="z-1 absolute top-0 p-0 left-0 h-screen w-screen bg-white">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center bg-gray-100 min-h-15 text-lg  md:text-2xl">
                <div className="flex justify-start text-pink-400 font-semibold ">
                    <button
                        onClick={hideModal}
                        className="flex items-center gap-1 ml-2"
                    >
                        <span className="inline-block  w-3 h-3 border-t-2 border-l-2 border-pink-400 rotate-315 -translate-y-[1px]"></span>
                        More Sakura!
                    </button>
                </div>
                <h2 className="flex justify-center font-semibold">{drink.name}</h2>

            </div>
            <hr className="border-t border-gray-300"></hr>
            <div className="flex justify-center items-center">
                <div className=" rounded-2xl overflow-hidden m-2 max-w-2xl">
                    <DrinkImage drink={drink}
                    />
                </div>
            </div>
            <div className="grid justify-items-center max-h-15">
                <div className="flex flex-col items-center">
                    <span className="text-xl font-bold">{drink.price} USD</span>
                    <span className="text-sm font-bold text-gray-300">Price</span>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-5 p-2 w-full md:max-w-2xl">
                    <hr className="border-t border-gray-300"></hr>
                    <div className="font-semibold">
                        {drink.description}
                    </div>

                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-300">Allergens</span>
                        <span className="bg-orange-200 rounded-md px-4 py-2 mx-2 font-semibold">
                            {drink.allergens_contained_in && drink.allergens_contained_in.length > 0
                                ? drink.allergens_contained_in.join(', ')
                                : "Ask our Staff for Allergens."}
                            </span>
                    </div>
                </div>
            </div>
        </div>
    )
}