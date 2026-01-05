import{Link} from 'react-router-dom';
const Home1=()=>{
    return(
        <div>
            <nav>
                <ul>
                <li><Link to ='/'>Home</Link></li>
                <li><Link to ='/Regform'>Regform</Link></li> 
                <li><Link to ='/Login'>Login</Link></li> 
                   <li><Link to ='/Contact'>Contact</Link></li> 
                      <li><Link to ='/About'>About</Link></li> 
                </ul>
            </nav>
        </div>
    )
}
export default Home1;