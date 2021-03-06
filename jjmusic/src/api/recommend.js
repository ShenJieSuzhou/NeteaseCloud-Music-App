import axios from 'axios'
import {HOST} from '../utils/config'

export function getBanner () {
    const url = HOST + '/banner'
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
    const url = HOST + '/dj/hot?limit=9'
    return axios.get(url)
}

export function getRecommendListDetail (id) {
    const url = HOST + `/playlist/detail?id=${id}`
    return axios.get(url)
  }