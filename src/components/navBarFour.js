const navBarFourTemplate = document.createElement('template');
navBarFourTemplate.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
  *{
    font-family: 'Georgia', serif;
  }
  .navbar{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 75vw;
    max-width: 400px;
    height: 50px;
    padding: 0px 20px;
    background-image: url(./images/newsNavBarBg.jpg);
    background-position: 70% 45%;
  }
  #logo{
    font-size: x-large;
    transition: 2s;
  }
  #logo:hover{
    color: #FFFFFF;
    transform: rotate(360deg);
  }
  a{
    position: relative;
    text-shadow: 2px 1px 0 black;
    cursor: pointer;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul a:after{
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #FFFFFF;
    transform-origin: bottom left;
    transition: transform 0.2s ease-out;
  }
  ul a:hover:after{
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  ul{
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li{
    
  }
  @media only screen and (min-width: 1000px){
    .navbar{
      background-position: 75% 35%;
    }
    a {
      margin: 0px 10px;
    }
  }
</style>

<div class="navbar">
  <a class="logo"><i class="fa fa-globe" id="logo"></i></a>
  <ul>
    <li><a>About</a></li>
    <li><a>News</a></li>
    <li><a>Contact</a></li>
  </ul>
</div>

`;

class NavBarFour extends HTMLElement{

  constructor(){
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(navBarFourTemplate.content.cloneNode(true));
  }  
  
}

window.customElements.define('navbar-four', NavBarFour);