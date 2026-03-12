import pos1 from '../../../assets/images/pos-system/1.jpg';
import pos2 from '../../../assets/images/pos-system/2.jpg';
import pos3 from '../../../assets/images/pos-system/3.jpg';
import pos4 from '../../../assets/images/pos-system/4.jpg';
import pos5 from '../../../assets/images/pos-system/5.jpg';
import pos6 from '../../../assets/images/pos-system/6.jpg';
import pos7 from '../../../assets/images/pos-system/7.jpg';
import pos9 from '../../../assets/images/pos-system/9.jpg';
import pos10 from '../../../assets/images/pos-system/10.jpg';
import pos11 from '../../../assets/images/pos-system/12.jpg';
import pos13 from '../../../assets/images/pos-system/13.jpg';
import type { ReactNode } from 'react';


interface OrderSummeryProductsType {
  id: number;
  category: string;
  name: string;
  price: number;
  originalPrice: number;
  quantity: number;
  image: string;
}
export const OrderSummeryProducts: OrderSummeryProductsType[] = [
  { id: 1, category: "Bevarages", name: "Temptation Tidbits Cake", price: 193.99, originalPrice: 464.99, quantity: 2, image: pos3 },
  { id: 2, category: "Cakes", name: "Garden Delights cookie", price: 215.99, originalPrice: 289.99, quantity: 3, image: pos2 },
  { id: 3, category: "Salads", name: "Iced Cinnamon Swirl Salad", price: 512.89, originalPrice: 999.99, quantity: 1, image: pos1 }
];

export interface MenuItemsType {
  id: number;
  cardBg: string;
  title: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice: number;
  image: string;
  inStock: boolean;
  btn_clr: string;
  Disabled: boolean;
}
export const MenuItems: MenuItemsType[] = [
  { id: 1, cardBg: "primary-transparent", title: "Blueberry Bliss Burst", category: "Desserts", subcategory: "Ice Creams", price: 4.99, originalPrice: 5.99, image: pos10, inStock: true, Disabled: false, btn_clr: "primary" },
  { id: 2, cardBg: "secondary-transparent", title: "Garden Delights", category: "Salads", subcategory: "Main Course", price: 29.99, originalPrice: 34.99, image: pos11, inStock: false, Disabled: true, btn_clr: "secondary" },
  { id: 3, cardBg: "danger-transparent", title: "Temptation Tidbits", category: "Desserts", subcategory: "Desserts", price: 7.99, originalPrice: 9.99, image: pos13, inStock: true, Disabled: false, btn_clr: "danger" },
  { id: 4, cardBg: "warning-transparent", title: "Herbivore Haven", category: "Main-Courses", subcategory: "Main Course", price: 19.99, originalPrice: 24.99, image: pos9, inStock: true, Disabled: false, btn_clr: "warning" },
  { id: 5, cardBg: "info-transparent", title: "Strawberry Symphony", category: "Cakes", subcategory: "Cakes", price: 34.99, originalPrice: 49.99, image: pos5, inStock: true, Disabled: false, btn_clr: "info" },
  { id: 6, cardBg: "orange-transparent", title: "Veggie Delight Fusion", category: "Main-Courses", subcategory: "Sandwich", price: 2.79, originalPrice: 2.99, image: pos4, inStock: true, Disabled: false, btn_clr: "primary" },
  { id: 7, cardBg: "teal-transparent", title: "Culinary Greens", category: "Salads", subcategory: "Main Course", price: 24.99, originalPrice: 29.99, image: pos6, inStock: true, Disabled: false, btn_clr: "teal" },
  { id: 8, cardBg: "pink-transparent", title: "Iced Cinnamon Swirl", category: "Salads", subcategory: "Beverages", price: 1.29, originalPrice: 1.99, image: pos7, inStock: true, Disabled: false, btn_clr: "pink" }
];

interface CategoriesType {
  id: number;
  name: string;
  filter: string;
  items: number;
  active: boolean;
  svg: ReactNode;
  avatarBg: string;
}
export const Categories: CategoriesType[] = [
  { id: 1, name: "All Menu", filter: "*", items: 180, active: true, svg: (<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><rect fill="none" height="24" width="24" /><path d="M21,13H3V4h18V13z M20,6c-1.68,0-3.04,0.98-3.21,2.23C16.15,7.5,14.06,5.5,10.25,5.5c-4.67,0-6.75,3-6.75,3 s2.08,3,6.75,3c3.81,0,5.9-2,6.54-2.73C16.96,10.02,18.32,11,20,11V6z" opacity=".8" fill="#fff" /><path d="M21.05,17.56L3.08,18.5L3,17l17.98-0.94L21.05,17.56z M21,19.48H3v1.5h18V19.48z M23,13V4c0-1.1-0.9-2-2-2H3 C1.9,2,1,2.9,1,4v9c0,1.1,0.9,2,2,2h18C22.1,15,23,14.1,23,13z M21,13H3V4h18V13z M20,6c-1.68,0-3.04,0.98-3.21,2.23 C16.15,7.5,14.06,5.5,10.25,5.5c-4.67,0-6.75,3-6.75,3s2.08,3,6.75,3c3.81,0,5.9-2,6.54-2.73C16.96,10.02,18.32,11,20,11V6z" />  </svg>), avatarBg: "primary" },
  { id: 2, name: "Pizza", filter: ".Desserts", items: 36, active: false, svg: (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M5.51 6.36L12 17.92l6.49-11.55C16.68 4.85 14.38 4 12 4s-4.68.85-6.49 2.36zM9 8.5c-.83 0-1.5-.67-1.5-1.5S8.17 5.5 9 5.5s1.5.67 1.5 1.5S9.82 8.5 9 8.5zm4.5 4.5c0 .83-.68 1.5-1.5 1.5-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" opacity=".8" fill="#fff" /><path d="M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zm0 15.92L5.51 6.36C7.32 4.85 9.62 4 12 4s4.68.85 6.49 2.36L12 17.92zM9 5.5c-.83 0-1.5.67-1.5 1.5S8.17 8.5 9 8.5s1.5-.67 1.5-1.5S9.82 5.5 9 5.5zm1.5 7.5c0 .83.67 1.5 1.5 1.5.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5-1.5.67-1.5 1.5z" />  </svg>), avatarBg: "secondary" },
  { id: 3, name: "Beverages", filter: ".Salads", items: 134, active: false, svg: (<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><g>  <rect fill="none" height="24" width="24" /></g><g>  <g />  <g><path d="M10,6.4l1.81,1.45C11.93,7.94,12,8.09,12,8.24v4.26c0,0.28-0.22,0.5-0.5,0.5h-4C7.22,13,7,12.78,7,12.5 V8.24c0-0.15,0.07-0.3,0.19-0.39L9,6.4V5H6v8c0,1.1,0.9,2,2,2h6c1.1,0,2-0.9,2-2V5h-6V6.4z" opacity=".8" fill="#fff" /><rect height="2" width="18" x="2" y="19" /><path d="M20,3H4v10c0,2.21,1.79,4,4,4h6c2.21,0,4-1.79,4-4v-3h2c1.11,0,2-0.89,2-2V5C22,3.89,21.11,3,20,3z M9.5,7.28l1.5,1.2V12 H8V8.48L9.5,7.28z M16,13c0,1.1-0.9,2-2,2H8c-1.1,0-2-0.9-2-2V5h3v1.4L7.19,7.85C7.07,7.94,7,8.09,7,8.24v4.26 C7,12.78,7.22,13,7.5,13h4c0.28,0,0.5-0.22,0.5-0.5V8.24c0-0.15-0.07-0.3-0.19-0.39L10,6.4V5h6V13z M20,8h-2V5h2V8z" />  </g></g>  </svg>), avatarBg: "danger" },
  { id: 4, name: "Cakes", filter: ".Main-Courses", items: 175, active: false, svg: (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.53 14.92l-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07c-.64.64-1.5 1-2.4 1.01v3h14v-3c-.9-.01-1.76-.37-2.4-1.01l-1.07-1.07zM18 11H6c-.55 0-1 .45-1 1v3.5c.51-.01.99-.21 1.34-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.36.36.84.56 1.35.57V12c0-.55-.45-1-1-1z" opacity=".8" fill="#fff" /><path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm6 3h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v9c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-9c0-1.66-1.34-3-3-3zm1 11H5v-3c.9-.01 1.76-.37 2.4-1.01l1.09-1.07 1.07 1.07c1.31 1.31 3.59 1.3 4.89 0l1.08-1.07 1.07 1.07c.64.64 1.5 1 2.4 1.01v3zm0-4.5c-.51-.01-.99-.2-1.35-.57l-2.13-2.13-2.14 2.13c-.74.74-2.03.74-2.77 0L8.48 12.8l-2.14 2.13c-.35.36-.83.56-1.34.57V12c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v3.5z" />  </svg>), avatarBg: "warning" },
  { id: 5, name: "Salads", filter: ".Cakes", items: 45, active: false, svg: (<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><g>  <rect fill="none" height="24" width="24" /></g><g>  <g><path d="M8.73,18.39l1.27,0.5V20h4v-1.11l1.27-0.5c2.16-0.85,3.74-2.47,4.4-4.39H4.34 C4.99,15.92,6.58,17.54,8.73,18.39z" enableBackground="new" opacity=".8" fill="#fff" /><path d="M22,3.51V2L4,3.99V12H2c0,3.69,2.47,6.86,6,8.25V22h8v-1.75c3.53-1.39,6-4.56,6-8.25H10.5V8H22V6.5H10.5V4.78L22,3.51z M8,5.06l1-0.11V6.5H8V5.06z M8,8h1v4H8V8z M5.5,5.34l1-0.11V6.5h-1V5.34z M5.5,8h1v4h-1V8z M19.66,14 c-0.66,1.92-2.24,3.54-4.4,4.39L14,18.89V20h-4v-1.11l-1.27-0.5c-2.16-0.85-3.74-2.47-4.4-4.39H19.66z" />  </g></g>  </svg>), avatarBg: "info" }
];
