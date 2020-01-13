import React from "react"

class Regist extends React.Component {
    
    componentDidMount() {
        var form = document.getElementById('formRegist')
        form.addEventListener('submit', (event) => {
            const email = document.getElementById("ed_email").value,
                  password = document.getElementById("ed_password").value,
                  name = document.getElementById("ed_name").value,
                  date = document.getElementById("ed_bornDate").value,
                  gender = document.getElementById("genders").value
                  
            
                  console.log("email : ", email)
                  console.log("password : ", password)
                event.preventDefault()
                fetch("http://localhost:3000/registration", {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/x-www-form-urlencoded'
                    },
                    body: `name=${name}&email=${email}&password=${password}&bornDate=${date}&gender=${gender}`
                }).then( response => {
                    console.log(response)
                    if (response.ok){
                        console.log("User Registered")
                    }else{
                        console.log("Something Wrong")
                    }
                })
            })
    }

    render() {
        return (
<main >
    <div style={{display: "grid", background: "white"}} className="divLogo">
        <img src="static/src/Logo_petro.png" id="logo_petro"/>

        <text className="petro">PT.PETROKIMIA GRESIK</text>

        <text className="welcome"> SIGN UP </text>

        <text className="sistem"> Sistem Monitoring Project</text>

        <text className="dept">DEPT. TEKNOLOGI DAN INFORMASI </text>
    </div>

    <form method="post" id="formRegist">

    <text className="name_txt">Username</text>
    
    <input
      type = "string"
      name = "name"
      id = "ed_name"/>

    <text className="email_txt">Email</text>
    
    <input
      type = "email"
      name = "email"
      id = "ed_email"/>

    <text className="password_txt">Password</text>
    <input
      type = "password"
      name = "password"
      id = "ed_password"/>

    <text className="gender_txt">Gender</text>
    <select className="gender" id="genders">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
    </select>

    <text className="date_txt">Date of Birth</text>
    <input
      type = "date"
      name = "bornDate"
      id = "ed_bornDate"
      placeholder = "Birth Date"/>

      <button className="regist">Register</button>
      <form action='http://localhost:3000/Login'>
          <input type="submit" value = "Back to Login" className="loginBack"/>
      </form>
    </form>
<style jsx global>{`

    .petro{
        margin: 0 auto;
        font-size: 20px;
        margin-top: 0%;
        font-family: 'Open Sans', sans-serif;
    }

    .dept{
        font-size: 20px;
        margin: 0 auto;
        margin-bottom: 10%;
    }

    .welcome{
        font-size: 40px;
        margin: 0 auto;
        margin-top: 10%;
    }

    .sistem{
        font-size: 20px;
        margin: 0 auto;
        margin-top: 10%;
    }

    body {
        background: #3EC400;
        font-family: 'Open Sans', sans-serif;
        margin: 0;
    }

    div {
        margin: 0 auto;
        display: block;
    }

    main{
        display: grid;  
        grid-template-columns: 1fr 1fr;
        font-family: 'Open Sans', sans-serif;
    }

    .ahref{
        font-size: 13px;
        text-decoration: none;
    }

    .divLogo{
        width: 100%;
        margin: 0 auto;
        height: 646px;
    }

    .regist{
        width: 37%;
        margin: 0 auto;
        margin-top: 4%;
        display: grid;
        font-size: 30px;
        padding: 5px 5px;
        border-radius: 10px;
    }

    .loginBack{
        width: 40%;
        margin: 0 auto;
        margin-top: 3%;
        display: grid;
        font-size: 100%;
        padding: 2px 2px;
        border-radius: 10px;
    }

    #logo_petro{
        background: #FFFFFF;
        width: 50%;
        margin: 0 auto;
        margin-top: 15%;
    }

    .email_txt{
        margin-top: 2%;
        font-size: 20px;
        display: block;
        color: white;
        margin-left: 24%;
    }

    .gender_txt{
        margin-top: 2%;
        font-size: 20px;
        display: block;
        color: white;
        margin-left: 24%;
    }

    .date_txt{
        margin-top: 2%;
        font-size: 20px;
        display: block;
        color: white;
        margin-left: 24%;
    }

    .gender{
        width: 53%;
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

    #ed_bornDate{
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

    .name_txt{
        margin-top: 7%;
        font-size: 20px;
        display: block;
        color: white;
        margin-left: 24%;
    }

    #ed_name{
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

    #ed_email{
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

    .password_txt{
        margin-top: 2%;
        font-size: 20px;
        display: block;
        margin-left: 24%;
        color: white;
    }
    #ed_password{
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

        )
    }
}

export default Regist;