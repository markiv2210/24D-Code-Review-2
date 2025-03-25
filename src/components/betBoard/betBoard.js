import './betBoard.css';

export default function BetBoard() {
  return (
    <div class="betboard">
    <div class="transparentBlackBackground borderTopLeft rangeCells topLeftEmptySpace borderTR borderL">1-4</div>
    <div class="transparentBlackBackground rangeCells borderTR">5-8</div>
    <div class="transparentBlackBackground rangeCells borderTR">9-12</div>
    <div class="transparentBlackBackground rangeCells borderTR">13-16</div>
    <div class="transparentBlackBackground rangeCells borderTR">17-20</div>
    <div class="transparentBlackBackground borderTopRight rangeCells borderTR">21-24</div>


    <div class="thinMiddleLineSpan thin tRB lBorder dBorder borderTR borderL borderD thinTopAndMiddle fontSizeTen">4.75:1
    </div>

    <div
        class="marginright transparentBlackBackground rowMarker mainBetCellIndiRowMarker borderTopLeft tRB lBorder topRightEmptySpace borderTR borderL">
        <div class="rowMarkerParentDiv">
            <div class="numberSTStyle">1st</div>
            <div class="rowStyle">row</div>
        </div>
    </div>

    <div class="redMainBet borderTR borderL">1</div>
    <div class="blackMainBet borderTR ">5</div>
    <div class="redMainBet borderTR ">9</div>
    <div class="blackMainBet borderTR ">13</div>
    <div class="redMainBet borderTR ">17</div>
    <div class="blackMainBet borderTR ">21</div>

    <div class="mix m1 marginleft transparentBlackBackground rowMarker borderTopRight borderTR borderL">
        1st&<br/>2nd</div>

    <div class="marginright transparentBlackBackground rowMarker mainBetCellIndiRowMarker borderTR borderL">
        <div class="rowMarkerParentDiv">
            <div class="numberSTStyle">2nd</div>
            <div class="rowStyle">row</div>
        </div>
    </div>
    <div class="redMainBet  borderTR borderL ">2</div>
    <div class="blackMainBet borderTR ">6</div>
    <div class="redMainBet  borderTR ">10</div>
    <div class="blackMainBet  borderTR ">14</div>
    <div class="redMainBet borderTR ">18</div>
    <div class="blackMainBet borderTR ">22</div>
    <div class="marginright transparentBlackBackground rowMarker mainBetCellIndiRowMarker borderTR borderL">
        <div class="rowMarkerParentDiv">
            <div class="numberSTStyle">3rd</div>
            <div class="rowStyle">row</div>
        </div>
    </div>
    <div class="redMainBet borderTR borderL ">3</div>
    <div class="blackMainBet borderTR ">7</div>
    <div class="redMainBet borderTR ">11</div>
    <div class="blackMainBet borderTR ">15</div>
    <div class="redMainBet borderTR ">19</div>
    <div class="blackMainBet borderTR ">23</div>
    <div class="mix m2 marginleft transparentBlackBackground  rowMarker  borderTR  borderL">3rd&<br/>4th</div>
    <div class="marginright transparentBlackBackground rowMarker mainBetCellIndiRowMarker borderTR borderL">
        <div class="rowMarkerParentDiv">
            <div class="numberSTStyle">4th</div>
            <div class="rowStyle">row</div>
        </div>
    </div>
    <div class="redMainBet borderTR borderL">4</div>
    <div class="blackMainBet borderTR ">8</div>
    <div class="redMainBet borderTR ">12</div>
    <div class="blackMainBet borderTR ">16</div>
    <div class="redMainBet borderTR ">20</div>
    <div class="blackMainBet borderTR ">24</div>
    <div class="marginright thin borderTR borderL borderD thinMidLeftAndRight fontSizeTen">2.84:1</div>
    <div class="thinMiddleLineSpan thin borderTR borderL borderD thinTopAndMiddle fontSizeTen">22:1</div>
    <div class="marginleft thin borderTR borderL borderD thinMidLeftAndRight fontSizeTen">0.95:1</div>

    <div class="gridfordown">
        <div class="small marginright transparentBlackBackground  borderTR  borderL">
            <div class="SBOE">
                <div class="naming">Small</div>
                <div class="fontSizeTen">0.95:1</div>
            </div>
        </div>
        <div class="transparentBlackBackground rangeCells  borderTR borderL">1-8</div>
        <div class="transparentBlackBackground rangeCells borderTR ">5-12</div>
        <div class="transparentBlackBackground rangeCells borderTR ">9-16</div>
        <div class="transparentBlackBackground rangeCells borderTR ">13-20</div>
        <div class="marginright transparentBlackBackground rangeCells borderTR ">17-24</div>
        <div class="big transparentBlackBackground borderTR borderL ">
            <div class="SBOE">
                <div class="naming">Big</div>
                <div class="fontSizeTen">0.95:1</div>
            </div>
        </div>
        <div class="middleline marginright thin borderTR  borderL  borderD thinBottom fontSizeTen">4.75:1</div>
        <div class="thirdline marginright transparentBlackBackground borderBottomLeft borderTR borderL borderD ">
            <div class="SBOE">
                <div class="naming">Odd</div>
                <div class="fontSizeTen">0.95:1</div>
            </div>
        </div>
        <div class="redblackparent marginright">
            <div class="redthird borderTR borderL borderD fontSizeTen">0.95:1</div>
            <div class="blackthird borderTR borderD fontSizeTen">0.95:1</div>
        </div>
        <div class="thirdline transparentBlackBackground borderBottomRight borderTR  borderL borderD ">
            <div class="SBOE">
                <div class="naming">Even</div>
                <div class="fontSizeTen">0.95:1</div>
            </div>
        </div>
    </div>
  </div>
  );
}