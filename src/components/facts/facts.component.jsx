import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'react-feather';
import { ReactComponent as Know } from './know.svg';

import fact from './facts';

export default function Facts() {
	const [factId, setFactId] = useState(0);

	const setFaceIdValue = val => {
		if (val < 0) return setFactId(fact.length - 1);
		if (val > fact.length) return setFactId(0);
		return setFactId(val);
	};

	return (
		<div className="facts container">
			<div className="d-flex fact-heading">
				<span>
					<Know width="24" /> Did you know?
				</span>

				<div className="pointer">
					<ChevronDown
						onClick={e => {
							e.preventDefault();
							setFaceIdValue(factId - 1);
						}}
					/>
					<ChevronUp
						onClick={e => {
							e.preventDefault();
							setFaceIdValue(factId + 1);
						}}
					/>
				</div>
			</div>
			<div className="fact">{fact[factId]}</div>
		</div>
	);
}
