import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const CheckoutButton = ({ cartItems, setCartItems }) => {

    const navigate = useNavigate()
    const handleCheckout = () => {
        if (cartItems.length > 0) {

            toast.success("Compra finalizada com sucesso")

            navigate("/thank-you", { state: { cartItems } })
            setCartItems([]);


        } else {
            toast.error("Seu carrinho está vazio")
        }
    }

    return (
        <div>
            <button onClick={handleCheckout}>finalizar compra</button>
        </div>
    )
}

export default CheckoutButton