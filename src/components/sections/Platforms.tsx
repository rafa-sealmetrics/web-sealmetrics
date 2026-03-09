import Image from "next/image";
import Link from "next/link";

const platforms = [
  { logo: "/logos/brands/wordpress.svg", name: "WordPress" },
  { logo: "/logos/brands/woocommerce.svg", name: "WooCommerce" },
  { logo: "/logos/brands/magento.svg", name: "Magento" },
  { logo: "/logos/brands/prestashop.svg", name: "PrestaShop" },
  { logo: "/logos/brands/shopify.svg", name: "Shopify", badge: "Coming soon" },
  { logo: "/logos/brands/joomla.svg", name: "Joomla" },
  { logo: "/logos/brands/drupal.svg", name: "Drupal" },
  { logo: "/logos/brands/wix.svg", name: "Wix" },
  { logo: "/logos/brands/webflow.svg", name: "Webflow" },
  { logo: "/logos/brands/html5.svg", name: "Custom HTML" },
];

export function Platforms() {
  return (
    <section className="py-28 bg-warm-white border-t border-warm-100">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            Platform Compatibility
          </span>
          <h2 className="headline-section mb-4">
            Works with every platform.
          </h2>
          <p className="text-[1.05rem] leading-[1.75] text-text-secondary">
            One script tag. Any website. Set up in under 2 minutes.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="p-5 text-center border border-warm-100 rounded-[4px] bg-white hover:border-text-tertiary transition-colors relative"
            >
              <div className="flex items-center justify-center h-[36px]">
                <Image
                  src={platform.logo}
                  alt={platform.name}
                  width={28}
                  height={28}
                  className="opacity-40 grayscale"
                />
              </div>
              <div className="text-[0.8rem] text-text-secondary mt-3">
                {platform.name}
              </div>
              {platform.badge && (
                <span className="absolute top-2 right-2 text-[0.6rem] uppercase tracking-wider text-text-tertiary bg-warm-50 px-1.5 py-0.5 rounded">
                  {platform.badge}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/platforms"
            className="text-[0.9rem] text-text-secondary no-underline border-b border-warm-200 pb-0.5 hover:border-text-primary transition-colors"
          >
            See all supported platforms →
          </Link>
        </div>
      </div>
    </section>
  );
}
