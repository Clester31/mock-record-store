const personalAccessToken = 'rKyAEXMpXhtYiahLgyMOSCdLlhtkgLxdCaeSlwid';
const UserAgent = 'MyDiscogsClient/1.0 +http://mydiscogsclient.org';
import { v4 as uuidv4 } from 'uuid'

export const allItems = [
    {
        id: uuidv4(),
        album: 'Ghost of the Great Highway',
        category: 'On Sale',
        oldPrice: 24.99,
        salePrice: 14.99
    },
    {
        id: uuidv4(),
        album: 'Kid A',
        category: 'On Sale',
        oldPrice: 29.99,
        salePrice: 19.99
    },
    {
        id: uuidv4(),
        album: 'Lesser Matters',
        category: 'On Sale',
        oldPrice: 19.99,
        salePrice: 12.99
    },
    {
        id: uuidv4(),
        album: 'We Will Always Love You',
        category: 'On Sale',
        oldPrice: 26.99,
        salePrice: 14.99
    },
    {
        id: uuidv4(),
        album: 'To Pimp A Butterfly',
        category: 'On Sale',
        oldPrice: 29.99,
        salePrice: 21.99
    },
    {
        id: uuidv4(),
        album: 'Long Season',
        category: 'On Sale',
        oldPrice: 39.99,
        salePrice: 29.99
    },
    {
        id: uuidv4(),
        album: 'Dots and Loops',
        category: 'On Sale',
        oldPrice: 26.99,
        salePrice: 21.99
    },
    {
        id: uuidv4(),
        album: 'First Band on The Moon',
        category: 'On Sale',
        oldPrice: 28.99,
        salePrice: 22.99
    },
    {
        id: uuidv4(),
        album: 'Lives Outgrown',
        category: 'New Arrivals',
        oldPrice: 24.99,
        salePrice: 24.99
    },
    {
        id: uuidv4(),
        album: 'Once Twice Melody',
        category: 'New Arrivals',
        oldPrice: 29.99,
        salePrice: 29.99
    },
    {
        id: uuidv4(),
        album: 'That! Feels Good!',
        category: 'New Arrivals',
        oldPrice: 19.99,
        salePrice: 19.99
    },
    {
        id: uuidv4(),
        album: 'Ooh Rap I Ya',
        category: 'New Arrivals',
        oldPrice: 26.99,
        salePrice: 26.99
    },
    {
        id: uuidv4(),
        album: 'Quaranta',
        category: 'New Arrivals',
        oldPrice: 29.99,
        salePrice: 29.99
    },
    {
        id: uuidv4(),
        album: 'Ants From Up There',
        category: 'New Arrivals',
        oldPrice: 39.99,
        salePrice:  39.99
    },
    {
        id: uuidv4(),
        album: 'The Forever Story',
        category: 'New Arrivals',
        oldPrice: 26.99,
        salePrice: 26.99
    },
    {
        id: uuidv4(),
        album: 'Blue Rev',
        category: 'New Arrivals',
        oldPrice: 28.99,
        salePrice: 28.99
    },
    {
        id: uuidv4(),
        album: 'The Velvet Underground & Nico',
        category: 'Classics',
        oldPrice: 34.99,
        salePrice: 34.99
    },
    {
        id: uuidv4(),
        album: 'Abbey Road',
        category: 'Classics',
        oldPrice: 28.99,
        salePrice: 28.99
    },
    {
        id: uuidv4(),
        album: 'Enter the Wu-Tang (36 Chambers)',
        category: 'Classics',
        oldPrice: 24.99,
        salePrice: 24.99
    },
    {
        id: uuidv4(),
        album: 'Loveless',
        category: 'Classics',
        oldPrice: 20.99,
        salePrice: 20.99
    },
    {
        id: uuidv4(),
        album: 'The Low End Theory',
        category: 'Classics',
        oldPrice: 22.99,
        salePrice: 22.99
    },
    {
        id: uuidv4(),
        album: 'In The Court of the Crimson King',
        category: 'Classics',
        oldPrice: 31.99,
        salePrice: 31.99
    },
    {
        id: uuidv4(),
        album: 'Remain in Light',
        category: 'Classics',
        oldPrice: 21.99,
        salePrice: 21.99
    },
    {
        id: uuidv4(),
        album: 'A Love Supreme',
        category: 'Classics',
        oldPrice: 20.99,
        salePrice: 20.99
    },
    {
        id: uuidv4(),
        album: 'OK Computer',
        category: 'Popular',
        oldPrice: 24.99,
        salePrice: 24.99
    },
    {
        id: uuidv4(),
        album: 'good kid, m.A.A.d city',
        category: 'Popular',
        oldPrice: 29.99,
        salePrice: 29.99
    },
    {
        id: uuidv4(),
        album: 'Whatever People Say I Am, Thats What im not',
        category: 'Popular',
        oldPrice: 28.99,
        salePrice: 28.99
    },
    {
        id: uuidv4(),
        album: 'Dark Side of the Moon',
        category: 'Popular',
        oldPrice: 19.99,
        salePrice: 19.99
    },
    {
        id: uuidv4(),
        album: 'Flower Boy',
        category: 'Popular',
        oldPrice: 25.99,
        salePrice: 25.99
    },
    {
        id: uuidv4(),
        album: 'Some Kind of Blue Miles Davis',
        category: 'Popular',
        oldPrice: 23.99,
        salePrice: 23.99
    },
    {
        id: uuidv4(),
        album: 'The New Abnormal',
        category: 'Popular',
        oldPrice: 21.99,
        salePrice: 21.99
    },
    {
        id: uuidv4(),
        album: 'Stratosphere Duster',
        category: 'Popular',
        oldPrice: 29.99,
        salePrice: 29.99
    },
]

export async function fetchAlbumID(albumName) {
    const url = `https://api.discogs.com/database/search?q=${encodeURIComponent(albumName)}&type=release`;
    try {
        const response = await fetch(url, {
            mode: 'cors',
            headers: {
                'User-Agent': UserAgent,
                'Authorization': `Discogs token=${personalAccessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const album = data.results[0];
        return album.id;
    } catch (error) {
        console.error("Error fetching album ID", error);
        return null;
    }
}

export async function fetchAlbumDetails(albumID) {
    const url = `https://api.discogs.com/releases/${albumID}`;
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': UserAgent,
                'Authorization': `Discogs token=${personalAccessToken}`
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching album details", error);
        return null;
    }
}