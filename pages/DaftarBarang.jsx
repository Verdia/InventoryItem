import React from "react"

class ListBarang extends React.Component{
    render() {
        return (
        <nav style={{display:"flex", width: "100%"}} className="nav">
              <div>
                <a href="../Dashboard"><img src="static/src/Logo_petro.png" className="logo" /></a>
              </div>
              <div style={{justifySelf: "flex-end", width: "50%"}} className="text">
                <a className="login">Daftar Barang</a>
                <a href="../InsertBarang" className="daftarBarang">Input Barang</a>
                <a href="../Panduan" className="panduan">Logout</a>
              </div>
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
    
              .logo{
                  width: 50%;
                  margin: 0;
                  margin-left: 25px;
                  margin-top: 3%;
              }
    
              .nav{
                  background: white;
                  margin: 0;
              }
    
              .login{
                  margin-left: 15%;
                  margin-right: 5%;
                  font-size: 25px;
                  margin-top: 0%;
                  text-decoration: none;
                  color: black;
              }
    
              .daftarBarang{
                  font-size: 25px;
                  margin-right: 5%;
                  text-decoration: none;
                  color: black;
              }
    
              .text{
                  background: white;
                  margin: 0;
                  margin-top: 4%;
              }
    
              .panduan{
                font-size: 25px;
                margin-right: 5%;
                text-decoration: none;
                color: black;
              }
    
            `}</style>
        </nav>
        );
      }
    }
    
    export default ListBarang;