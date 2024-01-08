import React from 'react';
import ActivityCalendar from './ActivityCalendar';
import DailyCalendar from './DailyCalendar';

function Calendar() {


    return (
        <>
            <div className="bg-white shadow-lg mt-12 rounded-lg p-4">
                <div>
                    <h3 className="text-2xl text-black font-bold">Calendar</h3>
                    <div className="divider"></div>
                </div>
                <div className="lg:flex">
                    <div className="lg:w-2/3 mb-4">
                        <DailyCalendar />
                    </div>
                    <div className="lg:w-1/3">
                        <ActivityCalendar />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Calendar;
