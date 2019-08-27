import React from 'react';
import { ReactComponent as Dark } from './icons/dark.svg';
import { ReactComponent as Clean } from './icons/clean.svg';
import { ReactComponent as IND } from './icons/in.svg';
import { ReactComponent as PAK } from './icons/pk.svg';
import { ReactComponent as IR } from './icons/ir.svg';

import { ReactComponent as DK } from './icons/dk.svg';
import { ReactComponent as SW } from './icons/sw.svg';
import { ReactComponent as NL } from './icons/nl.svg';
import { ReactComponent as US } from './icons/us.svg';
import { ReactComponent as ZA } from './icons/za.svg';
import { ReactComponent as FI } from './icons/fi.svg';
import { ReactComponent as CA } from './icons/ca.svg';
import { ReactComponent as EU } from './icons/eu.svg';

export default function Comparison() {
	return (
		<div className="flex comparison flex-1 container">
			<div>
				<div className="sub-heading">
					<Dark width="24px" /> Most Polluted Cities in The World
				</div>
				<div className="fact">
					<p>
						Delhi <IND width="18px" />
					</p>
					<p>
						Patna <IND width="18px" />
					</p>
					<p>
						Gwalior <IND width="18px" />
					</p>
					<p>
						Raipur <IND width="18px" />
					</p>
					<p>
						Karachi <PAK width="18px" />
					</p>
					<p>
						Peshawar <PAK width="18px" />
					</p>
					<p>
						Rawalpindi <PAK width="18px" />
					</p>
					<p>
						Khormabad <IR width="18px" />
					</p>
					<p>
						Lucknow <IND width="18px" />
					</p>
				</div>
			</div>
			<div className="ml-5">
				<div className="sub-heading">
					<Clean width="24px" /> Most Eco-Friendly Cities in The World
				</div>
				<div className="fact">
					<p>
						Copenhagen <DK width="18px" />
					</p>
					<p>
						Amsterdam <NL width="18px" />
					</p>
					<p>
						Stockholm <SW width="18px" />
					</p>
					<p>
						Portland <US width="18px" />
					</p>
					<p>San Francisco</p>
					<p>
						Cape Town <ZA width="18px" />
					</p>
					<p>
						Helsinki <FI width="18px" />
					</p>
					<p>
						Vancouver <CA width="18px" />
					</p>
					<p>
						Reykjavik <EU width="18px" />
					</p>
				</div>
			</div>
		</div>
	);
}
