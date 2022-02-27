const navBarThreeTemplate = document.createElement('template');
navBarThreeTemplate.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
  *{
    font-family: 'Arial', sans-serif;
  }
  .navbar{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    width: 75vw;
    max-width: 400px;
    height: 50px;
    margin: 0;
    padding: 0px 20px;
    background: linear-gradient(
      -45deg, 
      #B55B3B, 
      #882501, 
      #B55B3B, 
      #882501, 
      #B55B3B
      );
    background-size: 200% 200%;
    animation: colorBackGround 3s linear infinite;
  }
  @keyframes colorBackGround{
    0%{
      background-position: 100% 100%;
    }
    
    100%{
      background-position: 0% 0%;
    }
  }
  .navbar *{
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #logo{
    font-size: x-large;
    transition: 0.2s;
  }
  #logo:hover{
    color: #B55B3B;
  }
  .navbar a{
    cursor: pointer;
    padding: 0px 10px;
    transition: 0.2s;
  }
  .navbar a:hover{
    background-color: #2F1308;
  }
  ul{
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="navbar">
<a><i class="fa fa-coffee" id="logo"></i></a>
<ul>
  <li><a>About</a></li>
  <li><a>Café</a></li>
  <li><a>Contact</a></li>
</ul>
</div>
`;

class NavBarThree extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(navBarThreeTemplate.content.cloneNode(true));

    }  

}

window.customElements.define('navbar-three', NavBarThree);