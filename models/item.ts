export interface ItemModel {
    id?: string;
    name?: string;
    unitPrice?: number;
    categoryName?: string;
    imageUrl?: string;
    orderQuantity?: number;
    thumbnails?: {
        small?: string;
        medium?: string;
        large?: string;
    }
}
