import single from "../assets/single.png"
import double from "../assets/double.png"
import triple from "../assets/triple.png"


const Trials = () => {
    return (
    <section className="trials">
        <div className="container">
            <div className="card single">
                <img src={single} alt="" />
                <h3>Single User</h3>
                <div className="price">$149</div>
                <div className="features">
                    <p className="feature">500 GB Storage</p>
                    <p className="feature">1 Granted User</p>
                    <p className="feature">Send up to 2 GB</p>
                </div>
                <button className="btn green">Start Trial</button>
            </div>
            <div className="card double">
            <img src={double} alt="" />
                <h3>Single User</h3>
                <div className="price">$149</div>
                <div className="features">
                    <p className="feature">500 GB Storage</p>
                    <p className="feature">1 Granted User</p>
                    <p className="feature">Send up to 2 GB</p>
                </div>
                <button className="btn black">Start Trial</button>
            </div>
            <div className="card triple">
            <img src={triple} alt="" />
                <h3>Single User</h3>
                <div className="price">$149</div>
                <div className="features">
                    <p className="feature">500 GB Storage</p>
                    <p className="feature">1 Granted User</p>
                    <p className="feature">Send up to 2 GB</p>
                </div>
                <button className="btn green">Start Trial</button>
            </div>
        </div>
    </section>
    )
}

export default Trials