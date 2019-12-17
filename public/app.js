//変数定義
let isPlaying = false
let tapCount, time = 0
const tapBtn = document.getElementById('js-topBtn')
const startBtn = document.getElementById('js-startBtn')
const countText = document.getElementById('js-count')
const tapBtn = document.getElementById('js-time')

//ゲームの初期値設定
const setGame = () =>{
	topCount = 0
	time = 10000
	countText.innerText = time / 1000
}

//タップした時にカウントを増やす
tapBtn.addEventlister('click',() =>{
	if(!isPlaying)return false
	tapCount++
	countText.innerText = tapcount
})
//STARTボタンを押してゲームをスタートさせる
startBtn.addEventListener('click',() =>{
	setGame()
	isPlaying = true
	tapBtn.disabled = false
	startBtn.style.display = 'none'

	const timer = setInterval(() =>{
		time -= 10
		timeText.innerHTML = ()

		if(time === 0){
			clearInterval(timer)
			isPlaying = false
			srartBtn.style.display = 'inline-block'
			startBtn.innerText = 'もう一回'
		}
	} ,10)
})
