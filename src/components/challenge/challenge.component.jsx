import React from 'react';
import { Twitter, Facebook } from 'react-feather';
import { ReactComponent as People } from './icons/users.svg';
import { ReactComponent as Heart } from '../footer/heart.svg';
export default function Challenge() {
	return (
		<div className="challenge container">
			<div className="sub-heading">
				<People className="icon-margin" width="24px" />
				<span className="ml-10">Challenge Friends</span>
			</div>
			<div>
				<ol type="number">
					<li>Do some methods specified above that can save the earth.</li>
					<li>Take Photo.</li>
					<li>
						Share a link to this page. And inform your followers that you participating the
						<b>#SaveEarthChallenge</b>
					</li>
					<div className="d-flex">
						<a
							className="shareBtn"
							target="_BLANK"
							rel="noreferrer noopener"
							href="https://twitter.com/intent/tweet?url=save-earth.now.sh&text=I'm Participating in SaveEarthChallenge&button_hashtag=SaveEarthChallenge&ref_src=twsrc%5Etfw"
						>
							<Twitter size="14px" /> <span>Tweet</span>
						</a>
						<a
							className="shareBtn"
							target="_BLANK"
							rel="noreferrer noopener"
							href="https://www.facebook.com/sharer/sharer.php?u=http://save-earth.now.sh"
						>
							<Facebook size="14px" />
							<span>Facebook</span>
						</a>
					</div>
					<li>
						Share on social media with hashtag <b>#SaveEarth , #SaveEarthChallenge</b> . Don't forget the
						photo and caption <Heart width="14px" />
					</li>
					<li>
						Mention your friends and Challenge them. Make it a Chain Reaction and <b>Together We Can</b>.
					</li>
				</ol>
			</div>
		</div>
	);
}
