/* 
        To do
        -muokkaa paremmaksi
        -titlejen väri tummaksi, nyt ei näy valkoisella taustalla
        -prompteihin: Pitää kirjoittaa paremmat. Jokainen kolmen rivin pituinen.
    */
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
        
        /* 
            
        */
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
        
        function createSkillSet() {
            
            for(let skillSet of allRatings){
                const skillName = skillSet.id;
                const skillTitle = skillSet.title;
        
                createSkillBox(skillName, skillTitle);
        
                for(let rating of Object.keys(skillSet.ratings)){ 
                    const containerId = rating.replace(/\s+/g, '-').toLowerCase().concat("-skill");
                    const title = rating;
                    const starId = `${containerId}-stars`;
                    const starCount = skillSet.ratings[rating];
        
                    console.log(`${rating} ${skillSet.ratings[rating]}`);
                    
                    createSkillContainer(containerId, skillName);
        
                    createSkillTitleContainer(title, containerId);
        
                    createSkillStarContainer(containerId);
        
                    createStarsSet(starId);
        
                    createRating(containerId, starCount);
        
                    const currentContainer = document.getElementById(`${containerId}`);
        
                    currentContainer.onmouseover = function(){showPrompt(containerId)};
                    currentContainer.onmouseout = function(){hidePrompt(containerId)};
                }
            }
        }
        
        function showPrompt(containerId){
            const prompt = document.getElementById(`${containerId}-prompt`);
            prompt.style.opacity ="1";
            prompt.style.marginRight = "0px";
        }
        
        function hidePrompt(containerId){
            const prompt = document.getElementById(`${containerId}-prompt`);     prompt.style.opacity ="0";
            prompt.style.marginRight = "50px";
        }
        
        function createSkillBox(skillName, skillTitle){
            const skillBox = document.createElement("div");
            const title = document.createElement("p");
            title.className = "skill-title";
            title.innerHTML = skillTitle;
            skillBox.className = "skill-box";
            skillBox.id = skillName;
        
            document.getElementById("skills").appendChild(skillBox);
            document.getElementById(`${skillName}`).appendChild(title);
        }
        
        function createSkillContainer(containerId, skillId){
            const skillContainer = document.createElement("div");
            skillContainer.className = "skill-container";
            skillContainer.id = `${containerId}`;
        
            const prompt = document.createElement("p");
            prompt.className = "prompt";
            prompt.id = `${containerId}-prompt`;
        
            skillContainer.appendChild(prompt);
        
            document.getElementById(`${skillId}`).appendChild(skillContainer);
        }
        
        function createSkillTitleContainer(title, containerId){
            const skillTitleContainer = document.createElement("div");
            const skillTitle = document.createElement("p");
            skillTitleContainer.className = "skill-title-container";
            skillTitle.innerHTML = title; 
            skillTitleContainer.appendChild(skillTitle);
        
            document.getElementById(containerId).appendChild(skillTitleContainer);
        }
        
        function createSkillStarContainer(containerId){
            const skillStarsContainer = document.createElement("div");
            skillStarsContainer.className = "skill-star-container";
            skillStarsContainer.id = `${containerId}-stars`;
        
            
            /* const prompt = document.createElement("p");
            prompt.className = "prompt";
            prompt.id = `${containerId}-prompt`;
        
            skillStarsContainer.appendChild(prompt); */
            document.getElementById(containerId).appendChild(skillStarsContainer);
        }
        
        function createStarsSet(starId){
            let starCounter = 0;
            
            while(starCounter < totalStars){
                const star = document.createElement("div");
                star.className = "star";
        
                document.getElementById(`${starId}`).appendChild(star);
                starCounter++;
            }
        }
        
        function createRating(containerId, starCount){
            const star = document.getElementById(containerId).querySelectorAll(".star");
            const prompt = document.getElementById(`${containerId}-prompt`);
            prompt.innerHTML = prompts[starCount];
            for(let i = 0; i < starCount; i++){
                star[i].style.backgroundColor = "white";
                star[i].style.boxShadow = "0 0 10px #FB8B53";
            }
        }
        