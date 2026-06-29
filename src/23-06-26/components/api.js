import axios from "axios";

const API = "http://localhost:4000/courses";

export const fetchCourses = () => {
  return axios.get(API);
};

export const updateCourse = (course) => {
  return axios.put(`${API}/${course.id}`, course);
};