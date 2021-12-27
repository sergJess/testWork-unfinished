import '../style/base/base.css';
import {Observer} from './common/observer';
import './types/import-images';
import StartPage from './app/start-page';
export const root = document.getElementById('root');
export const cards = document.createElement('div');
export const observer = new Observer();

const strartPage = new StartPage(root);
strartPage.render();
