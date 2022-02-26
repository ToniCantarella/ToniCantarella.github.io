const navBarOneTemplate = document.createElement('template');
navBarOneTemplate.innerHTML = `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
    *{
      font-family: "Times New Roman", Times, serif;
    }
    .navbar{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 75vw;
      max-width: 400px;
      padding: 0px 20px;
      background-color: green;
    }
    a{
      cursor: pointer;
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

class NavBarOne extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(navBarOneTemplate.content.cloneNode(true));

    }  

}

window.customElements.define('navbar-one', NavBarOne);

