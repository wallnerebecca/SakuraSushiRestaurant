import { Sushi } from '../lib/definitions';
import SushiCard from './sushi-card';

export default function SushiWrapper({ sushis }: { sushis: Sushi[] }) {
    return (
        <div className="grid grid-col gap-4 md:grid-cols-2 xl:grid-cols-4">
            {sushis.map((sushi) => (
            <SushiCard key={sushi.name} sushi={sushi} />
        ))}
        </div>
    )
}

//flex flex-col gap-2