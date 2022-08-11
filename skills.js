const skills = [
  {
    id: 1,
    name: "Java",
  },
  {
    id: 2,
    name: "Spring &Spring Boot",
  },
  {
    id: 3,
    name: "React.js",
  },
  {
    id: 4,
    name: "Javascript",
  },
  {
    id: 5,
    name: "MATLAB",
  },
  {
    id: 6,
    name: "Arduino",
  },
  {
    id: 7,
    name: "Basics of Python",
  },
  {
    id: 8,
    name: "Basics of .NET",
  },
  {
    id: 9,
    name: "Basics of Android(Kotlin)",
  },
];

const otherTechSkills = [
  {
    id: 1,
    name: "MySQL",
  },
  {
    id: 2,
    name: "OracleSQL",
  },
  {
    id: 3,
    name: "GIT",
  },
  {
    id: 4,
    name: "Maven",
  },
  {
    id: 5,
    name: "Linux",
  },
  {
    id: 6,
    name: "Junit",
  },
  {
    id: 7,
    name: "Java Swing",
  },
  {
    id: 8,
    name: "HTML/CSS",
  },
  {
    id: 9,
    name: "IntelliJ IDEA, NetBeans, Eclipse",
  },

  {
    id: 10,
    name: "Visual Studio Code",
  },

  {
    id: 11,
    name: "Simulink",
  },
  {
    id: 12,
    name: "Microsoft Teams",
  },
  {
    id: 13,
    name: "Arduino Studio",
  },
];

const softSkills = [
  {
    id: 1,
    name: "Adaptability",
  },
  {
    id: 2,
    name: "Problem solving skills",
  },
  {
    id: 3,
    name: "Good team worker",
  },
  {
    id: 4,
    name: "Good listener and communicator",
  },
  {
    id: 5,
    name: "Coding and debugging",
  },
  {
    id: 6,
    name: "Self-motivator",
  },
  {
    id: 7,
    name: "Good time management",
  },
  {
    id: 8,
    name: "Analytical skills",
  },
];

const languages = [
  {
    id: 1,
    name: "Romanian: Native language",
  },
  {
    id: 2,
    name: "English: High proeficiency",
  },

  {
    id: 3,
    name: "French: Limited working proficiency",
  },
];

const certificates = [
  {
    id: 1,
    name: "European Computer Driving License (2017-present) ",
  },
];

const interests = [
  {
    id: 1,
    name: "Computing ",
  },

  {
    id: 2,
    name: "Arduino ",
  },

  {
    id: 3,
    name: "Data Structures and Algorithms ",
  },

  {
    id: 4,
    name: "Being involved with charities ",
  },

  {
    id: 5,
    name: "Participating in campaigns ",
  },

  {
    id: 6,
    name: "Travelling",
  },
];
function generateSkillSection(skill) {
  const skillsField = document.createElement("ul");
  skillsField.classList = "experience";

  const nameSkill = document.createElement("li");
  nameSkill.innerText = skill.name;

  skillsField.appendChild(nameSkill);

  return skillsField;
}

function populateSkillsContainer(skillsElem) {
  const skillsContainer = document.getElementById("container-experience");
  const skillsFieldNameTitle = document.createElement("h1");
  skillsFieldNameTitle.innerText = "My current skills";
  skillsContainer.appendChild(skillsFieldNameTitle);
  const skillsFieldName = document.createElement("h3");
  skillsFieldName.innerText = "Technical Skills";
  skillsContainer.appendChild(skillsFieldName);

  skillsElem.forEach(function (skillObj, index) {
    const Card = generateSkillSection(skillObj);
    skillsContainer.appendChild(Card);
  });
}

function populateOtherSkillsContainer(skillsElem) {
  const skillsContainer = document.getElementById("container-other");
  const skillsFieldName = document.createElement("h3");
  skillsFieldName.innerText = "Other technologies";
  skillsContainer.appendChild(skillsFieldName);

  skillsElem.forEach(function (skillObj, index) {
    const Card = generateSkillSection(skillObj);
    skillsContainer.appendChild(Card);
  });
}

function populateSoftSkillsContainer(skillsElem) {
  const skillsContainer = document.getElementById("container-soft");
  const skillsFieldName = document.createElement("h3");
  skillsFieldName.innerText = "Soft Skills";
  skillsContainer.appendChild(skillsFieldName);

  skillsElem.forEach(function (skillObj, index) {
    const Card = generateSkillSection(skillObj);
    skillsContainer.appendChild(Card);
  });
}

function populateLanguagesContainer(languagesElem) {
  const languagesContainer = document.getElementById("container-languages");
  const languagesFieldName = document.createElement("h3");
  languagesFieldName.innerText = "Languages";
  languagesContainer.appendChild(languagesFieldName);

  languagesElem.forEach(function (languagesObj, index) {
    const Card = generateSkillSection(languagesObj);
    languagesContainer.appendChild(Card);
  });
}

function populateCertificatesContainer(certificatesElem) {
  const certificatesContainer = document.getElementById(
    "container-certificates"
  );
  const certificatesFieldName = document.createElement("h3");
  certificatesFieldName.innerText = "Certificates";
  certificatesContainer.appendChild(certificatesFieldName);

  certificatesElem.forEach(function (certificatesObj, index) {
    const Card = generateSkillSection(certificatesObj);
    certificatesContainer.appendChild(Card);
  });
}

function populateInterestsContainer(interestsElem) {
  const interestsContainer = document.getElementById("container-interests");
  const interestsFieldName = document.createElement("h3");
  interestsFieldName.innerText = "Interests";
  interestsContainer.appendChild(interestsFieldName);

  interestsElem.forEach(function (InterestsObj, index) {
    const Card = generateSkillSection(InterestsObj);
    interestsContainer.appendChild(Card);
  });
}

populateSkillsContainer(skills);
populateOtherSkillsContainer(otherTechSkills);
populateSoftSkillsContainer(softSkills);
populateLanguagesContainer(languages);
populateCertificatesContainer(certificates);
populateInterestsContainer(interests);

const box = document.querySelector(".skills");
