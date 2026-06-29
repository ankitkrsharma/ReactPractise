import { create } from "zustand";
const useCourseStore = create((set) => ({
  courses: [
    {
      id: 1,
      name: "React Basics",
      status: "Completed",
    },
    {
      id: 2,
      name: "Advanced JavaScript",
      status: "In Progress",
    },
    {
      id: 3,
      name: "Node.js Fundamentals",
      status: "Not Started",
    },
  ],
  changeStatus: (id, status) =>
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === id ? { ...course, status } : course
      ),
    })),
}));
export default useCourseStore;