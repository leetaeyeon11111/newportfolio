import Link from 'next/link'

async function fetchCourses() {
  const response = await fetch(
    'https://newportfolio-d2q08w4eq-leetaeyeon11111.vercel.app/api/courses'
  )
  const courses = await response.json()
  return courses
}

const Courses = async () => {
  const courses = await fetchCourses()
  return (
    <div className="grid grid-cols-2 gap-30">
      {courses?.map((course) => (
        <div
          key={course.id}
          className="bg-gray-200 p-4 m-4 rounded-lg"
          style={{ width: '750px', height: '600px' }}
        >
          <h2 className="font-bold text-xl">{course.title}</h2>
          <div className="flex justify-center items-center mb-4 mt-3">
            <img src={course.image} alt={course.title} />
          </div>
          <p className="mb-4">{course.description}</p>
          <Link
            href={course.link}
            target="_blank"
            className="py-2 px-4 bg-yellow-500 hover:bg-yellow-200 text-white rounded-lg mb-4"
          >
            Go to Project
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Courses
