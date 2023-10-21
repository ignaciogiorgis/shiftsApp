'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { links } from '../Constants/links'

const Navigation = () => {
  const pathname = usePathname()
  return (
    <div className='bg-slate-200'>
      <div className="flex justify-center py-10">
        <ul className=" flex flex-row gap-2">
          {links.map(({ label, route }) => {
            return (
              <div
                key={route}
                className={` rounded-full py-2 px-5 ${
                  pathname === `${route}`
                    ? 'bg-slate-500  font-extrabold text-gray-100'
                    : ''
                }`}
              >
                <li>
                  <Link href={route}>{label}</Link>
                </li>
              </div>
            )
          })}
        </ul>
      </div>
      <div className="bg-neutral-600 p-2"></div>
    </div>
  )
}

export default Navigation
