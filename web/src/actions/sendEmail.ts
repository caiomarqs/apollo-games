import axios from 'axios'
import { Dispatch } from 'redux'

import { ActionTypes } from './types'
import { history } from '../history'

export interface Email{
    name: string;
    from: string;
    subject: string;
    text: string;
}

