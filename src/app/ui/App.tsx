'use client'

import '../assets/styles/main.scss';
import { StoreProvider } from '../providers/storeProvider/StoreProvider';

type AppProps = {
    children: React.ReactNode
}

const App = ({ children }: AppProps) => {
    return (
        <StoreProvider>
            { children }
        </StoreProvider>
    )
}

export default App;