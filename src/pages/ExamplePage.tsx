import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/24/outline'
import Logo from '../assests/logo.png'
import BlueLinkButton from '../components/Buttons/BlueLinkButton'
import { Link, useLocation } from 'react-router-dom'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const ExamplePage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation();
    const isCurrentPage = (path: string) => {
        return location.pathname === path;
    }
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-14 w-auto" src={Logo} alt="" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Link
                        to="/"
                        className={`${isCurrentPage('/') ? "text-green-500" : 'text-black'} text-[18px] font-bold font-poppins`}
                    > Home</Link>
                    <Link
                        to="/swap"
                        className={`${isCurrentPage('/swap') ? "text-green-500" : 'text-black'} text-[18px] font-bold font-poppins`}
                    > Swap</Link>
                    <Link
                        to="/blog"
                        className={`${isCurrentPage('/blog') ? "text-green-500" : 'text-black'} text-[18px] font-bold font-poppins`}
                    > Blog</Link>
                    <Link
                        to="/faq"
                        className={`${isCurrentPage('/faq') ? "text-green-500" : 'text-black'} text-[18px] font-bold font-poppins`}
                    > FAQ</Link>
                    <Link
                        to="/contact"
                        className={`${isCurrentPage('/contact') ? "text-green-500" : 'text-black'} text-[18px] font-bold font-poppins`}
                    > Contact</Link>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <BlueLinkButton text="CONNECT WALLET" link="/" />
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-14 w-auto"
                                src={Logo}
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    to="/"
                                    className={`${isCurrentPage('/') ? "text-green-500" : 'text-black'} text-[18px] font-poppins block -mx-3 px-3 py-2  hover:bg-gray-50 `}
                                > Home</Link>
                                <Link
                                    to="/swap"
                                    className={`${isCurrentPage('/swap') ? "text-green-500" : 'text-black'} text-[18px] font-poppins block -mx-3 px-3 py-2  hover:bg-gray-50 `}
                                > Swap</Link>
                                <Link
                                    to="/blog"
                                    className={`${isCurrentPage('/blog') ? "text-green-500" : 'text-black'} text-[18px] font-poppins block -mx-3 px-3 py-2  hover:bg-gray-50 `}
                                > Blog</Link>
                                <Link
                                    to="/faq"
                                    className={`${isCurrentPage('/faq') ? "text-green-500" : 'text-black'} text-[18px] font-poppins block -mx-3 px-3 py-2  hover:bg-gray-50 `}
                                > FAQ</Link>
                                <Link
                                    to="/contact"
                                    className={`${isCurrentPage('/contact') ? "text-green-500" : 'text-black'} text-[18px] font-poppins block -mx-3 px-3 py-2  hover:bg-gray-50 `}
                                > Contact</Link>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-[18px] font-poppins leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Connect Wallet
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

export default ExamplePage;