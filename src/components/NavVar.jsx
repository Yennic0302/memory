import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillCalendar3RangeFill } from "react-icons/bs";
import './NavVar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MemoryNavBar({setSeeHistory,seeBtnHistory}) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
						<h1 style={{fontSize: "2rem"}}>Memory</h1>
					</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
        <button 
        className='btn-history'
        style={seeBtnHistory?{display: 'block'}:{display: "none"}} 
        onClick={()=>setSeeHistory(true)}> <BsFillCalendar3RangeFill/> </button>
      </Navbar>
    </>
  );
}

export default MemoryNavBar;