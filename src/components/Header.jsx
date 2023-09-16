import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

    return (
    <header className="bg-black">
        <div className="container">
        <span className="logo">React.</span>
        {isMobile && 
        <button className="hamburger" onClick={toggleSidebar}>
            {sidebarOpen ? 
            <FontAwesomeIcon icon={faX} /> : 
            <FontAwesomeIcon icon={faBars} />}
        </button>
        }
        <nav className={`${isMobile ? "sidebar" : ""} ${sidebarOpen ? "show": ""}`}>
            {isMobile && 
            <span className="logo">React.</span>}
            <ul>
            <li>Home</li>
            <li>Company</li>
            <li>Resources</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
        </nav>
        </div>
    </header>
    )
}

export default Header