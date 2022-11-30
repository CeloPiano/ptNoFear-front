import Classroom from '../Assets/Classroom.png'

function Login() {

    return(
      
      <div className="flex items-center justify-center pt-36">
        <div className = "flex flex-col">
          <img src = {Classroom} alt="Classroom" className=""/>
          <h1 className="font-inter text-[100px] font-[100] italic text-center pt-0">
            SOPT
          </h1>
          <div className="flex items-center justify-center pt-6">
            <button className="font-inter text-[20px] font-[400] text-center text-white px-7 py-1 box-content bg-button-color rounded-md">Entrar com o Google</button>
          </div>
        </div>
      </div>
    )
}

export default Login