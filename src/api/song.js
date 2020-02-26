import axios from "axios";
import { commonParams } from "./config";

export function getLyric(mid) {
  // https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg
  const url = "/lyric/fcgi-bin/fcg_query_lyric_new.fcg";
  const data = Object.assign({}, commonParams, {
    songmid: mid,
    platform: "yqq",
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    pcachetime: +new Date(),
    format: "json"
  });

  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data);
    });
}
