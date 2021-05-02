import "./style.css";
import { Modal } from "../modal";
import { Table } from "../table";

export class Home {
  constructor() {
    this.checked = true;
    this.initialize();
  }

  initialize() {
    $("body").css("background-image", "none").addClass("has-fixed-sidenav");

    $("#root").empty();
    $("<div/>").attr("id", "home").appendTo("#root");

    this.drawNavBar();
    this.createHeader();
    this.createTable();
    this.checkVersion();
  }

  drawNavBar() {
    const navBar1 = `
    <nav>
      <div class="nav-wrapper  light-blue lighten-1">
        <a href="https://www.meta.com.br/" target="_blank" class="brand-logo">Meta</a>
      </div>
    </nav>
    `;

    $("header").append(navBar1);

    $("#mainMenu").empty();
  }

  createHeader() {
    let html = `
    <div class="row">
      <div class="row">
        <h2 class="grey-text">Cadastro de Pessoas</h1>
      </div>
      <p>
        <label>
          <input id="version" type="checkbox" checked="checked"/>
        </label>
      </p>
      <div class="row">
        <div class="form-field center-align">
          <button id="btnAdd" class="btn-large indigo darken-1 left" type="submit">Adicionar</button>
        </div>
      </div>
    </div>`;

    $("#home").append(html);

    let that = this;

    $("#btnAdd").click(() => {
      new Modal({
        title: "Adicionar Pessoa",
        method: "POST",
      });
      $("select").formSelect();
    });
  }

  createTable() {
    new Table();
  }

  checkVersion() {
    $("#version").change(function () {
      this.checked
        ? $("#gridRegisters").removeClass("v1")
        : $("#gridRegisters").addClass("v1");
    });
  }
}
