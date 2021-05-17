import db from '../firebase/index'

const itemsCollection = db.collection('items');
// const usuariosCollection = db.collection('usuarios')

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
