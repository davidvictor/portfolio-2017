
// Polyfill for requestAnimationFrame function
// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
//let Graphemescope;
const requestAnimFrame = (() =>
	window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame
	//(callback => window.setTimeout(callback, (1000 / 30)))
)();

class Graphemescope {
	constructor( parentElement ) {
		if (parentElement == null) { parentElement = window.document.body; }
		this.parentElement = parentElement;
		this.enabled = true;
		this.radiusFactor = 1.0;
		
		// Конкретные значения угла и увеличения (используются внутренне)
		// Меняются от 0 до 1
		this.zoomFactor   = 1.0;
		this.angleFactor  = 0.0;
		
		// Значения угла и увеличения, доступные из интерфейса
		this.zoomTarget  = 1.2;
		this.angleTarget = 0.8;
		
		// Настройки плавности движения
		this.easeEnabled  = true;
		this.ease = 0.1;
		
		if (this.domElement == null) { this.domElement = document.createElement("canvas"); }
		if (this.ctx == null) {        this.ctx = this.domElement.getContext("2d"); }
		
		this.alphaFactor = 1.0;
		this.alphaTarget = 1.0;
		
		this.parentElement.appendChild(this.domElement);
		
		// Запоминаем старый обработчик события resize
		// TODO: сделать через addEventListener!
		this.oldResizeHandler = function() {};
		
		if (window.onresize !== null) {
			this.oldResizeHandler = window.onresize;
		}
		
		window.onresize = () => (this.resizeHandler)();
		(this.resizeHandler)();
		
		if (this.enabled) {
			requestAnimFrame(() => (
				this.animationFrame)());
		}
	}
	
	animationFrame() {
		if (this.enabled) {
			requestAnimFrame(() => (this.animationFrame)());
			(this.update)();
			return (this.draw)();
		}
	}
	
	// Обработчик resize события
	resizeHandler() {
		this.width  = (this.domElement.width  = this.parentElement.offsetWidth);
		this.height = (this.domElement.height = this.parentElement.offsetHeight);
		
		this.radius       = 0.5 * this.radiusFactor * Math.min(this.width, this.height);
		this.radiusHeight = 0.5 * Math.sqrt(3) * this.radius;
		
		return (this.oldResizeHandler)();
	}
	
	// Функция обновления параметром (для изменения параметров движения)
	update() {
		if (this.easeEnabled) {
			// Плавность включена
			this.angleFactor += ( this.angleTarget - this.angleFactor ) * this.ease;
			this.zoomFactor  += ( this.zoomTarget  - this.zoomFactor  ) * this.ease;
			return this.alphaFactor += ( this.alphaTarget - this.alphaFactor ) * this.ease;
		} else {
			// Плавность выключена
			this.angleFactor = this.angleTarget;
			this.zoomFactor  = this.zoomTarget;
			return this.alphaFactor = this.alphaTarget;
		}
	}
	
	// Функция рисует заданную картинку в центре правильного треугольника
	drawImage(image) {
		this.ctx.save();
		
		// Cчитаем радиус описанной окружности
		let outerRadius = (2 / 3) * this.radiusHeight;
		
		// Делаем масштабирование таким, что при zoomFactor = 1 картинка полностью оптимально
		// заполняет треугольник
		let zoom = (this.zoomFactor * outerRadius) / (0.5 * Math.min(image.width, image.height));
		
		// Помещаем центр вращения в центр треугольника, то есть в центр описанной окружности.
		// Центр лежит на высоте и делит ее в отношении 2/3
		this.ctx.translate(0, outerRadius);
		this.ctx.scale(zoom, zoom);
		this.ctx.rotate(this.angleFactor * 2 * Math.PI);
		this.ctx.translate(-0.5 * image.width, -0.5 * image.height);
		
		this.ctx.fill();
		return this.ctx.restore();
	}
	
	// Функция рисует одну ячейку (соту) калейдоскопа в центре
	// системы координат с радиусом @radius
	drawCell(image) {
		// Сота состоит из 6 лепестков, каждый лепесток -
		// равносторонний треугольник с радиусом @radius
		return [0, 1, 2, 3, 4, 5].map((cellIndex) =>
			(this.ctx.save(),
				this.ctx.rotate((cellIndex * 2.0 * Math.PI) / 6.0),
				
				// Каждый следующий лепесток отображаем зеркально
				this.ctx.scale([-1, 1][ cellIndex % 2], 1),
				this.ctx.beginPath(),
				
				// Рисуем правильный треугольник, вспоминая школьные формулы:
				// 1. В равнобедренном (то есть и в правильном треугольнике) высота есть и медиана
				// 2. Высота равна sqrt(3) / 2 стороны треугольника
				this.ctx.moveTo(0, 0),
				this.ctx.lineTo(-0.5 * this.radius, 1.0 * this.radiusHeight),
				this.ctx.lineTo(0.5 * this.radius, 1.0 * this.radiusHeight),
				this.ctx.closePath(),
				
				this.drawImage(image),
				
				this.ctx.restore()));
	}
	
	// Функция отрисовки
	drawLayer(image) {
		this.ctx.save();
		
		// Перемещаемся в центр
		this.ctx.translate(0.5 * this.width, 0.5 * this.height);
		
		// Вычисляем, сколько сот нужно рисовать
		// (не уверен, что формулы работают оптимально, но экран
		// они покрывают)
		let verticalLimit   =  Math.ceil((0.5 * this.height) / this.radiusHeight);
		let horizontalLimit =  Math.ceil((0.5 * this.width)  / (3 * this.radius));
		
		let horizontalStrype = __range__(-horizontalLimit, horizontalLimit, true);
		let verticalStrype   = __range__(-verticalLimit, verticalLimit, true);
		
		for (let v of Array.from(verticalStrype)) {
			this.ctx.save();
			this.ctx.translate(0, this.radiusHeight * v);
			
			// Сдвиг у нечетных слоев
			if (Math.abs(v) % 2) {
				this.ctx.translate(1.5 * this.radius, 0);
			}
			
			for (let h of Array.from(horizontalStrype)) {
				this.ctx.save();
				
				this.ctx.translate(3 * h * this.radius, 0);
				this.drawCell(image);
				
				this.ctx.restore();
			}
			
			this.ctx.restore();
		}
		return this.ctx.restore();
	}
	
	// Главная функция отрисовки
	draw() {
		if (this.imageProxy != null) {
			this.ctx.fillStyle   = this.patternProxy;
			this.ctx.globalAlpha = 1 - this.alphaFactor;
			this.drawLayer(this.imageProxy);
		}
		
		if (this.image != null) {
			this.ctx.fillStyle   = this.pattern;
			this.ctx.globalAlpha = this.alphaFactor;
			return this.drawLayer(this.image);
		}
	}
	
	// Меняет картинку калейдоскопа напрямую (предполагается, что объект уже загружен)
	setImageDirect(image) {
		if (this.image != null) {
			this.imageProxy = this.image;
			this.patternProxy = this.pattern;
		}
		
		this.image = image;
		this.pattern = this.ctx.createPattern(this.image, "repeat");
		
		return this.alphaFactor = 0.0;
	}
	
	// Меняет картинку калейдоскопа
	setImage(image) {
		if (typeof image === "string") {
			// Аргумент - это строка с адресом картинки
			let imageElement     = new Image();
			imageElement.src = image;
			return imageElement.onload = () => {
				return this.setImageDirect(imageElement);
			};
		} else {
			return this.setImageDirect(image);
		}
	}
};



function __range__(left, right, inclusive) {
	let range = [];
	let ascending = left < right;
	let end = !inclusive ? right : ascending ? right + 1 : right - 1;
	for (let i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
		range.push(i);
	}
	return range;
}

export default Graphemescope;
