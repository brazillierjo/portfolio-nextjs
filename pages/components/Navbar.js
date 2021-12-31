import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import fr from '../../languages/fr'
import en from '../../languages/en'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {

    const router = useRouter()
    const { locale } = router
    const t = locale === 'fr' ? fr : en

    return (
        <Disclosure as="nav" className="text-black dark:text-white bg-white dark:bg-gray-800 mx-4 mt-2 rounded-md">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
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

                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-8">
                                        <a className='hover:underline' href="#hello">{t.hello}</a>
                                        <a className='hover:underline' href="#whoami">{t.whoami}</a>
                                        <a className='hover:underline' href="#skills">{t.skills}</a>
                                        <a className='hover:underline' href="#cv">{t.cv}</a>
                                        <a className='hover:underline' href="#projects">{t.projects}</a>
                                        <a className='hover:underline' href="#reco">{t.reco}</a>
                                        <a className='hover:underline' href="#contact">{t.contact}</a>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <span className="sr-only">Open user menu</span>
                                <img className='h-12 w-12 bg-orange-300 mr-2 rounded-full borderAvatar' src="/images/hey.png" alt="avatar" />
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3">
                            <a className='hover:underline' href="">{t.hello}</a>
                            <a className='hover:underline' href="">{t.whoami}</a>
                            <a className='hover:underline' href="">{t.skills}</a>
                            <a className='hover:underline' href="">{t.cv}</a>
                            <a className='hover:underline' href="">{t.projects}</a>
                            <a className='hover:underline' href="">{t.reco}</a>
                            <a className='hover:underline' href="">{t.contact}</a>
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}
