export const ViewedConversionHistory = () => {
    return {
        get: () => {
            let conversions = localStorage.getItem('ViewedConversionHistory');
            return conversions === null ? [] : JSON.parse(conversions);
        },
        set: (conversions) => {
            localStorage.setItem('ViewedConversionHistory', JSON.stringify(conversions));
        }
    }
}  