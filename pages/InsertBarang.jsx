import React from "react";

class InserItem extends React.Component {
  componentDidMount() {
    var form = document.getElementById("formInsert");
    form.addEventListener("submit", event => {
      const nameItemReg = document.getElementById("ed_name").value,
        codeItemReg = document.getElementById("ed_code").value,
        locationItemReg = document.getElementById("ed_location").value,
        dateItemReg = document.getElementById("ed_dateBorrow").value,
        picItemReg = document.getElementById("ed_pic").value,
        idBagianItemReg = document.getElementById("ed_idBagian").value,
        statusItemReg = document.getElementById("ed_status").value;

      console.log("Name : ", nameItemReg);
      console.log("Code Unique : ", codeItemReg);
      console.log("Location : ", locationItemReg);
      console.log("Date : ", dateItemReg);
      console.log("PIC : ", picItemReg);
      console.log("idBagian : ", idBagianItemReg);
      console.log("Status : ", statusItemReg);
      event.preventDefault();
      fetch("http://localhost:3000/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `nameItem=${nameItemReg}&codeItem=${codeItemReg}&locationItem=${locationItemReg}&dateItem=${dateItemReg}&picItem=${picItemReg}&idBagianItem=${idBagianItemReg}&statusItem=${statusItemReg}`
      }).then(response => {
        console.log(response);
        if (response.ok) {
          console.log("Item Registered");
        } else {
          console.log("Something Wrong");
        }
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
            style={{ margin: "0 auto", width: "100%", marginLeft: "25%" }}
          >
            <img src="static/src/Logo_petro.png" id="logo_petro" />
          </a>
          <text className="petro">PT.PETROKIMIA GRESIK</text>

          <text className="welcome"> INSERT ITEM </text>

          <text className="sistem"> Sistem Monitoring Project</text>

          <text className="dept">DEPT. TEKNOLOGI DAN INFORMASI </text>
        </div>

        <form method="post" id="formInsert">
          <text className="name_txt">Name Item</text>

          <input type="string" name="nameItem" id="ed_name" />

          <text className="code_txt">Code Unique</text>

          <input type="text" name="codeItem" id="ed_code" />

          <text className="location_txt">Location</text>
          <input type="text" name="locationItem" id="ed_location" />

          <text className="date_txt">Date</text>
          <input type="date" name="dateItem" id="ed_dateBorrow" />

          <text className="pic_txt">Person in Charge</text>
          <input type="text" name="picItem" id="ed_pic" />

          <text className="idBagian_txt">ID Bagian</text>
          <input type="text" name="idBagianItem" id="ed_idBagian" />

          <text className="pic_txt">Status</text>
          <select className="choice_status" id="ed_status" name="statusItem">
            <option value="Exist">Ready Stock</option>
            <option value="Borrowed">Dipinjam</option>
          </select>

          <button className="regist">Insert Item</button>
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
            width: 37%;
            margin: 0 auto;
            margin-top: 2%;
            display: grid;
            font-size: 30px;
            padding: 5px 5px;
            border-radius: 10px;
          }

          #logo_petro {
            background: #ffffff;
            width: 50%;
            margin: 0 auto;
            margin-top: 5%;
          }

          .date_txt {
            margin-top: 1%;
            font-size: 20px;
            display: block;
            color: white;
            margin-left: 24%;
          }

          .code_txt {
            margin-top: 1%;
            font-size: 20px;
            display: block;
            color: white;
            margin-left: 24%;
          }

          #ed_code {
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

          #ed_pic {
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

          .pic_txt {
            margin-top: 1%;
            font-size: 20px;
            display: block;
            color: white;
            margin-left: 24%;
          }

          .idBagian_txt {
            margin-top: 1%;
            font-size: 20px;
            display: block;
            color: white;
            margin-left: 24%;
          }

          .name_txt {
            margin-top: 2%;
            font-size: 20px;
            display: block;
            color: white;
            margin-left: 24%;
          }

          #ed_name {
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

          #ed_idBagian {
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

          #ed_status {
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

          #ed_location {
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

          .location_txt {
            margin-top: 1%;
            font-size: 20px;
            display: block;
            margin-left: 24%;
            color: white;
          }

          #ed_dateBorrow {
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

export default InserItem;
