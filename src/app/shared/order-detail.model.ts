export class OrderDetail {
    orderNumber :number;
    orderName :string;
    orderTime :Date;
    orderStatus :string;
    order :Order;

}

export class Order {
    orderDetails :string;
    orderQuantity :number;
}