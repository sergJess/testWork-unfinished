import '../types/import-images';
import rssLogo from '../../../assets/footer/rss.svg';
export default class Footer{
	render(parent:HTMLElement){
		const footer = document.createElement('footer');
		footer.classList.add('footer');
const footerItemFirst = document.createElement('div');
const githubLink = document.createElement('a');
githubLink.classList.add('footer__link');
githubLink.textContent = 'SergSudakov-Github';
githubLink.setAttribute('href', 'https://github.com/sergJess');
footerItemFirst.append(githubLink);

const footerYear =	document.createElement('div');
footerYear.classList.add('footer__text');
footerYear.textContent = '2021';

const footerItemSecond = document.createElement('div');
const schoolLink =	document.createElement('a');
schoolLink.classList.add('footer__link');
schoolLink.setAttribute('href', 'https://rs.school/');

const schoolLogo = document.createElement('img');
schoolLogo.setAttribute('alt', 'RS-School');
schoolLogo.src = rssLogo;
schoolLink.append(schoolLogo);

footerItemSecond.append(schoolLink);
footer.append(footerItemFirst, footerYear, footerItemSecond);
parent.append(footer);
	}
}