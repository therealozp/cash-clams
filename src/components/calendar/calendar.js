import React from 'react';
import './style.css';

export const Box = () => {
	return (
		<div className="box">
			<div className="calendar">
				<div className="month-selector">
					<div className="group">
						<div className="overlap-group">
							<img
								className="vector-stroke"
								alt="Vector stroke"
								src="vector-2-stroke.svg"
							/>
							<div className="text-wrapper">SEPT 2023</div>
						</div>
					</div>
					<div className="div">My Progress</div>
				</div>
				<div className="calendar-events">
					<div className="weekdays-weeks">
						<div className="weekdays">
							<div className="text-wrapper-2">Mo</div>
							<div className="text-wrapper-3">Tu</div>
							<div className="text-wrapper-4">We</div>
							<div className="text-wrapper-5">Th</div>
							<div className="text-wrapper-6">Fr</div>
							<div className="text-wrapper-7">Sa</div>
							<div className="text-wrapper-8">Su</div>
						</div>
						<div className="week">
							<div className="text-wrapper-9">1</div>
							<div className="text-wrapper-10">2</div>
							<div className="text-wrapper-11">3</div>
							<div className="text-wrapper-12">4</div>
						</div>
						<div className="overlap-group-2">
							<div className="week-2">
								<div className="text-wrapper-13">5</div>
								<div className="text-wrapper-14">6</div>
								<div className="text-wrapper-15">7</div>
								<div className="current-day" />
								<div className="text-wrapper-16">8</div>
								<div className="text-wrapper-17">9</div>
								<div className="text-wrapper-18">10</div>
								<div className="text-wrapper-19">11</div>
							</div>
							<div className="week-3">
								<div className="text-wrapper-20">12</div>
								<div className="text-wrapper-21">13</div>
								<div className="text-wrapper-22">14</div>
								<div className="text-wrapper-23">15</div>
								<div className="text-wrapper-24">16</div>
								<div className="text-wrapper-25">17</div>
								<div className="text-wrapper-26">18</div>
							</div>
						</div>
						<div className="week-4">
							<div className="text-wrapper-20">19</div>
							<div className="text-wrapper-27">20</div>
							<div className="text-wrapper-28">21</div>
							<div className="text-wrapper-29">22</div>
							<div className="text-wrapper-30">23</div>
							<div className="text-wrapper-31">24</div>
							<div className="text-wrapper-32">25</div>
						</div>
						<div className="week-5">
							<div className="text-wrapper-33">26</div>
							<div className="text-wrapper-34">27</div>
							<div className="text-wrapper-35">28</div>
							<div className="text-wrapper-36">29</div>
							<div className="text-wrapper-37">30</div>
							<div className="text-wrapper-38">31</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
