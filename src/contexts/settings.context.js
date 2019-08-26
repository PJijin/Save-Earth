import { createContext } from 'react';
import { defaultSettings } from './settings.util';

const SettingsContext = createContext(defaultSettings);

export default SettingsContext;
