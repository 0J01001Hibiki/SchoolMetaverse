window.addEventListener('load', () => {
  const fourDivisionsVideoArea = document.getElementsByClassName('fourDivisionsVideoArea')[0];
  const oneDivisionVideoArea = document.getElementsByClassName('oneDivisionVideoArea')[0];
  const toggleButtons = document.getElementsByClassName('toggleButton');
  toggleButtons[0].addEventListener('click', () => {
    if(fourDivisionsVideoArea.style.display === 'block') {
      fourDivisionsVideoArea.style.display = 'none';
      oneDivisionVideoArea.style.display = 'block';
    } else {
      fourDivisionsVideoArea.style.display = 'block';
      oneDivisionVideoArea.style.display = 'none';
    }
  });
  toggleButtons[1].addEventListener('click', () => {
    const oneDivisionVideoArea = document.getElementsByClassName('oneDivisionVideoArea')[0];
    const topArea_wrap = document.getElementsByClassName('topArea_wrap')[0];
    const rightArea_wrap = document.getElementsByClassName('rightArea_wrap')[0];
    const bottomArea_wrap = document.getElementsByClassName('bottomArea_wrap')[0];
    const leftArea_wrap = document.getElementsByClassName('leftArea_wrap')[0];
    oneDivisionVideoArea.style.rotate = oneDivisionVideoArea.style.rotate == '0deg' ? '180deg' : '0deg';
    topArea_wrap.style.rotate = topArea_wrap.style.rotate == '0deg' ? '180deg' : '0deg';
    rightArea_wrap.style.rotate = rightArea_wrap.style.rotate == '90deg' ? '-90deg' : '90deg';
    bottomArea_wrap.style.rotate = bottomArea_wrap.style.rotate == '180deg' ? '0deg' : '180deg';
    leftArea_wrap.style.rotate = leftArea_wrap.style.rotate == '-90deg' ? '90deg': '-90deg'; 
  });

  const videos = {
    default: 'laser_-_96705 (360p).mp4',
    fireworks: 'fireworks_-_553 (360p).mp4',
    good: 'like_-_80415 (540p).mp4',
    question: 'question_-_89256 (540p).mp4',
    connectStart: 'fantasy_-_121229 (720p).mp4',
    none: 'fantasy_-_121229 (720p).mp4',
  };
  const oneArea = document.getElementsByClassName('oneArea');
  const topVideo = document.getElementsByClassName('topVideo');
  const rightVideo = document.getElementsByClassName('rightVideo');
  const bottomVideo = document.getElementsByClassName('bottomVideo');
  const leftVideo = document.getElementsByClassName('leftVideo');
  var firebaseConfig = {
    apiKey: "AIzaSyBHrF62e-orKFuZ97slS8SLI0TZq5G2fdA",
    authDomain: "schoolmetaverse-d9a6d.firebaseapp.com",
    databaseURL: "https://schoolmetaverse-d9a6d-default-rtdb.firebaseio.com",
    projectId: "schoolmetaverse-d9a6d",
    storageBucket: "schoolmetaverse-d9a6d.appspot.com",
    messagingSenderId: "140620415241",
    appId: "1:140620415241:web:1fdc9b1ea012792bce13d8"
  }
  // Initialize Firebase
  if(firebase.apps.length == 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const connectStartButton = document.getElementsByClassName('connectStartButton')[0];
  
  connectStartButton.addEventListener('click', () => {
    var db = firebase.firestore();
    const idtext = document.getElementsByClassName('idtext')[0];
    const docId = idtext.value;
    db.collection("reaction").doc(docId).onSnapshot(function(doc) {
      console.log("Current data: ", doc.data());
      userReaction(doc.data().action);
    });
  });

  function userReaction(text) {
    if(text in videos) {
      videosChange(videos[text]);
      console.log(`あるよ ${videos[text]}`);
    } else {
      videosChange(videos['default']);
      console.log(`ないよ ${videos['default']}`);
    }
  }
  function videosChange(src) {
    src = './videos/' + src;
    console.log(src);
    oneArea.src = src;oneArea.load();
    topVideo.src = src;topVideo.load();
    rightVideo.src = src;rightVideo.load();
    bottomVideo.src = src;bottomVideo.load();
    leftVideo.src = src;leftVideo.load();
  }
  
});
