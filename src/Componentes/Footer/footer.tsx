import { useNavigate } from "react-router-dom";
import './footer.css'
import prevIcon from '../../../public/prevIcon.png'
import rotasIcon from '../../../public/rotasIcon.png'
import homeIcon from '../../../public/homeIcon.png'
import chatIcon from '../../../public/chatIcon.png'

function Footer() {
    const navigate = useNavigate();

    function handleClick(url: string) {
      navigate(url);
    }
    return (
        <footer >
             <button onClick={()=>{handleClick('/CadeCircularUfjf/')}}>
                <img  className = 'Footerimg'src={homeIcon}></img>
            </button>
            <button onClick={()=>{handleClick('/CadeCircularUfjf/rotas')}}>
            <img  className = 'Footerimg'src={rotasIcon}></img>
            </button>
            <button onClick={()=>{handleClick('/CadeCircularUfjf/previsoes')}}>
                <img  className = 'Footerimg'src={prevIcon}></img>
            </button>
            <button onClick={()=>{handleClick('/CadeCircularUfjf/chat')}}>
                <img  className = 'Footerimg'src={chatIcon}></img>
            </button>


        </footer>
    )
}

export default Footer
