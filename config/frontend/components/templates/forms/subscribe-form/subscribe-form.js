import { CenterAlignedHeadline } from "@/elements";

export default function SubscribeForm({ content }) {
  if (!content) return <></>;
  let { attributes, collections } = content;
  // if (!collections) {
  //   throw new Error(`No collections attribute provided in sections.json for template`);
  // }
  // let socialLinks = [];
  // if (collections && collections["social-links"]) {
  //   socialLinks = collections["social-links"].items;
  // }

  return (
    <section id="subscribe-form" class="relative template">
      <section class="max-w-screen-xl px-4 mx-auto">
        <CenterAlignedHeadline attributes={attributes} />
        {/* <p class="text-secondary tracking-widest leading-none uppercase text-xs pl-4 py-1 mb-2 text-center">{attributes.preheading}</p>
            <h1 class="h2 max-w-2xl mx-auto mb-8 md:mb-10 leading-tight text-center">{attributes.heading}</h1> */}
        <p class="max-w-xl mx-auto text-primary-50 text-center leading-7 mb-20">
          {attributes.body}
        </p>
        <div
          class="type-buttons flex items-center justify-center mb-20"
          role="group"
          aria-label="Subscription type"
        >
          <button
            id="singleBtn"
            type="button"
            class="rounded-l-full bg-secondary text-secondary-opposite px-6 py-2 border border-secondary"
          >
            Single
          </button>
          <button
            id="doubleBtn"
            type="button"
            class="rounded-r-full px-6 py-2 border text-secondary border-secondary"
          >
            Double
          </button>
        </div>
        <div
          class="max-w-2xl mx-auto border shadow-lg rounded-lg bg-white"
          data-aos="fade-up"
          data-aos-duration="650"
        >
          <div class="p-5 md:p-10">
            <div class="flex items-center flex-col-reverse sm:flex-row justify-start sm:justify-between mb-10">
              <h3 id="subTypeText"></h3>
              {/* <!-- TODO: Remove dollar sign from CMS and add it here as it is supposed to have the same styling as the /yr --> */}
              <h3 class="mb-4 sm:mb-0">
                <span id="feeText" class="text-secondary h2"></span>
                <span class="text-base font-sans -ml-1">/yr</span>
              </h3>
            </div>
            <form id="subscribeForm">
              <div class="form-group flex flex-col mb-5">
                <label class="text-primary-60 mb-2" for="firstName">
                  First name
                </label>
                <input
                  class="form-control px-4 py-3 border rounded"
                  type="text"
                  id="firstName"
                  name="firstName"
                  aria-describedby="firstName"
                  placeholder="First name"
                  required="required"
                />
              </div>
              <div class="form-group flex flex-col mb-5">
                <label class="text-primary-60 mb-2" for="lastName">
                  Last name
                </label>
                <input
                  class="form-control px-4 py-3 border rounded"
                  type="text"
                  id="lastName"
                  name="lastName"
                  aria-describedby="lastName"
                  placeholder="Last name"
                  required="required"
                />
              </div>
              <div class="form-group flex flex-col mb-5">
                <label class="text-primary-60 mb-2" for="email">
                  Email
                </label>
                <input
                  class="form-control px-4 py-3 border mb-2 rounded"
                  type="email"
                  id="email"
                  name="email"
                  aria-describedby="email"
                  placeholder="Your email"
                  required="required"
                />
                <small id="emailHelp" class="form-text text-xs text-primary-50">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group flex flex-col mb-5">
                <label class="text-primary-60 mb-2" for="phone">
                  Phone
                </label>
                <input
                  class="form-control px-4 py-3 border rounded"
                  type="text"
                  id="phone"
                  name="phone"
                  aria-describedby="phone"
                  placeholder="Phone number"
                />
              </div>
              <div class="form-group flex flex-col mb-5">
                <label class="text-primary-60 mb-2" for="donationAmount">
                  Donation
                </label>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio text-secondary"
                    name="donationAmount"
                    value="10"
                  />
                  <span class="ml-2">Key ($10)</span>
                </label>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio text-secondary"
                    name="donationAmount"
                    value="50"
                  />
                  <span class="ml-2">Octave ($50)</span>
                </label>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio text-secondary"
                    name="donationAmount"
                    value="100"
                  />
                  <span class="ml-2">Piano ($100)</span>
                </label>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio text-secondary"
                    name="donationAmount"
                    value="0"
                    checked="checked"
                  />
                  <span class="ml-2">Not now, thanks</span>
                </label>
              </div>
              <div class="partner-details mb-10 hidden">
                <h4 class="mb-5">Partner details</h4>
                <div class="form-group flex flex-col mb-5">
                  <label class="text-primary-60 mb-2" for="partnerName">
                    Full name
                  </label>
                  <input
                    class="form-control px-4 py-3 border rounded"
                    type="text"
                    id="partnerName"
                    name="partnerName"
                    aria-describedby="partnerName"
                    placeholder="Full name of partner"
                  />
                </div>
                <div class="form-group flex flex-col mb-5">
                  <label class="text-primary-60 mb-2" for="partnerEmail">
                    Email
                  </label>
                  <input
                    class="form-control px-4 py-3 border rounded"
                    type="email"
                    id="partnerEmail"
                    name="partnerEmail"
                    aria-describedby="partnerEmail"
                    placeholder="Email of partner"
                  />
                </div>
                <div class="form-group flex flex-col mb-5">
                  <label class="text-primary-60 mb-2" for="partnerPhone">
                    Cellphone number
                  </label>
                  <input
                    class="form-control px-4 py-3 border rounded"
                    type="text"
                    id="partnerPhone"
                    name="partnerPhone"
                    aria-describedby="partnerPhone"
                    placeholder="Cellphone number of partner"
                  />
                </div>
              </div>
              {/* <!-- H o n e y p o t --> */}
              <label class="ohno" for="ohno"></label>
              <input
                class="ohno"
                autocomplete="off"
                type="text"
                id="ohno"
                name="ohno"
                placeholder="Your ohno here"
              />

              <button
                type="submit"
                class="submit-btn w-full py-4 text-white text-sm tracking-widest hover:text-white bg-secondary hover:bg-secondary-dark uppercase focus:outline-none focus:text-white focus:bg-secondary transition duration-200 ease-in-out"
              >
                <div class="spinner pb-4 hidden"></div>
                <span class="label">Send</span>
              </button>
            </form>
            <div class="subscribe-instructions hidden text-center mb-10">
              <svg
                viewbox="0 0 123.32 114.07"
                width="120px"
                class="mx-auto mb-10"
              >
                <g transform="translate(-872.42 -913.15)">
                  <path
                    transform="translate(369.74 578.68)"
                    d="m552.71 446.05 36.794-39.613a27.586 27.586 0 1 0-39.441-38.581 27.586 27.586 0 1 0-38.583 39.44l41.23 38.754"
                    fill="none"
                    stroke="#e6e6e6"
                  />
                  <path
                    transform="translate(385.92 581.17)"
                    d="m552.71 446.05 36.794-39.613a27.586 27.586 0 1 0-39.441-38.581 27.586 27.586 0 1 0-38.583 39.44l41.23 38.754"
                    fill="#b09159"
                  />
                  <path
                    transform="translate(394.15 578.68)"
                    d="m552.71 446.05 36.794-39.613a27.586 27.586 0 1 0-39.441-38.581 27.586 27.586 0 1 0-38.583 39.44l41.23 38.754"
                    fill="none"
                    stroke="#272727"
                  />
                  <path
                    transform="translate(377.73 646.22)"
                    d="m510.53 372.4 5.461-5.879a4.094 4.094 0 0 0-5.854-5.726 4.094 4.094 0 0 0-5.726 5.854l6.119 5.752"
                    fill="none"
                    stroke="#e6e6e6"
                  />
                  <path
                    transform="translate(448.7 554.09)"
                    d="m510.53 372.4 5.461-5.879a4.094 4.094 0 0 0-5.854-5.726 4.094 4.094 0 0 0-5.726 5.854l6.119 5.752"
                    fill="none"
                    stroke="#272727"
                  />
                  <path
                    transform="translate(478.58 636.26)"
                    d="m510.53 372.4 5.461-5.879a4.094 4.094 0 0 0-5.854-5.726 4.094 4.094 0 0 0-5.726 5.854l6.119 5.752"
                    fill="#b09159"
                  />
                </g>
              </svg>
              <h4 class="mb-16">Thank you for your support</h4>
              <div class="text-left">
                <table class="mb-10">
                  <tr>
                    <td class="pr-5">
                      <strong>Subscription fee:</strong>
                    </td>
                    <td>
                      $<span class="subscription-fee"></span>
                    </td>
                  </tr>
                  <tr>
                    <td class="pr-5">
                      <strong>Donation:</strong>
                    </td>
                    <td>
                      $<span class="donation-amount"></span>
                    </td>
                  </tr>
                  <tr class="pt-5">
                    <td class="pr-5 pt-2">
                      <strong>Total:</strong>
                    </td>
                    <td class="pt-2">
                      <strong>
                        $<span class="total"></span>
                      </strong>
                    </td>
                  </tr>
                </table>
                <p class="mb-5">
                  To complete your subscription, please use one of the following
                  payment methods:
                </p>
                <ol class="text-primary-60">
                  <li class="mb-3">
                    <strong>Internet banking:</strong>
                    Wanaka Concert Society a/c 03 1739 000 5648 01 with your
                    name in the particulars box.
                  </li>
                  <li>
                    Post the completed form, with cheque to: Subscriptions,
                    Wanaka Concert Society, P O Box 856, Wanaka 9343
                  </li>
                </ol>
              </div>
            </div>
            <div class="subscribe-error-msg hidden">
              <h3 class="mb-2">Error</h3>
              <p class="mb-5">There was a problem submitting your details.</p>
              <p class="text-primary-60">
                Please try again or
                <a href="/contact/">contact the administrator</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class="bg-squares-horizontal"></div>
      <div class="absolute w-full h-64 bg-primary-custom-light bottom-0 z-index--1"></div>
    </section>
  );
}
