class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(
      `${this.uploader} watched all ${this.time} seconds of "${this.title}"!`
    );
  }
}

const video1 = new Video("JavaScript Tutorial", "John Doe", 300);
const video2 = new Video("React Basics", "Jane Smith", 600);

video1.watch();
video2.watch();

const videoData = [
  { title: "HTML Crash Course", uploader: "Alice", time: 450 },
  { title: "CSS Flexbox Guide", uploader: "Bob", time: 550 },
  { title: "JavaScript ES6 Features", uploader: "Charlie", time: 700 },
  { title: "Node.js Fundamentals", uploader: "David", time: 800 },
  { title: "MongoDB for Beginners", uploader: "Eve", time: 600 },
];

const videoInstances = videoData.map(
  (video) => new Video(video.title, video.uploader, video.time)
);

videoInstances.forEach((video) => video.watch());
