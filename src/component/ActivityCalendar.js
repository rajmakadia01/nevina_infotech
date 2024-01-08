import React, { useState } from 'react';


function ActivityCalendar() {

    const [currentYear, setCurrentYear] = useState(2024);
    const [currentMonth, setCurrentMonth] = useState(0);

    const generateCalendar = () => {
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        const weekdaysElements = weekdays.map((day, index) => (
            <div key={index} className="text-center font-semibold text-gray-900">{day}</div>
        ));

        const daysElements = [];
        for (let day = 1; day <= daysInMonth; day++) {
            daysElements.push(
                <div key={day} className="text-center">{day}</div>
            );
        }

        return { weekdaysElements, daysElements };
    };

    const updateMonthYear = () => {
        return new Date(currentYear, currentMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    };

    const prevMonth = () => {
        setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
        setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
    };

    const nextMonth = () => {
        setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
        setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
    };

    const { weekdaysElements, daysElements } = generateCalendar();

    return (
        <>
            <div className="max-w-md mx-auto lg:p-6 mb-4" id="calendarContainer">
                <div className="flex flex-col sm:flex-row justify-between mb-4">
                    <span className="text-sm text-gray-900 font-semibold mb-2 sm:mb-0" id="monthYear">{updateMonthYear()}</span>
                    <div className="flex space-x-2">
                        <button onClick={prevMonth} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button onClick={nextMonth} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-black text-sm" id="calendarDays">
                    {weekdaysElements}
                    {daysElements}
                </div>
            </div>
            <div className='lg:p-6 mb-4'>
                <h4 className='text-black text-sm'>Scheduled</h4>
                <div class="flex bg-gray-100 rounded-lg mt-8">
                    <div class="w-1/2 m-0 p-0 ">
                        <div tabindex="0" class="collapse collapse-arrow ">
                            <div class="collapse-title text-sm text-black m-0">
                                ActivityType
                            </div>
                            <div class="collapse-content">
                                <p>Work Out</p>
                                <div class="divider m-0 p-0"></div>
                                <p>Study</p>
                                <div class="divider m-0 p-0"></div>
                                <p>Other</p>
                                <div class="divider m-0 p-0"></div>
                                <div class="divider mt-4 p-0"></div>
                                <p className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                        <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
                                    </svg>

                                    17th Jan 2023</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2 ... ">
                        <div tabindex="0" class="collapse collapse-arrow">
                            <div class="collapse-title text-sm text-black">
                                MucicalActivity
                            </div>
                            <div class="collapse-content">
                                <p>Listen</p>
                                <div class="divider m-0 p-0"></div>
                                <p>Practice</p>
                                <div class="divider m-0 p-0"></div>
                                <p>Other</p>
                                <div class="divider m-0 p-0"></div>
                                <div class="divider mt-4 p-0"></div>
                                <p className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                                    </svg>

                                    11:30 pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:p-6 mb-4'>
                <h4 className='text-black text-sm'>Music</h4>
                <div className='flex bg-gray-100 mt-4 p-2 rounded-lg'>
                    <div className='w-1/2'>
                        <h4>Ronald Rich Text</h4>
                    </div>
                    <div className='w-1/2'>
                        <div className='flex justify-end'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="w-4 h-4 m-1">
                                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-4 h-4 m-1">
                                <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='flex bg-gray-100 mt-4 p-2 rounded-lg'>
                    <div className='w-1/2'>
                        <h4>Ronald Rich Text</h4>
                    </div>
                    <div className='w-1/2'>
                        <div className='flex justify-end'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="w-4 h-4 m-1">
                                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" class="w-4 h-4 m-1">
                                <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <button class="btn bg-orange-400 text-white border-orange-400 lg:ml-4 mr-4 btn-sm ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                        <path fill-rule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clip-rule="evenodd" />
                    </svg>

                    Share
                </button>
                <div className='flex justify-end items-end'>
                    <button class="btn bg-orange-400 text-white border-orange-400 ml-4  btn-sm  ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                        </svg>

                        Remind Me
                    </button>
                </div>
            </div>
        </>
    )
}

export default ActivityCalendar