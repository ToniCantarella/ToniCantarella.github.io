const navBarTwoTemplate = document.createElement('template');
navBarTwoTemplate.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
  *{
    font-family: 'Courier', monospace;
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
    background-color: #e6ffff;
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
    transform: rotate(-90deg);
    transition: 0.5s;
  }
  #logo:hover{
    color: #FFFFFF;
    transform: rotate(45deg);
  }
  .navbar a{
    height: 0;
    color: black;
    cursor: pointer;
    padding: 0px 5px;
    transition: 0.2s;
  }
  .navbar a:hover{
    color: #FFFFFF;
    height: 80%;
    background-color: #00e6e6;
  }
  a:not(.logo){
    text-shadow: 1px 1px grey;
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
<a class="logo"><i class="fa fa-plane" id="logo"></i></a>
<ul>
  <li><a>About</a></li>
  <li><a>Flights</a></li>
  <li><a>Contact</a></li>
</ul>
</div>
`;

class NavBarTwo extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(navBarTwoTemplate.content.cloneNode(true));

    }  

}

window.customElements.define('navbar-two', NavBarTwo);