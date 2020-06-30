export const LOADED = 'LOADED';
export const LOAD_DATA = 'LOAD_DATA';
export const ON_EDIT_CLICK = 'ON_EDIT_CLICK';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const EDIT_APPROVED = 'EDIT_APPROVED';
export const EDIT_ID = 'EDIT_ID';
export const STATUS_CHANGED = 'STATUS_CHANGED';
export const DELETE = 'ELEMENT_DELETED';

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
    };
};

export const onCloseModal = () => {
    return {
        type: CLOSE_MODAL,
        payload: false
    };
};

export const onEditApproved = () => {
    return {
        type: EDIT_APPROVED,
        payload: true
    };
};

export const idToEdit = (id) => {
    return {
        type: EDIT_ID,
        payload: id
    };
};


export const changeStatus = (status) => {
    return {
        type: STATUS_CHANGED,
        payload: status

    };
};

export const deleteElement = (id) => {
    return {
        type: DELETE,
        payload: id
    }
}