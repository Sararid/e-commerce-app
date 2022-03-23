
const api = () => {
    return (
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(response => {

                const result = response

                    .map(item => {
                        return {
                            id: item.id,
                            title: item.title,
                            description: item.description,
                            price: parseInt(item.price),
                            image: item.image,
                            category: item.category
                        }

                    });
                return result
            })
            .catch(error => { console.log('err', error) })


    )
}

export default api
