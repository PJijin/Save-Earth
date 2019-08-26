import React from 'react';

import { ArrowUp, ArrowDown } from 'react-feather';

import { ReactComponent as CO2 } from './images/carbon-dioxide.svg';
import { ReactComponent as THM } from './images/th.svg';
import { ReactComponent as IC1 } from './images/cold-ice-cubes.svg';
import { ReactComponent as IC2 } from './images/ice-sheets.svg';
import { ReactComponent as BH } from './images/sea.svg';

export default function Stats() {
	return (
		<div className="flex stats">
			<div className="flex">
				<CO2 fill="#a6a3a3" width="42px" />
				<ArrowUp />
				<div className="ml-20">
					Carbon Dioxide <div className="stats-value">411 parts per million</div>
				</div>
			</div>
			<div className="flex">
				<THM fill="#a6a3a3" width="42px" /> <ArrowUp />
				<div className="ml-20">
					Global Temperature <div className="stats-value">1.9 F</div>
				</div>
			</div>
			<div className="flex">
				<IC1 fill="#a6a3a3" width="42px" /> <ArrowDown />
				<div className="ml-20">
					Arctic Ice Minimum <div className="stats-value">12.8 percent per decade</div>
				</div>
			</div>
			<div className="flex">
				<IC2 fill="#a6a3a3" width="42px" />
				<ArrowDown />
				<div className="ml-20">
					Ice Sheets<div className="stats-value"> 413 Gigatonnes per year</div>
				</div>
			</div>

			<div className="flex">
				<BH fill="#a6a3a3" width="42px" />
				<ArrowUp />
				<div className="ml-20">
					Sea Level <div className="stats-value"> 3.3 millimeters per year</div>
				</div>
			</div>
		</div>
	);
}
