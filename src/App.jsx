import React from 'react';
import ScrollToTopButton from './shared/components/ScrollToTopButton/ScrollToTopButton';

import SharedLayout from 'components/SharedLayout/SharedLayout';

export const App = () => {
    return (
        <div>
            <SharedLayout />
            <ScrollToTopButton />
        </div>
    );
};
