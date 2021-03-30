//1から13の数をランダムで求める
const value = () => {
  let mathNumber = Math.floor(Math.random() * 13) + 1;
  return mathNumber;
}

//出た数字に合わせて画像を返す
function v_image(Number) {
  if (Number === 1) {
    return '../image/image-1.png'
  } else if (Number === 2) {
    return '../image/image-2.png'
  } else if (Number === 3) {
    return '../image/image-3.png'
  } else if (Number === 4) {
    return '../image/image-4.png'
  } else if (Number === 5) {
    return '../image/image-5.png'
  } else if (Number === 6) {
    return '../image/image-6.png'
  } else if (Number === 7) {
    return '../image/image-7.png'
  } else if (Number === 8) {
    return '../image/image-8.png'
  } else if (Number === 9) {
    return '../image/image-9.png'
  } else if (Number === 10) {
    return '../image/image-10.png'
  } else if (Number === 11) {
    return '../image/image-11.png'
  } else if (Number === 12) {
    return '../image/image-12.png'
  } else {
    return '../image/image-13.png'
  }
}

const poker = () =>  {

  //ランダムで求めた数字を5コ同時に出す
  let v_number = [];
  for (i = 0 ; i < 5 ; i++) {
    v_number[i] = value();
  }

  //降順に並べる
  v_number = v_number.sort(function(a,b) {return a-b;});
  
  //target配列の画像を変更
  let target = ['target01' , 'target02' , 'target03' , 'target04' , 'target05'];
  for (i = 0 ; i < 5 ; i++) {
    document.getElementById(target[i]).src = v_image(v_number[i]);
  }

  //文字初期化
  document.getElementById('result').innerHTML = '';

  //重なり合う数字を数える
  let counts = [0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0];
  for (i = 0 ; i <= 14 ; i++) {
    counts[v_number[i]]++;
  }

  //重なりあった数字の数の最大値
  let Max = Math.max(...counts);
  //最大の数と最小の数の差
  let Gap = v_number[4] - v_number[0];
  let pair = 0;
  for (i = 0 ; i <= 14 ; i++) {
    if (counts[i] >= 2) {
      pair++;
    }
  }

  //ペアが０の時
  if (pair === 0) {
    if (Gap === 4) {
      document.getElementById('result').textContent = '役▶︎　ストレート';
    } else {
      document.getElementById('result').textContent = '役▶︎　なし';
    }
  }

  //ペアが１の時
  if (pair === 1) {
    if (Max === 5) {
      document.getElementById('result').textContent = '役▶︎　ファイブカード';
    } else if (Max === 4) {
      document.getElementById('result').textContent = '役▶︎　フォーカード';
    } else if (Max === 3) {
      document.getElementById('result').textContent = '役▶︎　スリーカード';
    } else {
      document.getElementById('result').textContent = '役▶︎　ワンペア'
    }
  }

  //ペアが２の時
  if (pair === 2) {
    if (Max === 3) {
      document.getElementById('result').textContent = '役▶︎　フルハウス';
    } else {
      document.getElementById('result').textContent = '役▶︎　ツーペア';
    }
  }

}

const reset = () => {
  document.location.reload();
}

//クリックに応じて表示を変える
let first = 10;
const reloadBtn = document.getElementById('reload_btn');
const resetBtn = document.getElementById('reset_btn');
reloadBtn.addEventListener('click', () => {
  poker();
  document.getElementById('c_number').textContent = --first;
  if (first == 0) {
    document.getElementById('reload_btn').remove();
  }
});

//リセットする
resetBtn.addEventListener('click', () => {
  reset();
});


