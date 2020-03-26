import api from '../services/api'
import { toastr } from 'react-redux-toastr'

export function getList() {
    return {
        type: 'BILLING_CYCLE_FETCHED',
        payload: api.get('billing-cycles')
    }
}

export function create(values) {
    api.post('billing-cycles', values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada com sucesso.')
        })
        .catch(resp => {
            toastr.error('Erro', 'Fodel')
        })
    return {
        type: 'TEMP'
    }
}