"use strict";

var 
	canvas = document.getElementById("tetrisCanvas"),
	context = canvas.getContext("2d"),
	canvasHeight = canvas.height,
	canvasWidth = canvas.width,
	blockSize = 20,
	offsetX = 300, 
	offsetY = 80,

	tetramini = [
				  	[ 
						[ 
							[0, 0, 0, 0], 
							[0, 0, 0, 0], 
							[1, 1, 1, 1], 
							[0, 0, 0, 0] 
						], 
						[ 
							[0,1, 0, 0], 
							[0,1, 0, 0], 
							[0,1, 0, 0], 
							[0,1, 0, 0] 
						], 
						[ 
							[0, 0, 0, 0], 
							[1, 1, 1, 1], 
							[0, 0, 0, 0], 
							[0, 0, 0, 0] 
						], 
						[ 
							[0,1, 0, 0], 
							[0,1, 0, 0], 
							[0,1, 0, 0], 
							[0,1, 0, 0] 
						] 
					],

					[ 
						[ 
							[0, 0, 0, 0], 
							[1, 0, 0, 0], 
							[1, 1, 1, 0], 
							[0, 0, 0, 0] 
						], 
						[ 
							[0,1, 1, 0], 
							[0,1, 0, 0], 
							[0,1, 0, 0], 
							[0,0, 0, 0] 
						], 
						[ 
							[0, 0, 0, 0], 
							[1, 1, 1, 0], 
							[0, 0, 1, 0], 
							[0, 0, 0, 0] 
						], 
						[ 
							[0,0, 1, 0], 
							[0,0, 1, 0], 
							[0,1, 1, 0], 
							[0,0, 0, 0] 
						] 
					],

					[ 
						[ 
							[0, 0, 0, 0], 
							[0, 0, 1, 0], 
							[1, 1, 1, 0], 
							[0, 0, 0, 0] 
						], 
						[ 
							[0,1, 0, 0], 
							[0,1, 0, 0], 
							[0,1, 1, 0], 
							[0,0, 0, 0] 
						], 
						[ 
							[0, 0, 0, 0], 
							[1, 1, 1, 0], 
							[1, 0, 0, 0], 
							[0, 0, 0, 0] 
						], 
						[ 
							[0,1, 1, 0], 
							[0,0, 1, 0], 
							[0,0, 1, 0], 
							[0,0, 0, 0] 
						] 
					],


					[ 
						[ 
							[0, 0, 0, 0], 
							[0, 1, 1, 0], 
							[0, 1, 1, 0], 
							[0, 0, 0, 0] 
						], 
						[ 
							[0, 0, 0, 0], 
							[0, 1, 1, 0], 
							[0, 1, 1, 0], 
							[0, 0, 0, 0] 
						], 
						[ 
							[0, 0, 0, 0], 
							[0, 1, 1, 0], 
							[0, 1, 1, 0], 
							[0, 0, 0, 0] 
						], 
						[ 
							[0, 0, 0, 0], 
							[0, 1, 1, 0], 
							[0, 1, 1, 0], 
							[0, 0, 0, 0] 
						] 
					],

				  	[
						[ 
							[0, 0, 0, 0], 
							[0, 1, 1, 0], 
							[1, 1, 0, 0], 
							[0, 0, 0, 0] 
						], 
						[ 
							[0, 0, 0, 0], 
							[0, 1, 0, 0], 
							[0, 1, 1, 0], 
							[0, 0, 1, 0] 
						], 
						[ 
							[0, 0, 0, 0], 
							[0, 1, 1, 0], 
							[1, 1, 0, 0], 
							[0, 0, 0, 0] 
						], 
						[ 
							[0, 0, 0, 0], 
							[0, 1, 0, 0], 
							[0, 1, 1, 0], 
							[0, 0, 1, 0]  
						]
					],
				  	
				  	[
						[ 
							[0, 0, 0, 0], 
							[0, 1, 0, 0], 
							[1, 1, 1, 0], 
							[0, 0, 0, 0] 
						], 
						[ 
							[0, 0, 0, 0], 
							[0, 1, 0, 0], 
							[0, 1, 1, 0], 
							[0, 1, 0, 0] 
						], 
						[ 
							[0, 0, 0, 0], 
							[0, 0, 0, 0], 
							[1, 1, 1, 0], 
							[0, 1, 0, 0] 
						], 
						[ 
							[0, 0, 0, 0], 
							[0, 1, 0, 0], 
							[1, 1, 0, 0], 
							[0, 1, 0, 0] 
						]
					],
				  	
				  	[
						[ 
							[0, 0, 0, 0], 
							[1, 1, 0, 0], 
							[0, 1, 1, 0], 
							[0, 0, 0, 0] 
						], 
						[ 
							[0, 0, 0, 0], 
							[0, 0, 1, 0], 
							[0, 1, 1, 0], 
							[0, 1, 0, 0] 
						], 
						[ 
							[0, 0, 0, 0], 
							[1, 1, 0, 0], 
							[0, 1, 1, 0], 
							[0, 0, 0, 0] 
						], 
						[ 
							[0, 0, 0, 0], 
							[0, 0, 1, 0], 
							[0, 1, 1, 0], 
							[0, 1, 0, 0] 
						]
					],
	],

	System = function(){ 
		var that = this;
		this.partita = new Game();
		this.output = new Screen();
		this.output.partita = this.partita;
		this.input = function(event) {
			if (that.output.gameState == "intro") {
				if(event.keyCode == 32) {
					that.output.gameState = "partita";
				}
			} else if (that.output.gameState == "partita") {
				if(event.keyCode == 37) { that.partita.tetramino.moveLeft(); }
			    if(event.keyCode == 39) { that.partita.tetramino.moveRight(); }
			    if(event.keyCode == 40) { that.partita.tetramino.moveDown(); }
			    if(event.keyCode == 32) { that.partita.tetramino.rotate(); }
			} else if (that.output.gameState == "gameover") {
				if(event.keyCode == 32) {
					that.output.gameState = "intro";
				}
			}	
		};
		this.next = function() {
			this.partita.tickGame(); 
			if (this.partita.gameOver == true) {
				this.output.gameState = "gameover";
				this.partita = new Game();
				this.output.partita = this.partita;
			}
		}
	},

	Screen = function(){
		this.partita = false;
		this.gameState = "intro";
		this.processFrame = function() {
			if (this.gameState == "intro") { this.drawTitle(); }
			if (this.gameState == "partita") {  this.drawFrame(this.partita);  }
			if (this.gameState == "gameover") { this.drawGameOver(); }
		};
		this.clearScreen = function() {
			context.fillStyle = "black";
			context.fillRect(0,  0,  canvasWidth, canvasHeight);
		};
		this.drawTitle = function() {
			this.clearScreen();
			context.font = "260px Times";
			context.fillStyle = "white";
			context.fillText("Tetris", 100,  400);
		};
		this.drawGameOver = function() {
			// this.clearScreen();
			context.font = "130px Times";
			context.fillStyle = "red";
			context.fillText("Game Over", 100,  400);
		};
		this.setTetraminoFillStyle = function(i) {
			if (i == 1) { context.fillStyle = "#b3ffff"; }
			if (i == 2) { context.fillStyle = "#0073e6"; }
			if (i == 3) { context.fillStyle = "#ff9933"; }
			if (i == 4) { context.fillStyle = "#ffff00"; }
			if (i == 5) { context.fillStyle = "#66ff33"; }
			if (i == 6) { context.fillStyle = "#ff66ff"; }
			if (i == 7) { context.fillStyle = "#cc0000"; }
		};
		this.drawFrameTest = function(partita){
			this.clearScreen();
			for (var i=0; i<=24; i++){	
				for (var j=0; j<=11; j++){	
					var x = j * blockSize, y = i * blockSize;
					
					if (partita.schermata[i][j] == 0) {
						context.fillStyle = "white";
						context.fillRect(offsetX + x, offsetY + y, blockSize - 1, blockSize - 1);
					}
					
					if (partita.schermata[i][j] > 0) {
						this.setTetraminoFillStyle(partita.schermata[i][j]);
						if (partita.schermata[i][j] == 255) { context.fillStyle = "#FF0000"; }
						context.fillRect(offsetX + x, offsetY + y, blockSize - 1, blockSize - 1);
					}	
				}
			}

			// Draw current
			for (var i=0; i<=3; i++) {
				for (var j=0; j<=3; j++) {
					if (tetramini[partita.tetramino.corrente][partita.tetramino.rotazione][i][j] == 1) {
						var
							x = offsetX + ((partita.tetramino.x + j) * blockSize), 
							y = offsetY + ((partita.tetramino.y + i) * blockSize);
						this.setTetraminoFillStyle(partita.tetramino.corrente + 1);
						context.fillRect(x,  y, blockSize - 1, blockSize - 1);
					}
				}
			}
		};
		this.drawFrame = function(partita){
		
			this.clearScreen();

			context.strokeStyle = "white";
			context.beginPath();
			context.moveTo(offsetX + 13, offsetY - 5);
			context.lineTo(offsetX + 13, offsetY + blockSize * 24 + 10);
			context.moveTo(offsetX + 5 , offsetY + blockSize * 24 + 5);
			context.lineTo(offsetX + 10 + 11 * blockSize, offsetY + blockSize * 24 + 5);
			context.moveTo(offsetX + 5 + 11 * blockSize, offsetY - 5);
			context.lineTo(offsetX + 5 + 11 * blockSize, offsetY + blockSize * 24 + 10);
			context.stroke();

			for (var i=0; i<24; i++){	
				for (var j=1; j<11; j++){	
					var x = j * blockSize, y = i * blockSize;
					
					if (partita.schermata[i][j] == 0) {
						context.fillStyle = "white";
						//context.fillRect(offsetX + x, offsetY + y, blockSize - 1, blockSize - 1);
					}
					
					if (partita.schermata[i][j] > 0) {
						this.setTetraminoFillStyle(partita.schermata[i][j]);
						if (partita.schermata[i][j] == 255) { context.fillStyle = "#FF0000"; }
						context.fillRect(offsetX + x, offsetY + y, blockSize - 1, blockSize - 1);
					}	
				}
			}

			// Draw current
			for (var i=0; i<=3; i++) {
				for (var j=0; j<=3; j++) {
					if (tetramini[partita.tetramino.corrente][partita.tetramino.rotazione][i][j] == 1) {
						var
							x = offsetX + ((partita.tetramino.x + j) * blockSize), 
							y = offsetY + ((partita.tetramino.y + i) * blockSize);
						this.setTetraminoFillStyle(partita.tetramino.corrente + 1);
						context.fillRect(x,  y, blockSize - 1, blockSize - 1);
					}
				}
			} 

		};
	},

	Game = function() {

		var that = this;

		this.lineeFatte = 0;
		this.schermata = new Array();
		this.gameOver = false;

		this.tetramino = {
			corrente : Math.floor(Math.random() * 7),
			rotazione: 0,
			prossimo: Math.floor(Math.random() * 7),
			x: 4,
			y: 0,

			getNext: function() {
				return Math.floor(Math.random() * 7);
			},
			moveLeft: function() {
				if (this.canGoLeft()) { this.x = this.x - 1; }
			},
			moveRight: function(){
				if (this.canGoRight()) { this.x = this.x + 1; }
			},
			moveDown: function(){
				if (this.canGoDown()){
					this.y = this.y + 1;
				} 
				else {
					var nLinee, gameOver;

					that.addToSchermata();
					nLinee = that.checkForLines();

					this.corrente = this.prossimo;
					this.prossimo = this.getNext();
					this.x = 4;
					this.y = 0;

					if (that.checkForGameOver()) {
						console.log("GAME OVER !!!!");
						that.gameOver = true;
					}
				}
			},
			rotate: function(){
				if (this.canRotate()){ this.rotazione = (this.rotazione + 1 ) % 4; }
			},
			canGo: function(xx,yy,rr) {
				var 
					canMove = true,
					mx = this.x + xx,
					my = this.y + yy,
					mr = (this.rotazione + rr) % 4;

				for (var i=0; i<=3; i++) {
					for (var j=0; j<=3; j++) {	
						if (tetramini[this.corrente][mr][i][j] == 1) {
							var 
								x = mx + j,
								y = my + i;

							if (that.schermata[y][x] > 0){
								canMove = false;
							}
						}
					}
				}
				return canMove;
			},
			canGoDown: function() { 
				return this.canGo(0,1,0);
			},
			canGoLeft: function() { 
				return this.canGo(-1,0,0);
			},
			canGoRight: function() { 
				return this.canGo(1,0,0);
			},
			canRotate: function() { 
				return this.canGo(0,0,1);
			}
		};
		
		this.resetSchermata = function(){
			for (var i = 0; i<= 23; i++) {
			this.schermata[i] = new Array(255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255);
			}
			this.schermata[24] = new Array(255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255);
		}

		this.addToSchermata = function() {
			for (var i=0; i<=3; i++) {
				for (var j=0; j<=3; j++) {	
					if (tetramini[this.tetramino.corrente][this.tetramino.rotazione][j][i] == 1) {
						var
							lx = this.tetramino.x + i,
							ly = this.tetramino.y + j;
						this.schermata[ly][lx] = this.tetramino.corrente + 1;
					}
				}
			}
		}

		this.checkForLines = function(){
			var linee = [];
			for (var i = 4; i<= 23; i++) {
				var pieno = true;
				for (var j = 1; j <= 10; j++) {
					if (this.schermata[i][j] == 0){ pieno = false; }
				}
				if (pieno){ linee.push(i); }
			}
			for (var n = 0; n < linee.length; n++) {
				for (var i = linee[n] - 1; i >= 0; i--) {
					for (var j = 1; j <= 10; j++) {
						this.schermata[i + 1][j] = this.schermata[i][j];
					}
				}	
			}
			this.lineeFatte = this.lineeFatte + linee.length;
			console.log("fatte linee n: " + this.lineeFatte);
			return linee.length;
		};

		this.checkForGameOver = function(){
			return !this.tetramino.canGo(0,0,0);
		};

		this.index = 0;
		this.tickGame = function() {
			if ((this.index % 10) == 0) {
				this.tetramino.moveDown();
			}
			this.index++;
			if (this.index == 100){ this.index = 0; }
		}

		this.resetSchermata();
	};

	var startTetris = function() { //startTetris
		var system = new System();
		document.addEventListener('keydown', system.input); // Motore Input
		setInterval(function(){ system.output.processFrame(); }, 40);	// Motore grafico
		setInterval(function(){ system.next(); }, 100); // Motore gioco
	}();

