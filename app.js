new Vue({
	el: '#app',
	data: {
		inGame: false,
		playerHelth: 100,
		monsterHelth: 100,
		turns: []
	},
	methods: {
		startGame: function (){
			this.inGame = true;
			this.logTurns('player', 'Game Started');
		},
		playerAttack: function (special){
			amount = this.randomAmount(special);
			this.monsterHelth -= amount;
			this.logTurns('player', 'Player hits monster for ' + amount);
		},
		monsterAttack: function (){
			amount = this.randomAmount();
			this.playerHelth -= amount;
			this.logTurns('monster', 'Monster hits monster for ' + amount);
		},
		attack: function (special){
			this.monsterAttack();
			this.playerAttack(special);
		},
		heal: function (){
			this.playerHelth += this.randomAmount();
			this.playerHelth -= this.randomAmount();
			this.monsterHelth -= this.randomAmount();
		},
		randomAmount: function (special){
			min = (special?10:1);
			max = (special?20:6);
			amout = Math
				.floor(Math.random() * (max - min)) + min

			return amout;
		},
		reset: function (){
			this.inGame = false,
			this.playerHelth = 100,
			this.monsterHelth = 100
			this.turns = [];
		},
		logTurns: function (who, message){
			this
				.turns
				.unshift({
					who: who,
					message: message
				})
		}
	}
});