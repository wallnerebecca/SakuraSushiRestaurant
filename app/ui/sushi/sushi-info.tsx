//"use client";
import { Dispatch, SetStateAction } from 'react';
import { Sushi } from "@/app/lib/definitions";
import ItemImage from "@/app/ui/item-image";

export default function SushiInfo({ sushi, setHidden }: { sushi: Sushi, setHidden: Dispatch<SetStateAction<boolean>>; }) {

    function hideModal() {
        setHidden(true);
    }

    const availableSince = new Date(sushi.info.availableSince);
    const availableUntil = new Date(sushi.info.available_until);

    return (
        <div className="z-1 absolute top-0 p-0 left-0 h-screen w-screen bg-white">
            <div className="grid grid-cols-[1fr_auto_1fr] pt-2 bg-gray-100">
                <div className="flex justify-start pl-1 text-pink-400 font-semibold text-lg">
                    <button onClick={hideModal}>
                        <span className="inline-block w-3 h-3 border-t-2 border-l-2 border-pink-400 rotate-315 -translate-y-[1px]"></span>
                        More Sakura!
                    </button>
                </div>
                <h2 className="flex justify-center text-lg font-semibold">{sushi.name}</h2>

            </div>
            <hr className="border-t border-gray-300"></hr>
            <div className="rounded-2xl overflow-hidden m-2">
                <ItemImage item={sushi} />
            </div>

            <div className="grid grid-cols-3 justify-items-center">
                <div className="flex flex-col items-center">
                    <span className="text-xl font-bold">{sushi.pieces}</span>
                    <span className="text-sm font-bold text-gray-300">Pieces</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-xl font-bold">{sushi.price} €</span>
                    <span className="text-sm font-bold text-gray-300">Price</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-xl font-bold">{sushi.info.vegetarian ? "yes" : "no"}</span>
                    <span className="text-sm font-bold text-gray-300">Vegetarian</span>
                </div>
            </div>

            <div className="flex flex-col gap-5 p-2">
                <hr className="border-t border-gray-300"></hr>
                <div className="font-semibold">
                    {sushi.description}
                </div>
                {sushi.tags && sushi.tags > 0 ? (
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-300">Special ingredients</span>
                        <span className="font-semibold">
                            {sushi.tags?.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1)).join(', ') || ''}
                        </span>
                    </div>) : ""}

                <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-300">Allergens</span>
                    <span className="bg-pink-200 rounded-md px-4 py-2 mx-2 font-semibold">
                        {sushi.info.allergens_contained_in && sushi.info.allergens_contained_in.length > 0
                            ? sushi.info.allergens_contained_in.join(', ')
                            : "Ask our Staff for Allergens."}
                    </span>
                </div>

                {/* Leider habe ich hier beim newDate() einen Fehler bekommen.
                 Habe einiges versucht ihn aber nicht beheben können.

                    Uncaught Error: Hydration failed because the server rendered text didn't match the client.
                    As a result this tree will be regenerated on the client.
                    This can happen if a SSR-ed Client Component used:
                        - A server/client branch `if (typeof window !== 'undefined')`.
                        - Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
                        - Date formatting in a user's locale which doesn't match the server.
                        - External changing data without sending a snapshot of it along with the HTML.
                        - Invalid HTML tag nesting.
                 */}

                {sushi.info.availableSince ? (
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-300">Available Since</span>
                        <span className="font-semibold">{availableSince.toLocaleDateString()}</span>
                    </div>) : ""}
                {sushi.info.available_until ? (
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-300">Available Until</span>
                        <span className="font-semibold">{availableUntil.toLocaleDateString()}</span>
                    </div>) : ""}
            </div>


        </div>
    );
}