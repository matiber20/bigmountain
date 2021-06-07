import db from '../firebase/index'


const itemsCollection = db.collection('items');

const ordersCollection = db.collection('orders')

export async function getItems(){
    const docRef = await itemsCollection.get()
     const items = docRef.docs.map(doc => {
                return {id: doc.id,...doc.data()}
            })
            return items;
        }

export function getItemsById(){
    return itemsCollection.get()
    .then(snapshot => {
        return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))})
}

export function getOrders(){
    return ordersCollection.get()
    .then(snapshot => {
        return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))})
}

export function creatOrder(order){
    ordersCollection.add(order)
}

export function deleteOrder(id){
    ordersCollection.doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
        window.location.reload(false);
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
    
    //BORRAR ORDEN USANDO EL ID DEL DOC DE LA COLLECCION
    //SERIA EL EDITAR, BOTON EDITAR LISTA
}

export async function controlStock(data,id,item) {
    itemsCollection.doc(id).set({
        categoryId: item.categoryId,
        description: item.description,
        image: item.image,
        price: item.price,
        stock: item.stock - data,
        title: item.title
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}

export async function cancel(data,id,item,cart) {
    itemsCollection.doc(id).set({
        categoryId: item.categoryId,
        description: item.description,
        image: item.image,
        price: item.price,
        stock: item.stock,
        title: item.title
    })
    .then(() => {
        cart = false
        console.log("Document successfully written!");
        window.location.reload(false);

    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}

export async function purchase(){
    //BORRAR COLLECCION ORDERS DE FIREBASE
    const docRef = await ordersCollection

    return docRef.get()
    .then(snapshot => {
        return snapshot.docs.map((doc) => (deleteOrder(doc.id)))})
}
