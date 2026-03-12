interface orderHeader {
    header: string;
}

export const orderHeader: orderHeader[] = [
    {
        header: 'Item'
    },
    {
        header: 'Category'
    },
    {
        header: 'Tracking ID'
    },
    {
        header: 'Price'
    },
    {
        header: 'Color'
    },
    {
        header: 'Quantity'
    },
    {
        header: 'Total Price'
    },
]

interface orderData {
    name: string;
    category: string;
    trackingId: string;
    price: string;
    color: string;
    quantity: number;
    totalPrice: string;
    imageUrl: string;
    brand: string;
    badge: string;
}

export const orderData: orderData[] = [
    {
        name: 'Alarm Clock',
        category: 'Electronics',
        trackingId: 'SPK1218153635',
        price: '1,249',
        color: 'Navy Blue',
        quantity: 1,
        totalPrice: '1,249',
        imageUrl: '/assets/images/ecommerce/jpg/3.jpg',
        brand: 'Dolce & Gabbana',
        badge: 'bg-primary-transparent'
    },
    {
        name: 'Ladies Stylish Shoe',
        category: 'Footwear',
        trackingId: 'SPK3789423789',
        price: '499',
        color: 'Orange',
        quantity: 2,
        totalPrice: '998',
        imageUrl: '/assets/images/ecommerce/jpg/9.jpg',
        brand: 'Adidas',
        badge: 'bg-secondary-transparent'
    },
    {
        name: 'ComfortSeat Wooden Sofa',
        category: 'Furniture',
        trackingId: 'SPK1120324532',
        price:' 799',
        color: 'Light Green',
        quantity: 1,
        totalPrice: '799',
        imageUrl: '/assets/images/ecommerce/jpg/2.jpg',
        brand: 'Reformation',
        badge: ' bg-success-transparent'
    },
    {
        name: 'ComfortWalk Ultra Men\'s Shoe',
        category: 'Footwear',
        trackingId: 'SPK1120324532',
        price: '799',
        color: 'Purple',
        quantity: 1,
        totalPrice: '799',
        imageUrl: '/assets/images/ecommerce/jpg/6.jpg',
        brand: 'Urban Outfitters',
        badge: 'bg-info-transparent'
    },
    {
        name: 'Red Flower Pot',
        category: 'Decoration',
        trackingId: 'SPK1120324532',
        price: '799',
        color: 'Yellow',
        quantity: 1,
        totalPrice: '799',
        imageUrl: '/assets/images/ecommerce/jpg/8.jpg',
        brand: 'Patagonia',
        badge: 'bg-warning-transparent'
    }
];

interface cartSummary {
    label: string;
    value: string
}

export const cartSummary: cartSummary[] = [
    { label: 'Total Items', value: '06' },
    { label: 'Applied Coupon', value: `<span class="badge bg-success-transparent">SP0578A</span>` },
    { label: 'Delivery Fees', value: '<span class="text-danger">+$29</span>' },
    { label: 'Sub Total', value: '<span class="fs-14 fw-medium">$3,799</span>' },
    { label: 'Total Price', value: '<span class="fs-16 fw-semibold">$3,129</span>' }
];



export const Address:cartSummary[] = [
    { label: 'Address Line', value: ' 14 Angle colony' },
    { label: 'Flat/Building Name', value: 'srinivas Nivas' },
    { label: 'District Name', value: 'Hyderabad' },
    { label: 'State Name', value: 'Telangana' },
    { label: 'Pincode', value: '535124' }
];
export const Details:cartSummary[] = [
    { label: 'Full Name', value: 'Lucas Hayes' },
    { label: 'Email Id', value: '<span class="fs-14 fw-medium text-primary text-decoration-underline">lucas123&#64;gmail.com</span>' },
    { label: 'Phone Number', value: '+12764845456' },
    { label: 'Available Time', value: '9:00 AM - 6:00 PM' },
    { label: 'Billing Adress', value: 'sr nagar,Vizag,535124' }
];