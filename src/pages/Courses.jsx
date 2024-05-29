import React, { useContext, useEffect } from "react";
import Button from "../components/shared/Button";
import Drawer from "../components/shared/Drawer";
import AddCourse from "../components/AddCourse";
import CourseCard from "../components/shared/CourseCard";
import Axios from "../config/Axios";
import MyContext from "../context/MyContext";
const Courses = () => {
  const { courses, setCourses } = useContext(MyContext);

  useEffect(() => {
    Axios.get("course")
      .then((res) => {
        setCourses(res.data.courses);
      })
      .catch((err) => console.log(err));
  }, [setCourses]);
  return (
    <>
      <section className="w-full h-full flex flex-col">
        <div className="flex items-center justify-end">
          <Button
            title={"Add Course"}
            bgColor={"btn-blue"}
            htmlFor={"add-course"}
          />
        </div>
        <div class="bg-white py-6 mt-5 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div class="mb-6 flex items-end justify-between gap-4">
              <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">
                Courses
              </h2>
            </div>

            <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
              {courses &&
                courses.map((item) => (
                  <CourseCard key={item._id} course={item} />
                ))}
            </div>
          </div>
        </div>
      </section>
      <Drawer id={"add-course"}>
        <AddCourse id={"add-course"} />
      </Drawer>
      <Drawer id={"edit-course"}>
        <AddCourse id={"edit-course"} />
      </Drawer>
    </>
  );
};

export default Courses;
