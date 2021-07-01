import Login from "../pages/Login";
import Index from "../pages/admin/dashboard/Index";
import List from "../pages/admin/products/List";
import Edit from "../pages/admin/products/Edit";
import NotFound from "../pages/PageNotFound"
export const mainRoutes = [
  {
    path: "/login",
    component: Login,
  },
  {
      path:"/404",
      component:NotFound
  }
];
export const adminRoutes = [
  {
    path: "/admin/dashboard",
    component: Index,
    exact:true
  },
  {
    path: "/admin/products",
    component: List,
    exact:true
  },
  {
    path: "/admin/products/edit/:id",
    component: Edit,
    exact:true
  },
];
