import './LoginPage.css';
import Logo from '../../assets/logo.jpg'

export default function LoginPage({prpSetEmail, prpSetPassword, prpValidate}){

    return(
        <div id="wrapper">
        <img src={Logo} alt="Logo" />

        <h1>Log in</h1>    
        <input type="text" name="name" placeholder="Enter your email" onChange={e => prpSetEmail(e.target.value)}/>
        
        <br />
        <input type="password" name="password" placeholder="Enter your password" onChange={e => prpSetPassword(e.target.value)}/>

        <button onClick={() => prpValidate()}>Login</button>
        </div>
    )
}