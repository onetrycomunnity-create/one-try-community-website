const menuToggle=document.getElementById('menuToggle');const navMenu=document.getElementById('navMenu');menuToggle?.addEventListener('click',()=>{const open=navMenu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});navMenu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navMenu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));document.getElementById('year').textContent=new Date().getFullYear();

/*
  GANTI URL ROBLOX DI BAWAH INI DENGAN LINK EXPERIENCE FINAL:
  WEST ZONE dan NEXZONE OBSTACLE.
  Link tombol Discord, TikTok, dan Saweria sudah dipasang di index.html.

  KEAMANAN:
  Website GitHub Pages adalah frontend statis. Jangan menyimpan password,
  token, service-role key, atau rahasia admin di file JavaScript.
  Dashboard admin aman perlu backend/auth (misalnya Supabase Auth + RLS)
  dan konfigurasi policy sebelum diaktifkan.
*/