let left_arrow = document.createElement("button");
left_arrow.innerText = "<";
left_arrow.id = "left_btn";

let Right_arrow = document.createElement("button");
Right_arrow.innerText = ">";
Right_arrow.id = "right_btn";

let right = document.getElementById("Right");
right.append(Right_arrow);
let left = document.getElementById("Left");
left.append(left_arrow);

let custname = document.getElementById("Name");
// console.log(custname)

let designation = document.getElementById("Designation");
// console.log(designation)

let image = document.getElementById("User_image");
// console.log(image)

let p_content = document.getElementById("para");
// console.log(p_content)

User_details = [
  {
    src: "S.jpg",
    Name: "Sakura",
    Designation: "Web Designer",
    About:
    "A  Web--Designer web developer primarily uses HTML & CSS and JavaScript coding languages to build websites that are responsive, user-friendly, and interactive. At Juno, we’re experts in helping people become front-end developers. ",
  },
  {
    src: "it.jpeg",
    Name: "Itachi",
    Designation: " Full-Stack Developer",
    About:
    "A full-stack developer is proficient in working with both front-end and back-end coding languages. With their diverse skill set, they are able to work on every step of the web development process, including prototyping and programming browsers",
  },
  {
    src: "j.jpeg",
    Name: "Luffy",
    Designation: "Front-End Web Developer",
    About:
      "A front-end web developer primarily uses HTML & CSS and JavaScript coding languages to build websites that are responsive, user-friendly, and interactive. At Juno, we’re experts in helping people become front-end developers. ",
  },
  {
    src: "hi.jpeg",
    Name: "Hinata",
    Designation: "Web Analyst",
    About:
    "A web analyst works on the web development team, and uses data analytics to track and identify trends in website user behaviour and interaction. Their primary goal is to draw conclusions from this data in order to strategize and improve ",
  },

 
];

// let index = -1;
// Right_arrow.addEventListener("click", myfunction);

// function myfunction() {
//   index = index >= User_details.length - 1 ? 0 : index + 1;

//   image.src = User_details[index].src;
//   custname.innerHTML = User_details[index].Name;
//   designation.innerHTML = User_details[index].Designation;
//   p_content.innerHTML = User_details[index].About;
// }

// left_arrow.addEventListener("click", previous);
// function previous() {

//   index = index == 0 ? User_details.length - 1 : index - 1;

//   image.src = User_details[index].src;
//   custname.innerHTML = User_details[index].Name;
//   designation.innerHTML = User_details[index].Designation;
//   p_content.innerHTML = User_details[index].About;
// }



left_arrow.addEventListener("click", function() {
  add("prev");
});
Right_arrow.addEventListener("click", function() {
  add("Next");
});

let index = -1;

function add(x){
  if (x==="Next"){
    
      index = index >= User_details.length - 1 ? 0 : index + 1;
  }
  else{
      index = index == -1 ? User_details.length - 1 : index - 1;
  }

  image.src = User_details[index].src;
  custname.innerHTML = User_details[index].Name;
  designation.innerHTML = User_details[index].Designation;
  p_content.innerHTML = User_details[index].About;
}









