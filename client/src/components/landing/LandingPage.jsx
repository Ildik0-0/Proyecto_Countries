import {NavLink} from 'react-router-dom'

const LandingPage = ()  =>{
    return (
        <>

            <h1>HOLA LandingPage</h1>

            
            <button>
                <NavLink to='/home'> HOME </NavLink>
            </button>
        
        </>
    )
}

export default LandingPage;