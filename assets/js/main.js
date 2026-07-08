/* =========================================================
   Ciência do TikTok Shop — scripts da página
   ========================================================= */

/* ----------------------------------------------------------
   CONFIGURAÇÃO
   Altere o link de checkout aqui. Todos os botões marcados
   com o atributo [data-checkout] no HTML apontam para ele.
   ---------------------------------------------------------- */
const CONFIG = {
  checkoutUrl: 'https://pay.kiwify.com.br/kCrmhIB',
};

document.addEventListener('DOMContentLoaded', () => {
  applyCheckoutLinks();
  initFaq();
  setYear();
});

/* Aplica o link de checkout a todos os CTAs [data-checkout] */
function applyCheckoutLinks() {
  document.querySelectorAll('[data-checkout]').forEach((el) => {
    // Botões que rolam para a seção de oferta (#oferta) são mantidos;
    // os demais recebem o link direto de checkout.
    const href = el.getAttribute('href');
    if (!href || href === '#' ) {
      el.setAttribute('href', CONFIG.checkoutUrl);
    }
  });
}

/* Accordion do FAQ (abre um por vez) */
function initFaq() {
  const faq = document.querySelector('[data-faq]');
  if (!faq) return;

  faq.querySelectorAll('.faq-q').forEach((btn) => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // fecha todos
      faq.querySelectorAll('.faq-q').forEach((b) => {
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling.style.maxHeight = null;
      });

      // abre o clicado (se estava fechado)
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/* Ano dinâmico no rodapé */
function setYear() {
  const el = document.querySelector('[data-year]');
  if (el) el.textContent = new Date().getFullYear();
}
