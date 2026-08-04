// Fichero de prueba temporal — test de bloqueo de Brave (Shields agresivo).
// Reproduce el path CON MARCA que usan los plugins de WordPress y WooCommerce
// (/wp-json/sealmetrics/v1/t.js) para ver si es la marca lo que dispara el bloqueo.
// Borrar junto con /public/brave-test/ y /public/smx/ cuando acabe la prueba.
window.__smTest = window.__smTest || {};
window.__smTest.branded = true;
