import React from 'react'
import { useRouter } from 'next/router'
import {
  IconCode,
  IconBrandPython,
  IconCoffee,
  IconChartHistogram,
  IconBrandCpp,
  IconApi,
} from '@tabler/icons-react'

const icons = {
  IconCode,
  IconBrandPython,
  IconCoffee,
  IconChartHistogram,
  IconBrandCpp,
  IconApi,
}

interface CategoriesNavItem {
  id: number
  label: string
  description: string
  path: string
  icon: keyof typeof icons
}

const categoriesNavItems: CategoriesNavItem[] = [
  {
    id: 1,
    label: 'Software Fundamentals',
    description: 'Learn the key concepts of the Software Engineering fundamentals.',
    path: '/categories/software-fundamentals',
    icon: 'IconCode',
  },
  {
    id: 2,
    label: 'Python',
    description:
      'Python is a high-level, general-purpose programming language. Python is dynamically typed.',
    path: '/categories/python',
    icon: 'IconBrandPython',
  },
  {
    id: 3,
    label: 'Java',
    description: 'Java is a high-level, class-based, object-oriented programming language.',
    path: '/categories/java',
    icon: 'IconCoffee',
  },
  {
    id: 4,
    label: 'Data Science',
    description: 'Extracting insights from vast amounts of data using various scientific methods.',
    path: '/categories/data-science',
    icon: 'IconChartHistogram',
  },
  {
    id: 5,
    label: 'C++',
    description:
      'C++ is a high-level, general-purpose programming language. It is as an extension of the C',
    path: '/categories/cpp',
    icon: 'IconBrandCpp',
  },
  {
    id: 6,
    label: 'API Design',
    description:
      'An API is the interface that allows communication between two software applications.',
    path: '/categories/api-design',
    icon: 'IconApi',
  },
]

export default function CategoriesFeatured() {
  const router = useRouter()
  return (
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
      {categoriesNavItems.map(({ id, label, description, path, icon }) => {
        const Icon = icons[icon]
        return (
          <div
            className="flex flex-col items-center space-y-3 rounded-xl border border-gray-300 bg-gray-50 p-6 text-center dark:border-gray-700 dark:bg-gray-800"
            key={id}
          >
            <span className="inline-block rounded-xl bg-primary-50 p-3 text-primary-700 dark:bg-primary-950 dark:text-primary-50">
              <Icon />
            </span>
            <h3 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
              {label}
            </h3>
            <p className="text-gray-500 dark:text-gray-300">{description}</p>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent px-4 py-3 text-sm font-semibold text-primary-700 transition-all hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:ring-offset-2 dark:text-gray-50 dark:hover:bg-gray-900 dark:focus:ring-offset-gray-700"
              onClick={() => router.push(`${path}`)}
            >
              Read more
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
        )
      })}
    </div>
  )
}
