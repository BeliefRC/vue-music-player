export default class Song {
  constructor({ id, mid, singer, name, album, duration, image, url }) {
    this.id = id;
    this.mid = mid;
    this.singer = singer;
    this.name = name;
    this.album = album;
    this.duration = duration;
    this.image = image;
    this.url = url;
  }
}

export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://113.96.101.23/amobile.music.tc.qq.com/${musicData.songid}.m4a?guid=6919125836&vkey=0E48C67A8D1ACB6D250B773E4DF524E1A097D348D97D2B547144E76E014B413298BCC986BDB0CA66DDBE53907444534F38B4D181E9277C02&uin=0&fromtag=38`
  });
}

function filterSinger(singer) {
  let ret = [];
  if (!singer) {
    return "";
  }
  singer.forEach(s => {
    ret.push(s.name);
  });
  return ret.join("/");
}
