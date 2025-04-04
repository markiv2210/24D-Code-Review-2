import './betBoard.css';

export default function BetBoard() {
    return (
        <div class="betboardParent">
            <div class="betboard">
                <div class="rangeOfBets">
                    <div class="parentForTopRangeCells">
                        <div class="borderTR borderL borderproperties fontSizeFourteen borderTopLeft bgColorBlack">1-4
                        </div>
                        <div class="borderTR borderproperties fontSizeFourteen bgColorBlack">5-8</div>
                        <div class="borderTR borderproperties fontSizeFourteen bgColorBlack">9-12</div>
                        <div class="borderTR borderproperties fontSizeFourteen bgColorBlack">13-16</div>
                        <div class="borderTR borderproperties fontSizeFourteen bgColorBlack">17-20</div>
                        <div class="borderTR borderproperties fontSizeFourteen borderTopRight bgColorBlack">21-24</div>
                    </div>
                    <div class="thinline borderTR">4.75:1</div>
                </div>

                <div class="leftMarkers">
                    <div class="cell borderL borderTR col  borderTopLeft bgColorBlack">
                        <div class="fontSizeFourteen">1st</div>
                        <div class="fontSizeTwelve">row</div>
                    </div>
                    <div class="cell borderL borderTR col bgColorBlack">
                        <div class="fontSizeFourteen">2nd</div>
                        <div class="fontSizeTwelve">row</div>
                    </div>
                    <div class="cell borderL borderTR col bgColorBlack">
                        <div class="fontSizeFourteen">3rd</div>
                        <div class="fontSizeTwelve">row</div>
                    </div>
                    <div class="cell borderL borderTR col bgColorBlack">
                        <div class="fontSizeFourteen">4th</div>
                        <div class="fontSizeTwelve">row</div>
                    </div>
                    <div class="thinline borderL borderTR borderD"> 2.84:1</div>
                </div>

                <div class="mainBets">
                    <div class="mainRed borderTR borderL">1</div>
                    <div class="mainBlack borderTR">5</div>
                    <div class="mainRed  borderTR">9</div>
                    <div class="mainBlack borderTR">13</div>
                    <div class="mainRed borderTR">17</div>
                    <div class="mainBlack borderTR">21</div>
                    <div class="mainRed borderTR borderL">2</div>
                    <div class="mainBlack borderTR">6</div>
                    <div class="mainRed borderTR">10</div>
                    <div class="mainBlack borderTR">14</div>
                    <div class="mainRed borderTR">18</div>
                    <div class="mainBlack borderTR">22</div>
                    <div class="mainRed borderTR borderL">3</div>
                    <div class="mainBlack borderTR">7</div>
                    <div class="mainRed borderTR">11</div>
                    <div class="mainBlack borderTR">15</div>
                    <div class="mainRed borderTR">19</div>
                    <div class="mainBlack borderTR">23</div>
                    <div class="mainRed borderTR borderL">4</div>
                    <div class="mainBlack borderTR">8</div>
                    <div class="mainRed borderTR">12</div>
                    <div class="mainBlack borderTR">16</div>
                    <div class="mainRed borderTR">20</div>
                    <div class="mainBlack borderTR">24</div>
                    <div class="thinline borderTR mainThinLine borderL borderD">22:1</div>
                </div>

                <div class="rightMarker">
                    <div class="cell borderTR borderL fontSizeFourteen borderTopRight bgColorBlack"> 1st&<br />2nd</div>
                    <div class="cell borderTR borderL fontSizeFourteen bgColorBlack"> 3rd&<br />4th</div>
                    <div class="thinline  borderTR borderD borderL"> 0.95:1</div>
                </div>

                <div class="leftBottom">
                    <div class="borderTR borderL col bgColorBlack flexGenProp">
                        <div class="fontSizeFourteen">Small</div>
                        <div class="fontSizeTen lineHeightFourteen">0.95:1</div>
                    </div>
                    <div class="borderTR  borderL  borderBottomLeft borderD col bgColorBlack flexGenProp">
                        <div class="fontSizeFourteen">Odd</div>
                        <div class="fontSizeTen lineHeightFourteen">0.95:1</div>
                    </div>
                </div>

                <div class="bottomMiddleUpper">
                    <div class="parentForBottomRangeCells">
                        <div class=" borderTR borderproperties borderL fontSizeFourteen bgColorBlack">1-8</div>
                        <div class="borderTR borderproperties fontSizeFourteen bgColorBlack">5-12</div>
                        <div class="borderTR borderproperties fontSizeFourteen bgColorBlack">9-16</div>
                        <div class="borderTR borderproperties fontSizeFourteen bgColorBlack">13-20</div>
                        <div class="borderTR borderproperties fontSizeFourteen bgColorBlack">17-24</div>
                    </div>
                    <div class="thinline borderD borderL borderTR">4.75:1</div>
                </div>

                <div class="bottomRight">
                    <div class="borderTR borderL  bgColorBlack col flexGenProp">
                        <div class="fontSizeFourteen">Big</div>
                        <div class="fontSizeTen lineHeightFourteen">0.95:1</div>
                    </div>
                    <div class="borderTR borderL borderD col bgColorBlack borderBottomRight flexGenProp">
                        <div class="fontSizeFourteen">Even</div>
                        <div class="fontSizeTen lineHeightFourteen">0.95:1</div>
                    </div>
                </div>

                <div class="bottomMiddleLower">
                    <div class="lowerRed borderTR borderL borderD fontSizeTen">0.95:1</div>
                    <div class="lowerBlack borderTR borderD fontSizeTen">0.95:1</div>
                </div>
            </div>
        </div>
    );
}