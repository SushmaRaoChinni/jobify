import main from '../assets/images/main-alternative.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import {Logo} from '../components'
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <Wrapper>
        <nav>  
        <Logo/>
        </nav> 
        <div class="container page">
            <div className='info'>
                <h1>job <span>tracking</span> App</h1>
                <p>
                I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
              bottle single-origin coffee chia. Aesthetic post-ironic venmo,
              quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
              narwhal.
                </p>
                <Link to="/register" className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src={main} class="img main-img" alt="job Hint"/>
        </div>
        
    </Wrapper>
  )
}


export default Landing