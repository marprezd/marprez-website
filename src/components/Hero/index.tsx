// import Link from './Link'
import DevActivitySvg from './DevActivitySvg'
import { useRouter } from 'next/router'

export const Hero: React.FC = () => {
  const router = useRouter()

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="order-last col-span-full place-self-center text-center sm:text-left md:order-first md:col-span-6">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white lg:text-5xl">
          Hello, I am Mario! Welcome to my{' '}
          <span className="text-secondary-600 dark:text-secondary-500">Software Engineering</span>{' '}
          blog.
        </h1>
        <p className="my-6 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl">
          I write about Python, Machine Learning, Data Visualization, APIs Design, UI App, Java, and
          other Tech subjects.
        </p>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-primary-700 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-700 dark:hover:bg-gray-100 dark:focus:ring-offset-gray-700"
          onClick={() => router.push('/about')}
        >
          Know about me
          <svg
            className="mx-1 h-4 w-4 rtl:-scale-x-100"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="col-span-full md:col-span-6">
        <DevActivitySvg />
      </div>
    </div>
  )
}
