import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";

export const routes = [
  { path: "/", name: "home", component: Home },//el orden de las rutas se debe tomar en cuenta, la primera que coincide es la que dispara.
  { path: "/cart/", name:"cart", component: Cart},
  { path: "/:path(.*)", component: NotFound },//si la ruta no coincide con nada. mostrare esta ruta que es notfound.
];