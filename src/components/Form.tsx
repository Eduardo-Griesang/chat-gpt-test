export default function Form ({now, set}: any) {

    const lastId = now.length

    function addProduct (e:any) {
        e.preventDefault()

        const buildNewProduct = {
            id: lastId + 1, 
            price: e.target[2].value,
            name: e.target[0].value,
            category: e.target[1].value,
            inStock: e.target[3].value
        }

        set([...now, buildNewProduct])
    }

    return (
        <form onSubmit={(e) => addProduct(e)}>
            <input placeholder="Name" type="text" required />
            <input placeholder="category" type="text" required />
            <input placeholder="price" type="number" required />
            <select>
                <option value="true">yes</option>
                <option value="false">no</option>
            </select>
            <input type="submit" />
        </form>
    )
}