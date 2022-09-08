import React, {StrictMode} from 'react';
import { createRoot } from 'react-dom/client'

const App = () => {
    return (
        <div>Hello World!</div>
    )
}

const root = createRoot(document.querySelector('#root'));
root.render(<StrictMode><App tab="home" /></StrictMode>)