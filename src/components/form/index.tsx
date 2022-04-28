import { Form } from "./form.styled";

export const Forme = ()=>{
    return(
        <Form>
            <header>
                <h1>Criar Conta</h1>
                <p>Tenha acesso a uma grande variedade de entretenimento em qualquer lugar, a qualquer momento.</p>
            </header>
            <div className="nome">
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" placeholder="Nome" required/>
                </div>
                <div>
                    <label htmlFor="sobrenome">Sobrenome</label>
                    <input type="text" id="sobrenome" placeholder="Sobrenome" required/>
                </div>
            </div>
            <div className="dados">
                <div>
                    <label htmlFor="email">Endereço de Email</label>
                    <input type="email" id="email" placeholder="Email" required/>
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" placeholder="Senha" required/>
                </div>
            </div>
            <input type="submit" value="Criar Conta" />
        </Form>
    );
}