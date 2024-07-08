import './Styles/Home.css'
import { allItems, fetchAlbumID, fetchAlbumDetails } from '../AlbumData'
import { articles } from '../Articles';
import { imageGallery } from '../GalleryImages';
import { useEffect, useState, useContext } from 'react'
import Footer from '../components/Footer';
import { Context } from '../Context';

export default function Home() {
    return (
        <div className="home">
            <PromotedItemList />
            <Blog />
            <About />
            <Gallery />
            <Footer type={'not-fixed'} />
        </div>
    )
}

function PromotedItemList() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [onSale, setOnSale] = useState([]);
    const { addToCart } = useContext(Context);

    useEffect(() => {
        setOnSale(allItems.filter((album) => album.category === "On Sale"));
    }, []);


    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }

    const handleNext = () => {
        setCurrentIndex((next) => Math.min(next + 1, onSale.length - 4));
    }

    return (
        <div className="promoted-item-list">
            <h1>Promoted Items</h1>
            <div className="items">
                <i className="fa-solid fa-arrow-left" onClick={handlePrev} style={
                    currentIndex === 0 ?
                        { color: 'gray' } :
                        { color: 'black' }
                }></i>
                {onSale.slice(currentIndex, currentIndex + 4).map((album, i) => {
                    return <PromotedItem key={album.id} albumName={album.album} oldPrice={album.oldPrice} salePrice={album.salePrice} addToCart={addToCart} />
                })}
                <i className="fa-solid fa-arrow-right" onClick={handleNext} style={
                    currentIndex === onSale.length - 4 ?
                        { color: 'gray' } :
                        { color: 'black' }
                }></i>
            </div>
            <hr />
        </div>
    )
}

function PromotedItem({ key, albumName, oldPrice, salePrice, addToCart }) {
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

    const handleClick = (albumName) => {
        addToCart(albumName);
        console.log(getTotalPrice());
    }

    if (!album) {
        return (
            <div className="promoted-item">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/1200px-Error.svg.png' alt="" />
                <h3>error</h3>
                <h6>error</h6>
            </div>
        )
    }

    return (
        <div className="promoted-item">
            <div className="item-contents">
                <img src={album.images[0].uri} alt="" />
                <h3>{album.title}</h3>
                <h6>{album.artists[0].name}</h6>
                <p>{oldPrice !== salePrice ? `$${salePrice}` : ''} <span className='old-price' style={oldPrice !== salePrice ? { textDecoration: 'line-through', color: 'gray' } : {}}>{`$${oldPrice}`}</span></p>
            </div>
            <div className="checkout-btn">
                <button onClick={() => handleClick(albumName)}>Add to Cart</button>
            </div>
        </div>
    )
}

function Blog() {
    return (
        <div className="blog">
            <h1 className='blog-header'>VinylGeeks Blog</h1>
            <div className="blog-content">
                {articles.map((article, i) => {
                    return <Article key={article.id} title={article.title} subtitle={article.subtitle} img={article.image} />
                })}
            </div>
            <button>Read More</button>
            <hr />
        </div>
    )
}

function Article({ title, subtitle, img, }) {
    return (
        <div className="article">
            <div className="left">
                <img src={img} alt="" />
            </div>
            <div className="right">
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

function About() {
    return (
        <div className="about">
            <h1>Who Are We?</h1>
            <p>VinylGeeks began in December 1991 as a small corner store called 'Pete's Records' in East Atlanta, named after it's owner Peter Bunting. Since then, we've grown to include 14 physical locations across the United States, an online store, and our own record label. Today, our mission is to preserve the timeless appeal of vinyl records and make them more accessible to new hobbyists and enthusiasts alike.</p>
            <hr style={{ marginTop: '20px' }} />
        </div>
    )
}

function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxItems = 4;

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 4, 0));
    }

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 4, imageGallery.length - maxItems));
    }

    return (
        <div className="gallery">
            <div className="gallery-heading">
                <h1>Gallery</h1>
            </div>
            <div className="buttons">
                <i className="fa-solid fa-arrow-left" onClick={handlePrev} style={
                    currentIndex === 0 ?
                        { color: 'gray' } :
                        { color: 'black' }
                }></i>
                <i className="fa-solid fa-arrow-right" onClick={handleNext} style={
                    currentIndex === imageGallery.length - 4 ?
                        { color: 'gray' } :
                        { color: 'black' }
                }></i>
            </div>
            <div className="image-gallery">
                {imageGallery.slice(currentIndex, currentIndex + maxItems).map((image, i) => {
                    return <GalleryImage key={i} image={image} />
                })}
            </div>
        </div>
    )
}

function GalleryImage({ image }) {
    return (
        <div className="gallery-image">
            <img src={image} />
        </div>
    )
}