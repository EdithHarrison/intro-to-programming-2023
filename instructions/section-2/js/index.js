// Insert Copyright Text in Footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Edith Harrison ${thisYear}`;
footer.appendChild(copyright);

// Create List of Skills
const skills = ["HTML", "CSS", "JavaScript", "Canva Design", "VSCode"];
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

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', function () {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
});
