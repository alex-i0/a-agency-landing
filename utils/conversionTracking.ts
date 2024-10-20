export const gtag_report_conversion = (
    tracker: ConversionTracking,
    url: any
) => {
    const callback = function () {
        if (typeof url !== 'undefined') {
            window.location = url;
        }
    };
    window?.gtag('event', 'conversion', {
        send_to: tracker,
        event_callback: callback,
    });
    return false; // Prevent default anchor behavior if used with <a> tags
};

export enum ConversionTracking {
    BOOK_DEMO = 'AW-16482679282/QJfcCM32w58ZEPLzxrM9',
    START_TRIAL = 'AW-16482679282/z3eICMr2w58ZEPLzxrM9',
}
