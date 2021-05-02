import { showSuccess, showError } from "../../utils/alert";

import "./style.css";

export class Login {
  constructor(onSuccess) {
    this.onSuccess = onSuccess;
    this.initialize();
  }

  initialize() {
    const layout = `
      </br></br></br></br>
      <div class="row login">
        <div class="col s6 offset-s3">
          <div class="card">
            <div class="card-action white">
              <h3 class="center-align">Login</h3>
              
            </div>
            <div class="card-content">
              <div class="form-field">
                <label for="username">Usuário</label>
                <input type="text" id="username" class="validate" autocomplete="off"/>
              </div>
              <br />
              <div class="form-field">
                <label for="password">Senha</label>
                <input type="password" id="password" />
              </div>
              <br />
              <div class="form-field center-align">
                <button id="btnLogin" class="btn-large indigo darken-1" type="submit">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    $("#root").append(layout);

    $("#btnLogin").click(() => {
      const login = $("#username").val();
      const password = $("#password").val();

      if (login.trim() == "" || password.trim() == "") {
        showError("Informe o usuário e a senha.");
        return;
      } else if (login == "meta" && password == "meta") {
        this.onSuccess();
      } else {
        showError("Usuário ou senha inválido.");
        return;
      }
    });
  }
}
