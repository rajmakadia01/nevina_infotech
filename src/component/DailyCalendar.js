import React from 'react';

const timeSlots = [
    '12:00', '1:00', '2:00', '3:00', '4:00', '5:00',
    '6:00', '7:00', '8:00', '9:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
];

const musicActivities = [
    { name: 'Jay Shree Raam', timeSlots: [0, 2] },
    { name: 'B Prank', timeSlots: [0, 3] },
    { name: 'Office Chill Track', timeSlots: [1, 2] },
    { name: 'Jay Shree Raam', timeSlots: [2, 3] },
    { name: 'StandUp Comedy', timeSlots: [0, 1] },
    { name: 'Arijit Top 15', timeSlots: [2, 0] },
    { name: 'Relax Tunes', timeSlots: [0, 1] },
    { name: 'Old Top 15', timeSlots: [0, 3] },
    { name: 'New Remix', timeSlots: [1, 2] },
    { name: 'Top 10 2023', timeSlots: [0, 1] },
];

function DailyCalendar() {
    return (
        <>
            <div className='lg:flex'>
                <div className='flex text-black mb-2'>
                    <div className='border border-gray-400 mr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 p-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <div>
                        <h4><b>May 27,2022</b> Today</h4>
                    </div>
                    <div className='border border-gray-400 ml-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 p-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div className='lg:ml-4 text-black mb-2'>
                    <h4>Activi Type
                    </h4>
                </div>
                <div className='lg:ml-24 mb-2'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                    </div>
                </div>
                <div>
                    <div className='lg:ml-4 mb-2'>
                        <button className="btn bg-orange-400 text-white border-orange-400 lg:ml-4  btn-xs  ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Scheduled Music
                        </button>
                    </div>
                </div>
            </div>
            <div className='overflow-y-auto h-96'>
                <div className="container mx-auto mt-8 p-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-7">
                        <div className="md:col-span-1">
                            {timeSlots.map((timeSlot, timeIndex) => (
                                <div key={timeIndex} className="pr-2 py-1 border-b border-r border-gray-300">
                                    {timeSlot}
                                </div>
                            ))}
                        </div>
                        <div className="md:col-span-6">
                            {musicActivities.map((activity, activityIndex) => (
                                <div key={activityIndex} className="grid grid-cols-2 md:grid-cols-4 gap-1 border-gray-300">
                                    {Array.from({ length: 7 }, (_, dayIndex) => (
                                        <div key={dayIndex} className={`p-2 border-gray-300 ${activity.timeSlots.includes(dayIndex) ? 'border-l rounded-lg border-green-400 bg-gray-100' : 'bg-gray-100'}`}>
                                            {activity.timeSlots.includes(dayIndex) && (
                                                <>
                                                    <div className="mb-1 text-sm font-semibold">
                                                        {activity.name}
                                                    </div>
                                                    <div className="text-sm text-gray-600">
                                                        To be played {dayIndex + 1}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default DailyCalendar;
