const getStoredReadBooks = () => {
    const storedBooks = localStorage.getItem('read-books');
    if(storedBooks){
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveReadBooks = id => {
    const storedBooks =  getStoredReadBooks();
    const exist = storedBooks.find(bookID => bookID === id)
    if(!exist){
        storedBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedBooks))
    }
}

const getStoredWishBooks = () => {
    const storedBooks = localStorage.getItem('wish-books');
    if(storedBooks){
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveWishBooks = id => {
    const storedBooks =  getStoredWishBooks();
    const exist = storedBooks.find(bookID => bookID === id)
    if(!exist){
        storedBooks.push(id);
        localStorage.setItem('wish-books', JSON.stringify(storedBooks))
    }
}
const getStoredSortData = () => {
    const storedBooks = localStorage.getItem('sort-books');
    if(storedBooks){
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveShortData = id => {
    const storedBooks =  getStoredSortData();
    const exist = storedBooks.find(bookID => bookID === id)
    if(!exist){
        storedBooks.push(id);
        localStorage.setItem('sort-books', JSON.stringify(storedBooks))
    }
}
export { getStoredReadBooks, saveReadBooks ,getStoredWishBooks, saveWishBooks, getStoredSortData, saveShortData}