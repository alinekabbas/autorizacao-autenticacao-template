import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { navigateToHome } from "../routes/coordinator"

export const CreateTripPage = () => {

    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    useEffect(() => {

        if(!token){
            navigateToHome(navigate)
        }
        const aluno = "darvas"
        const body = {
            name: "Ano novo em Mercúrio",
            planet: "Mercúrio",
            date: "31/12/2019",
            description: "Venha passar a virada pertinho do Sol!",
            durationInDays: 7
        }
        const header = {
            headers: {
                auth: token
            }
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`, body, header)
        .then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
        

    return (
        <main>
            <Header />
            <h1>Página para Criar Viagens</h1>
        </main>
    )
}