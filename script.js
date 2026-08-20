document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.nav-links');
  const servicePages = [['comunidades.html', 'Comunidades'], ['oficinas.html', 'Oficinas'], ['limpieza-de-cristales.html', 'Cristales'], ['limpieza-de-locales-comerciales.html', 'Locales comerciales'], ['limpieza-fin-de-obra.html', 'Fin de obra'], ['limpieza-instalaciones-deportivas.html', 'Instalaciones deportivas'], ['outsourcing.html', 'Outsourcing']];

  if (menu) {
    const serviceLink = menu.querySelector('a[href="servicios.html"]');
    if (serviceLink && !menu.querySelector('.nav-dropdown')) {
      const dropdown = document.createElement('div'); dropdown.className = 'nav-dropdown';
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      if (servicePages.some(([href]) => href === currentPage)) serviceLink.setAttribute('aria-current', 'page');
      const button = document.createElement('button'); button.className = 'services-toggle'; button.type = 'button'; button.setAttribute('aria-label', 'Mostrar servicios'); button.setAttribute('aria-expanded', 'false');
      const submenu = document.createElement('div'); submenu.className = 'services-submenu'; submenu.setAttribute('aria-label', 'Servicios');
      servicePages.forEach(([href, label]) => { const link = document.createElement('a'); link.href = href; link.textContent = label; submenu.appendChild(link); });
      serviceLink.replaceWith(dropdown); dropdown.append(serviceLink, button, submenu);
      Array.from(menu.children).filter((item) => item.matches('a') && servicePages.some(([href]) => item.getAttribute('href') === href)).forEach((item) => item.remove());
      button.addEventListener('click', () => { const open = submenu.classList.toggle('is-open'); button.setAttribute('aria-expanded', String(open)); });
    }
    if (!menu.querySelector('a[href="blog.html"]')) { const blog = document.createElement('a'); blog.href = 'blog.html'; blog.textContent = 'Blog'; menu.querySelector('a[href="contacto.html"]')?.insertAdjacentElement('beforebegin', blog); }
  }

  const whatsappIcon = '<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M19.11 17.53c-.28-.14-1.65-.82-1.9-.91-.26-.09-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.17.19-.28.28-.46.09-.19.05-.35-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.35-.26.28-1 .97-1 2.36 0 1.39 1.02 2.73 1.16 2.92.14.19 2 3.05 4.85 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33z"/><path d="M16 3C9.37 3 4 8.37 4 15c0 2.34.68 4.52 1.86 6.37L4 29l7.84-1.83C13.65 28.38 14.79 29 16 29c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 22c-1.07 0-2.12-.2-3.09-.59l-.22-.09-4.65 1.09 1.1-4.53-.14-.23A9.94 9.94 0 0 1 6 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z"/></svg>';
  let whatsapp = document.querySelector('.whatsapp-float');
  if (!whatsapp) { whatsapp = document.createElement('a'); whatsapp.className = 'whatsapp-float'; whatsapp.href = 'https://wa.me/34615409743'; whatsapp.target = '_blank'; whatsapp.rel = 'noopener'; document.body.appendChild(whatsapp); }
  whatsapp.setAttribute('aria-label', 'Contactar por WhatsApp'); whatsapp.innerHTML = whatsappIcon;

  const seoCopy = {
    'index.html': { title: 'Limpieza profesional para cada tipo de espacio', text: 'Silnet Serveis reúne servicios de limpieza para comunidades, oficinas, locales comerciales y cristales en Barcelona. Cada espacio tiene ritmos, zonas de uso y necesidades distintas; por eso la propuesta se plantea de forma personalizada.', links: '<a class="text-link" href="servicios.html">Ver todos los servicios de limpieza →</a>' },
    'servicios.html': { title: 'Servicios de limpieza en Barcelona y L’Hospitalet de Llobregat', text: 'La oferta de Silnet Serveis cubre necesidades habituales de mantenimiento, limpieza de fin de obra, limpieza de instalaciones deportivas y outsourcing de limpieza. Desde la página de cada servicio puedes ampliar la información y contactar para valorar tu caso.', links: '<a class="text-link" href="contacto.html">Solicitar información o presupuesto →</a>' },
    'comunidades.html': { title: 'Mantenimiento de comunidades de propietarios', text: 'Una comunidad limpia favorece la conservación de las zonas compartidas y una buena experiencia diaria de los vecinos. El servicio puede incluir las tareas y frecuencias que necesiten los portales, escaleras, ascensores y accesos de cada finca.', links: '<a class="text-link" href="contacto.html">Pedir presupuesto para una comunidad →</a>' },
    'oficinas.html': { title: 'Limpieza de oficinas adaptada a la actividad', text: 'La planificación de la limpieza de una oficina debe tener en cuenta el número de personas, los horarios, las zonas comunes y las necesidades de cada empresa. Silnet Serveis estudia estos factores para plantear una propuesta de limpieza ajustada al espacio.', links: '<a class="text-link" href="contacto.html">Consultar limpieza de oficinas →</a>' },
    'limpieza-de-cristales.html': { title: 'Cristales limpios para oficinas, comunidades y comercios', text: 'La limpieza de cristales ayuda a mejorar la luz y la imagen de accesos, escaparates, mamparas y zonas comunes. La frecuencia adecuada depende de la exposición exterior, el tránsito y el uso del espacio.', links: '<a class="text-link" href="contacto.html">Consultar servicio de cristales →</a>' },
    'limpieza-de-locales-comerciales.html': { title: 'Limpieza de locales comerciales con una buena planificación', text: 'La entrada, el escaparate, las zonas de atención y los espacios de trabajo influyen en la percepción de un local. Una limpieza organizada permite mantener esos puntos preparados durante la actividad comercial.', links: '<a class="text-link" href="contacto.html">Solicitar limpieza para un local →</a>' },
    'limpieza-fin-de-obra.html': { title: 'Limpieza de fin de obra antes de abrir o volver a usar el espacio', text: 'Después de una obra conviene revisar el polvo, los restos de materiales, los cristales, los suelos y los puntos de uso frecuente. La limpieza de fin de obra se puede valorar según el estado final y el tipo de espacio en Barcelona o L’Hospitalet de Llobregat.', links: '<a class="text-link" href="contacto.html">Valorar una limpieza de fin de obra →</a>' },
    'limpieza-instalaciones-deportivas.html': { title: 'Limpieza de instalaciones deportivas', text: 'Las instalaciones deportivas reúnen zonas de paso, vestuarios, salas y espacios comunes con necesidades diferentes. Una planificación clara ayuda a mantener el orden y la higiene según el uso de cada instalación.', links: '<a class="text-link" href="contacto.html">Consultar limpieza de instalaciones deportivas →</a>' },
    'outsourcing.html': { title: 'Outsourcing de limpieza para empresas', text: 'El outsourcing permite contar con un servicio externo de limpieza adaptado a la operativa de cada empresa. Antes de empezar, conviene definir las áreas a cubrir, los horarios y la frecuencia necesaria.', links: '<a class="text-link" href="contacto.html">Hablar sobre outsourcing de limpieza →</a>' },
    'contacto.html': { title: 'Solicita una propuesta de limpieza personalizada', text: 'Para poder orientar la solicitud, indica el tipo de espacio, la localidad, el horario preferente y las tareas que necesitas. Silnet Serveis atiende solicitudes de limpieza en Barcelona y L’Hospitalet de Llobregat.', links: '' }
  };
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  if (seoCopy[currentFile] && !document.querySelector('.seo-section')) {
    const copy = seoCopy[currentFile]; const section = document.createElement('section');
    section.className = 'section section--soft seo-section'; section.innerHTML = `<h2>${copy.title}</h2><p>${copy.text}</p>${copy.links}`;
    document.querySelector('main')?.appendChild(section);
  }

  document.querySelectorAll('form.formulario').forEach((form) => {
    if (form.querySelector('input[name="privacidad"]')) return;
    const consent = document.createElement('label'); consent.className = 'form-consent';
    consent.innerHTML = '<input type="checkbox" name="privacidad" value="aceptada" required> <span>He leído y acepto la <a href="legal.html#privacidad">política de privacidad</a>.</span>';
    form.querySelector('button[type="submit"]')?.insertAdjacentElement('beforebegin', consent);
  });

  document.querySelectorAll('.site-footer').forEach((footer) => {
    if (!footer.querySelector('a[href="legal.html"]')) { const legal = document.createElement('a'); legal.href = 'legal.html'; legal.className = 'footer-link'; legal.textContent = 'Aviso legal · Privacidad · Cookies'; footer.appendChild(legal); }
  });

  const storageKey = 'silnetCookieConsent';
  let consentValue; try { consentValue = localStorage.getItem(storageKey); } catch (_) { consentValue = null; }
  const loadMaps = () => document.querySelectorAll('iframe[data-cookie-src]').forEach((map) => { map.src = map.dataset.cookieSrc; map.classList.add('is-loaded'); map.previousElementSibling?.setAttribute('hidden', ''); });
  if (consentValue === 'accepted') loadMaps();
  const banner = document.createElement('aside'); banner.className = 'cookie-banner'; banner.setAttribute('role', 'dialog'); banner.setAttribute('aria-label', 'Preferencias de cookies');
  banner.innerHTML = '<h2>Cookies y contenido de terceros</h2><p>Usamos almacenamiento técnico para recordar tu elección. El mapa de Google puede instalar cookies de terceros si lo aceptas. Puedes cambiar tu decisión desde la página legal.</p><div class="cookie-actions"><button class="cookie-accept" type="button">Aceptar</button><button class="cookie-reject" type="button">Rechazar</button><a href="legal.html#cookies">Más información</a></div>';
  document.body.appendChild(banner);
  const saveConsent = (value) => { try { localStorage.setItem(storageKey, value); } catch (_) {} consentValue = value; banner.classList.remove('is-visible'); if (value === 'accepted') loadMaps(); };
  banner.querySelector('.cookie-accept').addEventListener('click', () => saveConsent('accepted'));
  banner.querySelector('.cookie-reject').addEventListener('click', () => saveConsent('rejected'));
  if (!consentValue) banner.classList.add('is-visible');
  document.querySelectorAll('[data-cookie-preferences]').forEach((button) => button.addEventListener('click', () => banner.classList.add('is-visible')));

  const toggle = document.querySelector('.menu-toggle');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => { const open = menu.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', String(open)); });
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { menu.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }));
});
