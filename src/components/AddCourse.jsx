import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AddForm } from "../constants";
import Axios from "../config/Axios";
import { nanoid } from "nanoid";
import { useNavigate, useSearchParams } from "react-router-dom";
import MyContext from "../context/MyContext";
const AddCourse = ({ id }) => {
  const { courses, setCourses } = useContext(MyContext);
  const navigator = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [searchPrams] = useSearchParams();
  const courseId = searchPrams.get("courseId");

  if (courseId && courses) {
    const course = courses?.filter((item) => item._id === courseId)[0];
    const startDate = new Date(course?.start_date)
      ?.toISOString()
      ?.split("T")[0];
    const endDate = new Date(course?.end_date)?.toISOString()?.split("T")[0];
    AddForm.map((item) => {
      return setValue(item, course[item]);
    });
    setValue("start_date", startDate);
    setValue("end_date", endDate);
  }

  const CreatCourse = (data) => {
    //////////  IF ID OCCURE THAT MEANS UPDATE ////////////
    if (courseId) {
      Axios.patch(`course/${courseId}`, data)
        .then((res) => {
          const updateCourse = res.data.course;
          setCourses((prev) => {
            return prev.map((item) =>
              item._id === courseId ? updateCourse : item
            );
          });
          document.getElementById(id).checked = false;
          navigator("/admin/courses");
        })
        .catch((err) => console.log(err));
    } else {
      /////////// IF THERE HAS NO ID THAT MEANS CREATE /////////
      Axios.post("course", data)
        .then((res) => {
          console.log(res);
          reset();
          document.getElementById(id).checked = false;
          navigator("/admin/courses");
        })
        .catch((err) => console.log(err));
    }
  };
  /////////// REMOVE THE COURSE BASED ON THE ID///////////
  const RemoveCourse = () => {
    Axios.delete(`course/${courseId}`)
      .then((res) => {
        setCourses((previous) => {
          return previous.filter((item) => item._id !== courseId);
        });
        document.getElementById(id).checked = false;
        navigator("/admin/courses");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full h-full flex-center flex-col ">
      <h3 className="text-2xl">{courseId ? "Edit Course" : "  Add Course"}</h3>
      <form
        onSubmit={handleSubmit(CreatCourse)}
        className="fex flex-col w-full mt-5"
      >
        <input
          type="text"
          {...register("name", {
            required: "Course name is required",
            minLength: {
              value: 2,
              message: "Name length should be atleast 2",
            },
          })}
          className="p-3 w-full border rounded-md my-1"
          placeholder="Course Name"
        />
        <textarea
          {...register("description", {
            required: "Course description is required",
            minLength: {
              value: 20,
              message: "Description length should be atleast 20",
            },
          })}
          className="p-3 w-full border rounded-md my-1"
          placeholder="Course Description"
        />
        <input
          type="number"
          {...register("duration", {
            required: "Course description is required",
          })}
          className="p-3 w-full border rounded-md my-1"
          placeholder="Course duration"
        />
        <input
          type="date"
          {...register("start_date", { required: "Start date is required" })}
          className="p-3 w-full border rounded-md my-1"
          placeholder="Course Name"
        />
        <input
          type="date"
          {...register("end_date", { required: "End date is required" })}
          className="p-3 w-full border rounded-md my-1"
          placeholder="Course Name"
        />
        <input
          type="text"
          {...register("instructor", {
            required: "Instructor name is required",
          })}
          className="p-3 w-full border rounded-md my-1"
          placeholder="Instructer Name"
        />

        <ul className="list-disc pl-5">
          {AddForm.map((item, index) => (
            <div key={nanoid()}>
              {errors[item] && (
                <li
                  key={index}
                  className="text-sm  flex flex-wrap  text-red-500 "
                >
                  {errors[item].message}
                </li>
              )}
            </div>
          ))}
        </ul>
        <button className="w-full p-3 flex-center bg-blue-500 text-white rounded-lg mt-2 font-medium hover:font-bold">
          {courseId ? "Save Changes" : "Add"}
        </button>
      </form>
      {courseId && (
        <button
          onClick={() => RemoveCourse()}
          className="w-full p-3 flex-center bg-red-500 text-white rounded-lg mt-2 font-medium hover:font-bold"
        >
          Remove this course
        </button>
      )}
    </div>
  );
};

export default AddCourse;
