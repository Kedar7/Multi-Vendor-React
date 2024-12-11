import { lazy } from "react";   
const AdminDashboard = lazy(()=> import('../../views/admin/AdminDashboard'));
const OrderDashboard = lazy(() => import("../../views/admin/Orders"));
const CategoryDashboard = lazy(()=> import('../../views/admin/Category'));
const SellerDashboard =  lazy(() => import('../../views/admin/Seller'));
const RequestPaymentDashboard =  lazy (()=> import('../../views/admin/RequestPayment'));
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
    },
    {
        path: 'admin/dashboard/sellers',
        element : <SellerDashboard/>,
        role : 'admin'
    },
    {
        path: '/admin/dashboard/payment-request',
        element : <RequestPaymentDashboard/>,
        role : 'admin'
    }
]