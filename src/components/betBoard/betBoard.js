import './betBoard.css';

export default function BetBoard(data) {
	return (
		<div className="betboardParent">
			<div className="background">
				<div className="betboard">
					<div className="rangeOfBets">
						<div className="parentForTopRangeCells">
							<div className="borderTR borderL borderproperties fontSizeTopRange borderTopLeft bgColorBlack">
								1-4
							</div>
							<div className="borderTR borderproperties fontSizeTopRange bgColorBlack">5-8</div>
							<div className="borderTR borderproperties fontSizeTopRange bgColorBlack">9-12</div>
							<div className="borderTR borderproperties fontSizeTopRange bgColorBlack">13-16</div>
							<div className="borderTR borderproperties fontSizeTopRange bgColorBlack">17-20</div>
							<div className="borderTR borderproperties fontSizeTopRange borderTopRight bgColorBlack">
								21-24
							</div>
						</div>
						<div className="thinline borderTR borderD borderL">4.75:1</div>
					</div>

					<div className="leftMarkers">
						<div className="cell borderL borderTR col  borderTopLeft bgColorBlack">
							<div className="fontSizeTopRange places">
								<div>1</div>
								<div className="ordinals">ST</div>
							</div>
							<div className="fontSizeRow">ROW</div>
						</div>
						<div className="cell borderL borderTR col bgColorBlack">
							<div className="fontSizeTopRange places">
								<div>2</div>
								<div className="ordinals">ND</div>
							</div>
							<div className="fontSizeRow">ROW</div>
						</div>
						<div className="cell borderL borderTR col bgColorBlack">
							<div className="fontSizeTopRange places">
								<div>3</div>
								<div className="ordinals">RD</div>
							</div>
							<div className="fontSizeRow">ROW</div>
						</div>
						<div className="cell borderL borderTR col bgColorBlack">
							<div className="fontSizeTopRange places">
								<div>4</div>
								<div className="ordinals">TH</div>
							</div>
							<div className="fontSizeRow">ROW</div>
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
						<div className="cell borderTR borderL fontSizeTopRange borderTopRight bgColorBlack">
							<div className="rightSideBetsCell">
								<div className="fontSizeTopRange places">
									<div>1</div>
									<div className="ordinals">ST</div>
									<div>&</div>
								</div>
								<div>
									<div className="fontSizeTopRange places">
										<div>2</div>
										<div className="ordinals">ND</div>
									</div>
								</div>
							</div>
						</div>
						<div className="cell borderTR borderL fontSizeTopRange bgColorBlack">
							<div className="rightSideBetsCell">
								<div className="fontSizeTopRange places">
									<div>3</div>
									<div className="ordinals">RD</div>
									<div>&</div>
								</div>
								<div>
									<div className="fontSizeTopRange places">
										<div>4</div>
										<div className="ordinals">TH</div>
									</div>
								</div>
							</div>
						</div>
						<div className="thinline  borderTR borderD borderL"> 0.95:1</div>
					</div>

					<div className="leftBottom">
						<div className="borderTR borderL col bgColorBlack flexGenProp">
							<div className="fontSizeTopRange lineHeghtSeventeen">SMALL</div>
							<div className="fontSizeRatio lineHeghtFourteen">0.95:1</div>
						</div>
						<div className="borderTR  borderL  borderBottomLeft borderD col bgColorBlack flexGenProp">
							<div className="fontSizeTopRange lineHeghtSeventeen">ODD</div>
							<div className="fontSizeRatio lineHeghtFourteen">0.95:1</div>
						</div>
					</div>

					<div className="bottomMiddleUpper">
						<div className="parentForBottomRangeCells">
							<div className=" borderTR borderproperties borderL fontSizeTopRange bgColorBlack">1-8</div>
							<div className="borderTR borderproperties fontSizeTopRange bgColorBlack">5-12</div>
							<div className="borderTR borderproperties fontSizeTopRange bgColorBlack">9-16</div>
							<div className="borderTR borderproperties fontSizeTopRange bgColorBlack">13-20</div>
							<div className="borderTR borderproperties fontSizeTopRange bgColorBlack">17-24</div>
						</div>
						<div className="thinline borderD borderL borderTR">4.75:1</div>
					</div>

					<div className="bottomRight">
						<div className="borderTR borderL  bgColorBlack col flexGenProp">
							<div className="fontSizeTopRange lineHeghtSeventeen">BIG</div>
							<div className="fontSizeRatio lineHeghtFourteen">0.95:1</div>
						</div>
						<div className="borderTR borderL borderD col bgColorBlack borderBottomRight flexGenProp">
							<div className="fontSizeTopRange lineHeghtSeventeen">EVEN</div>
							<div className="fontSizeRatio lineHeghtFourteen">0.95:1</div>
						</div>
					</div>

					<div className="bottomMiddleLower">
						<div className="lowerRed borderTR borderL borderD fontSizeRatio">0.95:1</div>
						<div className="lowerBlack borderTR borderD fontSizeRatio">0.95:1</div>
					</div>
				</div>
			</div>
		</div>
	);
}