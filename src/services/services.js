import db from '../firebase/index'

const itemsCollection = db.collection('items');

// const categoriasCollection = db.collection('categorias');

export function getItems(){
    return itemsCollection.get()
        .then(snapshot => {
            return snapshot.docs.map(doc => doc.data())
        })
    }

export function getItemsById(itemId){
        return new Promise((resolve,reject) => {
            fetch(`https://jsonplaceholder.typicode.com/users/${itemId}`)
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err))
        })}

    