import Order from "./modules/order.js";
import * as orderService from "./services/order-service.js";

const dados = document.getElementById("valueOrder");
const element = dados.innerHTML.split("\n");

const order = new Order(Number(element[0]), Number(element[1]), Number(element[2]));
const value = orderService.total(order);

console.log(`Pedido código ${order.code}`);
console.log(`Valor total: R$ ${value.toFixed(2)}`);