// Assuming you have a base URL for your API
const baseUrl = 'https://your-api-url.com/api/courses';

// Function to fetch courses
async function getCourses() {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
}

// Function to add a new course
async function addCourse(course) {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(course),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding course:', error);
  }
}

// Function to update a course
async function updateCourse(courseId, updatedCourse) {
  try {
    const response = await fetch(`${baseUrl}/${courseId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCourse),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating course:', error);
  }
}

// Function to delete a course
async function deleteCourse(courseId) {
  try {
    const response = await fetch(`${baseUrl}/${courseId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting course:', error);
  }
}

// Example usage:
// const courses = await getCourses();
// console.log('Courses:', courses);

// const newCourse = { name: 'New Course', description: 'A new course' };
// const addedCourse = await addCourse(newCourse);
// console.log('Added Course:', addedCourse);

// const courseIdToUpdate = 1;
// const updatedCourseData = { name: 'Updated Course', description: 'An updated course' };
// const updatedCourse = await updateCourse(courseIdToUpdate, updatedCou
