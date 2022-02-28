const navBarOneTemplate = document.createElement('template');
navBarOneTemplate.innerHTML = `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  *{
    font-family: 'Brush Script MT', cursive;
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
    background-image: url(./images/natureNavBarBg.jpg);
    background-position: 75% 70%;
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
    transform: rotate(70deg);
  }
  #logo:hover{
    color: #CBE432;
    text-shadow: 0px 0px 10px #2E3409;
  }
  .navbar a{
    position: relative;
    font-size: x-large;
    font-weight: 900;
    height: 0;
    color: white;
    cursor: pointer;
    padding: 0px 5px;
    transition: 0.4s;
  }
  .navbar a:hover:not(.logo){
    text-shadow: 7px 3px black;
  }
  ul{
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media only screen and (min-width: 1000px){
    .navbar a {
      padding: 0px 10px;
    }
  }
</style>

<div class="navbar">
  <a class="logo"><i class="fa fa-leaf" id="logo"></i></a>
  <ul>
    <li><a>About</a></li>
    <li><a>Health</a></li>
    <li><a>Contact</a></li>
  </ul>
</div>
`;

class NavBarOne extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(navBarOneTemplate.content.cloneNode(true));

    }  

}

window.customElements.define('navbar-one', NavBarOne);

