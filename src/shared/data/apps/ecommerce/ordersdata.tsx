
import React from 'react';
import { Grid, _ } from 'gridjs-react';
import { html } from 'gridjs';
import jpg1 from '../../../../assets/images/ecommerce/jpg/1.jpg';
import jpg2 from '../../../../assets/images/ecommerce/jpg/2.jpg';
import jpg3 from '../../../../assets/images/ecommerce/jpg/3.jpg';
import jpg4 from '../../../../assets/images/ecommerce/jpg/4.jpg';
import jpg5 from '../../../../assets/images/ecommerce/jpg/5.jpg';
import jpg6 from '../../../../assets/images/ecommerce/jpg/6.jpg';
import jpg7 from '../../../../assets/images/ecommerce/jpg/7.jpg';
import jpg10 from '../../../../assets/images/ecommerce/jpg/10.jpg';
import jpg11 from '../../../../assets/images/ecommerce/jpg/11.jpg';
import face1 from '../../../../assets/images/faces/1.jpg';
import face2 from '../../../../assets/images/faces/2.jpg';
import face3 from '../../../../assets/images/faces/3.jpg';
import face4 from '../../../../assets/images/faces/4.jpg';
import face5 from '../../../../assets/images/faces/5.jpg';
import face9 from '../../../../assets/images/faces/9.jpg';
import face10 from '../../../../assets/images/faces/10.jpg';
import face11 from '../../../../assets/images/faces/11.jpg';
import face13 from '../../../../assets/images/faces/13.jpg';
import face14 from '../../../../assets/images/faces/14.jpg';


interface dataType {
    id: number;
    orderId: string;
    src1: string;
    src2: string;
    product: string;
    customer: string;
    date: string;
    status: string;
    oldprice: string;
    newprice: string;
    color: string;
}

export const Ordertable: dataType[] = [
    { id: 1, orderId: "#139845", src1: jpg1, src2: face4, product: "Samsung Headset", customer: "Mayor Kelly", date: "10 Sep, 2024", status: "Completed", oldprice: "$854.00", newprice: "$545", color: "primary" },
    { id: 2, orderId: "#139845", src1: jpg2, src2: face2, product: "Purple color Ladies Bag", customer: "Andrew Garfield", date: "02 Aug, 2024", status: "Delivered", oldprice: "$643.00", newprice: "$1,276", color: "secondary" },
    { id: 3, orderId: "#139845", src1: jpg3, src2: face5, product: "Altra Pro Max Camera", customer: "Mirinda Hers", date: "06 jun, 2024", status: "Cancelled", oldprice: "$643.00", newprice: "$1,276", color: "danger" },
    { id: 4, orderId: "#139845", src1: jpg5, src2: face5, product: "Soft Wooden Sofa Set", customer: "Simon Cowel", date: "06 jun, 2024", status: "Pending", oldprice: "$125.00", newprice: "$18,653", color: "warning" },
    { id: 5, orderId: "#139845", src1: jpg4, src2: face4, product: "HP 120 RAM Laptop", customer: "Simon Cowel", date: "06 jun, 2024", status: "Pending", oldprice: "$125.00", newprice: "$18,653", color: "info" },
    { id: 6, orderId: "#139845", src1: jpg6, src2: face4, product: "Rose Flower Pot", customer: "Simon Cowel", date: "06 jun, 2024", status: "Cancelled", oldprice: "$125.00", newprice: "$18,653", color: "orange" },
    { id: 7, orderId: "#139845", src1: jpg11, src2: face4, product: "Jasmin Quekll Perfume", customer: "Simon Cowel", date: "06 jun, 2024", status: "Completed", oldprice: "$125.00", newprice: "$18,653", color: "primary" },
    { id: 8, orderId: "#139845", src1: jpg10, src2: face4, product: "Adidas Ladies Shoe", customer: "Simon Cowel", date: "06 jun, 2024", status: "Delivered", oldprice: "$125.00", newprice: "$18,653", color: "secondary" },
    { id: 9, orderId: "#139845", src1: jpg7, src2: face4, product: "LansKart Camera", customer: "Simon Cowel", date: "06 jun, 2024", status: "Cancelled", oldprice: "$125.00", newprice: "$18,653", color: "danger" },
    { id: 10, orderId: "#139845", src1: jpg2, src2: face4, product: "Baby School Bag", customer: "Simon Cowel", date: "06 jun, 2024", status: "Delivered", oldprice: "$125.00", newprice: "$18,653", color: "secondary" },
    { id: 11, orderId: "#139845", src1: jpg5, src2: face4, product: "Yellow Wooden Sofa Set", customer: "Simon Cowel", date: "06 jun, 2024", status: "Pending", oldprice: "$125.00", newprice: "$18,653", color: "warning" },
    { id: 12, orderId: "#139845", src1: jpg4, src2: face4, product: "Acer 6RAM Laptop", customer: "Simon Cowel", date: "06 jun, 2024", status: "Pending", oldprice: "$125.00", newprice: "$18,653", color: "info" },
]
export const Ordertabledata = [
    ['#SPK001', 'John Doe', face9, '$699.99', 'Pending', 'Pending', 'Visa Card', 'Jan 15, 2025, 09:45 AM', 'john.doe@example.com'],
    ['#SPK002', 'Jane Smith', face1, '$89.99', 'Shipped', 'Completed', 'MasterCard', 'Feb 3, 2025, 02:30 PM', 'jane.smith@example.com'],
    ['#SPK003', 'Michael Brown', face10, '$399.99', 'Delivered', 'Failed', 'PayPal', 'Mar 10, 2025, 11:15 AM', 'michael.brown@example.com'],
    ['#SPK004', 'Emily White', face2, '$129.99', 'Cancelled', 'Refunded', 'Apple Pay', 'Apr 5, 2025, 04:00 PM', 'emily.white@example.com'],
    ['#SPK005', 'Chris Johnson', face11, '$199.99', 'Shipped', 'Cancelled', 'COD', 'May 1, 2025, 10:30 AM', 'chris.johnson@example.com'],
    ['#SPK006', 'Sarah Lee', face3, '$149.99', 'Delivered', 'Refunded', 'MasterCard', 'Jun 10, 2025, 03:45 PM', 'sarah.lee@example.com'],
    ['#SPK007', 'David Green', face13, '$79.99', 'Delivered', 'Completed', 'PayPal', 'Jul 18, 2025, 01:00 PM', 'david.green@example.com'],
    ['#SPK008', 'Olivia Davis', face4, '$59.99', 'Pending', 'Pending', 'American Express', 'Aug 25, 2025, 12:30 PM', 'olivia.davis@example.com'],
    ['#SPK009', 'James Wilson', face14, '$59.99', 'Cancelled', 'Completed', 'Visa Card', 'Sep 5, 2025, 06:00 PM', 'james.wilson@example.com'],
    ['#SPK010', 'Sophia Martinez', face5, '$39.99', 'Shipped', 'Failed', 'COD', 'Oct 12, 2025, 08:15 AM', 'sophia.martinez@example.com']
];





type Row = {
    cells: {
        [key: number]: {
            data: string;
        };
    };
};

type Column = {
    id?: string;
    name?: string;
    formatter?: (cell: any, row: Row) => React.ReactNode;
};


const OrdersTable: React.FC<{
    paymentFilter: string;
    deliveryFilter: string;
    searchText: string;
}> = ({ paymentFilter, deliveryFilter, searchText }) => {

    const normalizedSearch = searchText.toLowerCase().trim();

    const filteredData = Ordertabledata.filter((row) => {
        const orderId = row[0].toLowerCase();
        const customerName = row[1].toLowerCase();
        const customerEmail = row[8].toLowerCase();
        const price = row[3].toLowerCase();
        const deliveryStatus = row[4].toLowerCase();
        const paymentStatus = row[5].toLowerCase();
        const paymentMethod = row[6].toLowerCase();

        // Delivery Status Filter
        const matchDelivery =
            deliveryFilter === "All Status" ||
            deliveryFilter === "Delivery Status" ||
            deliveryStatus === deliveryFilter.toLowerCase();

        // Payment Status Filter
        const matchPayment =
            paymentFilter === "All Status" ||
            paymentFilter === "Payment Status" ||
            paymentStatus === paymentFilter.toLowerCase();

        // Search Filter
        const matchSearch =
            orderId.includes(normalizedSearch) ||
            customerName.includes(normalizedSearch) ||
            customerEmail.includes(normalizedSearch) ||
            price.includes(normalizedSearch) ||
            deliveryStatus.includes(normalizedSearch) ||
            paymentStatus.includes(normalizedSearch) ||
            paymentMethod.includes(normalizedSearch);

        return matchDelivery && matchPayment && matchSearch;
    });
    const columns: Column[] = [
        {
            id: "#",
            name: "#",
            formatter: (_, row) => html(`<input class="form-check-input" type="checkbox" id="order-${row.cells[0].data}" value="" aria-label="...">`)
        },
        {
            name: 'Order ID',
            formatter: (_, row) => html(
                `<a to="#!" class="text-primary text-decoration-underline">${row.cells[0].data}</a>`  // Correctly map to Order ID (row[0])
            )
        },
        {
            name: 'Customer',
            formatter: (_, row) => html(
                `<a href="${import.meta.env.BASE_URL}apps/ecommerce/order-details/">
                        <div class="d-flex align-items-center gap-3 position-relative">
                            <div class="lh-1">
                                <span class="avatar avatar-md avatar-rounded">
                                    <img src="${row.cells[2].data}" alt="User Image">
                                </span>
                            </div>
                            <div>
                                <span class="d-block fw-semibold">${row.cells[1].data}</span>
                                <span class="text-muted fs-13">${row.cells[8].data}</span>
                            </div>
                        </div>
                    </a>`
            )
        },
        { name: 'Price' },
        {
            name: 'Delivery Status',
            formatter: (_, row) => html(
                `<span class="badge bg-${row.cells[4].data === 'Pending' ? 'warning' : row.cells[4].data === 'Shipped' ? 'info' : row.cells[4].data === 'Delivered' ? 'primary' : 'danger'}-transparent">${row.cells[4].data}</span>`
            )
        },
        {
            name: 'Payment Method',
            formatter: (_, row) => html(
                `${row.cells[6].data}`
            )
        },
        {
            name: 'Payment Status',
            formatter: (_, row) => html(
                `<span class="text-${row.cells[5].data === 'Pending' ? 'info' : row.cells[5].data === 'Completed' ? 'primary' : row.cells[5].data === 'Failed' ? 'orange' : row.cells[5].data === 'Refunded' ? 'warning' : 'danger'}">${row.cells[5].data}</span>`
            )
        },
        { name: 'Ordered Date' },
        {
            name: 'Actions',
            formatter: (_, rowIndex) => html(`
            <span class="custom-order-class active-btn-delete">
                    <a href="${import.meta.env.BASE_URL}apps/ecommerce/order-details/" class="btn btn-sm btn-primary-transparent me-1">
                      <i class="ri-eye-line"></i>
                    </a>
            <a class="btn btn-sm btn-danger-transparent btn-delete" data-index="${rowIndex}" href="javascript:void(0);">
                <i class="ri-delete-bin-line"></i>
            </a>
            </span>
          `)
        }
    ];

    return (
        <div className="table-responsive">
            <Grid
                columns={columns}
                data={filteredData}
                pagination={true}
                sort={true}
            />
        </div>
    );
};

export default OrdersTable;

export const StatusOptions = [
    { value: "Payment Status", label: "Payment Status" },
    { value: "All Status", label: "All Status" },
    { value: "Pending", label: "Pending" },
    { value: "Completed", label: "Completed" },
    { value: "Failed", label: "Failed" },
    { value: "Refunded", label: "Refunded" },
    { value: "Cancelled", label: "Cancelled" },
]
export const DeliveryOptions = [
    { value: "Delivery Status", label: "Delivery Status" },
    { value: "All Status", label: "All Status" },
    { value: "Pending", label: "Pending" },
    { value: "Shipped", label: "Shipped" },
    { value: "Delivered", label: "Delivered" },
    { value: "Cancelled", label: "Cancelled" },
]