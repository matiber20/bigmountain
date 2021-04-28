function getItems(){
    return new Promise((resolve,reject)=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data=> resolve(data))
        .catch(err=>reject(err))
    })}

function getItemsById(itemId){
        return new Promise((resolve,reject) => {
            fetch(`https://jsonplaceholder.typicode.com/photos/${itemId}`)
            .then(res=>res.json())
            .then(data=>resolve(data))
            .catch(err=>reject(err))
        })}
    
    module.exports = {
        getItems,
        getItemsById,
    }    
        
    