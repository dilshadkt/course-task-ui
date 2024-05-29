import React, { useContext, useEffect, useState } from "react";
import MyContext from "../context/MyContext";
import CourseCard from "../components/shared/CourseCard";
import { useSearchParams } from "react-router-dom";
import Axios from "../config/Axios";
const Home = () => {
  const { courses, enrolled } = useContext(MyContext);
  const [filteredCourse, setFilteredCourse] = useState(courses);
  const [searchparams] = useSearchParams();
  const filter = searchparams.get("filter");
  useEffect(() => {
    if (filter === "enrolled") {
      Axios.get("enroll/enrolled")
        .then((res) => {
          setFilteredCourse(res.data.enrolled_course);
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      setFilteredCourse(courses);
    }
  }, [filter]);

  return (
    <div className="bg-white py-6 mt-5 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            {filter === "enrolled" ? "Enrolled Course" : "Available Courses"}
          </h2>
        </div>

        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCourse &&
            filteredCourse.map((item) => (
              <CourseCard
                key={item._id}
                course={item}
                showEnroll={true}
                isEnrolled={filter === "enrolled" ? true : false}
                setFilteredCourse={setFilteredCourse}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
