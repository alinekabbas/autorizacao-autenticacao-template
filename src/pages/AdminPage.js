import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { navigateToHome } from "../routes/coordinator";

function AdminPage() {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  useEffect(()=>{

    if(!token){
      navigateToHome(navigate)
    }

    const aluno = "darvas"
    const id = "3bUbdB1gvPzWrThpazVC"
    const header = {
      headers:{
        auth: token
      }
    }
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/${id}`, header)
    .then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  return (
    <main>
      <Header />
      <h1>Página de Admin</h1>
    </main>
  );
}

export default AdminPage;
