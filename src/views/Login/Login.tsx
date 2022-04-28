import { Forme } from "../../components/form";
import { Menu } from "../../components/menu-login";
import { Loginn } from "./login.styled";

export default function Login(){
    return (
        <Loginn>
            <Menu/>
            <section>
                <div className="apresentacao">
                    <h1>CURTA OS MELHORES CAMPEONATOS DE FUTEBOL <span>SEM SAIR DE CASA!</span> </h1>
                    <hr />
                    <h3>Com o <span>APITO FINAL</span> você faz isso de graça!</h3>
                    <button>Cadastre-se</button>
                </div>
            </section>
            <Forme/>
        </Loginn>
    );
}