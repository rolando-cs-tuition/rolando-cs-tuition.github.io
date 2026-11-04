// PUBLIC configuration only. No credentials or secret keys belong in this file.
// Direct online submission stays off until Cloudflare Worker + KV + Turnstile are verified.
// Set enabled:true and supply the public HTTPS Worker origin and PUBLIC Turnstile site key only after testing.
window.ACADEMY_TUITION_INTAKE = Object.freeze({
  enabled: false,
  workerOrigin: 'https://projectx-tuition-intake.staffcomplete-projectx.workers.dev',
  turnstileSiteKey: '0x4AAAAAAFzKkKk_sKKWts6t'
});
