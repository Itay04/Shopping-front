import { useState } from "react"

function AddProduct({addProduct}) {
    const [productName, setProductName] = useState('aaa')
    const [productDescription, setProductDescription] = useState('aaa')
    const [productPrice, setProductPrice] = useState('')
    const [productReminder, setReminder] = useState(false)

    // python
    // taskName = 'aaa'
    // taskName = 'bbbb'

    // setTaskName('bbbb')

    function mySubmit(e) {
        e.preventDefault()
        setProductName(productName, productDescription, productPrice, productReminder)
        setProductDescription('')
        setProductPrice('')
        setReminder(false)
        
    }

    return (
        <form onSubmit={mySubmit} className="add-form">
            <div className="form-control">
                <label>Product Name</label>
                <input type="text" onChange={e => setProductName(e.target.value)} value={productName}></input>
            </div>
            <div className="form-control">
                <label>Product description</label>
                <input type="text" onChange={e => setProductDescription(e.target.value)} value={productDescription}></input>
            </div>
            <div className="form-control">
                <label>Product price</label>
                <input type="text" onChange={e => (e.target.value)} value={productPrice}></input>
            </div>
            <div className="form-control form-control-check">
                <label>Product reminder</label>
                <input type="checkbox" onChange={(e) => setReminder(e.currentTarget.checked)} checked={productReminder}></input>
            </div>
            <div className="form-control">
                <input className="btn btn-block" type="submit" value="Submit"></input>
            </div>
        </form>
    )
}

export default AddProduct