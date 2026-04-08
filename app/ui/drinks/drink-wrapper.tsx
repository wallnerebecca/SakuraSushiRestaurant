import { Drink } from "@/app/lib/definitions";
import DrinkCard from './drink-card';

export default function DrinksWrapper({ drinks }: { drinks: Drink[]; }) {
    return (
        <div className="flex gap-2">
            {drinks.map((drink) => (
                <DrinkCard key={drink.name} drink={drink} />
            ))}
        </div>
    );
}