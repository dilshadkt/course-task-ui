import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    document.getElementById("edit-course").checked = true;
    navigate(`/admin/courses?courseId=${course._id}`);
  };
  return (
    <div onClick={() => handleEdit()}>
      <div class="group relative mb-2 block h-fit overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=75&fit=crop&w=600"
          loading="lazy"
          alt="course"
          class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        <span class="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          sale
        </span>
      </div>

      <div>
        <div class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">
          {course.name}
        </div>
        <p>{course.description}</p>

        <div class="flex items-end gap-2 my-2">
          <div className="flex items-center">
            <p>start at :</p>

            <span class="font-bold text-gray-800 ">
              {new Date(course.start_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
