# Coordinated Cooler Rewards release

Deploy with the bernard-bucks /coolerrewards basePath change. The proxy now preserves /coolerrewards and no longer forwards global /_next requests. The Coolify origin remains rewards.h20crypto.vip; visitors use bernardsvending.com.

Before release configure the rewards app public URL and Supabase Auth callback for https://bernardsvending.com/coolerrewards. See bernard-bucks/docs/domain-cutover.md for sequencing and rollback. These two repository changes must be rolled out together.

See My Rewards Demo opens /coolerrewards/preview, an isolated interactive sample. Request My Free Trial opens the existing contact section; it does not create or activate a trial automatically. How It Works remains an anchor on /cooler-rewards. Cross-page hash navigation now scrolls to the target after rendering.

Acceptance: verify both CTA destinations, /cooler-rewards#how-it-works, /#contact, rewards JS/CSS and icons, member login with a fresh email link, and a machine QR on mobile. Restore both previous deployments if routing fails. Live database reward configuration is outside this release.
