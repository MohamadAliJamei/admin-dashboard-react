import ChangeLanguage from "../../components/change-language";
import ChangeTheme from "../../components/change-theme";
import { useAppContext } from "../../contexts/app/app-context";
import avatar from '@assets/images/avatar.jpg';

const TopNav = () => {
  const {toggleSidebar, language} = useAppContext()
  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">
    <a className="sidebar-toggle" onClick={toggleSidebar}>
      <i className="hamburger align-self-center"></i>
    </a>
    <div className="d-flex align-items-center gap-3">
      <ChangeLanguage />
      <ChangeTheme />
    </div>
    <img src={avatar} className={`avatar img-fluid rounded-circle ${language === 'fa' ? 'me-auto' : 'ms-auto'}`} />
  </nav>
  )
}
export default TopNav;