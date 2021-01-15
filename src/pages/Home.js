import Profiles from '../components/Profiles';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import MobBar from '../components/MobBar';

export default function Home() {
    return (
        <div id="home" className="page">  
            <MobBar />
            <Topbar />
            <Sidebar />
            <Profiles />
        </div>
    )
}
