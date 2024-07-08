import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";
import { fetchAlbumID, fetchAlbumDetails } from "../AlbumData";
import './Styles/Cart.css';
import Footer from "../components/Footer";

export default function Cart() {
    const { cart, getTotalPrice, removeFromCart, removeAllFromCart } = useContext(Context);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setTotalPrice(getTotalPrice());
    }, [cart, getTotalPrice]);

    const handleRemove = (albumName) => {
        removeFromCart(albumName);
    }

    const redirectHome = () => {
        removeAllFromCart();
        navigate("/");
    }

    return (
        <div className="cart">
            {cart.map((album, index) => (
                <CheckoutItem key={index} albumName={album.album} itemPrice={album.salePrice} handleRemove={handleRemove} />
            ))}
            {cart.length > 0 ? <p>Total Price: <strong>${totalPrice.toFixed(2)}</strong></p> : <p className="empty-cart-text">Cart is empty :(</p> }
            {cart.length > 0 ? <CheckoutOptions handleRedirect={redirectHome} /> : ''}
            <Footer type={'fixed'}/>
        </div>
    );
}

function CheckoutItem({ albumName, itemPrice, handleRemove }) {
    const [album, setAlbum] = useState(null);

    useEffect(() => {
        async function getAlbumInfo() {
            const albumID = await fetchAlbumID(albumName);
            if (albumID) {
                const albumDetails = await fetchAlbumDetails(albumID);
                setAlbum(albumDetails);
            }
        }
        getAlbumInfo();
    }, [albumName])

    if (!album) {
        return (
            <div className="checkout-item">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="checkout-item">
            <img src={album.images[0].uri} alt={album.title} />
            <p>{album.title}</p>
            <p>{album.artists[0].name}</p>
            <p>${itemPrice}</p>
            <button onClick={() => handleRemove(albumName)}>Remove</button>
        </div>
    );
}

function CheckoutOptions({ handleRedirect }) {
    return (
        <div className="checkout-options">
            <button onClick={handleRedirect}>Check Out</button>
        </div>
    );
}
