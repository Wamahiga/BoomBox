let songs = [
  {
    name: "Wendo ni uumaga kuraya",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
    artist: "John demethew",
    audio: null,
    id: 0,
  },
  {
    name: "Baby",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
    artist: "Justin Beiber",
    audio: null,
    id: 1,
  },
  {
    name: "Mumbi wa Katuti",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
    artist: "Ben Mbatha",
    audio: null,
    id: 2,
  },
  {
    name: "People",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
    artist: "Libianca",
    audio: null,
    id: 3,
  },
  {
    name: "Mercy",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
    artist: "Shawn mendez",
    audio: null,
    id: 4,
  },
  {
    name: "Yatapita",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
    artist: "Diamond Platnumz",
    audio: null,
    id: 5,
  },
];
storageRef
  .child("default")
  .child("quran.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[0].audio = url;
  });

storageRef
  .child("default")
  .child("quran1.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[1].audio = url;
  });
storageRef
  .child("default")
  .child("quran2.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[2].audio = url;
  });
storageRef
  .child("default")
  .child("quran3.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[3].audio = url;
  });
storageRef
  .child("default")
  .child("quran4.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[4].audio = url;
  });
storageRef
  .child("default")
  .child("quran5.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[5].audio = url;
  });
