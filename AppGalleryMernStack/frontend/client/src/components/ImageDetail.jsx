import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ImageDetail = () => {
  const { id } = useParams()
  const [imageDetails, setImageDetails] = useState(null)

  const fetchImageDetails = async () => {
    try {
      const url = `http://localhost:7005/api/${id}`
      const result = await fetch(url)
      const { data } = await result.json()
      console.log(data)
      setImageDetails(data)
    } catch (err) {
      alert('Internal Server Error, Please try again', err)
    }
  }
  useEffect(() => {
    fetchImageDetails()
  }, [id])

  return (
    <>
      <div className="d-flex flex-column align-items-center w-50 m-auto mt-5">
        <Link to="/">Back To Gallary</Link>
        <h1 className="mb-4">{imageDetails?.originalName}</h1>
        <img
          src={imageDetails?.imageURL}
          alt={imageDetails?.originalName}
          className="img-fluid"
        />
        <p>
          <strong>Image Type : </strong> {imageDetails?.mimeType}
        </p>
        <p>
          <strong>Image Size : </strong> {imageDetails?.size} bytes
        </p>
      </div>
    </>
  )
}

export default ImageDetail
