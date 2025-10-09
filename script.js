// ===== LOADING =====
function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.opacity = '0';
        setTimeout(() => loading.remove(), 1000);
    }
}

// Tenta remover após load
window.addEventListener('load', hideLoading);

// Fallback: garante remoção mesmo se o load travar
setTimeout(hideLoading, 3000);


// ===== CANVAS ESTRELAS =====
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
let stars = [];
const numStars = 200;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        delta: Math.random() * 0.02
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.fill();
        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta = -star.delta;
    }
    requestAnimationFrame(drawStars);
}
drawStars();

// ===== ESTRELAS CADENTES =====
let shootingStars = [];

function createShootingStar() {
    shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height / 2,
        length: Math.random() * 150 + 100,
        speed: Math.random() * 15 + 8,
        angle: Math.PI / 4,
        alpha: 1
    });
}

// Atualiza e desenha estrelas cadentes
function drawShootingStars() {
    for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.length * Math.cos(s.angle), s.y + s.length * Math.sin(s.angle));
        ctx.strokeStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Atualiza posição
        s.x -= s.speed * Math.cos(s.angle);
        s.y += s.speed * Math.sin(s.angle);
        s.alpha -= 0.02;

        if (s.alpha <= 0) shootingStars.splice(i, 1);
    }
}

// Integra com drawStars
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // desenha estrelas normais
    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.fill();
        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta = -star.delta;
    }

    // desenha estrelas cadentes
    drawShootingStars();

    requestAnimationFrame(animate);
}

animate();

// Cria meteoros aleatórios a cada 2-5 segundos
setInterval(() => {
    createShootingStar();
}, Math.random() * 3000 + 2000);


// ===== BOTÃO CORAÇÕES =====
const button = document.getElementById("loveBtn");

function createFloatingHearts() {
    const numFloating = 10;
    const colors = ['#ff4d6d', '#ff99c8', '#ff66a3', '#ff3366', '#ff1a4d'];

    for (let i = 0; i < numFloating; i++) {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.textContent = "💖";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 15 + 15;
        heart.style.fontSize = size + "px";

        const dx = (Math.random() - 0.5) * 100 + "px";
        const dy = - (Math.random() * 500 + 300) + "px";
        heart.style.setProperty("--x", dx);
        heart.style.setProperty("--y", dy);

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
}

function explodeBigHeart() {
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;

    const bigHeart = document.createElement("div");
    bigHeart.classList.add("big-heart");
    bigHeart.textContent = "💖";
    document.body.appendChild(bigHeart);

    setTimeout(() => {
        const numHearts = 30;
        const colors = ['#ff4d6d','#ff99c8','#ff66a3','#ff3366','#ff1a4d'];

        for (let i=0;i<numHearts;i++){
            const smallHeart = document.createElement("div");
            smallHeart.classList.add("small-heart");
            smallHeart.textContent = "💖";
            smallHeart.style.left = x + "px";
            smallHeart.style.top = y + "px";
            smallHeart.style.color = colors[Math.floor(Math.random() * colors.length)];
            smallHeart.style.fontSize = (Math.random() * 20 + 20) + "px";

            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 250 + 50;
            const dx = Math.cos(angle) * distance + "px";
            const dy = Math.sin(angle) * distance + "px";
            smallHeart.style.setProperty("--x", dx);
            smallHeart.style.setProperty("--y", dy);

            document.body.appendChild(smallHeart);
            setTimeout(() => smallHeart.remove(), 2000);
        }
        bigHeart.remove();
    },1200);
}

button.addEventListener("click", () => {
    explodeBigHeart();
    createFloatingHearts();
});

// ===== CONTADOR =====
const dataInicio = new Date("2018-09-30T00:00:00").getTime();
const contadorEl = document.getElementById("contador");
setInterval(() => {
    const agora = new Date().getTime();
    const diff = agora - dataInicio;
    const anos = Math.floor(diff / (1000*60*60*24*365));
    const dias = Math.floor((diff % (1000*60*60*24*365)) / (1000*60*60*24));
    const horas = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const minutos = Math.floor((diff % (1000*60*60)) / (1000*60));
    const segundos = Math.floor((diff % (1000*60)) / 1000);
    contadorEl.innerHTML = `${anos} anos, ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
},1000);

// ===== FADE-IN =====
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:0.3});
faders.forEach(fade => observer.observe(fade));

// ===== BOLHAS =====
document.querySelectorAll('.gradient').forEach(g => {
    for(let i=0;i<15;i++){
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.width = `${Math.random()*40+10}px`;
        bubble.style.height = bubble.style.width;
        bubble.style.left = `${Math.random()*100}%`;
        bubble.style.animationDuration = `${6+Math.random()*6}s`;
        bubble.style.animationDelay = `${Math.random()*5}s`;
        g.appendChild(bubble);
    }
});

// ===== NAVEGAÇÃO POR BOLINHAS =====
const sections = document.querySelectorAll("section");
const navDots = document.getElementById("navDots");

sections.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if(i===0) dot.classList.add("active");
    dot.addEventListener("click",()=>{sections[i].scrollIntoView({behavior:"smooth"});});
    navDots.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");
const observerDots = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            dots.forEach(dot=>dot.classList.remove("active"));
            const index = Array.from(sections).indexOf(entry.target);
            dots[index].classList.add("active");
        }
    });
},{threshold:0.5});

sections.forEach(sec=>observerDots.observe(sec));
