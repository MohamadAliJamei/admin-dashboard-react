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

export async function categoriesLoader({request}) {
  return defer ({
    categories: loadCategories(request)
  })
}

const loadCategories = async (request) => {
  const page = new URL(request.url).searchParams.get('page') || 1;
  const pageSize = 10;
  const url = `/CourseCategory/sieve?page=${page}&pageSize=${pageSize}`
  const response = await httpTnterceptedService.get(url);
  return response.data;
}

export default CourseCategories;