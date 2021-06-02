import db from '../firebase/index'

const itemsCollection = db.collection('items');

const ordersCollection = db.collection('orders')

// const categoriasCollection = db.collection('categorias');

export function getItems(){
    return itemsCollection.get()
        .then(snapshot => {
            return snapshot.docs.map(doc => {
                return {id: doc.id,...doc.data()}
            })
        })
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

export function deleteOrder(){
    //BORRAR ORDEN USANDO EL ID DEL DOC DE LA COLLECCION
    //SERIA EL EDITAR, BOTON EDITAR LISTA
}


export function purchase(){
    //BORRAR COLLECCION ORDERS DE FIREBASE
}
