import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ()=>{
    return (
        <div className='home'> 
           <Header />
           <div className="content">
                <h1>Welcome to IIT Delhi - HMP</h1>
                <p> A Hostel Management Portal web app.</p>
            </div>
           <Footer />

        </div>
         
    )
}

export default Home