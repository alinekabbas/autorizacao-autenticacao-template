import { useNavigate } from "react-router-dom";
import { navigateToAdmin, navigateToHome, navigateToCreateTrip } from "../routes/coordinator";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <button onClick={() => navigateToHome(navigate)}>
        Ir para página inicial
      </button>
      <button onClick={() => navigateToAdmin(navigate)}>
        Ir para página de admin
      </button>
      <button onClick={() => navigateToCreateTrip(navigate)}>
        Criar viagens
      </button>
    </header>
  );
}

export default Header;
