import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../../config/Axios";
const CourseCard = ({
  course,
  showEnroll = false,
  isEnrolled = false,
  setFilteredCourse,
}) => {
  const [enrolled, setEnrolled] = useState(isEnrolled);
  const navigate = useNavigate();
  const handleEdit = () => {
    if (!showEnroll) {
      const editCourosal = document.getElementById("edit-course");
      if (editCourosal) {
        editCourosal.checked = true;
      }
      navigate(`/admin/courses?courseId=${course._id}`);
    }
  };
  const Enroll = () => {
    console.log("object");
    setEnrolled(true);
    isEnrolled
      ? Axios.delete(`enroll/${course._id}`)
          .then((res) => {
            setFilteredCourse(res.data.enroll);
          })
          .catch((err) => console.log(err))
      : Axios.post(`enroll/${course._id}`)
          .then((res) => console.log(res))
          .catch((err) => {
            setEnrolled(false);
          });
  };
  return (
    <div onClick={() => handleEdit()}>
      <div className="group relative mb-2 block h-fit overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=75&fit=crop&w=600"
          loading="lazy"
          alt="course"
          className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          sale
        </span>
      </div>

      <div>
        <div className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">
          {course.name}
        </div>
        <p>{course.description}</p>
        <div className="flex items-end gap-2 my-2">
          <div className="flex items-center">
            <p>start at :</p>

            <span className="font-bold text-gray-800 ">
              {new Date(course.start_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </span>
          </div>
        </div>
        <button
          onClick={() => {
            isEnrolled ? Enroll() : !enrolled && Enroll();
          }}
          className={`px-4 py-2 rounded-md ${
            enrolled ? "bg-green-500" : "bg-blue-500"
          } text-white transition-all duration-500`}
        >
          {enrolled ? (isEnrolled ? "Remove" : "Enrolled") : "Enroll"}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
