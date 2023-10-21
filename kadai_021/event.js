//btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

//textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

//HTML要素がクリックされると２秒の待ち時間を設定し、イベント処理を実行する

document.getElementById('btn').onclick = function() {
  setTimeout(() => {
  document.getElementById('text').innerHTML = 'ボタンをクリックしました'}, 2000);
} 