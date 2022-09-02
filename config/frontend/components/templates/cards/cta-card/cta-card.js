import { ButtonLink, Preheading } from "@/elements";
import { isJsxAttributes } from "typescript";

export default function CTACard({ content }) {
  if (!content) return <></>;

  return (
    <section id="cta-card" className="p-10 bg-primary-custom-light template">
      <div className="bg-white p-10 max-w-2xl mx-auto ">
        <div class="container">
          <div class="box">
            <h3 className="mb-6">
              <span>{attributes.heading}</span>
            </h3>
            <p className="text-primary-50 leading-7 mb-8">{attibutes.blurb}</p>
            <div class="inline-flex items-center group flex">
                    <a class="text-secondary tracking-widest uppercase leading-none text-sm pr-4" href="/donate/">Learn more</a>
                    <a href="/contact/">
                        <svg class="group-hover:ml-5 transition-all duration-200" viewBox="0 0 9.414 17.414" width="7px">
                            <path class="stroke-2 stroke-current text-secondary" transform="translate(5782.7 8451.2)" d="m-5782-8450.5l8 8-8 8" fill="none" stroke-linecap="round"></path>
                        </svg>
                    </a>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}
