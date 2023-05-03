import Link from './Link'
import siteMetadata from 'src/data/siteMetadata'
import Logo from './Logo'
import ThemeSwitch from './ThemeSwitch'
import { IconFiles, IconHome, IconNotebook, IconApps, IconFaceId } from '@tabler/icons-react'
import { useRouter } from 'next/router'

const icons = {
  IconFiles,
  IconHome,
  IconNotebook,
  IconApps,
  IconFaceId,
}

interface TopNavItem {
  id: number
  label: string
  path: string
  icon: keyof typeof icons
}

const topNavItems: TopNavItem[] = [
  {
    id: 1,
    label: 'Home',
    path: '/',
    icon: 'IconHome',
  },
  {
    id: 2,
    label: 'Blog',
    path: '/blog',
    icon: 'IconFiles',
  },
  {
    id: 3,
    label: 'Projects',
    path: '/projects',
    icon: 'IconApps',
  },
  {
    id: 4,
    label: 'Tech Articles',
    path: '/tech-articles',
    icon: 'IconNotebook',
  },
  {
    id: 5,
    label: 'About',
    path: '/about',
    icon: 'IconFaceId',
  },
]

export default function Header() {
  const router = useRouter()

  return (
    <header className="z-50 flex w-full flex-wrap border-b border-b-gray-300 bg-white py-4 text-sm dark:border-b-gray-700 dark:bg-gray-900 sm:flex-nowrap sm:justify-start">
      <nav className="mx-auto w-full px-4" aria-label="Main">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link
            className="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white sm:text-2xl"
            href="/"
            aria-label={siteMetadata.headerTitle}
          >
            <Logo />
            {typeof siteMetadata.headerTitle === 'string' ? (
              <span>{siteMetadata.headerTitle}</span>
            ) : (
              siteMetadata.headerTitle
            )}
          </Link>
          <div className="flex sm:order-2">
            <button
              type="button"
              className="hidden items-center justify-center gap-2 rounded-md border border-transparent bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 ring-offset-white transition-all hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800 sm:block"
              onClick={() => router.push('/hire-me')}
            >
              Hire me
            </button>
            <ThemeSwitch />
            <button
              type="button"
              className="hs-collapse-toggle inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 ring-offset-white transition-all hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800 sm:hidden"
              data-hs-collapse="#mobilnavbar"
              aria-controls="mobilnavbar"
              aria-label="Toggle navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-menu-2 hs-collapse-open:hidden"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x hidden hs-collapse-open:block"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="hidden w-full items-center justify-between rounded-full bg-primary-50 dark:bg-primary-950 sm:order-1 sm:flex sm:w-auto">
            <ul className="flex flex-row">
              {topNavItems.map(({ id, label, path, icon }) => {
                const Icon = icons[icon]
                return (
                  <li
                    className="hs-tooltip inline-flex items-center gap-x-2.5 p-2 [--placement:bottom]"
                    key={id}
                  >
                    <button
                      type="button"
                      className="hs-tooltip-toggle inline-flex h-9 w-9 flex-shrink-0 items-center justify-center gap-2 rounded-full border border-transparent text-sm font-semibold text-primary-700 transition-all hover:bg-primary-100 hover:text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-800 focus:ring-offset-2 dark:text-primary-200 dark:hover:bg-primary-900 dark:hover:text-primary-400 dark:focus:ring-primary-900 dark:focus:ring-offset-primary-800"
                      onClick={() => router.push(`${path}`)}
                      aria-label={`Go to ${label}`}
                    >
                      <Icon />
                      <span
                        className="hs-tooltip-content invisible absolute z-10 inline-block rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700"
                        role="tooltip"
                      >
                        {label}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
          <div
            id="mobilnavbar"
            className="hs-collapse hidden grow basis-full overflow-hidden px-2 transition-all duration-300"
          >
            <ul className="flex flex-col pt-4">
              {topNavItems.map(({ id, label, path, icon }) => {
                const Icon = icons[icon]
                return (
                  <li key={id} className="inline-flex items-center py-1">
                    <Link
                      href={path}
                      className="-mt-px inline-flex w-full items-center gap-x-3.5 px-4 py-2 text-sm font-medium text-primary-700 first:mt-0 hover:text-primary-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:text-primary-50 dark:hover:text-primary-200"
                    >
                      <Icon />
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
            <button
              type="button"
              className="mb-4 w-full items-center justify-center gap-2 rounded-md border border-transparent bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-700 ring-offset-white transition-all hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
              onClick={() => router.push('/hire-me')}
            >
              Hire me
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
