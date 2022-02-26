const navBarFourTemplate = document.createElement('template');
navBarFourTemplate.innerHTML = `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
    .navbar{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      background-color: blue;
    }
    ul{
      list-style-type: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media only screen and (min-width: 1000px){

    }
  </style>
  <div class="navbar-container">
    <div class="responsive-navbar">
      
    </div>
    <div class="navbar">
      <a>Logo</a>
      <ul>
        <li><a>About</a></li>
        <li><a>News</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
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