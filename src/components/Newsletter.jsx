
const Newsletter = () => {
    return (
    <section className="newsletter bg-black">
        <div className="container">
            <div className="left">
                <h2>Want tips & tricks to optimize your flow?</h2>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className="right">
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Entre Email"/>
                    <button className="btn green">Notify Me</button>
                </form>
                <p>We care bout the protection of your data. Read our <span className="green">Privacy Policy.</span></p>
            </div>
        </div>
    </section>
    )
}

export default Newsletter