const starsTemplate = document.createElement('template');
starsTemplate.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
  .main-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .stars-container{
    margin-bottom: 30px;
  }
  .star{
    font-size: xx-large;
    color: #515A60;
  }
  a{
    transition: 0.2s;
  }
  a:hover{
    cursor: pointer;
  }
  #reset{
    font-size: x-large;
  }
  p{
    color: #E4F1F6;
  }
</style>
<div class="main-container" id="">
  <p class="prompt">Click on each star to view a new message</p>
  <div class="stars-container">
    <a onclick="lightStars(this)" class="star"><i class="fa fa-star"></i></a>
    <a onclick="lightStars(this)" class="star"><i class="fa fa-star"></i></a>
    <a onclick="lightStars(this)" class="star"><i class="fa fa-star"></i></a>
    <a onclick="lightStars(this)" class="star"><i class="fa fa-star"></i></a>
    <a onclick="lightStars(this)" class="star"><i class="fa fa-star"></i></a>
  </div>
  <a onclick="resetStars(this)" id="reset"><i class="fa fa-ban"></i></a>
</div>
`;

class StarRating extends HTMLElement{

  constructor(){
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(starsTemplate.content.cloneNode(true));
  }  

}

window.customElements.define('star-rating', StarRating);

/* Stars are lit until the clicked star */
function lightStars(element){
  const index = [...element.parentElement.children].indexOf(element);
  const stars = element.parentElement.querySelectorAll("a");
  const parent = element.parentElement;
  const prompt = parent.parentElement.querySelector(".prompt");
  
  const prompts = [
    "You don't like this at all &#128546;",
    "You somewhat like this &#128532;",
    "You kinda like this &#128578;",
    "You like this &#128516;",
    "You love this &#128536;"
  ];
  
  prompt.innerHTML = prompts[index];
  
  for(let i = 0; i < index + 1; i++){
    stars[i].style.color = "white";
    stars[i].style.fontSize = "40px";
    stars[i].style.textShadow = "0px 0px 10px #FB8B53";
  }
  for(let j = 4; j > index; j--){
    stars[j].style.color = "#515A60";
    stars[j].style.fontSize = "xx-large";
    stars[j].style.textShadow = "none";
  }
}

/* Every star is reset to empty */
function resetStars(element){
    const starContainer = element.parentElement.querySelector(".stars-container");
    const stars = starContainer.querySelectorAll("a");
    const prompt = element.parentElement.querySelector(".prompt");
    prompt.innerHTML = "Hey come on, give me a rating! &#128579;";
    for(let i = 0; i < 4 + 1; i++){
        stars[i].style.color = "#515A60";
        stars[i].style.fontSize = "xx-large";
        stars[i].style.textShadow = "none";
    }
    
}