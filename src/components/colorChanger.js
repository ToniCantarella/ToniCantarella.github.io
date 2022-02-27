const colorChangerTemplate = document.createElement('template');
colorChangerTemplate.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
  *{

  }
  .main{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 400px;
      max-width: 90vw;
      height: 300px;
      background-color: white;
  }
  .page{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 90%;
      width: 90%;
      border-radius: 5px;
      background-color: blue;
      padding: 5px;
  }
  .page *{
    margin: 5px;
  }
  .search{
      width: 100%;
      display: flex;
      flex-direction: row;
  }
  .search-btn{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: red;
  }
  .search-bar{
      width: 80%;
      height: 30px;
      border-radius: 20px;
      background-color: yellow;
  }
  .content{
      height: 100%;
      width: 100%;
      background-color: white;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
  }
  .nav{
      width: 50%;
      height: 40px;
      background-color: green;
  }
  .content-main{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
  }
  .side-bar{
      height: 65%;
      width: 50px;
      background-color: grey;
  }
  .article{
    height: 70%;
    width: 80px;
    background-color: grey;
  }
  .footer{
    width: 50%;
    height: 20px;
    background-color: green;
  }
</style>
<div class="main">
  <div class="page">
    <div class="search">
        <div class="search-btn">
        </div>
        <div class="search-bar">
        </div>
    </div>
    <div class="content">
        <div class="nav">
        </div>
        <div class="content-main">
            <div class="side-bar">
            </div>
            <div class="article">
            </div>
        </div>
        <div class="footer">
        </div>
    </div>
  </div>
</div>
`;

class ColorChanger extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(colorChangerTemplate.content.cloneNode(true));

    }  

}

window.customElements.define('color-changer', ColorChanger);