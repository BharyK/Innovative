import React, { useEffect, useRef, useState, type ChangeEvent } from 'react';
import { Grid, html } from 'gridjs';
import Swal from 'sweetalert2';
import png11 from '../../../../assets/images/ecommerce/png/11.png';
import png12 from '../../../../assets/images/ecommerce/png/12.png';
import png14 from '../../../../assets/images/ecommerce/png/14.png';
import png15 from '../../../../assets/images/ecommerce/png/15.png';
import png16 from '../../../../assets/images/ecommerce/png/16.png';
import png17 from '../../../../assets/images/ecommerce/png/17.png';
import png18 from '../../../../assets/images/ecommerce/png/18.png';
import png19 from '../../../../assets/images/ecommerce/png/19.png';

const productsData = [
    ['SPK001', 'Leather Ladies Bag', png14, '$699.99', 'In Stock', 'Published', '120', 'Mar 12, 2025', 'fashion'],
    ['SPK002', 'Wireless Headset', png16, '$89.99', 'Out of Stock', 'Draft', '0', 'Mar 10, 2025', 'electronics'],
    ['SPK003', 'Adidas Men shoe', png15, '$399.99', 'In Stock', 'Published', '45', 'Mar 5, 2025', 'fashion'],
    ['SPK004', 'Money Plant', png17, '$129.99', 'In Stock', 'Published', '250', 'Mar 2, 2025', 'home'],
    ['SPK005', 'Pink Ladies Bag', png19, '$199.99', 'In Stock', 'Archived', '75', 'Feb 28, 2025', 'fashion'],
    ['SPK006', 'Samsung Headset', png11, '$149.99', 'Out of Stock', 'Draft', '0', 'Feb 25, 2025', 'electronics'],
    ['SPK007', 'Wool Ladies Bag', png12, '$79.99', 'In Stock', 'Published', '300', 'Feb 20, 2025', 'fashion'],
    ['SPK008', 'Alaram Clock', png18, '$59.99', 'In Stock', 'Published', '150', 'Feb 18, 2025', 'electronics'],
];

interface Props {
    search: string;
    category: string;
    status: string;
    stock: string;
    sortBy: string;
}

const Productlisttable: React.FC<Props> = ({ search, category, status, stock, sortBy }) => {

    const gridRef = useRef<HTMLDivElement>(null);

    const [customerData, setCustomerData] = useState(productsData);
    const [filteredData, setFilteredData] = useState(productsData);

    const gridInstanceRef = useRef<Grid | null>(null);

    // --------------------------------------------------------
    // 🔍 FILTERING + SORTING
    // --------------------------------------------------------
    useEffect(() => {
        let result = [...customerData];

        // SEARCH
        if (search) {
            const s = search.toLowerCase();
            result = result.filter(row =>
                row[0].toLowerCase().includes(s) ||   // ID
                row[1].toLowerCase().includes(s) ||   // Name
                row[8].toLowerCase().includes(s)      // Category
            );
        }

        // CATEGORY
        if (category && category !== "All Categories" && category !== "Categories") {
            result = result.filter(row => row[8].toLowerCase() === category.toLowerCase());
        }

        // STATUS
        if (status && status !== "All Status" && status !== "Status") {
            result = result.filter(row => row[5] === status);
        }

        // STOCK
        if (stock && stock !== "All Status" && stock !== "Stock") {
            result = result.filter(row => row[4] === stock);
        }

        // SORTING
        if (sortBy === "Price") {
            result.sort(
                (a, b) => parseFloat(a[3].slice(1)) - parseFloat(b[3].slice(1))
            );
        } else if (sortBy === "Product Name") {
            result.sort((a, b) => a[1].localeCompare(b[1]));
        } else if (sortBy === "Date Added") {
            result.sort(
                (a, b) => new Date(b[7]).getTime() - new Date(a[7]).getTime()
            );
        }

        setFilteredData(result);
    }, [search, category, status, stock, sortBy, customerData]);

    // --------------------------------------------------------
    // 🧱 GRID INITIALISATION + RENDER
    // --------------------------------------------------------
    useEffect(() => {
        if (!gridRef.current) return;

        if (gridInstanceRef.current) {
            gridInstanceRef.current.destroy();
        }

        const grid = new Grid({
            columns: [
                {
                    name: "#",
                    formatter: (_, row) =>
                        html(`<input type="checkbox" class="form-check-input" />`)
                },
                {
                    name: "Product ID",
                    formatter: (_, row) =>
                        html(`<a href="#">${row.cells[0].data}</a>`)
                },
                {
                    name: "Product Name",
                    formatter: (_, row) =>
                        html(`
                            <div class="d-flex align-items-center gap-3">
                                <span class="avatar avatar-md">
                                   <img src="${row.cells[2].data}" />
                                </span>
                                <div>
                                    <span class="fw-semibold">${row.cells[1].data}</span>
                                    <span class="text-muted fs-13 d-block">${row.cells[8].data}</span>
                                </div>
                            </div>
                        `)
                },
                "Price",
                {
                    name: "Stock Status",
                    formatter: (_, row) =>
                        html(
                            `<span class="badge bg-${row.cells[4].data === 'In Stock'
                                ? 'secondary'
                                : 'danger'
                            }-transparent">${row.cells[4].data}</span>`
                        )
                },
                "Quantity",
                {
                    name: "Status",
                    formatter: (_, row) =>
                        html(
                            `<span class="text-${row.cells[5].data === "Published"
                                ? "primary"
                                : row.cells[5].data === "Archived"
                                    ? "secondary"
                                    : "danger"
                            }">${row.cells[5].data}</span>`
                        )
                },
                "Date Added",
                {
                    name: "Actions",
                    formatter: (_, row, rowIndex) =>
                        html(`
                            <div class="d-flex align-items-center gap-2 flex-wrap active-btn-delete">
                            <button class="btn btn-sm btn-primary-transparent"> <i class="ri-eye-line"></i> </button>
                            <a class="btn btn-sm btn-danger-transparent btn-delete" data-index="${rowIndex}">
                                <i class="ri-delete-bin-line"></i>
                            </a>
                            </div>
                        `)
                }
            ],
            data: filteredData,
            pagination: true,
            sort: true
        });

        grid.render(gridRef.current);
        gridInstanceRef.current = grid;

        return () => grid.destroy();
    }, [filteredData]);

    // --------------------------------------------------------
    // 🗑 DELETE HANDLER
    // --------------------------------------------------------
    useEffect(() => {
        const handleDelete = (e: ChangeEvent<HTMLInputElement>) => {
            const btn = e.target.closest(".btn-delete");
            if (!btn) return;

            const index = parseInt(btn.dataset.index);

            Swal.fire({
                title: "Are you sure?",
                text: "This action cannot be undone.",
                icon: "warning",
                showCancelButton: true
            }).then((res) => {
                if (res.isConfirmed) {
                    const updated = [...customerData];
                    updated.splice(index, 1);
                    setCustomerData(updated);

                    Swal.fire("Deleted!", "Product removed.", "success");
                }
            });
        };

        document.addEventListener("click", handleDelete);
        return () => document.removeEventListener("click", handleDelete);
    }, [customerData]);

    return <div ref={gridRef}></div>;
};

export default Productlisttable;


export const CategoriesOptions = [
    { value: 'Categories', label: 'Categories' },
    { value: 'All Categories', label: 'All Categories' },
    { value: 'Electronics', label: 'Electronics' },
    { value: 'Fashion', label: 'Fashion' },
    { value: 'Home', label: 'Home' },
]
export const ProductlistStatusOptions = [
    { value: 'Status', label: 'Status' },
    { value: 'All Status', label: 'All Status' },
    { value: 'Published', label: 'Published' },
    { value: 'Draft', label: 'Draft' },
    { value: 'Archived', label: 'Archived' },
]
export const StackOptions = [
    { value: 'Stock', label: 'Stock' },
    { value: 'All Status', label: 'All Status' },
    { value: 'In Stock', label: 'In Stock' },
    { value: 'Out of Stock', label: 'Out of Stock' },
]
export const Productoptions = [
    { value: 'Sort By', label: 'Sort By' },
    { value: 'Date Added', label: 'Date Added' },
    { value: 'Price', label: 'Price' },
    { value: 'Product Name', label: 'Product Name' },
]

export const productlistcarddata = [
    {
        id: '1',
        title: 'Payment Success',
        text: '12,754',
        avatarclor: 'primary',
        svgIcon: `
    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"> <g> <rect fill="none" height="24" width="24"></rect> </g> <g> <g> <path d="M18.49,9.88l0.08-0.85l0.18-1.95l-1.9-0.43l-0.84-0.19l-0.44-0.74l-0.99-1.68L12.79,4.8L12,5.14L11.21,4.8 L9.42,4.03L8.43,5.71L7.99,6.45L7.15,6.64l-1.9,0.43l0.18,1.94l0.08,0.85l-0.56,0.65l-1.29,1.48l1.29,1.47l0.56,0.65l-0.08,0.85 l-0.18,1.96l1.9,0.43l0.84,0.19l0.44,0.74l0.99,1.67l1.78-0.77L12,18.85l0.79,0.34l1.78,0.77l0.99-1.68l0.44-0.74l0.84-0.19 l1.9-0.43l-0.18-1.95l-0.08-0.85l0.56-0.65l1.29-1.47l-1.29-1.47L18.49,9.88z M10.09,16.72l-3.8-3.81l1.48-1.48l2.32,2.33 l5.85-5.87l1.48,1.48L10.09,16.72z" opacity=".8" fill="#fff"></path> <path d="M23,11.99l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,11.99l2.44,2.79 l-0.34,3.7l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,11.99z M19.05,13.47l-0.56,0.65l0.08,0.85 l0.18,1.95l-1.9,0.43l-0.84,0.19l-0.44,0.74l-0.99,1.68l-1.78-0.77L12,18.85l-0.79,0.34l-1.78,0.77l-0.99-1.67l-0.44-0.74 l-0.84-0.19l-1.9-0.43l0.18-1.96l0.08-0.85l-0.56-0.65l-1.29-1.47l1.29-1.48l0.56-0.65L5.43,9.01L5.25,7.07l1.9-0.43l0.84-0.19 l0.44-0.74l0.99-1.68l1.78,0.77L12,5.14l0.79-0.34l1.78-0.77l0.99,1.68l0.44,0.74l0.84,0.19l1.9,0.43l-0.18,1.95l-0.08,0.85 l0.56,0.65l1.29,1.47L19.05,13.47z"></path> <polygon points="10.09,13.75 7.77,11.42 6.29,12.91 10.09,16.72 17.43,9.36 15.95,7.87"></polygon> </g> </g> </svg>`,
        percent: "0.19%",
        trend: "up"
    },
    {
        id: '2',
        title: 'Payment Cancelled',
        text: '895',
        avatarclor: 'secondary',
        svgIcon: ` <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                width="24px" fill="#000">
                <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
                <path
                    d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm5 11.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
                    opacity=".8" fill="#fff" />
                <path
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z" />
            </svg>`,
        percent: "1.23%",
        trend: "down"
    },
    {
        id: '3',
        title: 'Total Customers',
        text: '32854',
        avatarclor: 'danger',
        svgIcon: `
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
                height="24px" viewBox="0 0 24 24" width="24px" fill="#000">
                <g>
                    <rect fill="none" height="24" width="24" />
                </g>
                <g>
                    <g>
                        <path
                            d="M10,10h4c0.8,0,1.34-0.94,0.76-1.63c-0.87-1.04-0.26-2-0.26-2.37c0-0.41-0.24-0.77-0.62-0.92 c-0.29-0.12-0.55-0.31-0.75-0.54C12.96,4.33,12.58,4,12,4s-0.96,0.33-1.13,0.53c-0.2,0.24-0.46,0.42-0.75,0.54 C9.74,5.23,9.5,5.59,9.5,6c0,0.37,0.61,1.33-0.26,2.37C8.66,9.06,9.2,10,10,10z"
                            opacity=".8" fill="#fff" />
                        <path
                            d="M17.48,16.34C16.29,15.73,14.37,15,12,15c-2.37,0-4.29,0.73-5.48,1.34C6.2,16.5,6,16.84,6,17.22V18h12 v-0.78C18,16.84,17.8,16.5,17.48,16.34z"
                            opacity=".8" fill="#fff" />
                        <path
                            d="M18.39,14.56C16.71,13.7,14.53,13,12,13c-2.53,0-4.71,0.7-6.39,1.56C4.61,15.07,4,16.1,4,17.22V20h16v-2.78 C20,16.1,19.39,15.07,18.39,14.56z M18,18H6v-0.78c0-0.38,0.2-0.72,0.52-0.88C7.71,15.73,9.63,15,12,15 c2.37,0,4.29,0.73,5.48,1.34C17.8,16.5,18,16.84,18,17.22V18z" />
                        <path
                            d="M10,12c0.17,0,3.83,0,4,0c1.66,0,3-1.34,3-3c0-0.73-0.27-1.4-0.71-1.92C16.42,6.75,16.5,6.38,16.5,6 c0-1.25-0.77-2.32-1.86-2.77C14,2.48,13.06,2,12,2s-2,0.48-2.64,1.23C8.27,3.68,7.5,4.75,7.5,6c0,0.38,0.08,0.75,0.21,1.08 C7.27,7.6,7,8.27,7,9C7,10.66,8.34,12,10,12z M9.24,8.37C10.11,7.33,9.5,6.37,9.5,6c0-0.41,0.24-0.77,0.62-0.92 c0.29-0.12,0.55-0.31,0.75-0.54C11.04,4.33,11.42,4,12,4s0.96,0.33,1.13,0.53c0.2,0.24,0.46,0.42,0.75,0.54 C14.26,5.23,14.5,5.59,14.5,6c0,0.37-0.61,1.33,0.26,2.37C15.34,9.06,14.8,10,14,10h-4C9.2,10,8.66,9.06,9.24,8.37z" />
                    </g>
                </g>
            </svg>`,
        percent: "0.54%",
        trend: "up"
    },
    {
        id: '4',
        title: 'Total Orders',
        text: '52675',
        avatarclor: 'warning',
        svgIcon: `
        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
            height="24px" viewBox="0 0 24 24" width="24px" fill="#000">
            <g>
                <rect fill="none" height="24" width="24" />
            </g>
            <g>
                <g>
                    <polygon enableBackground="new" opacity=".8" fill="#fff"
                        points="4,7 20,7 20,3.98 4,4" />
                    <path d="M5,20h14V9H5V20z M9,12h6v2H9V12z"
                        enableBackground="new" opacity=".8" fill="#fff" />
                    <path
                        d="M20,2H4C3,2,2,2.9,2,4v3.01C2,7.73,2.43,8.35,3,8.7V20c0,1.1,1.1,2,2,2h14c0.9,0,2-0.9,2-2V8.7c0.57-0.35,1-0.97,1-1.69V4 C22,2.9,21,2,20,2z M19,20H5V9h14V20z M20,7H4V4l16-0.02V7z" />
                    <rect height="2" width="6" x="9" y="12" />
                </g>
            </g>
        </svg>`,
        percent: "0.16%",
        trend: "down"
    },
    {
        id: '5',
        title: 'Total Sellers',
        text: '435',
        avatarclor: 'info',
        svgIcon: ` <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                width="24px" fill="#000">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <circle cx="12" cy="8" opacity=".8" fill="#fff" r="2" />
                <path d="M12 15c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2z"
                    opacity=".8" fill="#fff" />
                <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2v1z" />
            </svg>`,
        percent: "0.29%",
        trend: "up"
    },
]