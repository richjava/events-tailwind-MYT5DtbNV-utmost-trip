import { CTAButton } from "@/elements";

export default function Block2({ content }) {
  if (!content) return <></>;
  let { attributes } = content;
  return (
    <section id="block-2" className="pt-5 pb-16 template">
      <div class="flex flex-col lg:flex-row max-w-screen-xl mx-auto">
        <div class="lg:w-1/2 relative">
          <img
            class=""
            src={attributes.image.data.attributes.url}
            alt="About image 2"
          />
        </div>
        <div class="lg:w-1/2 sm:mx-6 lg:ml-12 lg:mb-0 mt-12 lg:mt-0">
          <p class="text-primary-70 leading-7 mb-12">
            {attributes.body}
          </p>
          <CTAButton />
          {/* {% if blox.page.item.fields.ctaBlurb %} */}
          {/* <p class="text-primary-70 leading-7 mb-12">
                            <strong>{{ blox.page.item.fields.ctaBlurb }}</strong>
                        </p> */}
          {/* {% endif %} */}
          {/* {% call ctaBtn.default({text: 'Browse our events', url: '/events/page-1/'}) %}{% endcall %} */}
        </div>
      </div>
    </section>
  );
}
