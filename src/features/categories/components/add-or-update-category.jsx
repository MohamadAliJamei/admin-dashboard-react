import { useForm } from "react-hook-form";
import { httpTnterceptedService } from "@core/http-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddOrUpdateCategory = ({ setShowAddCategory }) => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const submitForm = (data) => {
    setShowAddCategory(false)
    const response = httpTnterceptedService.post(`/CourseCategory`, data)
    toast.promise(
      response, {
      pending: 'درحال ذخیره اطلاعات ...',
      success: {
        render() {
          const url = new URL(window.location.href);
          navigate(url.pathname + url.search);
          return 'عملیات با موفقیت انجام شد'
        }
      },
      error: {
        render({ data }) {
          if (data.response.status === 400) {
            return data.response.data.code;
          } else {
            return 'خطا در اجرای عملیات'
          }
          
        }
      }
    }, {
      position: "bottom-right"
    }
    )

  }

  return (
    <div className="card">
      <div className="card-body">
        <form className="mb-4" onSubmit={handleSubmit(submitForm)}>
          <div>
            <label className="form-label">نام</label>
            <input className={`form-control form-control-lg ${errors.name && 'is-invalid'
              }`}
              {...register('name', {
                required: true
              })}
             />
            {
              errors.name && errors.name.type === 'required' && (
                <p className="text-danger small fw-bolder mt-1">نام الزامی است</p>
              )
            }
          </div>
          <div className="text-start mt-3">
            <button
              type="button"
              className="btn btn-lg btn-secondary ms-3"
              onClick={() => setShowAddCategory(false)}
            >
              بستن
            </button>
            <button
              type="submit"
              className="btn btn-lg btn-primary ms-3"
            >
              ثبت تغییرات
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default AddOrUpdateCategory; 