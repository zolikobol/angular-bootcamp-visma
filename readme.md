header
contnet
footer

header:
    logo + text
Content:
    left bar + content + right bar
Footer:
    link contact

navigation:
    Home
    Catalog
    Products
    Cart
    Orders
    not found

routing:
    * - home: home-component
    /catalog: catalog-module:
                        * catalog : catalog-component
                        /detail/:catalogId : catalog-detail-component
    /cart: cart-component
    /orders: orders-module:
                        * orders: orders-component
                        /detail/:orderId: order-detail-component

