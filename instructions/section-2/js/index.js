// Insert Copyright Text in Footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Edith Harrison ${thisYear}`;
footer.appendChild(copyright);

// Create List of Skills
const skills = ["HTML", "CSS", "JavaScript", "AJAX", "VSCode"];
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

    const githubRequest = new XMLHttpRequest();

    const githubApiUrl = `https://api.github.com/users/${githubUsername}/repos`;
    githubRequest.open('GET', githubApiUrl);

    githubRequest.onreadystatechange = function () {
    if (githubRequest.readyState === 4 && githubRequest.status === 200) {

        const repositories = JSON.parse(githubRequest.responseText);
        console.log(repositories); 

        const projectSection = document.getElementById('projects');
        const projectList = projectSection.querySelector('ul');

        // Loop through repositories and create <a> tags with additional information
        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement('li');
            const projectLink = document.createElement('a');
            const projectDetails = document.createElement('p');

            // Set the href attribute to the GitHub repository URL
            projectLink.href = repositories[i].html_url;

            // Set the inner text of the <a> tag to the repository name
            projectLink.innerText = repositories[i].name;

            // Add additional information to the <p> tag
            projectDetails.innerHTML = `<strong>Description:</strong> ${repositories[i].description || 'N/A'}<br>
                                        <strong>Created at:</strong> ${new Date(repositories[i].created_at).toLocaleDateString()}`;

            project.appendChild(projectLink);
            project.appendChild(projectDetails);
            projectList.appendChild(project);
        }
    }
};

githubRequest.addEventListener('load', function (event) {
   
});

githubRequest.send();
