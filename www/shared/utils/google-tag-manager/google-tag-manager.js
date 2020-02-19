import TagManager from 'react-gtm-module';

const tagManagerInitialArgs = {
    gtmId: process.env.GTM_TRACKING_ID,
};

export const googleTagManager = (router, args) => {
    const tagManagerArgs = {
        ...tagManagerInitialArgs,
        ...args,
    };

    TagManager.initialize(tagManagerArgs);

    if (window.location.search.includes('utm_')) {
        router.replace('/');
    }
};

export default googleTagManager;
