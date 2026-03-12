import png2 from '../../../../assets/images/ecommerce/png/2.png';
import png3 from '../../../../assets/images/ecommerce/png/3.png';
import png11 from '../../../../assets/images/ecommerce/png/11.png';
import png12 from '../../../../assets/images/ecommerce/png/12.png';
import png13 from '../../../../assets/images/ecommerce/png/13.png';
import png14 from '../../../../assets/images/ecommerce/png/14.png';
import png15 from '../../../../assets/images/ecommerce/png/15.png';
import png16 from '../../../../assets/images/ecommerce/png/16.png';
import png17 from '../../../../assets/images/ecommerce/png/17.png';
import png18 from '../../../../assets/images/ecommerce/png/18.png';
import png19 from '../../../../assets/images/ecommerce/png/19.png';
import png22 from '../../../../assets/images/ecommerce/png/22.png';
import png24 from '../../../../assets/images/ecommerce/png/24.png';
import png25 from '../../../../assets/images/ecommerce/png/25.png';


export interface ProductInfoType {
    id: number;
    productpicture: string;
    title: string;
    status: string;
    imgclass: string;
    rating?: string;
    price: string;
    discount: string;
    discount1: string;
    discounttype: string;
    size: string;
    color: string;
    views: string;
    stock: string;
    stockColor: string;
    expDelivery: string;
    type?: string;
    orders?: string;
    quantity?: number;
    category: string;
    subImg: SubImage[]; // Array of sub-images
    droptext: string;
}

interface SubImage {
    sImg: string; // URL of the sub-image
    sImgColor: string
}
//E-commerce Master Data 
export const MasterData: ProductInfoType[] = [
    {
        id: 1,
        productpicture: png14,
        title: "Women's Luxury Sling Bag",
        status: "Elite Travel Collection",
        imgclass: "primary",
        price: "$180.00",
        discount: "$120",
        discount1: "24%",
        discounttype: "shipping",
        size: "Compact",
        color: "Grey",
        views: "",
        droptext: 'Black',
        stock: "In Stock",
        stockColor: "success",
        expDelivery: '2 Days',
        type: 'sim',
        category: 'Furniture',
        subImg: [
            { sImg: png15, sImgColor: 'bg-primary-transparent' },
            { sImg: png12, sImgColor: 'bg-secondary-transparent' },
            { sImg: png13, sImgColor: 'bg-success-transparent' },
            { sImg: png16, sImgColor: 'bg-info-transparent' },
        ]
    },
    {
        id: 2,
        productpicture: png15,
        title: "Lightweight Sneakers",
        status: "Urban Sports Gear",
        imgclass: "secondary",
        views: "23,123",
        droptext: 'Orange',
        price: "$200.00",
        discount: "$130",
        discount1: "75%",
        discounttype: "Merchant",
        size: "42",
        color: "Blue",
        stock: "Out Of Stock",
        expDelivery: '3 Days',
        stockColor: "danger",
        type: 'sim',
        category: 'Clothing',
        subImg: [
            { sImg: png15, sImgColor: 'bg-primary-transparent' },
            { sImg: png16, sImgColor: 'bg-secondary-transparent' },
            { sImg: png17, sImgColor: 'bg-success-transparent' },
            { sImg: png18, sImgColor: 'bg-info-transparent' },
        ]
    },
    {
        id: 3,
        productpicture: png11,
        title: "Samsung Head Set",
        status: "Samsong Electronics",
        imgclass: "danger",
        views: "35,586",
        droptext: 'Pink',
        price: "$320.00",
        discount: "$252",
        discount1: "92%",
        discounttype: "Merchant",
        size: "Large",
        color: "Red",
        stock: "In Stock",
        expDelivery: '2 Days',
        stockColor: "success",
        orders: 'Pending',
        type: 'sim',
        category: 'Accessories',
        subImg: [
            { sImg: png15, sImgColor: 'bg-primary-transparent' },
            { sImg: png2, sImgColor: 'bg-secondary-transparent' },
            { sImg: png3, sImgColor: 'bg-success-transparent' },
            { sImg: png14, sImgColor: 'bg-info-transparent' },
        ]
    },
    {
        id: 4,
        productpicture: png2,
        title: "Classic Wooden Sofa",
        status: "Alfaset Furniture",
        imgclass: "warning",
        views: "15,253",
        droptext: 'Green',
        price: "$2,254.00",
        discount: "$1,753",
        discount1: "35%",
        discounttype: "Merchant",
        size: "M",
        color: "Yellow",
        expDelivery: '4 Days',
        stock: "Out Of Stock",
        stockColor: "danger",
        type: 'sim',
        orders: 'Shipped',
        category: 'Decoration',
        subImg: [
            { sImg: png15, sImgColor: 'bg-primary-transparent' },
            { sImg: png2, sImgColor: 'bg-secondary-transparent' },
            { sImg: png3, sImgColor: 'bg-success-transparent' },
            { sImg: png14, sImgColor: 'bg-info-transparent' },
        ]
    },
    {
        id: 5,
        productpicture: png17,
        title: "Caremic Flower Pot",
        status: "Floaral Decor",
        imgclass: "info",
        views: "20,989",
        droptext: 'Black',
        price: "$320.00",
        discount: "$299",
        discount1: "25%",
        discounttype: "shipping",
        size: "500ML",
        color: "warning",
        expDelivery: '5 Days',
        stock: "In Stock",
        stockColor: "success",
        orders: 'cancelled',
        category: 'Accessories',
        subImg: [
            { sImg: png15, sImgColor: 'bg-primary-transparent' },
            { sImg: png2, sImgColor: 'bg-secondary-transparent' },
            { sImg: png3, sImgColor: 'bg-success-transparent' },
            { sImg: png14, sImgColor: 'bg-info-transparent' },
        ]
    },
    {
        id: 6,
        productpicture: png12,
        title: "Women's Luxury Sling Bag",
        status: "Elite Travel Collection",
        imgclass: "pink",
        droptext: 'Black',
        views: "22,989",
        price: "$350.00",
        stock: "Out Of Stock",
        stockColor: "danger",
        discount: "$340",
        discount1: "54%",
        discounttype: "Merchant",
        expDelivery: '3 Days',
        size: "Adjustable",
        color: "teal",
        orders: 'Shipped',
        category: 'Furniture',
        subImg: [
            { sImg: png15, sImgColor: 'bg-primary-transparent' },
            { sImg: png2, sImgColor: 'bg-secondary-transparent' },
            { sImg: png3, sImgColor: 'bg-success-transparent' },
            { sImg: png14, sImgColor: 'bg-info-transparent' },
        ]
    },
    {
        id: 7,
        productpicture: png16,
        title: "Classic Wireless Headset",
        status: "Queensen Electronics",
        imgclass: "warning",
        views: "10,252",
        droptext: 'Pink',
        price: "$820.00",
        discount: "$799",
        discount1: "43%",
        discounttype: "shipping",
        size: "Adjustable",
        color: "pink",
        expDelivery: '1 Days',
        stock: "In Stock",
        stockColor: "success",
        quantity: 2,
        orders: 'Pending',
        category: 'Electronics',
        subImg: [
            { sImg: png15, sImgColor: 'bg-primary-transparent' },
            { sImg: png2, sImgColor: 'bg-secondary-transparent' },
            { sImg: png3, sImgColor: 'bg-success-transparent' },
            { sImg: png14, sImgColor: 'bg-info-transparent' },
        ]
    },
    {
        id: 8,
        productpicture: png18,
        title: "Buen Alarm",
        status: "Elite Alarm Clock",
        imgclass: "primary",
        views: "10,989",
        droptext: 'Grey',
        price: "$319.00",
        discount: "$260",
        discount1: "37%",
        discounttype: "shipping",
        size: "M",
        color: "danger",
        stock: "Out Of Stock",
        expDelivery: '5 Days',
        stockColor: "danger",
        quantity: 2,
        orders: 'cancelled',
        category: 'Clothing',
        subImg: [
            { sImg: png15, sImgColor: 'bg-primary-transparent' },
            { sImg: png2, sImgColor: 'bg-secondary-transparent' },
            { sImg: png3, sImgColor: 'bg-success-transparent' },
            { sImg: png14, sImgColor: 'bg-info-transparent' },
        ]
    },
]
export const wishListData = [
    {
        id: 1,
        productpicture: png14,
        title: "Leather Ladies Bag",
        price: "$399",
        discount: "$234",
        color: "primary",
        stock: "In Stock",
        stockColor: 'primary'
    },
    {
        id: 2,
        productpicture: png15,
        title: "FusionStep Ladies Shoe",
        price: "$550",
        discount: "$456",
        color: "secondary",
        stock: "In Stock",
        stockColor: 'primary'
    },
    {
        id: 3,
        productpicture: png11,
        title: "Samsung Headset",
        price: "$1499",
        discount: "$1120",
        stock: "Out Of Stock",
        stockColor: 'danger',
        color: 'danger'
    },
    {
        id: 4,
        productpicture: png16,
        title: "Classic Wireless Headset",
        price: "$990",
        discount: "$780",
        stock: "In Stock",
        color: "warning",
        stockColor: 'primary'
    },
    {
        id: 5,
        productpicture: png17,
        title: "QuantumNote Flower Pot",
        price: "$35868",
        discount: "$34975",
        color: "info",
        stock: "In Stock",
        stockColor: 'primary'
    },
    {
        id: 6,
        productpicture: png12,
        title: "InfinityCarry Bag",
        price: "$245",
        discount: "$175",
        color: "pink",
        stock: "Out Of Stock",
        stockColor: 'danger'
    },
    {
        id: 7,
        productpicture: png18,
        title: "Elite Alarm Clock",
        price: "$560",
        discount: "$230",
        stock: "In Stock",
        color: "primary",
        stockColor: 'primary'
    },
    {
        id: 8,
        productpicture: png24,
        title: "Mens Smart Watch",
        price: "$230",
        discount: "$450",
        stock: "In Stock",
        color: "secondary",
        stockColor: 'primary'
    },
    {
        id: 9,
        productpicture: png19,
        title: "FusionStep Ladies Bag",
        price: "$1050",
        discount: "$780",
        stock: "Out Of Stock",
        color: "orange",
        stockColor: 'danger'
    },
    {
        id: 10,
        productpicture: png2,
        title: "Wooden Soft Sofa Set",
        price: "$660",
        discount: "$340",
        color: "warning",
        stock: "In Stock",
        stockColor: 'primary'
    },
    {
        id: 11,
        productpicture: png25,
        title: "CrystalLens Pro Camera",
        price: "$1680",
        discount: "$1350",
        stock: "In Stock",
        color: "info",
        stockColor: 'primary'
    },
    {
        id: 12,
        productpicture: png22,
        title: "Stylish Men's T-shirt",
        price: "$460",
        discount: "$320",
        color: "danger",
        stock: "Out Of Stock",
        stockColor: 'danger'
    },
]
export interface CartdataType {
    id: number;
    productpicture: string;
    title: string;
    discount1: string;
    price: string;
    discount: string;
    size: string;
    color: string;
    stock: string;
    class: string;
    stockColor: string;
    items: string;
    borderclass?: string;
}
export const Cartdata: CartdataType[] = [
    {
        id: 11,
        productpicture: png14,
        title: "Women's Luxury Sling Bag",
        discount1: "20",
        price: "$854.00",
        discount: "$545",
        size: "Compact",
        color: "Green",
        stock: "In Stock",
        class: 'primary',
        stockColor: "secondary",
        items: '2'
    },
    {
        id: 12,
        productpicture: png15,
        title: "Beautiful Adidas Shoe",
        price: "$100.00",
        discount1: "15%",
        discount: "$85",
        size: "42",
        color: "Blue",
        stock: "In Stock",
        class: 'secondary',
        stockColor: "secondary",
        items: '3'

    },
    {
        id: 13,
        productpicture: png11,
        title: "Samsung Galaxy Headset",
        price: "$160.00",
        discount1: "25%",
        discount: "$120",
        size: "Large",
        color: "Red",
        stock: "Out Of Stock",
        class: 'danger',
        stockColor: "danger",
        items: '1'

    },
    {
        id: 14,
        productpicture: png2,
        title: "Soft Wooden Sofa Set",
        price: "$50.00",
        discount1: "30%",
        discount: "$35",
        size: "M",
        color: "Yellow",
        stock: "In Stock",
        class: 'warning',
        stockColor: "secondary",
        items: '2',
        borderclass: 'border-bottom-0'

    }
]




