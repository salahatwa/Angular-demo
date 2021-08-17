export class ContactForm {
    firstname?: string;
    lastname?: string;
    email?: string;
    gender?: string;
    isMarried?: boolean;
    country?: number;
    address?: Address;
}

export class Address {
    city?: string;
    street?: string;
    pincode?: string;
}