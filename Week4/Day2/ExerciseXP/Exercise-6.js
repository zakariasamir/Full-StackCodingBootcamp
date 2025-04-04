const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

const PassedTheCourse = students.filter((student) => student.isPassed);
console.log(PassedTheCourse);

const congratStudent = students
  .filter((student) => student.isPassed)
  .forEach((element) => {
    console.log( `Good job ${element.name}, you passed the course in ${element.course}`);
  });
congratStudent
