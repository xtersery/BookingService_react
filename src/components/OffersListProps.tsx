export interface OffersListProps {
    offers: OfferItem[];
    object: ObjectItem;
}

export interface OfferItem {
    price: string;
    start: string;
    end: string;
    company: string;
    flightNumber: string;
}

export interface ObjectItem {
    departure: string;
    destination: string;
    startDate: string;
    endDate: string;
    passenger: string;
    classDet: string;
}
