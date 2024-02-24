const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C++', 'Vue.js',
    'Python', 'git',
    'Django', 'Flutter', 'PostgreSQL',
];

var tagCloud = TagCloud('.tagclouddiv', myTags, {

    // radius in px
    radius: 250,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true

});

//To change the color of text randomly
var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.tagclouddiv').style.color = random_color;