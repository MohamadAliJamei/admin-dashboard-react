const Course = ({
  title,
  coverImageUrl,
  courseLevel,
  description,
  duration,
  numOfReviews
}) => {
  return (
    <div className="card">
      <img className="card-img-top" src={coverImageUrl}/>
      <div className="card-header px-4 pt-4 pb-0">
        <div className="badge bg-primary my-2 fw-bolder">
          {courseLevel}
        </div>
        <h4 className="mb-0">
          {title}
        </h4>
      </div>
      <div className="card-body px-4 pt-2">
        <p className="text-truncate-3">
          {description}
        </p>
      </div>
      <div className="card-footer fs-sm d-flex align-items-center fw-bolder text-secondary justify-content-between">
      <div className="d-flex algn-items-center gap-1">
          {`${duration} ساعت`}
        </div>
        <div className="d-flex algn-items-center gap-1">
          {`${numOfReviews} نظر`}
        </div>
      </div>
    </div>
  )
}
export default Course;