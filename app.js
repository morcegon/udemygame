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
			var damage = this.randomDamage(special);
			this.monsterHelth -= damage;
			this.logTurns('player', 'Player hits monster for ' + damage);
		},
		monsterAttack: function (){
			var damage = this.randomDamage();
			this.playerHelth -= damage;
			this.logTurns('monster', 'Monster hits monster for ' + damage);
		},
		attack: function (special){
			this.monsterAttack();
			this.playerAttack(special);
		},
		heal: function (){
			if (this.playerHelth == 100) {
				return;
			}

			var damageHeal = this.randomDamage();
			this.playerHelth += damageHeal;
			this.logTurns('player', 'Player heals for ' + damage);

			this.monsterAttack();
		},
		randomDamage: function (special){
			var min = (special?10:1);
			var max = (special?20:6);
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