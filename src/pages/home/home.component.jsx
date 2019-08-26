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

export default function Home() {
	const [settings, setSettings] = useState(defaultSettings);
	const darkMode = useDarkMode(false);

	const updateSettings = (set, value) => {
		setSettings({ ...settings, [set]: value });
	};
	return (
		<SettingsContext.Provider value={settings}>
			<div className="app">
				<Options changeSettings={updateSettings} toggleMode={darkMode.toggle} currentMode={darkMode}></Options>
				<Results settings={settings}></Results>
			</div>
			<Stats />
			<Facts />
			<NGO />
			<Products />
			<Tips />

			<Footer />
		</SettingsContext.Provider>
	);
}
