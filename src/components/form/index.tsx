import { InputLogin } from "../input-login";
import { Form } from "./form.styled";

export const Forme = () => {
  return (
    <Form>
      <header>
        <h1>Criar Conta</h1>
        <p>
          Tenha acesso a uma grande variedade de entretenimento em qualquer
          lugar, a qualquer momento.
        </p>
      </header>
      <div className="nome">
        <InputLogin
          label="Nome"
          type="text"
          id="nome"
          placeholder="Nome"
          width={92}
        />
        <InputLogin
          label="Sobrenome"
          type="text"
          id="sobrenome"
          placeholder="Sobrenome"
          width={100}
        />
      </div>
      <InputLogin
        label="E-mail"
        type="email"
        id="email"
        placeholder="E-mail"
        width={100}
      />
      <InputLogin
        label="Senha"
        type="password"
        id="senha"
        placeholder="Senha"
        width={100}
      />
      <input type="submit" value="Criar Conta" />
    </Form>
  );
};
