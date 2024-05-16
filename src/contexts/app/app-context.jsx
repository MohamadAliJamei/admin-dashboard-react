import { useContext } from "react";
import { useEffect } from "react";
import { createContext, useReducer } from "react";
import { useTranslation } from "react-i18next";
import appReducer from "./app-reducer";

const AppContext = createContext();
const initialState = {
    language: localStorage.getItem('language') || 'fa',
    theme: localStorage.getItem('theme') || 'light'
};
const AppProvider = ({children}) => {
    const {i18n} = useTranslation();
    const [state, dispatch] = useReducer(appReducer, initialState);

    const changeLanguage = (language) => {
        dispatch({type: 'CHANGE_LANGUAGE', payload: language});
    }

    const changeTheme = (theme) => {
console.log(theme)
        dispatch({type: 'CHANGE_THEME', payload: theme});
    }

    useEffect(() => {
        i18n.changeLanguage(state.language);
        localStorage.setItem('language', state.language);
        document.body.dataset.direction = state.language === 'fa' ? 'rtl' : 'ltr';
        document.body.dataset.sidebarPosition = state.language === 'fa' ? 'right' : 'left';
    }, [state.language])

    useEffect(() => {
        localStorage.setItem('theme', state.theme);
    }, [state.theme])

    return <AppContext.Provider value={{...state, changeLanguage, changeTheme}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext);
}

export {useAppContext, AppProvider}