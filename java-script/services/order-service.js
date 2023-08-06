import * as shippingService from "./shipping-service.js";

function total(order) {
    const shipping = shippingService.shipment(order);
    const valueDiscount = order.basic * order.discount / 100.0;
    return (order.basic - valueDiscount) + shipping;
}

export { total };