import React from 'react'

import { history } from '../../../history'
import { Plus } from '../../Icons'

export class AddCard extends React.Component {

    onAddButtonClicked = () => {
        history.push('/backend/dashboard/team/add/member')
    }

    render() {
        return (
            <li onClick={this.onAddButtonClicked} className="card-container add-card">
                <Plus fill="#ABABAB"/>
                <p className="sub-bold">Adicionar Membro</p>
            </li>
        )
    }
}

