import React from "react";

class Clock extends React.Component {
  componentDidMount() {
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
        console.log("Password is", response.ok);
      });
    });
  }

  render() {
    return (
      <main>
        <div
          style={{ display: "grid", background: "white" }}
          className="divLogo"
        >
          <a
            href="../Dashboard"
            style={{ margin: "0 auto", width: "100%", marginLeft: "29.5%" }}
          >
            <img src="static/src/Logo_petro.png" id="logo_petro" />
          </a>

          <text className="petro">PT.PETROKIMIA GRESIK</text>

          <text className="welcome"> WELCOME </text>

          <text className="sistem"> Sistem Monitoring Project</text>

          <text className="dept">DEPT. TEKNOLOGI DAN INFORMASI </text>
        </div>

        <form method="post" id="formLogin">
          <h1 className="sign_in">Sign In</h1>

          <text className="email_txt">Email</text>

          <input type="email" name="email" id="ed_email" />

          <text className="password_txt">Password</text>
          <input type="password" name="password" id="ed_password" />

          <button className="login">Login</button>
          <form action="http://localhost:3000/Registration">
            <input type="submit" value="Register" className="regist" />
          </form>
        </form>
        <style jsx global>{`
          .petro {
            margin: 0 auto;
            font-size: 20px;
            margin-top: 0%;
            font-family: "Open Sans", sans-serif;
          }

          .dept {
            font-size: 20px;
            margin: 0 auto;
            margin-bottom: 10%;
          }

          .welcome {
            font-size: 40px;
            margin: 0 auto;
            margin-top: 10%;
          }

          .sistem {
            font-size: 20px;
            margin: 0 auto;
            margin-top: 10%;
          }

          body {
            background: #3ec400;
            font-family: "Open Sans", sans-serif;
            margin: 0;
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

          .ahref {
            font-size: 13px;
            text-decoration: none;
          }

          .divLogo {
            width: 100%;
            margin: 0 auto;
            height: 646px;
          }

          .regist {
            width: 25%;
            margin: 0 auto;
            margin-top: 2%;
            display: block;
            font-size: 20px;
            padding: 5px 5px;
            border-radius: 15px;
          }

          .login {
            width: 40%;
            margin: 0 auto;
            margin-top: 10%;
            display: block;
            font-size: 30px;
            padding: 5px 5px;
            border-radius: 20px;
          }

          #logo_petro {
            background: #ffffff;
            width: 40%;
            margin: 0 auto;
            margin-top: 5%;
          }

          .sign_in {
            display: block;
            margin-left: 17%;
            margin-top: 7%;
            font-family: "Open Sans", sans-serif;
            color: white;
          }

          .email_txt {
            margin-top: 12%;
            font-size: 20px;
            display: block;
            color: white;
            margin-left: 24%;
          }

          #ed_email {
            width: 50%;
            margin: 0 auto;
            margin-top: 0.5%;
            display: block;
            border-radius: 5px;
            font-size: 20px;
            border: none;
            padding: 10px 10px;
            background: orange;
            color: black;
          }

          .password_txt {
            margin-top: 3%;
            font-size: 20px;
            display: block;
            margin-left: 24%;
            color: white;
          }
          #ed_password {
            width: 50%;
            margin: 0 auto;
            margin-top: 1%;
            display: block;
            background: orange;
            border-radius: 5px;
            font-size: 20px;
            border: none;
            padding: 10px 10px;
            color: black;
          }
        `}</style>
      </main>
    );
  }
}

export default Clock;
