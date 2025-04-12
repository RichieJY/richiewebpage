$(document).ready(function () {
    console.log('Page Loaded Successfully!');
  });

  $(document).ready(function () {
    let skills = [
      "Python <em>(Intermediate)</em>",
      "HTML5 <strong>(Proficient)</strong>",
      "CSS <strong>(Proficient)</strong>",
      "JavaScript <em>(Beginner)</em>",
      "JQuery <em>(Beginner)</em>",
      "Computer Aided Dispatch <strong>(Expert)</strong>",
      "Emergency / Non-Emergency Calltaking <strong>(Expert)</strong>",
      "Communication / Operating Communication Equipment <strong>(Expert)</strong>",
      "Microsoft Excel <strong>(Proficient)</strong>",
      "Microsoft Powerpoint & Office <strong>(Proficient)</strong>"
    ];
  
    let index = 0;
  
    function showSkills() {
      $("#skillsBox")
        .fadeIn(500)
        .delay(2000)
        .fadeOut(500, function () {
          index = (index + 1) % skills.length; // Loop through skills
          $(this).html(skills[index]); // Use .html() to allow HTML formatting
        });
    }
  
    setInterval(showSkills, 2000); // Update the text every 2 seconds
});

  