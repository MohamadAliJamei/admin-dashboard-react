import { useNavigation } from "react-router-dom";
import Pagination from "../../../components/pagination";
import Spinner from "../../../components/spinner";

const CategoryList = ({ categories: { data, totalRecords }, deleteCategory }) => {
  const navigation = useNavigation();
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            {navigation.state !== 'idle' && <Spinner />}
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>نام</th>
                  <th>عملیات</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((category) => {
                    return (
                      <tr key={category.id}>
                        <td>{category.name}</td>
                        <td className="table-action">
                          <a
                            className="ms-3 d-inline-block"
                            onClick={() => deleteCategory(category.id)}
                          >حذف</a>
                          <a
                            href=""
                            className="ms-3 d-inline-block"
                          >ویرایش</a>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            <Pagination totalRecord={totalRecords} />
          </div>
        </div>
      </div>
    </>
  )
}
export default CategoryList;