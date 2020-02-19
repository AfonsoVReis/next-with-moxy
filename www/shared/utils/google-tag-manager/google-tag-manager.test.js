// import Router from 'next/router';

// const mockedRouter = {
//     ...Router,
//     replace: jest.fn(),
//     events: {
//         on: jest.fn(),
//         off: jest.fn(),
//     },
// };

describe('exported gtm module', () => {
    beforeEach(() => {
        process.env.GTM_TRACKING_ID = '12345';
    });

    afterEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
    });

    it('should export the ganalytics module if tracking id is provided', () => {
        const googleTagManager = require('./google-tag-manager').default;

        expect(googleTagManager()).not.toHaveProperty('_mock');
    });

    it('should export the mocked ganalytics module if tracking id is provided', () => {
        delete process.env.GTM_TRACKING_ID;

        const googleTagManager = require('./google-tag-manager').default;

        expect(googleTagManager()).toHaveProperty('_mock');
    });
});

