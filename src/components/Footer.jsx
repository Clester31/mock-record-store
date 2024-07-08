const notFixed = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '10px',
    fontSize: '18px'
}

const fixed = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0
}

export default function Footer({ type }) {
    return (
        <div className="footer" style={type === 'fixed' ? fixed : notFixed}>
            <hr style={{marginTop: '20px'}} />
            <p style={notFixed}>Website for demonstration purposes only - Christian Lester 2024</p>
        </div>
    )
}