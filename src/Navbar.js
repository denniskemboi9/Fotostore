import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>FOTOSTORE</h1>
      <div className="links">
        <Link to="/"style={{ 
          color: 'black'}}>Home</Link>
                  <Link to="/help"style={{ 
          color: 'black'}}>How to upload ?</Link>
        <Link to="/upload" style={{ 
          color: ' #000' , 
          backgroundColor: '#DDA0DD',
          borderRadius: '8px' ,
          border:'solid'
          
        }}>Upload</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;