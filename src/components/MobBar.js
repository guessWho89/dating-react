import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function MobBar() {

    // const burger = document.querySelector('.burger');
    // const more = document.querySelector('.more');
    
    const burgerFunc = () => {
        const sidebar = document.querySelector('#sidebar');
        const mobBar = document.querySelector('#mobBar');
        const profiles = document.querySelector('#profiles');
        [sidebar, mobBar, profiles].map(el => {
            el.classList.toggle('active');
            let left = el.offsetLeft;
            let slideRight = left + 60 + 'px';
            let slideLeft = left - 60 + 'px';
            return el.classList.contains('active') ? el.style.left = slideRight : el.style.left = slideLeft;
        });
        toggleBurger(mobBar);
    };
    
    const toggleBurger = (mobBar) => {
        const burger = document.querySelector('.burger');
        const burgerOpen = document.querySelector('.burgerOpen');
        // const mobBar = document.querySelector('#mobBar');
        if (mobBar.classList.contains('active')) {
            burger.style.display = 'none';
            burgerOpen.style.display = 'block';
        } else {
            burger.style.display = 'block';
            burgerOpen.style.display = 'none';
        }
    }

    const moreFunc = () => {
        const topbar = document.querySelector('#topbar');
        let height = topbar.offsetHeight;
        topbar.classList.toggle('active');
        topbar.classList.contains('active') ? topbar.style.top = height + 60 + 'px' : topbar.style.top = '60px';
    };

    return (
        <div id="mobBar">
            <MenuIcon className="burger" onClick={burgerFunc} />
            <MenuOpenIcon className="burgerOpen" onClick={burgerFunc} style={{ display: 'none'}}/>
            <MoreVertIcon className="more" onClick={moreFunc} />
        </div>
    );
} 