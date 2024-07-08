import './Styles/Store.css';
import { useState, useEffect } from 'react';
import { fetchAlbumID, fetchAlbumDetails } from '../AlbumData';
import { useContext } from 'react';
import { Context } from '../Context';
import Footer from '../components/Footer';

export default function Store({ shopCategory, banner }) {
    return (
        <div className="store">
            <h1>{banner}</h1>
            <AlbumList shopCategory={shopCategory} banner={banner}/>
            <Footer type={'not-fixed'} />
        </div>
    );
}

function AlbumList({ shopCategory, banner }) {
    const [category, setCategory] = useState([]);
    const {addToCart, getTotalPrice} = useContext(Context);

    useEffect(() => {
        setCategory(shopCategory.filter((album) => album.category === String(banner)));
    }, [banner, shopCategory]);

    const handleClick = (albumName) => {
        addToCart(albumName);
        console.log(getTotalPrice());
    }

    return (
        <div className="album-list">
            {category.map((album) => {
                return <Album key={album.id} albumName={album.album} oldPrice={album.oldPrice} salePrice={album.salePrice} onClick={handleClick}/>
            })}
        </div>
    )
}

function Album({ albumName, oldPrice, salePrice, onClick }) {
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
    }, [albumName]);

    if (!album) {
        return (
            <div className="album">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/1200px-Error.svg.png" alt="Error" />
                <h3>Error</h3>
                <h6>Error</h6>
            </div>
        );
    }

    return (
        <div className="album">
            <img src={album.images[0].uri} alt="" />
            <h3>{album.title}</h3>
            <h6>{album.artists[0].name}</h6>
            <p>{oldPrice !== salePrice ? `$${salePrice}` : ''} <span className="old-price" style={oldPrice !== salePrice ? { textDecoration: 'line-through', color: 'gray' } : {}}>{`$${oldPrice}`}</span></p>
            <button onClick={() => onClick(albumName)}>Add to Cart</button>
        </div>
    );
}
