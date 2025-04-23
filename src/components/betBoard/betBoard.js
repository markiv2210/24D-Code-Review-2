import { useState, useEffect } from 'react';
import './betBoard.css';

export default function BetBoard(data) {
	const [scaleFactor, setScaleFactor] = useState(getScale());
	
	function getScale() {
		const maxWidth = 1800;
		const maxHeight = 1013;
		const width = Math.min(window.innerWidth, maxWidth);
		const height = window.innerHeight;
		return 0.0007 * Math.sqrt(width * height) + 0.16464;
		// return 0.001 * width + 0.163;
	}

	useEffect(() => {
		const handleResize = () => setScaleFactor(getScale());
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		// <div className="betboardParent" style={{ transform: `scale(${scaleFactor})`, transformOrigin: 'bottom center' }}>
		<div className="betboardParent">
			<div className="betboard">
				<div className="rangeOfBets">
					<div className="parentForTopRangeCells">
						<div className="borderTR borderL borderproperties fontSizeFourteen borderTopLeft bgColorBlack">1-4
						</div>
						<div className="borderTR borderproperties fontSizeFourteen bgColorBlack">5-8</div>
						<div className="borderTR borderproperties fontSizeFourteen bgColorBlack">9-12</div>
						<div className="borderTR borderproperties fontSizeFourteen bgColorBlack">13-16</div>
						<div className="borderTR borderproperties fontSizeFourteen bgColorBlack">17-20</div>
						<div className="borderTR borderproperties fontSizeFourteen borderTopRight bgColorBlack">21-24</div>
					</div>
					<div className="thinline borderTR">4.75:1</div>
				</div>

				<div className="leftMarkers">
					<div className="cell borderL borderTR col  borderTopLeft bgColorBlack">
						<div className="fontSizeFourteen">1st</div>
						<div className="fontSizeTwelve">row</div>
					</div>
					<div className="cell borderL borderTR col bgColorBlack">
						<div className="fontSizeFourteen">2nd</div>
						<div className="fontSizeTwelve">row</div>
					</div>
					<div className="cell borderL borderTR col bgColorBlack">
						<div className="fontSizeFourteen">3rd</div>
						<div className="fontSizeTwelve">row</div>
					</div>
					<div className="cell borderL borderTR col bgColorBlack">
						<div className="fontSizeFourteen">4th</div>
						<div className="fontSizeTwelve">row</div>
					</div>
					<div className="thinline borderL borderTR borderD"> 2.84:1</div>
				</div>

				<div className="mainBets">
					<div className="mainRed borderTR borderL">1</div>
					<div className="mainBlack borderTR">5</div>
					<div className="mainRed  borderTR">9</div>
					<div className="mainBlack borderTR">13</div>
					<div className="mainRed borderTR">17</div>
					<div className="mainBlack borderTR">21</div>
					<div className="mainRed borderTR borderL">2</div>
					<div className="mainBlack borderTR">6</div>
					<div className="mainRed borderTR">10</div>
					<div className="mainBlack borderTR">14</div>
					<div className="mainRed borderTR">18</div>
					<div className="mainBlack borderTR">22</div>
					<div className="mainRed borderTR borderL">3</div>
					<div className="mainBlack borderTR">7</div>
					<div className="mainRed borderTR">11</div>
					<div className="mainBlack borderTR">15</div>
					<div className="mainRed borderTR">19</div>
					<div className="mainBlack borderTR">23</div>
					<div className="mainRed borderTR borderL">4</div>
					<div className="mainBlack borderTR">8</div>
					<div className="mainRed borderTR">12</div>
					<div className="mainBlack borderTR">16</div>
					<div className="mainRed borderTR">20</div>
					<div className="mainBlack borderTR">24</div>
					<div className="thinline borderTR mainThinLine borderL borderD">22:1</div>
				</div>

				<div className="rightMarker">
					<div className="cell borderTR borderL fontSizeFourteen borderTopRight bgColorBlack"> 1st&<br />2nd</div>
					<div className="cell borderTR borderL fontSizeFourteen bgColorBlack"> 3rd&<br />4th</div>
					<div className="thinline  borderTR borderD borderL"> 0.95:1</div>
				</div>

				<div className="leftBottom">
					<div className="borderTR borderL col bgColorBlack flexGenProp">
						<div className="fontSizeFourteen">Small</div>
						<div className="fontSizeTen lineHeightFourteen">0.95:1</div>
					</div>
					<div className="borderTR  borderL  borderBottomLeft borderD col bgColorBlack flexGenProp">
						<div className="fontSizeFourteen">Odd</div>
						<div className="fontSizeTen lineHeightFourteen">0.95:1</div>
					</div>
				</div>

				<div className="bottomMiddleUpper">
					<div className="parentForBottomRangeCells">
						<div className=" borderTR borderproperties borderL fontSizeFourteen bgColorBlack">1-8</div>
						<div className="borderTR borderproperties fontSizeFourteen bgColorBlack">5-12</div>
						<div className="borderTR borderproperties fontSizeFourteen bgColorBlack">9-16</div>
						<div className="borderTR borderproperties fontSizeFourteen bgColorBlack">13-20</div>
						<div className="borderTR borderproperties fontSizeFourteen bgColorBlack">17-24</div>
					</div>
					<div className="thinline borderD borderL borderTR">4.75:1</div>
				</div>

				<div className="bottomRight">
					<div className="borderTR borderL  bgColorBlack col flexGenProp">
						<div className="fontSizeFourteen">Big</div>
						<div className="fontSizeTen lineHeightFourteen">0.95:1</div>
					</div>
					<div className="borderTR borderL borderD col bgColorBlack borderBottomRight flexGenProp">
						<div className="fontSizeFourteen">Even</div>
						<div className="fontSizeTen lineHeightFourteen">0.95:1</div>
					</div>
				</div>

				<div className="bottomMiddleLower">
					<div className="lowerRed borderTR borderL borderD fontSizeTen">0.95:1</div>
					<div className="lowerBlack borderTR borderD fontSizeTen">0.95:1</div>
				</div>
			</div>
		</div>

		// <div className='betboardtest'>

		// </div>
	);
}