import React from 'react';
import { GitHub } from 'react-feather';
import { ReactComponent as Heart } from './heart.svg';
export default function Footer() {
	return (
		<div className="footer flex container">
			<div className="credits">
				Made on Earth by Humans with <Heart width="18px" />
				<a target="_BLANK" rel="noreferrer noopener" href="https://twitter.com/JP1016v1">
					@JP1016v1
				</a>
				&
				<a target="_BLANK" rel="noreferrer noopener" href="https://twitter.com/pJijin">
					@Pjijin
				</a>
			</div>
			<div>
				<a href="https://github.com/PJijin/Save-Earth" target="_BLANK" rel="noreferrer noopener">
					<GitHub size="12" /> Source
				</a>
			</div>
		</div>
	);
}
