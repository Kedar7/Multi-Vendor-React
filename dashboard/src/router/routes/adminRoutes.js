import { lazy } from "react";   
const AdminDashboard = lazy(()=> import('../../views/admin/AdminDashboard'));
const OrderDashboard = lazy(() => import("../../views/admin/Orders"));
const CategoryDashboard = lazy(()=> import('../../views/admin/Category'));

export const adminRoutes = [
    {
        path: 'admin/dashboard',
        element : <AdminDashboard/>,
        role : 'admin'
    },{
        path: 'admin/dashboard/orders',
        element : <OrderDashboard/>,
        role : 'admin'
    },
    {
        path: 'admin/dashboard/category',
        element : <CategoryDashboard/>,
        role : 'admin'
    }
]