import { lazy } from "react";   
const AdminDashboard = lazy(()=> import('../../views/admin/AdminDashboard'));
const OrderDashboard = lazy(() => import("../../views/admin/Orders"));
const CategoryDashboard = lazy(()=> import('../../views/admin/Category'));
const SellerDashboard =  lazy(() => import('../../views/admin/Seller'));
const RequestPaymentDashboard =  lazy (()=> import('../../views/admin/RequestPayment'));
const DeactivateSellersDashboard = lazy (() => import('../../views/admin/DeactivateSellers'));
const SellerRequestDashboarad = lazy(() => import('../../views/admin/SellerRequest'));
const SellerDetailsDashboard = lazy(() => import("../../views/admin/SellerDetails"))
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
    },
    {
        path: '/admin/dashboard/deactive-sellers',
        element : <DeactivateSellersDashboard/>,
        role : 'admin'
    },
    {
        path: '/admin/dashboard/sellers-request',
        element : <SellerRequestDashboarad/>,
        role : 'admin'
    },
    {
        path: '/admin/dashboard/seller/details/:sellerId',
        element : <SellerDetailsDashboard/>,
        role : 'admin'
    }
]