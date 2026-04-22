/* ANDREAS FUCHS — main.js */
document.addEventListener(‘DOMContentLoaded’, function () {

/* ── Header border on scroll ── */
var hdr = document.getElementById(‘header’);
if (hdr) {
window.addEventListener(‘scroll’, function () {
hdr.style.borderBottomColor = window.scrollY > 60
? ‘#1a1714’ : ‘#c8c0b4’;
}, { passive: true });
}

/* ── Timeline rows: slide in from left ── */
var rows = document.querySelectorAll(’.tl-row’);
rows.forEach(function (r) {
r.style.opacity = ‘0’;
r.style.transform = ‘translateX(-12px)’;
r.style.transition = ‘opacity 0.45s ease, transform 0.45s ease’;
});

if (‘IntersectionObserver’ in window && rows.length) {
var io = new IntersectionObserver(function (entries) {
entries.forEach(function (e) {
if (!e.isIntersecting) return;
var i = Array.prototype.indexOf.call(rows, e.target);
setTimeout(function () {
e.target.style.opacity = ‘1’;
e.target.style.transform = ‘translateX(0)’;
}, i * 65);
io.unobserve(e.target);
});
}, { threshold: 0.1 });
rows.forEach(function (r) { io.observe(r); });
} else {
rows.forEach(function (r) {
r.style.opacity = ‘1’; r.style.transform = ‘none’;
});
}

/* ── About section fade in ── */
var aboutItems = document.querySelectorAll(’.about-name, .about-p, .about-awards’);
aboutItems.forEach(function (el) {
el.style.opacity = ‘0’;
el.style.transform = ‘translateY(16px)’;
el.style.transition = ‘opacity 0.55s ease, transform 0.55s ease’;
});
if (‘IntersectionObserver’ in window) {
var aio = new IntersectionObserver(function (entries) {
entries.forEach(function (e) {
if (!e.isIntersecting) return;
var i = Array.prototype.indexOf.call(aboutItems, e.target);
setTimeout(function () {
e.target.style.opacity = ‘1’;
e.target.style.transform = ‘translateY(0)’;
}, i * 80);
aio.unobserve(e.target);
});
}, { threshold: 0.15 });
aboutItems.forEach(function (el) { aio.observe(el); });
} else {
aboutItems.forEach(function (el) { el.style.opacity=‘1’; el.style.transform=‘none’; });
}

});
