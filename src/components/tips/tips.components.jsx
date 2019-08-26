import React from 'react';
import tipsData from './tips-data.js';
import { ReactComponent as Change } from './images/change.svg';
import { ReactComponent as House } from './images/home.svg';

export default function Tips() {
	return (
		<div className="flex tips">
			<Change width="350px" />
			<div className="container">
				<div className="sub-heading">
					<House width="24" /> Take Action, Save Home
				</div>
				<ul>
					{Object.entries(tipsData).map(tip => {
						return (
							<li key={tip[0]}>
								{tip[0]}
								<div> {tip[1]}</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
