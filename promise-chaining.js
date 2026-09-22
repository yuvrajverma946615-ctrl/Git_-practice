function PlaceOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ orderId: 101, item: "pizza" });
    }, 1000);
  });
}

// function prepareFood(orderId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`food prepared for order ${orderId}`);
//         }, 2000);
//     });
// }
// function deliverFood(message) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${message} → Food delivered`);
//         }, 2000);
//     });
// }

// PlaceOrder()
//     .then((order) => {
//         console.log(order);
//         return prepareFood(order.orderId);
//     })

//     .then((message) => {
//         console.log(message);

//         return deliverFood(message);
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


