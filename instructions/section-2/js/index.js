// Insert Copyright Text in Footer
var today = new Date();
var thisYear = today.getFullYear();
var footer = document.querySelector('footer');
var copyright = document.createElement('p');
copyright.innerHTML = 'Edith Harrison ' + thisYear;
footer.appendChild(copyright);

//Create List of Skills
var skills = ["HTML", "CSS", "JavaScript"];
var skillsSection = document.getElementById('skills');
var skillsList = skillsSection.querySelector('ul');
for (var i = 0; i < skills.length; i++) {
    var skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
