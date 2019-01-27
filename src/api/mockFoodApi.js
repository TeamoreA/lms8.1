import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "cool-pizza",
    title: "Beef pizza served with soda",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "Teamore",
    length: "5:08",
    category: "Desert"
  },
  {
    id: "clean-code",
    title: "Fresh fruit juice without additives",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "Teamore",
    length: "3:10",
    category: "Drinks"
  },
  {
    id: "architecture",
    title: "Best local Ugali with beef.",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    authorId: "Teamore",
    length: "2:52",
    category: "Supper"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "French fries",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    authorId: "Teamore",
    length: "2:30",
    category: "Breakfast"
  },
  {
    id: "web-components-shadow-dom",
    title: "Cold soda with a beer bonus.",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    authorId: "Teamore",
    length: "5:10",
    category: "Drinks"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          course.id = generateId(course);
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.id == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;
