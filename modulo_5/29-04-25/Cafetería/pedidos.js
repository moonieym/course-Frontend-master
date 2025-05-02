const orderList = document.getElementById(`orderList`);
const addOrderBtn = document.getElementById(`addOrderBtn`);

let orderId = 1; // identificador único para cada pedido

addOrderBtn.addEventListener(`click`, () => {
    const order = { id: orderId++, status: `En proceso`};
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement(`li`);
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if(listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
        if (status === `Completado`) {
            listItem.classList.remove(`in-progress`);
            listItem.classList.add(`completed`);
        }
    }
}

async function processOrder(order) {
    const preparationTime = Math.floor(Math.random() * 3000) + 1000;

   const promesa = new Promise((resolve) => {
       setTimeout(() => {resolve(`Completado`);
       }, preparationTime);
    }); 

    try {
        const result = await promise;
        updateOrderStatus(order, result);
    } catch (error) {
        console.error(`Error al procesar el pedido:`, error);
    }
}

async function obtenerDatos() {
    const respuesta = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Xdinary%20Heroes&api_key=dd7b5306b4f03d6bc80efde65febaebf&format=json
`);
    const datos = await respuesta.json();
    console.log(datos);
}

obtenerDatos();