// import './LoginPage.css';
import Logo from '../assets/pylearnLogo.png'

export default function LoginPage({prpSetEmail, prpSetPassword, prpValidate, prpInvalidMessage}){

    return(
        <div class="loginPage">
        <img src={Logo} alt="Logo" className="logo" />

        <h1>Log in</h1>    
        <input type="text" name="name" placeholder="Email" onChange={e => prpSetEmail(e.target.value)} />
        <br />
        <input type="password" name="password" placeholder="••••••••••" onChange={e => prpSetPassword(e.target.value)} />
        <p>{prpInvalidMessage}</p>

        <button onClick={() => prpValidate()}>Login</button>
        </div>
    )
}