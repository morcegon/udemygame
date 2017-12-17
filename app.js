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
			amountHeal = this.randomAmount();
			this.playerHelth += amountHeal;
			this.logTurns('player', 'Player heals for ' + amount);

			amountAttack = this.randomAmount();
			this.monsterAttack();
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
	},
	watch: {
		monsterHelth: function (){
			if (this.monsterHelth <= 0) {
				alert('Congratulations, you win :)');
				this.reset();
			}
		},
		playerHelth: function (){
			if (this.playerHelth <= 0) {
				alert('Sorry, you loose :(');
				this.reset();
			}
		}
	}
});