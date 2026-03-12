import type { ReactNode } from "react"

const Dashboardicon = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="m9 22l-.251-3.509a3.259 3.259 0 1 1 6.501 0L15 22" /><path d="M2.352 13.214c-.354-2.298-.53-3.446-.096-4.465s1.398-1.715 3.325-3.108L7.021 4.6C9.418 2.867 10.617 2 12.001 2c1.382 0 2.58.867 4.978 2.6l1.44 1.041c1.927 1.393 2.89 2.09 3.325 3.108c.434 1.019.258 2.167-.095 4.464l-.301 1.96c-.5 3.256-.751 4.884-1.919 5.856S16.554 22 13.14 22h-2.28c-3.415 0-5.122 0-6.29-.971c-1.168-.972-1.418-2.6-1.918-5.857z" /></g></svg>

const Appsicon = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 18c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C3.689 14 4.46 14 6 14s2.31 0 2.876.347c.317.194.583.46.777.777C10 15.689 10 16.46 10 18s0 2.31-.347 2.877c-.194.316-.46.582-.777.776C8.311 22 7.54 22 6 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C2 20.31 2 19.54 2 18m12 0c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C15.689 14 16.46 14 18 14s2.31 0 2.877.347c.316.194.582.46.776.777C22 15.689 22 16.46 22 18s0 2.31-.347 2.877a2.36 2.36 0 0 1-.776.776C20.31 22 19.54 22 18 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C14 20.31 14 19.54 14 18M2 6c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C3.689 2 4.46 2 6 2s2.31 0 2.876.347c.317.194.583.46.777.777C10 3.689 10 4.46 10 6s0 2.31-.347 2.876c-.194.317-.46.583-.777.777C8.311 10 7.54 10 6 10s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.777C2 8.311 2 7.54 2 6m12 0c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C15.689 2 16.46 2 18 2s2.31 0 2.877.347c.316.194.582.46.776.777C22 3.689 22 4.46 22 6s0 2.31-.347 2.876c-.194.317-.46.583-.776.777C20.31 10 19.54 10 18 10s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.777C14 8.311 14 7.54 14 6" color="currentColor" /></svg>

const Authenticationicon = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="M19.543 10.5L22 11c-.503-5.053-4.777-9-9.975-9C6.488 2 2 6.477 2 12s4.488 10 10.025 10c4.11 0 7.643-2.468 9.19-6" /><path d="M10.337 10.88c-1.08 0-1.62.78-1.74 1.26s-.12 2.22-.048 2.94c.24.9.84 1.272 1.428 1.392c.54.048 2.82.03 3.48.03c.96.018 1.68-.342 1.98-1.422c.06-.36.12-2.34-.03-2.94c-.318-.96-1.11-1.26-1.71-1.26zm-.087-.421c0-.06.008-.406.01-.84c0-.398-.034-.78.156-1.13c.71-1.414 2.75-1.27 3.254.17c.087.237.092.612.09.96c-.003.443.006.84.006.84" /></g></svg>

const Erroricon = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.322 9.683c2.413-4.271 3.62-6.406 5.276-6.956a4.45 4.45 0 0 1 2.804 0c1.656.55 2.863 2.685 5.276 6.956c2.414 4.27 3.62 6.406 3.259 8.146c-.2.958-.69 1.826-1.402 2.48C19.241 21.5 16.827 21.5 12 21.5s-7.241 0-8.535-1.19a4.66 4.66 0 0 1-1.402-2.48c-.362-1.74.845-3.876 3.259-8.147M11.992 16h.009M12 13V9" color="currentColor" /></svg>

const Pagesicon = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="M16 17H9m7-4h-3m7.5 1c0 3.771 0 5.657-1.245 6.828S16.007 22 12 22h-.773c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805c-.848-1.066-.848-2.6-.848-5.67v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35c.268.676.268 1.523.268 3.216z" /><path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2" /></g></svg>

const Formsicon = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12M11 7h6M7 7h1m-1 5h1m-1 5h1m3-5h6m-6 5h6" color="currentColor" /></svg>

const Elementsicon = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 2h-2C7.229 2 5.343 2 4.172 3.172S3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172S21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828S16.771 2 13 2m8 10H3m12-5H9m6 10H9" color="currentColor" /></svg>

const Advanceuiicon = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.2 9.075C6.1 11.177.635 20.002 2.316 21.684c1.682 1.68 10.507-3.783 12.609-5.884c2.1-2.102 3.362-3.362 0-6.725s-4.623-2.1-6.725 0m6.3 6.425L13 14m-6-3l1.5 1.5M9 19l-1-1m7-16c.518.519.855 1.633 0 3.111M22 9c-.518-.519-1.633-.856-3.11 0m.388-4.278l-1.944 1.944" color="currentColor" /></svg>

const Utilitiesicon = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="M4.5 14.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0" /><path d="M9 14.5c0-1.657 1.295-3 2.893-3h.214c1.598 0 2.893 1.343 2.893 3s-1.295 3-2.893 3h-.214C10.295 17.5 9 16.157 9 14.5M13.56 2l-2.561 5m7-5l-2.821 5.602M10.44 2L12 4.594M6 2l2.821 5.5" /></g></svg>

const Widgetsicon = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 11v4c0 3.3 0 4.95 1.025 5.975S7.7 22 11 22h2c3.3 0 4.95 0 5.975-1.025S20 18.3 20 15v-4M3 9c0-.748 0-1.122.201-1.4a1.4 1.4 0 0 1 .549-.44C4.098 7 4.565 7 5.5 7h13c.935 0 1.402 0 1.75.16c.228.106.417.258.549.44C21 7.878 21 8.252 21 9s0 1.121-.201 1.4a1.4 1.4 0 0 1-.549.44c-.348.16-.815.16-1.75.16h-13c-.935 0-1.402 0-1.75-.16a1.4 1.4 0 0 1-.549-.44C3 10.121 3 9.748 3 9m3-5.214C6 2.799 6.8 2 7.786 2h.357A3.857 3.857 0 0 1 12 5.857V7H9.214A3.214 3.214 0 0 1 6 3.786m12 0C18 2.799 17.2 2 16.214 2h-.357A3.857 3.857 0 0 0 12 5.857V7h2.786A3.214 3.214 0 0 0 18 3.786M12 11v11" color="currentColor" /></svg>

const Mapsicon = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="M15.129 13.747a.906.906 0 0 1-1.258 0c-1.544-1.497-3.613-3.168-2.604-5.595A3.53 3.53 0 0 1 14.5 6c1.378 0 2.688.84 3.233 2.152c1.008 2.424-1.056 4.104-2.604 5.595M14.5 9.5h.009" /><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12M17 21L3 7m7 7l-6 6" /></g></svg>

const Icons = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="M3 10.987v4.506c0 2.833 0 4.249.879 5.129c.878.88 2.293.88 5.121.88h6c2.828 0 4.243 0 5.121-.88S21 18.326 21 15.493v-4.506M7 17.974h4" /><path d="M17.796 2.5L6.15 2.53c-1.738-.09-2.184 1.249-2.184 1.903c0 .585-.075 1.438-1.14 3.042c-1.066 1.603-.986 2.08-.385 3.19c.498.92 1.766 1.28 2.428 1.341c2.1.048 3.122-1.766 3.122-3.041c1.042 3.203 4.005 3.203 5.325 2.837c1.322-.367 2.456-1.68 2.723-2.837c.156 1.437.63 2.276 2.027 2.852c1.449.597 2.694-.315 3.319-.9s1.026-1.883-.088-3.31c-.768-.984-1.089-1.912-1.194-2.872c-.06-.557-.114-1.155-.506-1.536c-.572-.556-1.394-.725-1.801-.699" /></g></svg>

const Chartsicon = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="M20.5 15.828c-2.501 5.928-10.636 7.656-15.299 3.036C.63 14.334 2.045 6.13 8.057 3.5" /><path d="M17.683 12.5c1.888 0 2.832 0 3.441-.845c.023-.032.06-.088.081-.121c.548-.887.266-1.568-.299-2.93a10.18 10.18 0 0 0-5.51-5.51c-1.362-.565-2.043-.847-2.93-.3c-.033.021-.09.06-.121.082c-.845.61-.845 1.553-.845 3.44v2.111c0 1.92 0 2.88.596 3.477c.597.596 1.557.596 3.476.596z" /></g></svg>

const Tableicon = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.891 20.109C2.5 18.717 2.5 16.479 2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391M2.5 9h19M16 21.5v-19m-8 19v-19" color="currentColor" /></svg>

const NestedmenuIcon = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="m8.643 3.146l-1.705.788C4.313 5.147 3 5.754 3 6.75s1.313 1.603 3.938 2.816l1.705.788c1.652.764 2.478 1.146 3.357 1.146s1.705-.382 3.357-1.146l1.705-.788C19.687 8.353 21 7.746 21 6.75s-1.313-1.603-3.938-2.816l-1.705-.788C13.705 2.382 12.879 2 12 2s-1.705.382-3.357 1.146" /><path d="M20.788 11.097c.141.199.212.406.212.634c0 .982-1.313 1.58-3.938 2.776l-1.705.777c-1.652.753-2.478 1.13-3.357 1.13s-1.705-.377-3.357-1.13l-1.705-.777C4.313 13.311 3 12.713 3 11.731c0-.228.07-.435.212-.634" /><path d="M20.377 16.266c.415.331.623.661.623 1.052c0 .981-1.313 1.58-3.938 2.776l-1.705.777C13.705 21.624 12.879 22 12 22s-1.705-.376-3.357-1.13l-1.705-.776C4.313 18.898 3 18.299 3 17.318c0-.391.208-.72.623-1.052" /></g></svg>

export type Menuitemtype = {
  menutitle?: string;
  title?: string;
  icon?: ReactNode;
  menusub?: boolean;
  type?: "sub" | "empty" | "link";
  active?: boolean;
  selected?: boolean;
  dirchange?: boolean;
  children?: Menuitemtype[];
  path?: string;
  background?: string
};

export const MENUITEMS: Menuitemtype[] = [

  {
    menutitle: "MAIN",
  },
  { path: `${import.meta.env.BASE_URL}dashboards/sales`, icon: Icons, type: "link", active: false, selected: false, dirchange: false, title: "Dashboard" },

  // {
  //   title: "Dashboards", icon: Dashboardicon, type: "sub", active: false, dirchange: false, children: [
  //     { path: `${import.meta.env.BASE_URL}dashboards/sales`, type: "link", active: false, selected: false, dirchange: false, title: "Sales" },
  //     { path: `${import.meta.env.BASE_URL}dashboards/analytics`, type: "link", active: false, selected: false, dirchange: false, title: "Analytics" },
  //     { path: `${import.meta.env.BASE_URL}dashboards/ecommerce`, type: "link", active: false, selected: false, dirchange: false, title: "Ecommerce" },
  //     { path: `${import.meta.env.BASE_URL}dashboards/crm`, type: "link", active: false, selected: false, dirchange: false, title: "CRM" },
  //     { path: `${import.meta.env.BASE_URL}dashboards/crypto`, type: "link", active: false, selected: false, dirchange: false, title: "Crypto" },
  //     { path: `${import.meta.env.BASE_URL}dashboards/nft`, type: "link", active: false, selected: false, dirchange: false, title: "NFT" },
  //     { path: `${import.meta.env.BASE_URL}dashboards/projects`, type: "link", active: false, selected: false, dirchange: false, title: "Projects" },
  //     { path: `${import.meta.env.BASE_URL}dashboards/jobs`, type: "link", active: false, selected: false, dirchange: false, title: "Jobs" },
  //     { path: `${import.meta.env.BASE_URL}dashboards/hrm`, type: "link", active: false, selected: false, dirchange: false, title: "HRM" },
  //     { path: `${import.meta.env.BASE_URL}dashboards/courses`, type: "link", active: false, selected: false, dirchange: false, title: "Courses" },
  //     { path: `${import.meta.env.BASE_URL}dashboards/stocks`, type: "link", active: false, selected: false, dirchange: false, title: "Stocks" },
  //     { path: `${import.meta.env.BASE_URL}dashboards/medical`, type: "link", active: false, selected: false, dirchange: false, title: "Medical" },
  //     { path: `${import.meta.env.BASE_URL}dashboards/pos-system`, type: "link", active: false, selected: false, dirchange: false, title: "POS System" },
  //     { path: `${import.meta.env.BASE_URL}dashboards/podcast`, type: "link", active: false, selected: false, dirchange: false, title: "Podcast" },
  //     { path: `${import.meta.env.BASE_URL}dashboards/school`, type: "link", active: false, selected: false, dirchange: false, title: "School" },
  //     { path: `${import.meta.env.BASE_URL}dashboards/social-media`, type: "link", active: false, selected: false, dirchange: false, title: "Social Media" },
  //   ]
  // },
   { path: `${import.meta.env.BASE_URL}dashboards/summary`, icon: Icons, type: "link", active: false, selected: false, dirchange: false, title: "Summary" },
  { path: `${import.meta.env.BASE_URL}dashboards/revenue`, icon: Icons, type: "link", active: false, selected: false, dirchange: false, title: "Revenue" },
 { path: `${import.meta.env.BASE_URL}dashboards/expenses`, icon: Icons, type: "link", active: false, selected: false, dirchange: false, title: "Expenses" },
 { path: `${import.meta.env.BASE_URL}dashboards/expensesOne`, icon: Icons, type: "link", active: false, selected: false, dirchange: false, title: "Expenses-01" },

  {
    menutitle: "WEB APPS"
  },

  // {
  //   title: "Apps", icon: Appsicon, type: "sub", active: false, selected: false, dirchange: false, children: [

  //     {
  //       title: "Ecommerce", type: "sub", active: false, dirchange: false, children: [
  //         { path: `${import.meta.env.BASE_URL}apps/ecommerce/add-products`, type: "link", active: false, selected: false, dirchange: false, title: "Add Product" },
  //         { path: `${import.meta.env.BASE_URL}apps/ecommerce/cart`, type: "link", active: false, selected: false, dirchange: false, title: "Cart" },
  //         { path: `${import.meta.env.BASE_URL}apps/ecommerce/checkout`, type: "link", active: false, selected: false, dirchange: false, title: "Checkout" },
  //         { path: `${import.meta.env.BASE_URL}apps/ecommerce/edit-product`, type: "link", active: false, selected: false, dirchange: false, title: "Edit Product" },
  //         { path: `${import.meta.env.BASE_URL}apps/ecommerce/customers`, type: "link", active: false, selected: false, dirchange: false, title: "Customers" },
  //         { path: `${import.meta.env.BASE_URL}apps/ecommerce/order-details`, type: "link", active: false, selected: false, dirchange: false, title: "Order Details" },
  //         { path: `${import.meta.env.BASE_URL}apps/ecommerce/orders`, type: "link", active: false, selected: false, dirchange: false, title: "Orders" },
  //         { path: `${import.meta.env.BASE_URL}apps/ecommerce/products`, type: "link", active: false, selected: false, dirchange: false, title: "Products" },
  //         { path: `${import.meta.env.BASE_URL}apps/ecommerce/product-details`, type: "link", active: false, selected: false, dirchange: false, title: "Product Details" },
  //         { path: `${import.meta.env.BASE_URL}apps/ecommerce/products-list`, type: "link", active: false, selected: false, dirchange: false, title: "Products List" },
  //         { path: `${import.meta.env.BASE_URL}apps/ecommerce/wishlist`, type: "link", active: false, selected: false, dirchange: false, title: "Wishlist" },
  //       ]
  //     },
  //     { path: `${import.meta.env.BASE_URL}apps/full-calendar`, type: "link", active: false, selected: false, dirchange: false, title: "Full Calendar" },
  //     { path: `${import.meta.env.BASE_URL}apps/gallery`, type: "link", active: false, selected: false, dirchange: false, title: "Gallery" },
  //     { path: `${import.meta.env.BASE_URL}apps/sweet-alerts`, type: "link", active: false, selected: false, dirchange: false, title: "Sweet Alerts" },


  //     {
  //       title: "Projects", type: "sub", active: false, selected: false, dirchange: false, children: [
  //         { path: `${import.meta.env.BASE_URL}apps/projects/project-list`, type: "link", active: false, selected: false, dirchange: false, title: "Project List" },
  //         { path: `${import.meta.env.BASE_URL}apps/projects/project-overview`, type: "link", active: false, selected: false, dirchange: false, title: "Project Overview" },
  //         { path: `${import.meta.env.BASE_URL}apps/projects/create-project`, type: "link", active: false, selected: false, dirchange: false, title: "Create Project" },
  //       ],
  //     },

  //     {
  //       title: "Task", type: "sub", active: false, selected: false, dirchange: false, children: [

  //         { path: `${import.meta.env.BASE_URL}apps/task/kanbanboard`, type: "link", active: false, selected: false, dirchange: false, title: "Kanban Board" },
  //         { path: `${import.meta.env.BASE_URL}apps/task/task-details`, type: "link", active: false, selected: false, dirchange: false, title: "Task Details" },
  //       ]
  //     },

  //     {
  //       title: "Jobs", type: "sub", active: false, selected: false, children: [
  //         { path: `${import.meta.env.BASE_URL}apps/jobs/job-details`, type: "link", active: false, selected: false, dirchange: false, title: "Job Details" },
  //         { path: `${import.meta.env.BASE_URL}apps/jobs/search-company`, type: "link", active: false, selected: false, dirchange: false, title: "Search Company" },
  //         { path: `${import.meta.env.BASE_URL}apps/jobs/search-jobs`, type: "link", active: false, selected: false, dirchange: false, title: "Search Jobs" },
  //         { path: `${import.meta.env.BASE_URL}apps/jobs/job-post`, type: "link", active: false, selected: false, dirchange: false, title: " Job Post" },
  //         // { path: `${import.meta.env.BASE_URL}apps/jobs/jobs-list`, type: "link", active: false, selected: false,dirchange: false, title: " Jobs List" },
  //         { path: `${import.meta.env.BASE_URL}apps/jobs/search-candidate`, type: "link", active: false, selected: false, dirchange: false, title: " Search Candidate" },
  //         { path: `${import.meta.env.BASE_URL}apps/jobs/candidate-details`, type: "link", active: false, selected: false, dirchange: false, title: "Candidate Details" },
  //       ],
  //     },
  //     {
  //       title: "NFT", type: "sub", active: false, selected: false, dirchange: false, children: [
  //         { path: `${import.meta.env.BASE_URL}apps/nft/marketplace`, type: "link", active: false, selected: false, dirchange: false, title: "Market Place" },
  //         { path: `${import.meta.env.BASE_URL}apps/nft/nft-details`, type: "link", active: false, selected: false, dirchange: false, title: "NFT Details" },
  //         { path: `${import.meta.env.BASE_URL}apps/nft/create-nft`, type: "link", active: false, selected: false, dirchange: false, title: "Create NFT" },
  //         { path: `${import.meta.env.BASE_URL}apps/nft/wallet-integration`, type: "link", active: false, selected: false, dirchange: false, title: " Wallet Integration" },
  //         { path: `${import.meta.env.BASE_URL}apps/nft/live-auction`, type: "link", active: false, selected: false, dirchange: false, title: "Live Auction" },
  //       ],
  //     },
  //     {
  //       title: "CRM", type: "sub", active: false, selected: false, dirchange: false, children: [
  //         { path: `${import.meta.env.BASE_URL}apps/crm/contacts`, type: "link", active: false, selected: false, dirchange: false, title: "Contacts" },
  //         { path: `${import.meta.env.BASE_URL}apps/crm/companies`, type: "link", active: false, selected: false, dirchange: false, title: "Companies" },
  //         { path: `${import.meta.env.BASE_URL}apps/crm/deals`, type: "link", active: false, selected: false, dirchange: false, title: "Deals" },
  //         { path: `${import.meta.env.BASE_URL}apps/crm/leads`, type: "link", active: false, selected: false, dirchange: false, title: " Leads" },
  //       ],
  //     },
  //     {
  //       title: "Crypto", type: "sub", active: false, selected: false, dirchange: false, children: [
  //         { path: `${import.meta.env.BASE_URL}apps/crypto/transactions`, type: "link", active: false, selected: false, dirchange: false, title: "Transactions" },
  //         { path: `${import.meta.env.BASE_URL}apps/crypto/currency-exchange`, type: "link", active: false, selected: false, dirchange: false, title: "Currency Exchange" },
  //         { path: `${import.meta.env.BASE_URL}apps/crypto/buy-sell`, type: "link", active: false, selected: false, dirchange: false, title: "Buy & Sell" },
  //         { path: `${import.meta.env.BASE_URL}apps/crypto/marketcap`, type: "link", active: false, selected: false, dirchange: false, title: " Marketcap" },
  //         { path: `${import.meta.env.BASE_URL}apps/crypto/wallet`, type: "link", active: false, selected: false, dirchange: false, title: "Wallet" },
  //       ],
  //     },

  //   ],
  // },
  // {
  //   icon: NestedmenuIcon,
  //   title: "Nested Menu",
  //   selected: false,
  //   active: false,
  //   dirchange: false,
  //   type: "sub",
  //   children: [
  //     {
  //       path: `${import.meta.env.BASE_URL}`,
  //       title: "Nested-1",
  //       type: "empty",
  //       active: false,
  //       selected: false,

  //       dirchange: false,
  //     },

  //     {
  //       title: "Nested-2",
  //       type: "sub",
  //       active: false,
  //       selected: false,
  //       dirchange: false,
  //       children: [
  //         {
  //           path: `${import.meta.env.BASE_URL}`,
  //           type: "empty",
  //           active: false,
  //           selected: false,
  //           dirchange: false,
  //           title: "Nested-2-1",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}`,
  //           type: "empty",
  //           active: false,
  //           selected: false,
  //           dirchange: false,
  //           title: "Nested-2-2",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}`,
  //           type: "empty",
  //           active: false,
  //           selected: false,
  //           dirchange: false,
  //           title: "Nested-2-3",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   menutitle: "PAGES"
  // },
  // {
  //   icon: Authenticationicon, title: " Authentication", type: "sub", active: false, selected: false, dirchange: false, children: [
  //     { path: `${import.meta.env.BASE_URL}authentication/coming-soon`, type: "link", active: false, selected: false, title: "Coming Soon" },

  //     {
  //       title: "Create Password", type: "sub", active: false, selected: false, dirchange: false, children: [
  //         { path: `${import.meta.env.BASE_URL}authentication/create-password/create-basic`, type: "link", active: false, selected: false, dirchange: false, title: "Basic" },
  //         { path: `${import.meta.env.BASE_URL}authentication/create-password/create-cover`, type: "link", active: false, selected: false, title: "Cover" },
  //       ],
  //     },
  //     {
  //       title: "Lock Screen", type: "sub", active: false, selected: false, dirchange: false, children: [
  //         { path: `${import.meta.env.BASE_URL}authentication/lock-screen/lock-basic`, type: "link", active: false, selected: false, dirchange: false, title: "Basic" },
  //         { path: `${import.meta.env.BASE_URL}authentication/lock-screen/lock-cover`, type: "link", active: false, selected: false, title: "Cover" },
  //       ],
  //     },
  //     {
  //       title: "Reset Password", type: "sub", active: false, selected: false, dirchange: false, children: [
  //         { path: `${import.meta.env.BASE_URL}authentication/reset-password/reset-basic`, type: "link", active: false, selected: false, dirchange: false, title: "Basic" },
  //         { path: `${import.meta.env.BASE_URL}authentication/reset-password/reset-cover`, type: "link", active: false, selected: false, dirchange: false, title: "Cover" },
  //       ],
  //     },
  //     {
  //       title: "Sign Up", type: "sub", active: false, selected: false, dirchange: false, children: [
  //         { path: `${import.meta.env.BASE_URL}authentication/sign-up/sign-up-basic`, type: "link", active: false, selected: false, dirchange: false, title: "Basic" },
  //         { path: `${import.meta.env.BASE_URL}authentication/sign-up/sign-up-cover`, type: "link", active: false, selected: false, dirchange: false, title: "Cover" },
  //       ],
  //     },
  //     {
  //       title: "Sign In", type: "sub", active: false, selected: false, dirchange: false, children: [
  //         { path: `${import.meta.env.BASE_URL}authentication/sign-in/sign-in-basic`, type: "link", active: false, selected: false, dirchange: false, title: "Basic" },
  //         { path: `${import.meta.env.BASE_URL}authentication/sign-in/sign-in-cover`, type: "link", active: false, selected: false, dirchange: false, title: "Cover" },
  //       ],
  //     },
  //     {
  //       title: "Two Step Verification", type: "sub", active: false, selected: false, dirchange: false, children: [
  //         { path: `${import.meta.env.BASE_URL}authentication/two-step-verification/two-step-basic`, type: "link", active: false, selected: false, dirchange: false, title: "Basic" },
  //         { path: `${import.meta.env.BASE_URL}authentication/two-step-verification/two-step-cover`, type: "link", active: false, selected: false, dirchange: false, title: "Cover" },
  //       ],
  //     },
  //     { path: `${import.meta.env.BASE_URL}authentication/under-maintenance`, type: "link", active: false, selected: false, dirchange: false, title: "Under Maintainance" },
  //   ]
  // },
  // {
  //   icon: Erroricon, title: "Error", type: "sub", active: false, selected: false, dirchange: false, children: [

  //     { path: `${import.meta.env.BASE_URL}error/401-error`, type: "link", active: false, selected: false, dirchange: false, title: "401-Error" },
  //     { path: `${import.meta.env.BASE_URL}error/404-error`, type: "link", active: false, selected: false, dirchange: false, title: "404-Error" },
  //     { path: `${import.meta.env.BASE_URL}error/500-error`, type: "link", active: false, selected: false, dirchange: false, title: "500-Error" },
  //   ]
  // },
  // {
  //   icon: Pagesicon, title: "Pages", type: "sub", active: false, dirchange: false, children: [
  //     {
  //       title: "Blog", type: "sub", active: false, dirchange: false, children: [
  //         { path: `${import.meta.env.BASE_URL}pages/blog/blog`, type: "link", active: false, selected: false, dirchange: false, title: "Blog" },
  //         { path: `${import.meta.env.BASE_URL}pages/blog/blog-details`, type: "link", active: false, selected: false, dirchange: false, title: "Blog-Details" },
  //         { path: `${import.meta.env.BASE_URL}pages/blog/create-blog`, type: "link", active: false, selected: false, dirchange: false, title: "Create Blog" },
  //       ]
  //     },
  //     { path: `${import.meta.env.BASE_URL}pages/chat`, type: "link", active: false, selected: false, dirchange: false, title: "Chat" },
  //     {
  //       title: "Email", type: "sub", active: false, children: [
  //         { path: `${import.meta.env.BASE_URL}pages/email/mail-app`, type: "link", active: false, selected: false, dirchange: false, title: "Mail-App" },
  //         { path: `${import.meta.env.BASE_URL}pages/email/mail-settings`, type: "link", active: false, selected: false, dirchange: false, title: "Mail-Settings" },
  //       ]
  //     },
  //     { path: `${import.meta.env.BASE_URL}pages/empty`, type: "link", active: false, selected: false, dirchange: false, title: "Empty", },
  //     { path: `${import.meta.env.BASE_URL}pages/faqs`, type: "link", active: false, selected: false, dirchange: false, title: "FAQ's" },
  //     { path: `${import.meta.env.BASE_URL}pages/file-manager`, type: "link", active: false, selected: false, dirchange: false, title: "File Manager" },

  //     {
  //       title: "Invoice", type: "sub", menusub: true, active: false, selected: false, dirchange: false, children: [
  //         { path: `${import.meta.env.BASE_URL}pages/invoice/create-invoice`, type: "link", active: false, selected: false, dirchange: false, title: "Create Invoice" },
  //         { path: `${import.meta.env.BASE_URL}pages/invoice/invoice-details`, type: "link", active: false, selected: false, dirchange: false, title: "Invoice Details" },
  //         { path: `${import.meta.env.BASE_URL}pages/invoice/invoice-list`, type: "link", active: false, selected: false, dirchange: false, title: "Invoice List" },
  //       ],
  //     },
  //     { path: `${import.meta.env.BASE_URL}pages/pricing`, type: "link", active: false, selected: false, dirchange: false, title: "Pricing" },
  //     { path: `${import.meta.env.BASE_URL}pages/profile`, type: "link", active: false, selected: false, dirchange: false, title: "Profile" },
  //     { path: `${import.meta.env.BASE_URL}pages/profile-settings`, type: "link", active: false, selected: false, dirchange: false, title: "Profile Settings" },
  //     { path: `${import.meta.env.BASE_URL}pages/landing`, type: "link", active: false, selected: false, dirchange: false, title: "Landing Page" },
  //     { path: `${import.meta.env.BASE_URL}pages/reviews`, type: "link", active: false, selected: false, dirchange: false, title: "Reviews" },
  //     { path: `${import.meta.env.BASE_URL}pages/search`, type: "link", active: false, selected: false, dirchange: false, title: "Search" },
  //     { path: `${import.meta.env.BASE_URL}pages/team`, type: "link", active: false, selected: false, dirchange: false, title: "Team", },
  //     { path: `${import.meta.env.BASE_URL}pages/terms-conditions`, type: "link", active: false, selected: false, dirchange: false, title: "Terms & Conditions" },
  //     { path: `${import.meta.env.BASE_URL}pages/timeline`, type: "link", active: false, selected: false, dirchange: false, title: "Timeline" },
  //     { path: `${import.meta.env.BASE_URL}pages/to-do-list`, type: "link", active: false, selected: false, dirchange: false, title: "To Do List" },

  //   ]
  // },
  // {
  //   menutitle: "GENERAL"
  // },
  // {
  //   title: "Forms", icon: Formsicon, type: "sub", active: false, selected: false, dirchange: false, children: [

  //     { path: `${import.meta.env.BASE_URL}forms/form-advanced`, type: "link", active: false, selected: false, dirchange: false, title: "Form Advanced" },

  //     {
  //       title: "Form Elements", type: "sub", menusub: true, active: false, selected: false, dirchange: false, children: [
  //         { path: `${import.meta.env.BASE_URL}forms/form-elements/inputs`, type: "link", active: false, selected: false, dirchange: false, title: "Inputs" },
  //         { path: `${import.meta.env.BASE_URL}forms/form-elements/checks-radios`, type: "link", active: false, selected: false, dirchange: false, title: "Checks & Radios " },
  //         { path: `${import.meta.env.BASE_URL}forms/form-elements/input-group`, type: "link", active: false, selected: false, dirchange: false, title: "Input Group" },
  //         { path: `${import.meta.env.BASE_URL}forms/form-elements/form-select`, type: "link", active: false, selected: false, dirchange: false, title: "Form Select" },
  //         { path: `${import.meta.env.BASE_URL}forms/form-elements/range-slider`, type: "link", active: false, selected: false, dirchange: false, title: "Range Slider" },
  //         { path: `${import.meta.env.BASE_URL}forms/form-elements/input-masks`, type: "link", active: false, selected: false, dirchange: false, title: "Input Masks" },
  //         { path: `${import.meta.env.BASE_URL}forms/form-elements/file-uploads`, type: "link", active: false, selected: false, dirchange: false, title: "File Uploads" },
  //         { path: `${import.meta.env.BASE_URL}forms/form-elements/date-time-picker`, type: "link", active: false, selected: false, dirchange: false, title: "Date,Time Picker" },
  //         { path: `${import.meta.env.BASE_URL}forms/form-elements/color-picker`, type: "link", active: false, selected: false, dirchange: false, title: "Color Pickers" },

  //       ],
  //     },
  //     { path: `${import.meta.env.BASE_URL}forms/floating-labels`, type: "link", active: false, selected: false, dirchange: false, title: "Floating Labels" },
  //     { path: `${import.meta.env.BASE_URL}forms/form-layouts`, type: "link", active: false, selected: false, dirchange: false, title: "Form Layouts" },
  //     { path: `${import.meta.env.BASE_URL}forms/form-wizards`, type: "link", active: false, selected: false, dirchange: false, title: "Form Wizards" },
  //     { path: `${import.meta.env.BASE_URL}forms/sun-editor`, type: "link", active: false, selected: false, dirchange: false, title: "Sun Editor" },
  //     { path: `${import.meta.env.BASE_URL}forms/validation`, type: "link", active: false, selected: false, dirchange: false, title: "Validation" },
  //     { path: `${import.meta.env.BASE_URL}forms/select2`, type: "link", active: false, selected: false, dirchange: false, title: "Select2" },
  //   ],
  // },
  // {
  //   title: "Ui Elements", icon: Elementsicon, type: "sub", active: false, selected: false, dirchange: false, children: [
  //     { path: `${import.meta.env.BASE_URL}ui-elements/alerts`, type: "link", active: false, selected: false, dirchange: false, title: "Alerts" },
  //     { path: `${import.meta.env.BASE_URL}ui-elements/badge`, type: "link", active: false, selected: false, dirchange: false, title: "Badge" },
  //     { path: `${import.meta.env.BASE_URL}ui-elements/breadcrumb`, type: "link", active: false, selected: false, dirchange: false, title: "Breadcrumb" },
  //     { path: `${import.meta.env.BASE_URL}ui-elements/buttons`, type: "link", active: false, selected: false, dirchange: false, title: "Buttons" },
  //     { path: `${import.meta.env.BASE_URL}ui-elements/button-group`, type: "link", active: false, selected: false, dirchange: false, title: "Button Group" },
  //     { path: `${import.meta.env.BASE_URL}ui-elements/cards`, type: "link", active: false, selected: false, dirchange: false, title: "Cards" },
  //     { path: `${import.meta.env.BASE_URL}ui-elements/dropdowns`, type: "link", active: false, selected: false, dirchange: false, title: "Dropdowns" },
  //     { path: `${import.meta.env.BASE_URL}ui-elements/images-figures`, type: "link", active: false, selected: false, dirchange: false, title: "Images & Figures" },
  //     { path: `${import.meta.env.BASE_URL}ui-elements/links-interactions`, type: "link", active: false, selected: false, dirchange: false, title: "Links & Interactions" },
  //     { path: `${import.meta.env.BASE_URL}ui-elements/list-group`, type: "link", active: false, selected: false, dirchange: false, title: "List Group" },
  //     { path: `${import.meta.env.BASE_URL}ui-elements/navs-tabs`, type: "link", active: false, selected: false, dirchange: false, title: "Navs & Tabs" },
  //     { path: `${import.meta.env.BASE_URL}ui-elements/object-fit`, type: "link", active: false, selected: false, dirchange: false, title: "Object Fit" },
  //     { path: `${import.meta.env.BASE_URL}ui-elements/pagination`, type: "link", active: false, selected: false, dirchange: false, title: "Pagination" },
  //     { path: `${import.meta.env.BASE_URL}ui-elements/popovers`, type: "link", active: false, selected: false, dirchange: false, title: "Popovers" },
  //     { path: `${import.meta.env.BASE_URL}ui-elements/progress`, type: "link", active: false, selected: false, dirchange: false, title: "Progress" },
  //     { path: `${import.meta.env.BASE_URL}ui-elements/spinners`, type: "link", active: false, selected: false, dirchange: false, title: "Spinners" },
  //     { path: `${import.meta.env.BASE_URL}ui-elements/toasts`, type: "link", active: false, selected: false, dirchange: false, title: "Toasts" },
  //     { path: `${import.meta.env.BASE_URL}ui-elements/tooltips`, type: "link", active: false, selected: false, dirchange: false, title: "Tooltips" },
  //     { path: `${import.meta.env.BASE_URL}ui-elements/typography`, type: "link", active: false, selected: false, dirchange: false, title: "Typography" },
  //   ],
  // },
  // {
  //   title: "Advanced Ui", icon: Advanceuiicon, type: "sub", active: false, selected: false, dirchange: false, children: [
  //     { path: `${import.meta.env.BASE_URL}advanced-ui/accordions-collapse`, type: "link", active: false, selected: false, dirchange: false, title: "Accordions & collapse" },
  //     { path: `${import.meta.env.BASE_URL}advanced-ui/carousel`, type: "link", active: false, selected: false, dirchange: false, title: "Carousel" },
  //     { path: `${import.meta.env.BASE_URL}advanced-ui/draggable-cards`, type: "link", active: false, selected: false, dirchange: false, title: "Draggable Cards" },
  //     { path: `${import.meta.env.BASE_URL}advanced-ui/media-player`, type: "link", active: false, selected: false, dirchange: false, title: "Media Player" },
  //     { path: `${import.meta.env.BASE_URL}advanced-ui/modals-closes`, type: "link", active: false, selected: false, dirchange: false, title: "Modals & Closes" },
  //     { path: `${import.meta.env.BASE_URL}advanced-ui/navbar`, type: "link", active: false, selected: false, dirchange: false, title: "Navbar" },
  //     { path: `${import.meta.env.BASE_URL}advanced-ui/offcanvas`, type: "link", active: false, selected: false, dirchange: false, title: "Offcanvas" },
  //     { path: `${import.meta.env.BASE_URL}advanced-ui/placeholders`, type: "link", active: false, selected: false, dirchange: false, title: "Placeholders" },
  //     { path: `${import.meta.env.BASE_URL}advanced-ui/ratings`, type: "link", active: false, selected: false, dirchange: false, title: "Ratings" },
  //     { path: `${import.meta.env.BASE_URL}advanced-ui/ribbons`, type: "link", active: false, selected: false, dirchange: false, title: "Ribbons" },
  //     { path: `${import.meta.env.BASE_URL}advanced-ui/sortable-js`, type: "link", active: false, selected: false, dirchange: false, title: "Sortable Js" },
  //     { path: `${import.meta.env.BASE_URL}advanced-ui/swiper-js`, type: "link", active: false, selected: false, dirchange: false, title: "Swiper JS" },
  //     { path: `${import.meta.env.BASE_URL}advanced-ui/tour`, type: "link", active: false, selected: false, dirchange: false, title: "Tour" },
  //   ],
  // },
  // {
  //   title: "Utilities", icon: Utilitiesicon, type: "sub", active: false, selected: false, dirchange: false, children: [
  //     { path: `${import.meta.env.BASE_URL}utilities/avatars`, type: "link", active: false, selected: false, dirchange: false, title: "Avatars" },
  //     { path: `${import.meta.env.BASE_URL}utilities/borders`, type: "link", active: false, selected: false, dirchange: false, title: "Borders" },
  //     { path: `${import.meta.env.BASE_URL}utilities/breakpoints`, type: "link", active: false, selected: false, dirchange: false, title: "Breakpoints" },
  //     { path: `${import.meta.env.BASE_URL}utilities/colors`, type: "link", active: false, selected: false, dirchange: false, title: "Colors" },
  //     { path: `${import.meta.env.BASE_URL}utilities/columns`, type: "link", active: false, selected: false, dirchange: false, title: "Columns" },
  //     { path: `${import.meta.env.BASE_URL}utilities/css-grid`, type: "link", active: false, selected: false, dirchange: false, title: "Css Grid" },
  //     { path: `${import.meta.env.BASE_URL}utilities/flex`, type: "link", active: false, selected: false, dirchange: false, title: "Flex" },
  //     { path: `${import.meta.env.BASE_URL}utilities/gutters`, type: "link", active: false, selected: false, dirchange: false, title: "Gutters" },
  //     { path: `${import.meta.env.BASE_URL}utilities/helpers`, type: "link", active: false, selected: false, dirchange: false, title: "Helpers" },
  //     { path: `${import.meta.env.BASE_URL}utilities/position`, type: "link", active: false, selected: false, dirchange: false, title: "Position" },
  //     { path: `${import.meta.env.BASE_URL}utilities/additional-content`, type: "link", active: false, selected: false, dirchange: false, title: "Additional Content" },

  //   ],
  // },
  // { path: `${import.meta.env.BASE_URL}widgets`, title: "Widgets", icon: Widgetsicon, type: "link", active: false, dirchange: false, selected: false },
  // {
  //   menutitle: "MAPS & ICONS"
  // },
  // {
  //   title: "Maps", icon: Mapsicon, type: "sub", background: "hor-rightangle", active: false, selected: false, dirchange: false, children: [
  //     { path: `${import.meta.env.BASE_URL}maps/leaflet-maps`, type: "link", active: false, selected: false, dirchange: false, title: "Leaflet Maps" },
  //     { path: `${import.meta.env.BASE_URL}maps/pigeon-maps`, type: "link", active: false, selected: false, dirchange: false, title: "Pigeon Maps" },

  //   ],
  // },
  // { path: `${import.meta.env.BASE_URL}icons`, icon: Icons, type: "link", active: false, selected: false, dirchange: false, title: "Icons" },
  // {
  //   menutitle: "TABLES & CHARTS"
  // },
  // {
  //   title: "Charts", icon: Chartsicon, type: "sub", dirchange: false, children: [
  //     {
  //       title: "Apex Charts", type: "sub", menusub: true, active: false, selected: false, dirchange: false, children: [

  //         { path: `${import.meta.env.BASE_URL}charts/apex-charts/line-charts`, type: "link", active: false, selected: false, dirchange: false, title: "Line Charts" },
  //         { path: `${import.meta.env.BASE_URL}charts/apex-charts/area-charts`, type: "link", active: false, selected: false, dirchange: false, title: "Area Charts " },
  //         { path: `${import.meta.env.BASE_URL}charts/apex-charts/column-charts`, type: "link", active: false, selected: false, dirchange: false, title: "Column Charts" },
  //         { path: `${import.meta.env.BASE_URL}charts/apex-charts/bar-charts`, type: "link", active: false, selected: false, dirchange: false, title: "Bar Charts" },
  //         { path: `${import.meta.env.BASE_URL}charts/apex-charts/mixed-charts`, type: "link", active: false, selected: false, dirchange: false, title: "Mixed Charts" },
  //         { path: `${import.meta.env.BASE_URL}charts/apex-charts/range-area-charts`, type: "link", active: false, selected: false, dirchange: false, title: "Range Area Charts" },
  //         { path: `${import.meta.env.BASE_URL}charts/apex-charts/timeline-charts`, type: "link", active: false, selected: false, dirchange: false, title: "Timeline Charts" },
  //         { path: `${import.meta.env.BASE_URL}charts/apex-charts/funnel-charts`, type: "link", active: false, selected: false, dirchange: false, title: "Funnel Charts" },
  //         { path: `${import.meta.env.BASE_URL}charts/apex-charts/candlestick-charts`, type: "link", active: false, selected: false, dirchange: false, title: "CandleStick Charts" },
  //         { path: `${import.meta.env.BASE_URL}charts/apex-charts/boxplot-charts`, type: "link", active: false, selected: false, dirchange: false, title: "Boxplot Charts" },
  //         { path: `${import.meta.env.BASE_URL}charts/apex-charts/bubble-charts`, type: "link", active: false, selected: false, dirchange: false, title: "Bubble Charts" },
  //         { path: `${import.meta.env.BASE_URL}charts/apex-charts/scatter-charts`, type: "link", active: false, selected: false, dirchange: false, title: "Scatter Charts" },
  //         { path: `${import.meta.env.BASE_URL}charts/apex-charts/heatmap-charts`, type: "link", active: false, selected: false, dirchange: false, title: "Heatmap Charts" },
  //         { path: `${import.meta.env.BASE_URL}charts/apex-charts/treemap-charts`, type: "link", active: false, selected: false, dirchange: false, title: "Treemap Charts" },
  //         { path: `${import.meta.env.BASE_URL}charts/apex-charts/pie-charts`, type: "link", active: false, selected: false, dirchange: false, title: "Pie Charts" },
  //         { path: `${import.meta.env.BASE_URL}charts/apex-charts/radialbar-charts`, type: "link", active: false, selected: false, dirchange: false, title: "Radialbar Charts" },
  //         { path: `${import.meta.env.BASE_URL}charts/apex-charts/radar-charts`, type: "link", active: false, selected: false, dirchange: false, title: "Radar Charts" },
  //         { path: `${import.meta.env.BASE_URL}charts/apex-charts/polararea-charts`, type: "link", active: false, selected: false, dirchange: false, title: "Polararea Charts" },
  //       ],
  //     },
  //     { path: `${import.meta.env.BASE_URL}charts/chartjs-charts`, type: "link", active: false, selected: false, dirchange: false, title: "Chartjs Charts" },
  //     { path: `${import.meta.env.BASE_URL}charts/echarts-charts`, type: "link", active: false, selected: false, dirchange: false, title: "Echart Charts" },
  //   ],
  // },
  // {
  //   title: "Tables", icon: Tableicon, type: "sub", menutitle: "", active: false, selected: false, dirchange: false, children: [
  //     { path: `${import.meta.env.BASE_URL}tables/tables`, type: "link", active: false, selected: false, dirchange: false, title: "Tables" },
  //     { path: `${import.meta.env.BASE_URL}tables/gridjs`, type: "link", active: false, selected: false, dirchange: false, title: "Grid JS Tables" },
  //     { path: `${import.meta.env.BASE_URL}tables/data-tables`, type: "link", active: false, selected: false, dirchange: false, title: "Data Tables" },
  //   ],
  // },
]