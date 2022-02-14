document.addEventListener('DOMContentLoaded', createSkillSet);

const programmingLanguages = {
    id: "programming-languages",
    title: "Languages",
    ratings: {
        "HTML": 2,
        "CSS": 2,
        "Javascript": 2,
        "React": 1,
        "SQL": 1,
        "Java": 2,
    }
}

const tools = {
    id: "tools",
    title: "Tools",
    ratings: {
        "Git": 1,
        "Rest API's": 1,
        "NodeJs": 1,
        "VS Code IDE": 3, 
    }   
}

const other = {
    id: "other",
    title: "Other",
    ratings: {
        "Figma": 1,
        "SketchBook Pro": 5,
        "InkScape": 0,
    }
}

const prompts = [
    "Coming in the future",
    "I have surface level knowledge and I need active help from my peers at work",
    "I have some experience, but I still require more knowledge in order to produce",
    "I can comfortably produce things however, there is more to learn.",
    "I can produce things independently. Allthough there is room for improvement",
    "I am an expert in this skill"
];

const totalStars = 5;

const allRatings = [programmingLanguages, tools, other];

function createSkillSet(){
    for(let skillCategory of allRatings){
        const skillBox = document.createElement("div");
        skillBox.className = `skill-box`;
        skillBox.id = skillCategory.id;
        skillBox.innerHTML = `
            <p class="skill-title">${skillCategory.title}</p>
        `;
        for(let rating of Object.keys(skillCategory.ratings)){
            const containerId = rating.replace(/\s+/g, '-').toLowerCase().concat("-skill");
            const skillContainer = document.createElement("div");
            skillContainer.className = "skill-container";
            skillContainer.id = `${containerId}`;

            skillContainer.innerHTML = `
                <div class="skill-title-container">
                    <p>${rating}</p>
                </div>
            `;

            const prompt = document.createElement("p");
            prompt.className = "prompt";
            prompt.id = `${containerId}-prompt`;
            prompt.innerHTML = `${prompts[skillCategory.ratings[rating]]}`;
            skillContainer.appendChild(prompt);

            const skillStarsContainer = document.createElement("div");
            skillStarsContainer.className = "skill-star-container";
            skillStarsContainer.id = `${containerId}-stars`;
            skillContainer.appendChild(skillStarsContainer);

            let starCounter = 0;
            while(starCounter < totalStars){
                const star = document.createElement("div");
                star.className = "star";
                skillStarsContainer.appendChild(star);
                starCounter++;
            }
            
            const starCount = skillCategory.ratings[rating];
            const star = skillContainer.querySelectorAll(".star");
            for(let i = 0; i < starCount; i++){
                star[i].style.backgroundColor = "white";
                star[i].style.boxShadow = "0 0 10px #FB8B53";
            }

            skillContainer.onmouseover = function(){mouseOver(containerId)};
            skillContainer.onmouseout = function(){mouseOut(containerId)};

            skillBox.appendChild(skillContainer);
        }
        document.getElementById(`skills`).appendChild(skillBox);
    }
}

function mouseOver(containerId){
    const prompt = document.getElementById(`${containerId}-prompt`);
    prompt.style.opacity ="1";
    prompt.style.marginRight = "0px";
}

function mouseOut(containerId){
    const prompt = document.getElementById(`${containerId}-prompt`);     
    prompt.style.opacity ="0";
    prompt.style.marginRight = "50px";
}