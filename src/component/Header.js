function Header() {

    return (
        <>
            <div className="lg:flex hidden sm:block">
                <div className="lg:w-1/2">
                    <div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border w-72 px-4 py-2 mb-2 bg-white border-none rounded-full focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                <div className="lg:w-1/2 lg:flex justify-end text-black ">
                    <h4 className='ml-2 mr-2 mb-2'>Premium</h4>
                    <h4 className='ml-2 mr-2 mb-2'>Pro</h4>
                    <button className="btn btn-ghost -mt-3 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                        </svg>
                        User Name
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="lg:hidden">
                <div class="flex ...">
                    <div class="w-3/5 ...">
                        <div>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="border w-52 px-4 py-2 mb-2 bg-white border-none rounded-full focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    </div>
                    <div class="w-2/5 flex justify-end">
                        <details class="dropdown dropdown-end">
                            <summary class="m-1 btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 -mt-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                </svg>
                            </summary>
                            <ul class="p-2 shadow menu dropdown-content z-[1] bg-gray-100 text-black rounded-box w-52">
                                <li><a>Premium</a></li>
                                <li><a>Pro</a></li>
                                <li><a>User Name</a></li>
                            </ul>
                        </details>
                    </div>
                </div>
            </div>
        </>
    )


}

export default Header