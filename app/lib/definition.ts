export type Restaurant = {
    name: string;
    img: string;
    address: Address;
    offered_sushi: Sushi[];
    offered_drinks: Drink[];
};

export type Address = {
    street: string;
    city: string;
    country: {
        country_code: string;
        name: string;
    };
};

export type MenuItem = Sushi | Drink;

export type Sushi = {
    name: string;
    description: string;
    pieces: number;
    price: number;
    info: {
        in_stock?: boolean;
        vegetarian: boolean;
        allergens_contained_in?: string[];
        availableSince?: number;
        available_until?: string;
        img: string;
    };
    tags: string[];
};

export type Drink = {
    name: string;
    description: string;
    price: number;
    allergens?: string[];
    img: string;
};

