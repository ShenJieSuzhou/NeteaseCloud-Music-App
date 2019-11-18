import axios from 'axios'
import {HOST} from './config'

export function getBanner () {
    const url = HOST + '/banner?type=2'
    return axios.get(url)
}

export function getRecommendLists () {
    const url = HOST + '/personalized' 
    return axios.get(url)
}

export function getLatestMusic () {
    const url = HOST + '/album/newest'
    return axios.get(url)
}

export function getHostRadio () {
    const url = HOST + '/dj/hot?limit=8'
    return axios.get(url)
}