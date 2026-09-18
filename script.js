/* =====================================================
   CALISTRAX - SKILL DATA
===================================================== */
const skills = [

    /* ---------- MUSCLE UP ---------- */

    {
        name: "Muscle Up",

        difficulty: "Advanced",

        description:
            "A powerful calisthenics skill combining explosive pulling strength, pushing strength and technique.",

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
        ]
    },


    /* ---------- HANDSTAND ---------- */

    {
        name: "Handstand",

        difficulty: "Advanced",

        description:
            "A foundational balance skill requiring shoulder control, wrist strength and body awareness."
    },


    /* ---------- FRONT LEVER ---------- */

    {
        name: "Front Lever",

        difficulty: "Advanced",

        description:
            "A static pulling skill requiring strong lats, core and scapular control."
    },


    /* ---------- BACK LEVER ---------- */

    {
        name: "Back Lever",

        difficulty: "Beginner",

        description:
            "A static pulling skill requiring strong lats, glutes, core and scapular control from the back side.",

        after: "Front Lever"
    },


    /* ---------- L-SIT ---------- */

    {
        name: "L-Sit",

        difficulty: "Beginner",

        description:
            "A foundational static hold that develops core and hip-flexor strength."
    },


    /* ---------- HANDSTAND PUSH-UP ---------- */

    {
        name: "Handstand Push-Up",

        difficulty: "Highly Advanced",

        description:
            "A balance and pushing skill requiring exceptional shoulder strength, wrist strength, body awareness and balance.",

        after: "L-Sit"
    },


    /* ---------- PLANCHE ---------- */

    {
        name: "Planche",

        difficulty: "Highly Advanced",

        description:
            "An advanced pushing skill requiring exceptional shoulder, wrist and core strength."
    },


    /* ---------- HUMAN FLAG ---------- */

    {
        name: "Human Flag",

        difficulty: "Highly Advanced",

        description:
            "A lateral static hold requiring significant shoulder, core and pulling strength."
    },


    /* ---------- ONE ARM HANDSTAND ---------- */

    {
        name: "One Arm Handstand",

        difficulty: "Highly Advanced",

        description:
            "An extreme balance skill requiring exceptional shoulder strength, wrist strength and body control. Takes significant time and practice to master.",

        after: "Handstand Push-Up"
    }

];


/* =====================================================
   DISPLAY SKILL CARDS
===================================================== */

const skillsContainer = document.getElementById("skills-container");


function displaySkills() {

    skillsContainer.innerHTML = "";


    skills.forEach(function(skill) {

        const card = document.createElement("div");

        card.classList.add("skill-card");


        card.innerHTML = `
            <div>
                <h3>${skill.name}</h3>

                <p>${skill.difficulty}</p>

                <p>${skill.description}</p>
            </div>

            <button
                class="view-btn"
                data-skill="${skill.name}">
                View Skill
            </button>
        `;


        skillsContainer.appendChild(card);

    });

}


/* Display cards when page loads */

displaySkills();


/* =====================================================
   GET SKILL DETAIL ELEMENTS
===================================================== */

const viewButtons = document.querySelectorAll(".view-btn");


const detailTitle =
    document.getElementById("detail-title");

const detailDescription =
    document.getElementById("detail-description");


const warmupContainer =
    document.getElementById("warmup-container");

const prerequisitesContainer =
    document.getElementById("prerequisites-container");


/* =====================================================
   VIEW SKILL BUTTONS
===================================================== */

viewButtons.forEach(function(button) {

    button.addEventListener("click", function() {


        /* ---------- FIND SELECTED SKILL ---------- */

        const skillName =
            button.dataset.skill;


        const selectedSkill =
            skills.find(function(skill) {

                return skill.name === skillName;

            });


        console.log(selectedSkill);


        /* ---------- BASIC INFORMATION ---------- */

        detailTitle.textContent =
            selectedSkill.name;


        detailDescription.textContent =
            selectedSkill.description;


        /* ---------- SMOOTH SCROLL ---------- */

        document
            .getElementById("skill-details")
            .scrollIntoView({
                behavior: "smooth"
            });


        /* =================================================
           WARM-UP
        ================================================= */

        warmupContainer.innerHTML = "";


        if (selectedSkill.warmup) {


            warmupContainer.innerHTML =
                "<h3>Warm-up</h3>";


            const warmupList =
                document.createElement("ul");


            selectedSkill.warmup.forEach(
                function(exercise) {


                    const item =
                        document.createElement("li");


                    item.textContent =
                        exercise;


                    warmupList.appendChild(item);

                }
            );


            warmupContainer.appendChild(
                warmupList
            );

        }


        /* =================================================
           PREREQUISITES
        ================================================= */

        prerequisitesContainer.innerHTML = "";


        if (selectedSkill.prerequisites) {


            prerequisitesContainer.innerHTML =
                "<h3>Prerequisites</h3>";


            const prerequisitesList =
                document.createElement("ul");


            selectedSkill.prerequisites.forEach(
                function(prerequisite) {


                    const item =
                        document.createElement("li");


                    item.innerHTML = `
                        <input type="checkbox">
                        <span>${prerequisite}</span>
                    `;


                    prerequisitesList.appendChild(item);

                }
            );


            prerequisitesContainer.appendChild(
                prerequisitesList
            );

        }

    });

});