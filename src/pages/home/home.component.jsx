import React, { useState } from 'react';
import useDarkMode from 'use-dark-mode';

import Options from '../../components/options/options.component';
import Results from '../../components/results/results.component';
import Stats from '../../components/stats/stats.component';

import SettingsContext from '../../contexts/settings.context';
import { defaultSettings } from '../../contexts/settings.util';

import Facts from '../../components/facts/facts.component';
import Footer from '../../components/footer/footer.component';
import Products from '../../components/products/products.component';
import NGO from '../../components/ngo/ngo.component';
import './home.styles.css';
import Tips from '../../components/tips/tips.components';
import Comparison from '../../components/comparison/comparison.componenet';
import Challenge from '../../components/challenge/challenge.component';

export default function Home() {
	const [settings, setSettings] = useState(defaultSettings);
	const darkMode = useDarkMode(false);

	const updateSettings = (set, value) => {
		setSettings({ ...settings, [set]: value });
	};
	return (
		<SettingsContext.Provider value={settings}>
			<div>
		<a href="https://digital.globalclimatestrike.net"><img src="https://digital.globalclimatestrike.net/wp-content/uploads/sites/71/2019/08/Banner-970x90.png" /></a>		
			</div>
			<div className="app">
				<Options changeSettings={updateSettings} toggleMode={darkMode.toggle} currentMode={darkMode}></Options>
				<Results settings={settings}></Results>
			</div>
			<Stats />
			<Tips />
			<Challenge />
			<Comparison />
			<Facts />
			<NGO />
			<Products />

			<Footer />
		</SettingsContext.Provider>
	);
}
