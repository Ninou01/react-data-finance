import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className="footer bg-black">
            <div className="container">
                <div className="left">
                    <div className="logo">React.</div>
                    <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Id odit ullam iste repellat consequatur libero reiciendis, 
                        blanditiis accusantium.
                    </p>
                    <ul className="social">
                        <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
                        <FontAwesomeIcon icon="fa-brands fa-instagram" />
                        <FontAwesomeIcon icon="fa-brands fa-square-twitter" />
                        <FontAwesomeIcon icon="fa-brands fa-square-github" />
                        <FontAwesomeIcon icon="fa-brands fa-square-dribbble" />
                    </ul>
                </div>
                <div className="right">
                    <div>
                        <ul>
                            <li className="title">Solutions</li>
                            <li>Analytics</li>
                            <li>Marketing</li>
                            <li>Commerce</li>
                            <li>Insights</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="title">Support</li>
                            <li>Pricing</li>
                            <li>Documentation</li>
                            <li>Guides</li>
                            <li>API Status</li> 
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="title">Company</li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Jobs</li>
                            <li>Press</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="title">Legal</li>
                            <li>Claim</li>
                            <li>Policy</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer





