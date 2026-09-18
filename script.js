/* ---------- SKILL DATA ---------- */

const skills = [

    {
        name: "Muscle Up",
        difficulty: "Advanced",
        description: "A powerful calisthenics skill combining explosive pulling strength, pushing strength and technique.",

        warmup: [
            "Wrist rotations",
            "Shoulder circles",
            "Scapular activation",
            "Dead hang"
        ],

        prerequisites: [
            "Pull-ups",
            "Explosive pull-ups",
            "Chest-to-bar pull-ups",
            "Dips",
            "Straight-bar dips",
            "Core strength"
        ],

        drills: [
            "Pull-ups",
            "Negative muscle-ups",
            "Straight-bar dips",
            "Explosive pull-ups",
            "Chest-to-bar pull-ups",
            "Transition drills",
            "Box muscle-ups"
        ],

        mistakes: [
            "Arched elbows",
            "Trying to reach above the bar without proper warmup",
            "Not warming up the shoulders",
            "Not engaging the core",
            "Not using the legs for momentum"
        ]
    },


    {
        name: "Handstand",
        difficulty: "Advanced",
        description: "A foundational balance skill requiring shoulder control, wrist strength and body awareness.",

        warmup: [
            "Wrist circles",
            "Wrist extensions",
            "Shoulder circles",
            "Scapular push-ups"
        ],

        prerequisites: [
            "Basic wrist strength",
            "Plank hold",
            "Pike hold",
            "Wall-supported handstand"
        ],

        drills: [
            "Wall handstand hold",
            "Chest-to-wall handstand",
            "Wall shoulder taps",
            "Freestanding kick-up practice"
        ],

        mistakes: [
            "Overarching the lower back",
            "Bending the elbows",
            "Looking too far forward",
            "Not actively pushing through the shoulders"
        ]
    },


    {
        name: "Front Lever",
        difficulty: "Advanced",
        description: "A static pulling skill requiring strong lats, core and scapular control.",

        warmup: [
            "Shoulder circles",
            "Scapular pull-ups",
            "Dead hang",
            "Hollow body hold"
        ],

        prerequisites: [
            "Pull-ups",
            "Hanging knee raises",
            "Hollow body hold",
            "Tuck front lever"
        ],

        drills: [
            "Tuck front lever",
            "Advanced tuck front lever",
            "One-leg front lever",
            "Front lever negatives"
        ],

        mistakes: [
            "Bending the elbows",
            "Dropping the hips",
            "Losing scapular control",
            "Progressing too quickly"
        ]
    },


    {
        name: "Back Lever",
        difficulty: "Beginner",
        description: "A static skill requiring shoulder mobility, body tension and control while holding the body horizontally.",

        warmup: [
            "Wrist rotations",
            "Shoulder circles",
            "Shoulder dislocates",
            "Scapular activation"
        ],

        prerequisites: [
            "Skin-the-cat",
            "Controlled German hang",
            "Basic support strength",
            "Core tension"
        ],

        drills: [
            "Tuck back lever",
            "Advanced tuck back lever",
            "One-leg back lever",
            "Back lever negatives"
        ],

        mistakes: [
            "Dropping the hips",
            "Insufficient shoulder mobility",
            "Bending the elbows",
            "Rushing the progression"
        ]
    },


    {
        name: "L-Sit",
        difficulty: "Beginner",
        description: "A foundational static hold that develops core, hip-flexor and shoulder strength.",

        warmup: [
            "Wrist rotations",
            "Wrist extensions",
            "Hip flexor mobility",
            "Leg raises"
        ],

        prerequisites: [
            "Tuck support hold",
            "Basic core strength",
            "Active compression",
            "Straight-arm support"
        ],

        drills: [
            "Tuck sit",
            "One-leg L-sit",
            "Supported L-sit",
            "Full L-sit hold"
        ],

        mistakes: [
            "Bending the knees",
            "Dropping the hips",
            "Shrugging the shoulders",
            "Holding your breath"
        ]
    },


    {
        name: "Handstand Push-Up",
        difficulty: "Highly Advanced",
        description: "A demanding pushing skill combining handstand balance with exceptional shoulder and upper-body strength.",

        warmup: [
            "Wrist circles",
            "Wrist extensions",
            "Shoulder circles",
            "Scapular push-ups"
        ],

        prerequisites: [
            "Freestanding handstand",
            "Pike push-ups",
            "Elevated pike push-ups",
            "Strong overhead pressing strength"
        ],

        drills: [
            "Wall handstand push-ups",
            "Negative handstand push-ups",
            "Partial range handstand push-ups",
            "Deficit handstand push-ups"
        ],

        mistakes: [
            "Poor handstand alignment",
            "Flaring the elbows",
            "Using excessive arch",
            "Losing control during the descent"
        ]
    },


    {
        name: "Planche",
        difficulty: "Highly Advanced",
        description: "An advanced pushing skill requiring exceptional shoulder, wrist, core and straight-arm strength.",

        warmup: [
            "Wrist rotations",
            "Wrist extensions",
            "Shoulder circles",
            "Scapular push-ups"
        ],

        prerequisites: [
            "Strong push-ups",
            "Dips",
            "Pseudo planche push-ups",
            "Planche lean",
            "Strong core"
        ],

        drills: [
            "Planche lean",
            "Tuck planche",
            "Advanced tuck planche",
            "Straddle planche"
        ],

        mistakes: [
            "Bending the elbows",
            "Insufficient forward lean",
            "Losing scapular protraction",
            "Using a progression that is too difficult"
        ]
    },


    {
        name: "Human Flag",
        difficulty: "Highly Advanced",
        description: "A lateral static hold requiring significant shoulder, core and pulling strength.",

        warmup: [
            "Wrist rotations",
            "Shoulder circles",
            "Scapular activation",
            "Side bends"
        ],

        prerequisites: [
            "Strong pull-ups",
            "Strong dips",
            "Side plank",
            "Hanging leg raises",
            "Strong grip"
        ],

        drills: [
            "Vertical flag hold",
            "Tuck human flag",
            "One-leg human flag",
            "Straddle human flag"
        ],

        mistakes: [
            "Weak bottom-arm push",
            "Pulling only with the top arm",
            "Dropping the hips",
            "Poor body alignment"
        ]
    },


    {
        name: "One Arm Handstand",
        difficulty: "Highly Advanced",
        description: "An extreme balance skill requiring exceptional shoulder strength, wrist strength and body control. It takes significant time and practice to master.",

        warmup: [
            "Wrist rotations",
            "Wrist extensions",
            "Shoulder circles",
            "Scapular activation"
        ],

        prerequisites: [
            "Freestanding handstand",
            "Consistent handstand balance",
            "Strong shoulder control",
            "Handstand weight shifts",
            "Single-arm support preparation"
        ],

        drills: [
            "Handstand weight shifts",
            "Wall-assisted one-arm holds",
            "Fingertip-assisted one-arm handstand",
            "Controlled one-arm balance attempts"
        ],

        mistakes: [
            "Shifting weight too quickly",
            "Collapsing the supporting shoulder",
            "Losing hip control",
            "Attempting the skill without sufficient balance"
        ]
    }

];


/* ---------- DIFFICULTY ORDER ---------- */

const difficultyOrder = {
    "Beginner": 1,
    "Intermediate": 2,
    "Advanced": 3,
    "Highly Advanced": 4
};


/* ---------- ELEMENTS ---------- */

const skillsContainer = document.getElementById("skills-container");

const searchInput = document.getElementById("skill-search");

const detailTitle = document.getElementById("detail-title");

const detailDescription = document.getElementById("detail-description");

const warmupContainer = document.getElementById("warmup-container");

const prerequisitesContainer = document.getElementById("prerequisites-container");

const drillsContainer = document.getElementById("drills-container");

const mistakesContainer = document.getElementById("mistakes-container");


/* ---------- DISPLAY SKILLS ---------- */

function displaySkills(skillList) {

    skillsContainer.innerHTML = "";


    /* ---------- SORT BY DIFFICULTY ---------- */

    const sortedSkills = [...skillList].sort((a, b) => {

        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];

    });


    /* ---------- NO RESULTS ---------- */

    if (sortedSkills.length === 0) {

        skillsContainer.innerHTML = `
            <p class="no-results">
                No skills found.
            </p>
        `;

        return;
    }


    /* ---------- CREATE CARDS ---------- */

    sortedSkills.forEach(skill => {

        const card = document.createElement("div");

        card.classList.add("skill-card");


        card.innerHTML = `
            <div>

                <h3>${skill.name}</h3>

                <span class="difficulty-badge">
                    ${skill.difficulty}
                </span>

                <p>
                    ${skill.description}
                </p>

            </div>

            <button data-skill="${skill.name}">
                View Skill
            </button>
        `;


        skillsContainer.appendChild(card);

    });

}


/* ---------- SHOW SKILL DETAILS ---------- */

function showSkillDetails(selectedSkill) {

    if (!selectedSkill) return;


    /* ---------- TITLE ---------- */

    detailTitle.textContent = selectedSkill.name;


    /* ---------- DESCRIPTION ---------- */

    detailDescription.textContent = selectedSkill.description;


    /* ---------- WARM UP ---------- */

    warmupContainer.innerHTML = "";


    if (selectedSkill.warmup.length > 0) {

        const heading = document.createElement("h3");

        heading.textContent = "Warm Up";

        warmupContainer.appendChild(heading);


        const list = document.createElement("ul");


        selectedSkill.warmup.forEach(item => {

            const li = document.createElement("li");

            li.textContent = item;

            list.appendChild(li);

        });


        warmupContainer.appendChild(list);

    }


    /* ---------- PREREQUISITES ---------- */

    prerequisitesContainer.innerHTML = "";


    if (selectedSkill.prerequisites.length > 0) {

        const heading = document.createElement("h3");

        heading.textContent = "Prerequisites";

        prerequisitesContainer.appendChild(heading);


        const list = document.createElement("ul");


        selectedSkill.prerequisites.forEach(item => {

            const li = document.createElement("li");


            const checkbox = document.createElement("input");

            checkbox.type = "checkbox";


            const text = document.createElement("span");

            text.textContent = item;


            li.appendChild(checkbox);

            li.appendChild(text);


            list.appendChild(li);

        });


        prerequisitesContainer.appendChild(list);

    }


    /* ---------- DRILLS ---------- */

    drillsContainer.innerHTML = "";


    if (selectedSkill.drills.length > 0) {

        const heading = document.createElement("h3");

        heading.textContent = "Drills";

        drillsContainer.appendChild(heading);


        const list = document.createElement("ul");


        selectedSkill.drills.forEach(item => {

            const li = document.createElement("li");

            li.textContent = item;

            list.appendChild(li);

        });


        drillsContainer.appendChild(list);

    }


    /* ---------- COMMON MISTAKES ---------- */

    mistakesContainer.innerHTML = "";


    if (selectedSkill.mistakes.length > 0) {

        const heading = document.createElement("h3");

        heading.textContent = "Common Mistakes";

        mistakesContainer.appendChild(heading);


        const list = document.createElement("ul");


        selectedSkill.mistakes.forEach(item => {

            const li = document.createElement("li");

            li.textContent = item;

            list.appendChild(li);

        });


        mistakesContainer.appendChild(list);

    }


    /* ---------- SCROLL TO DETAILS ---------- */

    document.getElementById("skill-details").scrollIntoView({
        behavior: "smooth"
    });

}


/* ---------- VIEW SKILL BUTTON ---------- */

skillsContainer.addEventListener("click", function(event) {

    if (!event.target.matches(".skill-card button")) {
        return;
    }


    const skillName = event.target.dataset.skill;


    const selectedSkill = skills.find(
        skill => skill.name === skillName
    );


    showSkillDetails(selectedSkill);

});


/* ---------- SEARCH ---------- */

searchInput.addEventListener("input", function() {

    const searchTerm = searchInput.value
        .toLowerCase()
        .trim();


    const filteredSkills = skills.filter(skill =>
        skill.name.toLowerCase().includes(searchTerm)
    );


    displaySkills(filteredSkills);

});


/* ---------- INITIAL DISPLAY ---------- */

displaySkills(skills);