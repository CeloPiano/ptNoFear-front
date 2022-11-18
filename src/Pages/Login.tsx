import PlusButton from '../Components/PlusButton'
import PLACEHOLDER from '../Assets/PLACEHOLDER.png'

function Login() {

    return(
        <div>
          <img src = {PLACEHOLDER} alt="Placeholder" className="absolute top-[180px] left-[435px]"/>
          <h1 className="font-['Inter'] text-[100px] font-[100] italic text-center absolute top-[631px] left-[581px]">
            SOPT
          </h1>
          <button className="font-['Inter'] text-[20px] font-[400] text-center text-white absolute top-[791px] left-[569px] px-7 py-2 box-content bg-button-color rounded-md">Entrar com o Google</button>
        </div>
    )
}

export default Login