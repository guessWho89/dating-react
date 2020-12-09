import SearchIcon from '@material-ui/icons/Search';
import MessageIcon from '@material-ui/icons/Message';
import VisibilityIcon from '@material-ui/icons/Visibility';
import GradeIcon from '@material-ui/icons/Grade';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

export default function Sidebar() {
    return (
        <>
            <div id="sidebar">
                <a href="/">
                    <SearchIcon className="sidebarIcons" />
                    <span className="description">Pretrazi</span>
                </a>
                <a href="/messages">
                    <MessageIcon className="sidebarIcons" />
                    <span className="description">Poruke</span>
                </a>
                <a href="/viewed">
                    <VisibilityIcon className="sidebarIcons" />
                    <span className="description">Mene su pregledali</span>
                </a>
                <a href="/interested">
                    <GradeIcon className="sidebarIcons" />
                    <span className="description">Omiljeni</span>
                </a>
                <a href="/coins">
                    <PaymentIcon className="sidebarIcons" />
                    <span className="description">Novcici</span>
                </a>
                <a href="/myprofile">
                    <AccountBoxIcon className="sidebarIcons" />
                    <span className="description">Moj profil</span>
                </a>
                <a href="/info">
                    <ContactSupportIcon className="sidebarIcons" />
                    <span className="description">Kontakt informacije</span>
                </a>
                <a href="/logout">
                    <PowerSettingsNewIcon className="sidebarIcons" />
                    <span className="description">Odjava</span>
                </a>
            </div>
        </>
    )
}
