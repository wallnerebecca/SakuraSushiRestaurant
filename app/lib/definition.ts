export type Restaurant = {
name: string;
address: Address;
offered_sushis: Sushi[];
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

export type Sushi = {
    name: string;
    description: string;
    weight_grams: number;
    price_usd: number;
    info: {
        in_stock: boolean;
        vegetarian: boolean;
        allergens_contained_in: string[];
        availableSince: number;
        available_until: string;
        img: string;
    };
    tags: string[];
};

export type Drink = {
    name: string;
    description: string;
    price: number;
    allergens: string[];
    img: string;
};