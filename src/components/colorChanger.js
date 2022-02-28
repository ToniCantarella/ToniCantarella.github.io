const colorChangerTemplate = document.createElement('template');
colorChangerTemplate.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<style>
  *{

  }
  .dark{
    background-color: black;
    color: #EFEFEF;
  }
  .light{
    background-color: #EFEFEF;
    color: #161E1E;
  }
  .orange{
    background-color: orange;
    color: light-blue;
  }
  .main{
    width: 80vw;
    height: 200px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .toggle-btn{
      float: right;
  }
  a{
    
    cursor: pointer;
    font-size: x-large;
    bottom: 200px;
  }
  .fa{
  
  }
  h1{
    
  }
  .hidden{
    display: none;
  }
  @media only screen and (min-width: 1000px){
    .main{
        width: 400px;
    }
  }
</style>

<div class="main light">
    <a class="toggle-btn" onclick="toggleColor(this)"><i class="fa fa-toggle-off"></i></a>
    <h1 class="light-text text">Light <br> &#127774;</h1>
    <h1 class="dark-text text hidden">Dark <br> &#127761;</h1>
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

function toggleColor(element){
  const btn = element.querySelector(".fa");
  btn.classList.toggle("fa-toggle-on");

  const main = element.parentElement;

  main.classList.toggle("light");
  main.classList.toggle("dark");
    
  main.querySelector(".light-text").classList.toggle("hidden");
  main.querySelector(".dark-text").classList.toggle("hidden");
  

    
    
    
}