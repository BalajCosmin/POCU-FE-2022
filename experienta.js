const experiences = [
    {
      id: 1,
      name: "Frontend Summer Practice- Endava",
      department: "Front-end",
      description:
        "Currently part of the Frontend summer practice at Endava.",
      company: "Endava",
      startDate: "01-07-2022",
      endDate: "02-09-2022",
    },
    {
      id: 2,
      name: "Grow @Siemens Java developer",
      department: "Java",
      description:
        "Part of the Grow @ Siemens R&D fellowship program as a Java developer in a project to deepen the knowledge gained during my internship.  Concepts and technologies used so far: Spring, including Spring Cloud and Spring Security, Microservices, JHipster, PostgreSQL, Junit",
      company: "Siemens",
      startDate: "01-02-2022",
      endDate: "30-06-2022",
    },
    {
      id: 2,
      name: "Java developer Intern- Siemens",
      department: "Java",
      description:
        " technology used: Java Spring Framework, JPA, React.js and MySQL Project: A a web application based on a Peer-to-Peer car rental marketplace system, having a complete rental system where users canadd an ad for a new car or rent one from an existing list. They can fill in information about their car, upload and view photos and the car infos on the car details page, filter the list of ads using keywordssuch as the car model or the city where the car is located.They can also set the period for which the car is available and will receive a confirmation email after the car has been rented. The app issecured using Spring Security with JWT and has a control system for the ads, the users being able to remove the ad from the list or return  the car at any time.",
      company: "Siemens",
      startDate: "01-11-2022",
      endDate: "31-01-2022",
    },
  ];
  
  function generateExperienceSection(experience) {
    const experienceField = document.createElement("div");
    experienceField.classList = "experience";
  
    const nameExp = document.createElement("h2");
    nameExp.innerText = experience.name;
    const departmentExp = document.createElement("p");
    departmentExp.innerText = experience.department;
    const descriptionExp = document.createElement("p");
    descriptionExp.innerText = experience.description;
    const showMoreBtn = document.createElement("button");
    showMoreBtn.innerHTML = '<i class="arrow"></i>';
    showMoreBtn.id = "readMoreBtn";
    descriptionExp.classList = "description-experience";
    const companyExp = document.createElement("p");
    companyExp.innerText = experience.company;
    const startDateExp = document.createElement("p");
    startDateExp.innerText = "Start date: " + experience.startDate;
    const endDateExp = document.createElement("p");
    endDateExp.innerText = "End Date: " + experience.endDate;
  
    experienceField.appendChild(nameExp);
    experienceField.appendChild(departmentExp);
    experienceField.appendChild(companyExp);
    experienceField.appendChild(startDateExp);
    experienceField.appendChild(endDateExp);
    experienceField.appendChild(descriptionExp);
   // experienceField.appendChild(showMoreBtn);
  
    return experienceField;
  }
  
  function populateExperienceContainer(experienceElem) {
    const experienceContainer = document.getElementById("container-experience");
  
    experienceElem.forEach(function (experienceObj, index) {
      const experCard = generateExperienceSection(experienceObj);
      experienceContainer.appendChild(experCard);
    });
  }
  
  function byDateDay(a, b) {
    const d1 = new Date(a.endDate);
    const d2 = new Date(b.endDate);
    if (d1.getUTCMonth() > d2.getUTCMonth()) {
      return 1;
    } else if (d1.getUTCMonth() < d2.getUTCMonth()) {
      return -1;
    } else {
      return d2.getUTCDate() - d1.getUTCDate();
    }
  }
  populateExperienceContainer(experiences.sort(byDateDay));
  
  const box = document.querySelector(".experience");
  
  let isOpen = false;
  document.querySelector("button").addEventListener("click", () => {
    isOpen = !isOpen;
    if (isOpen) {
      box.classList.add("open");
    } else {
      box.classList.remove("open");
    }
  });

  
