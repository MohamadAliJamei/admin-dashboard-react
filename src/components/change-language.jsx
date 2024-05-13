import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../contexts/app/app-context";

const ChangeLanguage = () => {
  const [show, setShow] = useState(false)
  const ref = useRef();

  const {language, changeLanguage} = useAppContext()

  useEffect(() => {
    const checkIfClickOutside = e => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false)
      }
    }
    document.addEventListener('mousedown', checkIfClickOutside)
    return () => {
      document.removeEventListener('mousedown', checkIfClickOutside)
    }
  }, [show])
  return (
    <div className="dropdown">
      <a className="nav-flag dropdown-toggle" onClick={() => setShow(true)}>
        {language === 'fa' ? 'فارسی' : 'english'}
      </a>
      <div ref={ref} className={`dropdown-menu dropdown-menu-end show ${show ? 'show' : undefined}`}>
        <a className="dropdown-item fw-bolder" style={{textAlign: language === 'fa' ? 'right' : 'left'}} onClick={() => changeLanguage('fa')}>
          فارسی
        </a>
        <a className="dropdown-item fw-bolder" style={{textAlign: language === 'fa' ? 'right' : 'left'}} onClick={() => changeLanguage('en')}>
          english
        </a>
      </div>
    </div>
  )
}

export default ChangeLanguage;