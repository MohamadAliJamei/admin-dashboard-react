import { Await, defer, useLoaderData } from "react-router-dom";
import { httpTnterceptedService } from "@core/http-service";
import CategoryList from "../features/categories/components/category-list";
import { Suspense } from "react";

const CourseCategories = () => {
  const data = useLoaderData()
  return (
    <div className="reow">
    <div className="col-12">
      <div className="d-flex aling-items-center justify-contents-between mb-5">
        <a className="btn btn-primary fw-bolder mt-n1">
          افزودن دسته جدید
        </a>
      </div>
      <Suspense fallback={<p className="test-info">درحال لود اطلاعات ...</p>}>
        <Await resolve={data.categories}>
          {
            (loadedCategories) => <CategoryList categories={loadedCategories}/>
          }
        </Await>
      </Suspense>
      
    </div>
  </div>
  )
}

export async function categoriesLoader() {
  return defer ({
    categories: loadCategories()
  })
}

const loadCategories = async () => {
  const response = await httpTnterceptedService.get('/CourseCategory/sieve');
  return response.data;
}

export default CourseCategories;