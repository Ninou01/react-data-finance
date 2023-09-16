import laptop from '../assets/laptop.jpg'

const Dashboard = () => {
    return (
    <section className="dashboard">
        <div className="container">
          <div className="left">
            <img src={laptop} alt="" />
          </div>
          <div className="right">
            <h4>DATA ANALYTICS DASHBOARD</h4>
            <h2>Manage Data Analytics Centrally</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Voluptatum molestiae delectus culpa hic assumenda, 
              voluptate reprehenderit dolore autem cum ullam sed 
              odit perspiciatis. Doloribus quos velit, 
              eveniet ex deserunt fuga?
            </p>
            <button className="btn black">Get Started</button>
          </div>
        </div>
    </section>
    )
}

export default Dashboard