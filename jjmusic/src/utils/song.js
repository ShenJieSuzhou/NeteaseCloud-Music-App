export default class Song {
    constructor ({id, singer, name, album, image, aliaName}) {
        this.id = id
        this.singer = singer
        this.name = name
        this.album = album
        this.aliaName = aliaName
        this.image = image
    }
}

function singerName (arr) {
    let name = []
    name = arr.map((item) => {
        return item.name
    })
    return name.join('/')
}

export function createRecommendSong (music) {
    return new Song({
        id: music.id,
        singer: singerName(music.ar),
        name: music.name,
        album: music.al.name,
        image: music.al.picUrl,
        aliaName: music.al.name
      })
}

export function createRecommendListSong (music) {
    return new Song({
        id: music.id,
        singer: singerName(music.ar),
        name: music.name,
        album: music.al.name,
        image: music.al.picUrl,
        aliaName: music.al.name
      })
}

export function createSong (music) {
    return new Song({
        id: music.id,
        singer: singerName(music.ar),
        name: music.name,
        album: music.al.name,
        image: music.al.picUrl,
        aliaName: music.al.name
      })
}