import { lazy, type JSX } from "react";
const Crm = lazy(() => import("../../../components/dashboards/crm/crm"));
const Ecommerce = lazy(() => import("../../../components/dashboards/ecommerce/ecommerce"));
const Sales = lazy(() => import("../../../components/dashboards/sales/sales"));
const Projects = lazy(() => import("../../../components/dashboards/projects/projects"));
const Podcast = lazy(() => import("../../../components/dashboards/podcast/podcast"));

export interface routeType {
    id: number
    path: string
    element: JSX.Element
}

export const RouteData: routeType[] = [

    { id: 1, path: `${import.meta.env.BASE_URL}dashboards/sales`, element: <Sales /> },
    { id: 3, path: `${import.meta.env.BASE_URL}dashboards/summary`, element: <Ecommerce /> },
    { id: 4, path: `${import.meta.env.BASE_URL}dashboards/revenue`, element: <Crm /> },
    { id: 9, path: `${import.meta.env.BASE_URL}dashboards/expenses`, element: <Projects /> },
    { id: 15, path: `${import.meta.env.BASE_URL}dashboards/expensesOne`, element: <Podcast /> },
];