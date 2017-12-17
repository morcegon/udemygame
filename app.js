new Vue({
	el: '#app',
	data: {
		inGame: false,
		playerHelth: 100,
		monsterHelth: 100
	},
	methods: {
		startGame: function (){
			this.inGame = true;
		},
		attack: function (){
			this.playerHelth -= this.randomAmount();
			this.monsterHelth -= this.randomAmount();
		},
		specialAttack: function (){
			this.playerHelth -= this.randomAmount();
			this.monsterHelth -= this.randomAmount(true);
		},
		heal: function (){
			this.playerHelth += this.randomAmount();
			this.playerHelth -= this.randomAmount();
			this.monsterHelth -= this.randomAmount();
		},
		randomAmount: function (special){
			min = 1;
			max = (special?20:6);
			amout = Math
				.floor(Math.random() * (max - min)) + min

			return amout;
		},
		reset: function (){
			this.inGame = false,
			this.playerHelth = 100,
			this.monsterHelth = 100
		}
	}
});