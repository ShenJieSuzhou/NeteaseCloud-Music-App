import {getSong} from '../api/getSong'

export const musicList = state => state.musicList

export const playlist = state => state.playlist

export const currentIndex = state => state.currentIndex

export const currentSongUrl = (state) => {
    getSong(state.playlist[state.currentIndex]).then((res) => {
        console.log(state.playlist, 'res')
        return res.data.data.url || ''
    })
}