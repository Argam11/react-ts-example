import { I18nextProvider } from 'react-i18next';
import i18n from './i18next';
import { Login } from './login';

import './App.css';

function App() {
    return (
        <div>
            <I18nextProvider i18n={i18n}>
                <Login />
            </I18nextProvider>
        </div>
    );
}

export default App;
