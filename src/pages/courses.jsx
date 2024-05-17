import { httpTnterceptedService } from "@core/http-service";
import CourseList from "../features/courses/components/course-list";

const  Courses = () => {

  return (
    <div className="reow">
      <div className="col-12">
        <div className="d-flex aling-items-center justify-contents-between mb-5">
          <a className="btn btn-primary fw-bolder mt-n1">
            افزودن دوره جدید
          </a>
        </div>
        <CourseList/>
      </div>
    </div>
  )
}

export async function coursesLoader () {
  const response = await httpTnterceptedService.get('/Course/list');
  console.log('response: ', response.data)
  return response.data;
}

export default Courses;