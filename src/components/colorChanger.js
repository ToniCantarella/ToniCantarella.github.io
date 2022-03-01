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
  .special{
    background: linear-gradient(
      45deg, 
      mediumturquoise, 
      thistle, 
      orange, 
      crimson, 
      teal
      );
    background-size: 400% 400%;
    color: #FF6347;
    animation: colorBackGround 7s linear infinite;
  }
  @keyframes colorBackGround{
    0%{
      background-position: 100% 100%;
      color: teal;
    }
    20%{
      background-position: 100% 0%;
      color: mediumturquoise;
    }
    40%{
      background-position: 0% 0%;
      color: olive;
    }
    80%{
      background-position: 0% 100%;
      color: thistle;
    }
    100%{
      background-position: 100% 100%;
      color: teal;
    }
  }
  .dark, .light, .special, .text, .fa{
    transition: 0.3s ease-out;
  }
  .main{
    width: 80vw;
    height: 200px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
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
  <h1 class="text">Light <br> &#127774;</h1>
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
  const message = main.querySelector("h1");
  const random = Math.floor(Math.random() * 7);

  main.classList.toggle("light");
  main.classList.toggle("dark");
  main.classList.remove("special");

  if(main.classList.contains("light")){
    message.innerHTML = "Light <br> &#127774;";
  }

  if(main.classList.contains("dark")){
    message.innerHTML = "Dark <br> &#127761;";
  }

  if(random === 1){
    main.classList.add("special");
    message.innerHTML = "Congratulations! <br> &#128048; <br> You found an easter egg!";
  }
  
  //console.log(main.classList);
}
