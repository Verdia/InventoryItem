import React from "react";

class Dashboard extends React.Component {
  /*componentDidMount() {
    var form = document.getElementById("formLogin");
    form.addEventListener("submit", event => {
      const email = document.getElementById("ed_email").value,
        password = document.getElementById("ed_password").value;

      console.log("email : ", email);
      console.log("password : ", password);
      event.preventDefault();
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `email=${email}&password=${password}`
      }).then(response => {
          console.log("Password is",response.ok)
      });
    });
  }*/

  render() {
    return (
      <React.Fragment>
        <nav style={{ display: "flex", width: "100%" }} className="nav">
          <div>
            <a href="../Dashboard">
              <img src="static/src/Logo_petro.png" className="logo" />
            </a>
          </div>
          <div
            style={{ justifySelf: "flex-end", width: "50%" }}
            className="text"
          >
            <a href="../Login" className="login">
              Login
            </a>
            <a href="../DaftarBarang" className="daftarBarang">
              Daftar Barang
            </a>
            <a href="../Panduan" className="panduan">
              Panduan
            </a>
          </div>
        </nav>

        <h1 className="welcome">WELCOME TO</h1>
        <h1 className="sistem">SISTEM INVENTARIS BARANG</h1>
        <h1 className="pt">PT. PETROKIMIA GRESIK</h1>
        <style jsx global>{`
          body {
            background: #3ec400;
            font-family: "Open Sans", sans-serif;
            margin: 0 auto;
          }

          div {
            margin: 0 auto;
            display: block;
          }

          main {
            display: grid;
            grid-template-columns: 1fr 1fr;
            font-family: "Open Sans", sans-serif;
          }

          .logo {
            width: 50%;
            margin: 0;
            margin-left: 25px;
            margin-top: 3%;
          }

          .welcome{
            margin: 0 auto;
            margin-top: 12%;
            font-size: 50px;
            color: white;
            text-align: center;
          }

          .sistem{
            margin: 0 auto;
            font-size: 50px;
            color: white;
            text-align: center;
          }

          .pt{
            margin: 0 auto;
            font-size: 50px;
            color: white;
            text-align: center;
          }

          .nav {
            background: white;
            margin: 0;
          }

          .login {
            margin-left: 15%;
            margin-right: 5%;
            font-size: 25px;
            margin-top: 0%;
            text-decoration: none;
            color: black;
          }

          .daftarBarang {
            font-size: 25px;
            margin-right: 5%;
            text-decoration: none;
            color: black;
          }

          .text {
            background: white;
            margin: 0;
            margin-top: 4%;
          }

          .panduan {
            font-size: 25px;
            margin-right: 5%;
            text-decoration: none;
            color: black;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Dashboard;
