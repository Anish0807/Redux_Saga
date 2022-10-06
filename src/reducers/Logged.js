import React from 'react'

export default function Logged(state = false, action) {
    switch (action.type) {
        case 'LOGIN':
            return true;
        case 'LOGOFF':
            return false;
        default:
            return state;
    }
}

