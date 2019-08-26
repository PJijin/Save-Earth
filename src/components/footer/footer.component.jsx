import React from 'react';
import { ReactComponent as Heart } from './heart.svg';

export default function Footer() {
	return (
		<div className="footer container">
			Made on Earth by Humans with <Heart width="18px" />
			<a target="_BLANK" rel="noreferrer noopener" href="https://twitter.com/JP1016v1">
				@JP1016v1
			</a>
			&
			<a target="_BLANK" rel="noreferrer noopener" href="https://twitter.com/pJijin">
				@Pjijin
			</a>
		</div>
	);
}
