export const LOADED = 'LOADED';
export const LOAD_DATA = 'LOAD_DATA';
export const ON_EDIT_CLICK = 'ON_EDIT_CLICK';
export const CLOSE_MODAL = 'CLOSE_MODAL';

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

export const onEdit = () => {
    return {
        type: ON_EDIT_CLICK,
        payload: true
    }
}

export const onCloseModal = () => {
    return {
        type: CLOSE_MODAL,
        payload: false
    }
}