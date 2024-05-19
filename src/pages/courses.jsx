import { httpTnterceptedService } from "@core/http-service";
import CourseList from "../features/courses/components/course-list";
import { Await, defer, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

const  Courses = () => {
  const data = useLoaderData()
  return (
    <div className="reow">
      <div className="col-12">
        <div className="d-flex aling-items-center justify-contents-between mb-5">
          <a className="btn btn-primary fw-bolder mt-n1">
            افزودن دوره جدید
          </a>
        </div>
        <Suspense fallback={<p className="test-info">درحال لود اطلاعات ...</p>}>
          <Await resolve={data.courses}>
            {
              (loadedCourses) => <CourseList courses={loadedCourses}/>
            }
          </Await>
        </Suspense>
        
      </div>
    </div>
  )
}

export async function coursesLoader () {
  return defer({
    courses: loadCourses(),
  });
}

const loadCourses = async () => {
  const response = await httpTnterceptedService.get('/Course/list');
  return response.data;
}

export default Courses;