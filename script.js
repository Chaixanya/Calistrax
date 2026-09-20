/* ---------- SKILLS DATA ---------- */

const skills = [

{
        name: "Muscle Up",
        difficulty: "Advanced",
        description: "A dynamic pulling and pushing skill that combines explosive strength with precise bar transition technique.",

        warmup: [
            "Wrist rotations",
            "Shoulder circles",
            "Scapular pull-ups",
            "Dead hang"
        ],

        prerequisites: [
            "Strict pull-ups",
            "Chest-to-bar pull-ups",
            "Explosive pull-ups",
            "Straight-bar dips",
            "Strong core control"
        ],

        drills: [
            "Explosive pull-ups",
            "Chest-to-bar pull-ups",
            "Straight-bar dips",
            "Jumping muscle-ups",
            "Band-assisted muscle-ups",
            "Transition drills",
            "Negative muscle-ups"
        ],

        mistakes: [
            "Pulling too late during the transition",
            "Losing control of the bar during the transition",
            "Flaring the elbows excessively",
            "Failing to maintain core tension",
            "Attempting the skill without sufficient pulling strength"
        ]
    },


    {
        name: "Handstand",
        difficulty: "Advanced",
        description: "A balance skill that requires strong shoulders, wrists, core control and precise body positioning.",

        warmup: [
            "Wrist circles",
            "Wrist extensions",
            "Shoulder circles",
            "Scapular push-ups"
        ],

        prerequisites: [
            "Basic wrist strength",
            "Strong plank hold",
            "Pike hold",
            "Wall-supported handstand",
            "Basic shoulder control"
        ],

        drills: [
            "Wall handstand hold",
            "Chest-to-wall handstand",
            "Handstand shoulder taps",
            "Wall weight shifts",
            "Freestanding kick-ups",
            "Freestanding handstand holds"
        ],

        mistakes: [
            "Overarching the lower back",
            "Bending the elbows",
            "Looking too far forward",
            "Shrugging or collapsing the shoulders",
            "Losing control of the body line"
        ]
    },


    {
        name: "Front Lever",
        difficulty: "Advanced",
        description: "An advanced static pulling skill requiring strong lats, core tension and scapular control.",

        warmup: [
            "Shoulder circles",
            "Scapular pull-ups",
            "Dead hang",
            "Hollow body hold"
        ],

        prerequisites: [
            "Strict pull-ups",
            "Active hang",
            "Hollow body hold",
            "Hanging knee raises",
            "Tuck front lever"
        ],

        drills: [
            "Tuck front lever",
            "Advanced tuck front lever",
            "One-leg front lever",
            "Straddle front lever",
            "Front lever raises",
            "Front lever negatives",
            "Full front lever holds"
        ],

        mistakes: [
            "Bending the elbows",
            "Dropping the hips",
            "Losing scapular control",
            "Breaking body tension",
            "Progressing to a harder variation too quickly"
        ]
    },


    {
        name: "Back Lever",
        difficulty: "Intermediate",
        description: "A static strength skill that requires shoulder mobility, straight-arm strength and full-body tension.",

        warmup: [
            "Wrist rotations",
            "Shoulder circles",
            "Shoulder dislocates",
            "Scapular activation"
        ],

        prerequisites: [
            "Active hang",
            "Skin the cat",
            "Controlled German hang",
            "Basic straight-arm strength",
            "Core control"
        ],

        drills: [
            "Skin the cat",
            "Tuck back lever",
            "Advanced tuck back lever",
            "One-leg back lever",
            "Straddle back lever",
            "Back lever negatives",
            "Full back lever holds"
        ],

        mistakes: [
            "Dropping the hips",
            "Bending the elbows",
            "Losing body tension",
            "Insufficient shoulder mobility",
            "Progressing to a harder variation too quickly"
        ]
    },


    {
        name: "L-Sit",
        difficulty: "Beginner",
        description: "A foundational static hold that develops core strength, hip compression and straight-arm support.",

        warmup: [
            "Wrist rotations",
            "Wrist extensions",
            "Hip flexor mobility",
            "Leg raises"
        ],

        prerequisites: [
            "Basic core strength",
            "Straight-arm support",
            "Tuck support hold",
            "Active compression"
        ],

        drills: [
            "Tuck sit",
            "Single-leg L-sit",
            "Supported L-sit",
            "L-sit leg extensions",
            "Full L-sit hold"
        ],

        mistakes: [
            "Bending the knees",
            "Dropping the hips",
            "Shrugging the shoulders",
            "Rounding the back excessively",
            "Holding the breath"
        ]
    },


    {
        name: "Handstand Push-Up",
        difficulty: "Highly Advanced",
        description: "An advanced pushing skill combining handstand balance with significant shoulder and upper-body strength.",

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
            "Strong overhead pressing strength",
            "Controlled handstand balance"
        ],

        drills: [
            "Wall handstand push-ups",
            "Negative handstand push-ups",
            "Partial range handstand push-ups",
            "Deficit handstand push-ups",
            "Freestanding handstand push-up negatives",
            "Full handstand push-ups"
        ],

        mistakes: [
            "Poor handstand alignment",
            "Flaring the elbows",
            "Using excessive lower-back arch",
            "Losing control during the descent",
            "Failing to maintain shoulder tension"
        ]
    },


    {
        name: "Planche",
        difficulty: "Highly Advanced",
        description: "An advanced straight-arm strength skill requiring exceptional shoulder, wrist and core control.",

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
            "Strong core control"
        ],

        drills: [
            "Planche lean",
            "Tuck planche",
            "Advanced tuck planche",
            "Straddle planche",
            "Planche push-ups",
            "Planche negatives",
            "Full planche holds"
        ],

        mistakes: [
            "Bending the elbows",
            "Insufficient forward lean",
            "Losing scapular protraction",
            "Dropping the hips",
            "Progressing to a harder variation too quickly"
        ]
    },


    {
        name: "Human Flag",
        difficulty: "Highly Advanced",
        description: "A lateral static hold requiring significant pulling, pushing and core strength to maintain a horizontal position.",

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
            "Strong grip",
            "Good shoulder control"
        ],

        drills: [
            "Vertical flag hold",
            "Tuck human flag",
            "One-leg human flag",
            "Straddle human flag",
            "Human flag negatives",
            "Full human flag holds"
        ],

        mistakes: [
            "Weak bottom-arm push",
            "Pulling only with the top arm",
            "Dropping the hips",
            "Poor body alignment",
            "Losing shoulder control",
            "Progressing to a harder variation too quickly"
        ]
    },


    {
        name: "One Arm Handstand",
        difficulty: "Highly Advanced",
        description: "An extreme balance skill requiring exceptional shoulder stability, wrist strength and precise body control.",

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
            "Wall-assisted weight shifts",
            "Fingertip-assisted one-arm holds",
            "Wall-assisted one-arm holds",
            "Controlled one-arm balance attempts",
            "Freestanding one-arm handstand holds"
        ],

        mistakes: [
            "Shifting weight too quickly",
            "Collapsing the supporting shoulder",
            "Losing hip control",
            "Bending the supporting arm",
            "Looking away from the supporting hand",
            "Attempting the skill without sufficient balance"
        ]
    },


    {
        name: "Skin the Cat",
        difficulty: "Beginner",
        description: "A foundational gymnastics movement that develops shoulder mobility, control and strength through a full range of motion.",
        warmup: [
            "Wrist rotations",
            "Shoulder circles",
            "Shoulder dislocates",
            "Scapular activation"
        ],
        prerequisites: [
            "Basic hanging strength",
            "Active hang",
            "Controlled German hang",
            "Basic shoulder mobility"
        ],
        drills: [
            "Tuck skin the cat",
            "Controlled skin the cat",
            "Slow skin the cat",
            "Skin the cat hold"
        ],
        mistakes: [
            "Dropping too quickly into the movement",
            "Insufficient shoulder mobility",
            "Bending the elbows excessively",
            "Losing control during the rotation"
        ]
    },


    {
        name: "Pike Push-Ups",
        difficulty: "Intermediate",
        description: "A shoulder-focused pushing movement that builds the overhead pressing strength needed for advanced skills.",

        warmup: [
            "Wrist rotations",
            "Wrist extensions",
            "Shoulder circles",
            "Scapular push-ups"
        ],

        prerequisites: [
            "Basic push-ups",
            "Strong plank hold",
            "Pike hold",
            "Basic shoulder control"
        ],

        drills: [
            "Pike hold",
            "Pike push-ups",
            "Feet-elevated pike push-ups",
            "Deep pike push-ups",
            "Slow eccentric pike push-ups"
        ],

        mistakes: [
            "Flaring the elbows",
            "Losing the pike position",
            "Dropping the head too quickly",
            "Using excessive momentum",
            "Failing to control the descent"
        ]
    },


    {
       name: "Swing Gainer",
        difficulty: "Advanced",
        description: "A dynamic aerial skill combining a powerful swing, explosive take-off and controlled backward rotation.",

        warmup: [
            "Ankle mobility",
            "Hip mobility",
            "Dynamic leg swings",
            "Light jumping drills"
        ],

        prerequisites: [
            "Strong single-leg take-off",
            "Good jumping ability",
            "Basic aerial awareness",
            "Controlled landing mechanics",
            "Confidence with backward rotation"
        ],

        drills: [
            "Swing mechanics",
            "Single-leg take-off drills",
            "Gainer jump progression",
            "Assisted gainer",
            "Low-height gainer practice",
            "Full swing gainer"
        ],

        mistakes: [
            "Poor take-off direction",
            "Insufficient swing",
            "Jumping too vertically",
            "Losing body control during rotation",
            "Poor landing position",
            "Attempting the skill without mastering the prerequisites"
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


    detailTitle.textContent = selectedSkill.name;

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