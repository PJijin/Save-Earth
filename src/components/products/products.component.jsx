import React from 'react';
import productsList from './products';
import { ReactComponent as Eco } from './eco.svg';

export default function Products() {
	return (
		<div className="container">
			<div className="sub-heading">
				<Eco width="24px"></Eco>Eco-friendly Products for Your Daily Life
			</div>
			<div className="flex">
				{Object.entries(productsList).map(item => {
					return (
						<div key={item[0]} className="product">
							<a target="_BLANK" rel="noreferrer noopener" href={item[1].url}>
								<img alt={item[0]} src={item[1].image} width="150px" height="150px" />
								<h4>{item[0]}</h4>
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
