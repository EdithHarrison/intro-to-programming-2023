//Clickable experience section
document.addEventListener("DOMContentLoaded", function () {
  const clickables = document.querySelectorAll(".clickable");
  const descriptions = document.querySelectorAll(".description");
  const companies = document.querySelectorAll(".company");

  // Initially show the first description, highlight the first clickable, and show the first company as active
  descriptions[0].classList.add("active");
  companies[0].classList.add("active");
  clickables[0].classList.add("active");

  // Initially the first image and its corresponding <p> as active 
  companies.forEach((company, index) => {
    const img = company.querySelector("img");
    const description = company.querySelector("p");

    if (index === 0) {
      img.style.display = "block";
      description.style.display = "block";
    } else {
      img.style.display = "none";
      description.style.display = "none";
    }
  });

  clickables.forEach((clickable, index) => {
    clickable.addEventListener("click", () => {
      // Hide all descriptions, companies, and images
      descriptions.forEach((desc) => {
        desc.classList.remove("active");
      });

      companies.forEach((company) => {
        company.classList.remove("active");
      });

      // Show the corresponding description, company, and image
      descriptions[index].classList.add("active");
      companies[index].classList.add("active");

      // Hide all images and corresponding <p> elements, then show the corresponding image and <p>
      document.querySelectorAll(".company img, .company p").forEach((element) => {
        element.style.display = "none";
      });

      companies[index].querySelector("img").style.display = "block";
      companies[index].querySelector("p").style.display = "block";

      // Toggle the active class for clickables
      clickables.forEach((clickable) => {
        clickable.classList.remove("active");
      });
      clickables[index].classList.add("active");
    });
  });
});

// Insert Copyright Text in Footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Edith Harrison ${thisYear}`;
footer.appendChild(copyright);

// Create List of Skills
const skills = ["HTML", "CSS", "JavaScript", "AJAX", "VSCode", "Fetch API"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (const skillName of skills) {
    const skill = document.createElement('li');
    skill.innerText = skillName;
    skillsList.appendChild(skill);
}

// Handle Message Form Submit
const messageForm = document.forms['leave_message'];

messageForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log('Name:', usersName);
    console.log('Email Address:', usersEmail);
    console.log('Message:', usersMessage);

    messageForm.reset();

    // Display Messages in List
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');

    const newMessage = document.createElement('li');
    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a>
        <span>${usersMessage}</span>
    `;

    // Edit Button
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.type = 'button'; 

    editButton.addEventListener('click', function () {
        const spanElement = newMessage.querySelector('span');
        const existingContent = spanElement.textContent;

        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.value = existingContent;

        newMessage.replaceChild(editInput, spanElement);

        editInput.focus();

        editInput.addEventListener('blur', function () {
            const editedContent = editInput.value;
            spanElement.textContent = editedContent;
            newMessage.replaceChild(spanElement, editInput);
        });
    });

    // Remove Button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', function () {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
});
  
const githubUsername = "EdithHarrison";
const githubApiUrl = `https://api.github.com/users/${githubUsername}/repos`;
const projectSection = document.getElementById('projects');
const projectList = projectSection.querySelector('ul');

// Using the Fetch API to make a GET request
fetch(githubApiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(repositories => {
    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement('li');
      const projectLink = document.createElement('a');
      const projectDetails = document.createElement('p');
      projectLink.href = repositories[i].html_url;

      projectLink.innerText = repositories[i].name;

      // Add additional information to the <p> tag
      projectDetails.innerHTML = `<strong>Description:</strong> ${repositories[i].description || 'N/A'}<br>
                                  <strong>Created at:</strong> ${new Date(repositories[i].created_at).toLocaleDateString()}`;

      project.appendChild(projectLink);
      project.appendChild(projectDetails);
      projectList.appendChild(project);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  //Adjust video speeds and smooth loop transition
  document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("backgroundVideo");

    video.playbackRate = 0.5;

    video.addEventListener("timeupdate", function () {
        if (video.currentTime >= video.duration - 0.1) {
            video.currentTime = 0;
        }
    });
});
