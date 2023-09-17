'use client';

import React from 'react';
import { HumaaansSpace } from '../../components/HumaaansSpace';
import './style.css';
import Sidebar from '@/src/components/sidebar/sidebar';
import { Button, Flex, Link } from '@chakra-ui/react';

export const Dashboard = () => {
	return (
		<Flex>
			<Sidebar />
			<div className="dashboard">
				{/* <div className="overlap-wrapper"> */}

				{/* <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/GvWiOB2X/img/rectangle-1.png" /> */}
				{/* <div className="div" /> */}
				<div className="search">
					<div className="group">
						<div className="text-wrapper">
							Search Courses, Documents, Activities...
						</div>
						<img
							className="iconly-light-outline"
							alt="Iconly light outline"
							src="https://c.animaapp.com/GvWiOB2X/img/iconly-light-outline-search@2x.png"
						/>
					</div>
				</div>
				<div className="notification">
					<div className="overlap-group">
						<img
							className="img"
							alt="Iconly light outline"
							src="https://c.animaapp.com/GvWiOB2X/img/iconly-light-outline-notification@2x.png"
						/>
						<div className="ellipse" />
					</div>
				</div>
				<Button className="profile">
					<div className="group-2">
						<div className="overlap-group-2">
							<div className="allura-avatar" />
							<img
								className="allura-avatar-2"
								alt="Allura avatar"
								src="https://c.animaapp.com/GvWiOB2X/img/allura-avatar@2x.png"
							/>
						</div>
						<div className="text-wrapper-2">Garv</div>
					</div>
					<img
						className="icon-chevron-left"
						alt="Icon chevron left"
						src="https://c.animaapp.com/GvWiOB2X/img/icon---chevron-left-4.svg"
					/>
				</Button>
				<Button variant={'none'} className="welcome">
					<div className="overlap-2">
						<div className="rectangle-2" />
						<HumaaansSpace className="humaaans-space-instance" />
						<p className="you-ve-learned-of">
							<span className="span">You’ve learned </span>
							<span className="text-wrapper-3">0% </span>
							<span className="span">
								{' '}
								of your goal this week!
								<br />
								Keep it up and improve your progeress.
							</span>
						</p>
						<div className="overlap-group-wrapper">
							<div className="overlap-group-3">
								<div className="text-wrapper-4">Welcome back!</div>
								<img
									className="image"
									alt="Image"
									src="https://c.animaapp.com/GvWiOB2X/img/image-296.png"
								/>
							</div>
						</div>
					</div>
				</Button>
				<Button mt={'45px'} ml={'-20px'} variant={'none'} className="div-wrapper">
					<div className="overlap-3">
						<div className="rectangle-3" />
						<img
							className="cool-kids-avatar"
							alt="Cool kids avatar"
							src="https://c.animaapp.com/GvWiOB2X/img/cool-kids-avatar.png"
						/>
						<div className="text-wrapper-5">
							Introduction to Financial Literacy
						</div>
						<div className="group-3">
							<div className="text-wrapper-6">Continue with</div>
						</div>
					</div>
				</Button>
				<div className="calendar">
					<div className="month-selector">
						<div className="group-4">
							<div className="overlap-group-4">
								<img
									className="vector-stroke"
									alt="Vector stroke"
									src="https://c.animaapp.com/GvWiOB2X/img/vector-2--stroke-.svg"
								/>
								<div className="text-wrapper-7">SEPT 2023</div>
							</div>
						</div>
						<div className="text-wrapper-8">My Progress</div>
					</div>
					<div className="calendar-events">
						<div className="weekdays-weeks">
							<div className="weekdays">
								<div className="text-wrapper-9">Mo</div>
								<div className="text-wrapper-10">Tu</div>
								<div className="text-wrapper-11">We</div>
								<div className="text-wrapper-12">Th</div>
								<div className="text-wrapper-13">Fr</div>
								<div className="text-wrapper-14">Sa</div>
								<div className="text-wrapper-15">Su</div>
							</div>
							<div className="week">
								<div className="text-wrapper-16">1</div>
								<div className="text-wrapper-17">2</div>
								<div className="text-wrapper-18">3</div>
								<div className="text-wrapper-19">4</div>
							</div>
							<div className="overlap-group-5">
								<div className="week-2">
									<div className="text-wrapper-20">5</div>
									<div className="text-wrapper-21">6</div>
									<div className="text-wrapper-22">7</div>
									<div className="current-day" />
									<div className="text-wrapper-23">8</div>
									<div className="text-wrapper-24">9</div>
									<div className="text-wrapper-25">10</div>
									<div className="text-wrapper-26">11</div>
								</div>
								<div className="week-3">
									<div className="text-wrapper-27">12</div>
									<div className="text-wrapper-28">13</div>
									<div className="text-wrapper-29">14</div>
									<div className="text-wrapper-30">15</div>
									<div className="text-wrapper-31">16</div>
									<div className="text-wrapper-32">17</div>
									<div className="text-wrapper-33">18</div>
								</div>
							</div>
							<div className="week-4">
								<div className="text-wrapper-27">19</div>
								<div className="text-wrapper-34">20</div>
								<div className="text-wrapper-35">21</div>
								<div className="text-wrapper-36">22</div>
								<div className="text-wrapper-37">23</div>
								<div className="text-wrapper-38">24</div>
								<div className="text-wrapper-39">25</div>
							</div>
							<div className="week-5">
								<div className="text-wrapper-40">26</div>
								<div className="text-wrapper-41">27</div>
								<div className="text-wrapper-42">28</div>
								<div className="text-wrapper-43">29</div>
								<div className="text-wrapper-44">30</div>
								<div className="text-wrapper-45">31</div>
							</div>
						</div>
					</div>
				</div>
				<div className="activities">
					<div className="text-wrapper-46">Trending Themes</div>
					<Link className="text-wrapper-47">See all</Link>
					<div className="overlap-4">
						<div className="social-ins">
							<img
								className="icon-chevron-left-2"
								alt="Icon chevron left"
								src="https://c.animaapp.com/GvWiOB2X/img/icon---chevron-left-3.svg"
							/>
							<div className="group-wrapper">
								<div className="group-5">
									<div className="overlap-group-6">
										<div className="text-wrapper-48">13</div>
									</div>
								</div>
							</div>
						</div>
						<div className="adv-maths">
							<img
								className="icon-chevron-left-2"
								alt="Icon chevron left"
								src="https://c.animaapp.com/GvWiOB2X/img/icon---chevron-left-3.svg"
							/>
							<div className="group-6">
								<div className="group-5">
									<div className="overlap-group-7">
										<div className="text-wrapper-49">18</div>
									</div>
								</div>
							</div>
						</div>
						<div className="life-con">
							<div className="overlap-5">
								<div className="rectangle-4" />
								<img
									className="icon-chevron-left-2"
									alt="Icon chevron left"
									src="https://c.animaapp.com/GvWiOB2X/img/icon---chevron-left-3.svg"
								/>
								<div className="group-7">
									<div className="group-8">
										<div className="overlap-group-8">
											<div className="text-wrapper-50">8</div>
										</div>
									</div>
									<div className="group-9">
										<div className="text-wrapper-51">Jujutsu Kaisen</div>
									</div>
									<div className="group-10">
										<div className="text-wrapper-51">Pókemon</div>
									</div>
									<div className="group-11">
										<div className="text-wrapper-51">Gym</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="completion-progress">
					<div className="overlap-6">
						<div className="text-wrapper-53">Completion Progress</div>
						<div className="life-cont">
							<div className="overlap-7">
								<div className="text-wrapper-54">
									Introduction to Financial Literacy
								</div>
								<div className="text-wrapper-55">Module 1</div>
							</div>
							<div className="group-13">
								<div className="overlap-group-10">
									<div className="text-wrapper-56">0%</div>
								</div>
							</div>
						</div>
						<div className="social-ins-2">
							<div className="overlap-8">
								<div className="text-wrapper-57">Budgeting with Pokémon</div>
								<div className="text-wrapper-58">Module 2</div>
							</div>
						</div>
						<div className="advanced-maths">
							<div className="overlap-9">
								<p className="p">Saving and Investing in the Anime World</p>
								<div className="text-wrapper-59">Module 3</div>
							</div>
						</div>

						<div className="rectangle-wrapper">
							<div className="rectangle-6" />
						</div>
					</div>
				</div>
				<div className="group-14">
					<div className="overlap-10">
						<div className="group-15" />
						<div className="text-wrapper-56">0%</div>
						<div className="group-16">
							<div className="overlap-group-10">
								<div className="text-wrapper-56">0%</div>
							</div>
						</div>
					</div>
				</div>
				<div className="group-17">
					<div className="overlap-11">
						<div className="text-wrapper-56">0%</div>
					</div>
				</div>
				<div className="messages">
					<div className="overlap-13">
						<div className="text-wrapper-60">Recent</div>
						<Link className="view-all">View All</Link>
						<img
							className="line"
							alt="Line"
							src="https://c.animaapp.com/GvWiOB2X/img/line-1.svg"
						/>
						<img
							className="line-2"
							alt="Line"
							src="https://c.animaapp.com/GvWiOB2X/img/line-1.svg"
						/>
						<img
							className="line-3"
							alt="Line"
							src="https://c.animaapp.com/GvWiOB2X/img/line-1.svg"
						/>
						<div className="josh">
							{/* <div className="text-wrapper-62">Ongoing</div> */}
							<div className="nothing-wrapper">
								<p className="nothing">
									<span className="text-wrapper-3">Nothing</span>
									<span className="text-wrapper-61">...</span>
								</p>
							</div>
							<div className="group-8">
								<div className="overlap-group-7">
									<div className="text-wrapper-63">N/A</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <img className="left-bar" alt="Left bar" src="https://c.animaapp.com/GvWiOB2X/img/left-bar.png" /> */}
			</div>
		</Flex>
	);
};
