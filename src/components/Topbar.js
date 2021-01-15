import { Button } from '@material-ui/core';
import interests from '../apis/interests.json';
import Switch from '@material-ui/core/Switch';
import RangeSlider from './RangeSlider';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export default function Topbar() {

    const showRange = () => {
        const changeRange = document.querySelector('.changeRange');
        changeRange.style.display === 'block' ?
            changeRange.style.display = 'none' :
            changeRange.style.display = 'block';
        document.querySelector('.interests').style.display = 'none';
    }

    const showInterests = () => {
        const interests = document.querySelector('.interests');
        const showInterests = document.querySelector('.showInterests');
        const hideInterests = document.querySelector('.hideInterests');
        if (interests.style.display === 'block') {
            interests.style.display = 'none';
            showInterests.style.display = 'initial';
            hideInterests.style.display = 'none';
        } else {
            interests.style.display = 'block';
            showInterests.style.display = 'none';
            hideInterests.style.display = 'initial';
        }
        document.querySelector('.changeRange').style.display = 'none';
    }

    return (
        <div id="topbar">
            <div className="onlineStatus">
                <span className="filterName">Online Status</span>
                <Switch className="switch" color="primary" />
            </div>
            <div className="ageFilter">
                <div className="ageRange">
                    <span className="filterName">Godine</span>
                    <p onClick={showRange}><span id="min">24</span> - <span id="max">40</span></p>
                </div>
            </div>
            <div className="interesStatus">
                <span className="filterName">Interesuje me</span>
                <ExpandMoreIcon className="showInterests" onClick={showInterests} />
                <ExpandLessIcon className="hideInterests" onClick={showInterests} />
            </div>
            <div className="searchBar">
                <TextField id="outlined-basic" label="Pretrazi" variant="outlined" size="small" />
                <Button variant="contained" color="primary">Pretrazi</Button>
            </div>

            <div className="topBarBottom">
                <div className="wrap">
                    <div className="changeRange">
                        <RangeSlider className="ageSlider" />
                        <Button className="searchAgeRange" variant="contained" color="primary">Pretrazi</Button>
                    </div>
                    <div className="interests">
                        <div className="tags">
                            {interests.map((interes, i) => <div className="interesTag" key={'interes' + i}>{interes}</div>)}
                        </div>
                        <div className="buttons">
                            <Button variant="contained" color="primary">Pretrazi</Button>
                            <Button variant="contained">Otkazi</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
