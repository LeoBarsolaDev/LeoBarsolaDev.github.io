// Button Courses
const courseList = document.getElementById("course-list")
const collCourse = document.getElementById("collapse-course")
let courseState = true

collCourse.addEventListener("click", () =>{
    if(courseState == true){
        courseList.style.display = "none"
        courseState = false
    } else{
        courseList.style.display = "block"
        courseState = true
    }
})


// Button DarkMode
const toggle = document.getElementById("toggle-btn")
const toggleIcon = document.getElementById("toggle-icon")
let darkTheme = true

toggle.addEventListener("click", () =>{
    if(darkTheme == true){
        toggleIcon.classList.replace("fa-toggle-on", "fa-toggle-off")
        darkTheme = false
        switchLight()
    } else{
        toggleIcon.classList.replace("fa-toggle-off", "fa-toggle-on")
        darkTheme = true
        switchDark()
    }
})

const root = document.querySelector(":root")
function switchDark(){
    console.log("Switch")
    root.style.setProperty('--bg', '#000');
    root.style.setProperty('--bg-section', '#141414');
    root.style.setProperty('--bg-section-snd', '#282828');
    root.style.setProperty('--text-title', '#fff');
    root.style.setProperty('--text', '#d3d3d3');
    root.style.setProperty('--shadow', 'transparent');
    toggle.style.color = "var(--main)"
}

function switchLight(){
    console.log("Switch")
    root.style.setProperty('--bg', '#fff');
    root.style.setProperty('--bg-section', '#f5f5f5');
    root.style.setProperty('--bg-section-snd', '#eeeeee');
    root.style.setProperty('--text-title', '#1e1e1e');
    root.style.setProperty('--text', '#808080');
    root.style.setProperty('--shadow', '#dedede');
    toggle.style.color = "var(--text)"
}