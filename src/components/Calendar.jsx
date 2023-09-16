import dayjs from "dayjs";
import { useState } from "react";
import Cn from "./Cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";


function Calendar () {
	const days = ["S", "M", "T", "W", "T", "F", "S"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);
	
	return (
		<div className="flex gap-10 sm:divide-x justify-center sm:w-1/2 mx-auto  h-screen items-center sm:flex-row flex-col ">
			<div className="w-96 h-106 border-1">
				<div className="flex justify-between items-center ">
					<h1 className="select-none font-semibold">
						{months[today.month()]}, {today.year()}
					</h1>
					<div className="flex gap-10 items-center ">
						<GrFormPrevious
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() - 1));
							}}
						/>
						<h1
							className=" cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(currentDate);
							}}
						>
							Today
						</h1>
						<GrFormNext
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
						/>
					</div>
				</div>
				<div className="grid grid-cols-7 ">
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
							>
								{day}
							</h1>
						);
					})}
				</div>

				<div className=" grid grid-cols-7 ">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (
								<div
									key={index}
									className="p-2 text-center h-14 grid place-content-center text-sm border-t"
								>
									<h1
										className={Cn(
											currentMonth ? "" : "text-gray-400",
											selectDate.toDate === "Sat Sep 02 2023" 
											? "bg-green-600 text-white" : "",
											today
												? "bg-red-600 text-white"
												: "",
											selectDate
												.toDate()
												.toDateString() ===
												date.toDate().toDateString()
												? "bg-black text-white"
												: "",
											"h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
										)}
										onClick={() => {
											setSelectDate(date);
										}}
									>
										{date.date()}
									</h1>
								</div>
							);
						}
					)}
				</div>
			</div>
			<div className="h-96 w-96 sm:px-5">
				<h1 className=" font-semibold">
					Events for {selectDate.toDate().toDateString()}
				</h1>
				{selectDate.toDate().toDateString() === "Sat Sep 02 2023" ?
				 <CtfCard />: 
				<p className="text-gray-400">No Events for today.</p>}
			</div>
		</div>
	)
}

 const generateDate = (
	month = dayjs().month(),
	year = dayjs().year()
) => {
	const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
	const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

	const arrayOfDate = [];

	// create prefix date
	for (let i = 0; i < firstDateOfMonth.day(); i++) {
		const date = firstDateOfMonth.day(i);

		arrayOfDate.push({
			currentMonth: false,
			date,
		});
	}

	// generate current date
	for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
		arrayOfDate.push({
			currentMonth: true,
			date: firstDateOfMonth.date(i),
			today:
				firstDateOfMonth.date(i).toDate().toDateString() ===
				dayjs().toDate().toDateString(),
		});
	}

	const remaining = 42 - arrayOfDate.length;

	for (
		let i = lastDateOfMonth.date() + 1;
		i <= lastDateOfMonth.date() + remaining;
		i++
	) {
		arrayOfDate.push({
			currentMonth: false,
			date: lastDateOfMonth.date(i),
		});
	}
	return arrayOfDate;
};

 const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
function CtfCard () {
	return (
		<div>
			<p className="text-gray-400 ">CTF</p>
		</div>
		
	)
}

export default Calendar;
