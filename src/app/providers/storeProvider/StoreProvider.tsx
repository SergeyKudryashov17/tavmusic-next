'use client'

import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { AppStore, makeStore } from '../../store/config/storeConfig';

type ProviderChildren = {
    children?: React.ReactNode,
}

export function StoreProvider({children} : ProviderChildren) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
    }

    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider> 
    )
}
