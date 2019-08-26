import React, { useState } from 'react';
import { ReactComponent as Heart } from './heart.svg';
import ngoList from './ngo';

export default function NGO() {
	const [details, setDetails] = useState(Object.entries(ngoList)[0]);
	return (
		<div className="container">
			<div className="sub-heading">
				<span>
					<Heart width="18" />{' '}
				</span>
				Environmental NGOs
			</div>
			<div className="ngo-list flex">
				<div className="list">
					{Object.entries(ngoList).map(item => {
						return (
							<p key={item[0]} onClick={() => setDetails(item)}>
								{item[0]}
							</p>
						);
					})}
				</div>
				<div className="details">
					<h5>{details[0]}</h5>
					<p>{details[1]}</p>
				</div>
			</div>
		</div>
	);
}
