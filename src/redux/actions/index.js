export const LOADED = 'LOADED';
export const LOAD_DATA = 'LOAD_DATA';

export const dataLOADED = (data) => {
    return {
        type: "LOADED",
        payload: data
    };
};

export const lData = () => {
    return {
        type: LOAD_DATA
    };
};

