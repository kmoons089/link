import { resolve } from "styled-jsx/css";
import { db } from "./firestore";

import { auth } from "./firestore";

function getLink() {
  return new Promise((resolve, reject) => {
    db.collection("link")
      .get()
      .then((allposts) => {
        resolve(allposts);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export default {
  getLink,
};
