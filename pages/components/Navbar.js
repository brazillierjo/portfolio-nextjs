import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import fr from '../../languages/fr'
import en from '../../languages/en'

export default function NavBar() {

    const router = useRouter()
    const { locale } = router
    const t = locale === 'fr' ? fr : en

    return (
        <Disclosure as="nav" className="text-black dark:text-white bg-white dark:bg-gray-900 sm:mx-24 mt-4 rounded-md">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-12">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>

                            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-8">
                                        <a className='hover:bg-orange-400 rounded-xl px-2' href="#whoami">{t.whoami}</a>
                                        <a className='hover:bg-orange-400 rounded-xl px-2' href="#cv">{t.cv}</a>
                                        <a className='hover:bg-orange-400 rounded-xl px-2' href="#skills">{t.skills}</a>
                                        <a className='hover:bg-orange-400 rounded-xl px-2' href="#projects">{t.projects}</a>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <span className="sr-only"></span>
                                <img className='float h-16 md:h-24 md:w-24 bg-orange-300 mr-2 rounded-full borderAvatar' src="/assets/web.png" alt="avatar" />
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <ul className="text-center py-2 rounded-3xl">
                            <li className='my-1'><a href="#whoami">{t.whoami}</a></li>
                            <hr className='hr-mobile' />
                            <li className='my-1'><a href="#cv">{t.cv}</a></li>
                            <hr className='hr-mobile' />
                            <li className='my-1'><a href="#skills">{t.skills}</a></li>
                            <hr className='hr-mobile' />
                            <li className='my-1'><a href="#projects">{t.projects}</a></li>
                        </ul>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}
