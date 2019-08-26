import React, { useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { Sun, Moon } from 'react-feather';
import { ReactComponent as Earth } from './icons/earth.svg';
import { ReactComponent as Warning } from './icons/warning.svg';

import './options.styles.css';

export default function Options({ changeSettings, toggleMode, currentMode: { value } }) {
	const [trees, setTrees] = useState(5);
	const [vehicles, setVehicles] = useState(5);
	const [industry, setIndustry] = useState(5);
	const [warning, setWarning] = useState(false);

	const lifeSpan = 75 - Math.ceil((trees / 100) * 15 + (vehicles / 100) * 15 + (industry / 100) * 15);
	const addAnimation = anime => {
		document.getElementsByTagName('body')[0].style.WebkitAnimation = anime;
		document.getElementsByTagName('body')[0].style.animation = anime;
	};

	if (trees === 100 && vehicles === 100 && industry === 100) {
		if (warning === false) {
			setWarning(true);
			setTimeout(() => {
				addAnimation('square 100s linear infinite alternate');
				setTimeout(() => {
					addAnimation('scale 100s linear infinite alternate');
				}, 3000);
				setTimeout(() => {
					setWarning(false);
					addAnimation('');
				}, 5000);
			}, 2000);
		}
	}

	return (
		<div className="options">
			<h1>
				<Earth width="22px" /> Save Earth
			</h1>
			<p className="toggle-mode pointer" onClick={toggleMode}>
				{value ? (
					<span>
						<Sun size="14" /> Day
					</span>
				) : (
					<span>
						<Moon size="14" /> Night
					</span>
				)}
			</p>

			{warning && (
				<div className="warning">
					<Warning width="14px" /> You are under Cyclone Prone Area!!! Refresh Page To Escape
				</div>
			)}

			<div className="option treeOptions">
				<InputRange
					maxValue={100}
					minValue={0}
					value={trees}
					onChange={value => {
						setTrees(value);
						changeSettings('trees', value);
					}}
					formatLabel={value => `${value}%`}
				/>
			</div>

			<div className="option vehicleOptions">
				<InputRange
					maxValue={100}
					minValue={0}
					value={vehicles}
					onChange={value => {
						setVehicles(value);
						changeSettings('vehicles', value);
					}}
					formatLabel={value => `${value}%`}
				/>
			</div>

			<div className="option industryOptions">
				<InputRange
					maxValue={100}
					minValue={0}
					value={industry}
					onChange={value => {
						setIndustry(value);
						changeSettings('industry', value);
					}}
					formatLabel={value => `${value}%`}
				/>
			</div>

			<div className="prediction d-flex">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Human_body_silhouette.svg"
					width="30px"
					alt="human"
					height="50px"
				/>
				<span>
					Average Human LifeSpan in this condition
					<div>
						<b>{lifeSpan} Years</b>
					</div>
				</span>
			</div>
		</div>
	);
}
