import { Address } from '../lib/definitions';

export default function AddressCard({ address }: { address: Address; }) {
    return (
        <h1 className="text-sm">{address.street}, {address.city}, {address.country.name}</h1>
    );
}