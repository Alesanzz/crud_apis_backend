//requiriendo y configurando express
import express from "express";
const server = express();
const port = 8080;

//la siguiente linea es para poder usar mejor el req.query, extendiendo las opciones
server.use(express.urlencoded({ extended: true }));
//para configurar de que el servidor siempre responda devolviendo archivos en formato json
server.use(express.json());

//importando las rutas de las apis
import { routerApiProducts } from "./routes/apis/products-routes.js";
import { routerApiCarts } from "./routes/apis/carts-routes.js";

//endpoint tipo api (crudos en json)
server.use("/api/products", routerApiProducts);
server.use("/api/carts", routerApiCarts);


//cuando la ruta no existe
server.get("*", (req, res) => {
  return res
    .status(404)
    .json({ status: "Error", msg: "La ruta no existe", data: {} });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
