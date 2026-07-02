import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Alexander Oburoh",
  description: "Privacy policy for the Alexander Oburoh website.",
};

const heading2 = "font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold mt-12 mb-4 first:mt-0";
const heading3 = "font-[family-name:var(--font-heading)] text-base font-semibold mt-8 mb-3";
const body = "text-base leading-relaxed";
const listItem = "text-base leading-relaxed";

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 lg:py-24" style={{ backgroundColor: "#000000" }}>
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1
          className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-2"
          style={{ color: "#f8fafc" }}
        >
          Privacy Policy
        </h1>
        <p className="text-sm mb-10" style={{ color: "#94a3b8" }}>
          Last updated: July 02, 2026
        </p>

        <div style={{ color: "#cbd5e1" }}>
          <p className={body}>
            This Privacy Policy describes Our policies and procedures on the collection, use and
            disclosure of Your information when You use the Service and tells You about Your
            privacy rights and how the law protects You.
          </p>
          <p className={`${body} mt-4`}>
            We use Your Personal Data to provide and improve the Service. By using the Service,
            You agree to the collection and use of information in accordance with this Privacy
            Policy.
          </p>

          <h2 className={heading2} style={{ color: "#f8fafc" }}>
            Interpretation and Definitions
          </h2>

          <h3 className={heading3} style={{ color: "#f8fafc" }}>
            Interpretation
          </h3>
          <p className={body}>
            The words whose initial letters are capitalized have meanings defined under the
            following conditions. The following definitions shall have the same meaning
            regardless of whether they appear in singular or in plural.
          </p>

          <h3 className={heading3} style={{ color: "#f8fafc" }}>
            Definitions
          </h3>
          <p className={body}>For the purposes of this Privacy Policy:</p>
          <ul className="mt-4 space-y-3 list-disc pl-5">
            <li className={listItem}>
              <strong style={{ color: "#f8fafc" }}>Account</strong> means a unique account
              created for You to access our Service or parts of our Service.
            </li>
            <li className={listItem}>
              <strong style={{ color: "#f8fafc" }}>Affiliate</strong> means an entity that
              controls, is controlled by, or is under common control with a party, where
              &quot;control&quot; means ownership of 50% or more of the shares, equity interest
              or other securities entitled to vote for election of directors or other managing
              authority.
            </li>
            <li className={listItem}>
              <strong style={{ color: "#f8fafc" }}>Company</strong> (referred to as either
              &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this
              Privacy Policy) refers to Alexander Oburoh.
            </li>
            <li className={listItem}>
              <strong style={{ color: "#f8fafc" }}>Cookies</strong> are small files that are
              placed on Your computer, mobile device or any other device by a website, containing
              the details of Your browsing history on that website among its many uses.
            </li>
            <li className={listItem}>
              <strong style={{ color: "#f8fafc" }}>Country</strong> refers to: United Kingdom
            </li>
            <li className={listItem}>
              <strong style={{ color: "#f8fafc" }}>Device</strong> means any device that can
              access the Service such as a computer, a cell phone or a digital tablet.
            </li>
            <li className={listItem}>
              <strong style={{ color: "#f8fafc" }}>Personal Data</strong> (or &quot;Personal
              Information&quot;) is any information that relates to an identified or identifiable
              individual. We use &quot;Personal Data&quot; and &quot;Personal Information&quot;
              interchangeably unless a law uses a specific term.
            </li>
            <li className={listItem}>
              <strong style={{ color: "#f8fafc" }}>Service</strong> refers to the Website.
            </li>
            <li className={listItem}>
              <strong style={{ color: "#f8fafc" }}>Service Provider</strong> means any natural or
              legal person who processes the data on behalf of the Company. It refers to
              third-party companies or individuals employed by the Company to facilitate the
              Service, to provide the Service on behalf of the Company, to perform services
              related to the Service or to assist the Company in analyzing how the Service is
              used.
            </li>
            <li className={listItem}>
              <strong style={{ color: "#f8fafc" }}>Usage Data</strong> refers to data collected
              automatically, either generated by the use of the Service or from the Service
              infrastructure itself (for example, the duration of a page visit).
            </li>
            <li className={listItem}>
              <strong style={{ color: "#f8fafc" }}>Website</strong> refers to Alexander Oburoh,
              accessible from{" "}
              <a href={site.url} className="underline" style={{ color: "#5ac8a7" }}>
                {site.url}
              </a>
              .
            </li>
            <li className={listItem}>
              <strong style={{ color: "#f8fafc" }}>You</strong> means the individual accessing or
              using the Service, or the company, or other legal entity on behalf of which such
              individual is accessing or using the Service, as applicable.
            </li>
          </ul>

          <h2 className={heading2} style={{ color: "#f8fafc" }}>
            Collecting and Using Your Personal Data
          </h2>

          <h3 className={heading3} style={{ color: "#f8fafc" }}>
            Types of Data Collected
          </h3>
          <p className={body}>
            <strong style={{ color: "#f8fafc" }}>Personal Data.</strong> While using Our Service,
            We may ask You to provide Us with certain personally identifiable information that
            can be used to contact or identify You.
          </p>
          <p className={`${body} mt-4`}>
            <strong style={{ color: "#f8fafc" }}>Usage Data.</strong> Usage Data is collected
            automatically when using the Service. This may include information such as Your
            Device&apos;s IP address, browser type and version, the pages of our Service that You
            visit, the time and date of Your visit, time spent on those pages, unique device
            identifiers, and other diagnostic data. When You access the Service through a mobile
            device, We may also collect the type of mobile device You use, a unique device ID,
            Your mobile operating system, and the type of mobile browser You use.
          </p>

          <h3 className={heading3} style={{ color: "#f8fafc" }}>
            Tracking Technologies and Cookies
          </h3>
          <p className={body}>
            We use Cookies and similar tracking technologies to track activity on Our Service and
            store certain information. Technologies We use include beacons, tags, and scripts to
            collect and track information and to improve and analyze Our Service, including:
          </p>
          <ul className="mt-4 space-y-3 list-disc pl-5">
            <li className={listItem}>
              <strong style={{ color: "#f8fafc" }}>Cookies or Browser Cookies.</strong> A cookie
              is a small file placed on Your Device. You can instruct Your browser to refuse all
              Cookies or to indicate when a Cookie is being sent. However, if You do not accept
              Cookies, You may not be able to use some parts of our Service.
            </li>
            <li className={listItem}>
              <strong style={{ color: "#f8fafc" }}>Web Beacons.</strong> Certain sections of our
              Service and our emails may contain small electronic files known as web beacons
              that permit the Company to, for example, count users who have visited those pages
              or opened an email, and for other related website statistics.
            </li>
          </ul>
          <p className={`${body} mt-4`}>
            Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent
            Cookies remain on Your device when You go offline, while Session Cookies are deleted
            as soon as You close Your web browser. Where required by law, We use non-essential
            cookies (such as analytics cookies) only with Your consent, which You can withdraw at
            any time through Your browser or device settings.
          </p>

          <h3 className={heading3} style={{ color: "#f8fafc" }}>
            Use of Your Personal Data
          </h3>
          <p className={body}>The Company may use Personal Data for the following purposes:</p>
          <ul className="mt-4 space-y-3 list-disc pl-5">
            <li className={listItem}>
              <strong style={{ color: "#f8fafc" }}>To provide and maintain our Service,</strong>{" "}
              including to monitor the usage of our Service.
            </li>
            <li className={listItem}>
              <strong style={{ color: "#f8fafc" }}>To contact You</strong> by email or other
              equivalent forms of electronic communication regarding updates or informative
              communications related to enquiries You have made.
            </li>
            <li className={listItem}>
              <strong style={{ color: "#f8fafc" }}>To manage Your requests:</strong> to attend and
              manage Your requests to Us.
            </li>
            <li className={listItem}>
              <strong style={{ color: "#f8fafc" }}>For other purposes:</strong> such as data
              analysis, identifying usage trends, and evaluating and improving the Service.
            </li>
          </ul>
          <p className={`${body} mt-4`}>
            We may share Your Personal Data with Service Providers who help Us monitor and
            analyze the use of Our Service, in connection with a business transfer (such as a
            merger or acquisition), or with Your consent for any other disclosed purpose. We do
            not sell Your Personal Data.
          </p>

          <h3 className={heading3} style={{ color: "#f8fafc" }}>
            Retention of Your Personal Data
          </h3>
          <p className={body}>
            The Company will retain Your Personal Data only for as long as is necessary for the
            purposes set out in this Privacy Policy, and to the extent necessary to comply with
            legal obligations, resolve disputes, and enforce agreements. Website analytics data
            and server logs are generally retained for up to 24 months from the date of
            collection. Where possible, We apply shorter retention periods and reduce
            identifiability by deleting, aggregating, or anonymizing data sooner when it is no
            longer needed.
          </p>

          <h3 className={heading3} style={{ color: "#f8fafc" }}>
            Transfer of Your Personal Data
          </h3>
          <p className={body}>
            Your information, including Personal Data, may be processed at locations outside of
            Your state, province, country, or other governmental jurisdiction where data
            protection laws may differ. Where required by applicable law, We ensure appropriate
            safeguards are in place for any such international transfer.
          </p>

          <h3 className={heading3} style={{ color: "#f8fafc" }}>
            Delete Your Personal Data
          </h3>
          <p className={body}>
            You have the right to delete or request that We assist in deleting the Personal Data
            that We have collected about You. You may contact Us at any time to request access
            to, correct, or delete any Personal Data You have provided to Us, though We may need
            to retain certain information where We have a legal obligation to do so.
          </p>

          <h3 className={heading3} style={{ color: "#f8fafc" }}>
            Security of Your Personal Data
          </h3>
          <p className={body}>
            The security of Your Personal Data is important to Us, but remember that no method of
            transmission over the Internet, or method of electronic storage, is 100% secure.
            While We strive to use commercially reasonable means to protect Your Personal Data,
            We cannot guarantee its absolute security.
          </p>

          <h2 className={heading2} style={{ color: "#f8fafc" }}>
            Children&apos;s Privacy
          </h2>
          <p className={body}>
            Our Service does not address anyone under the age of 16. We do not knowingly collect
            personally identifiable information from anyone under the age of 16. If You are a
            parent or guardian and are aware that Your child has provided Us with Personal Data,
            please contact Us so We can take steps to remove that information.
          </p>

          <h2 className={heading2} style={{ color: "#f8fafc" }}>
            Links to Other Websites
          </h2>
          <p className={body}>
            Our Service may contain links to other websites that are not operated by Us. If You
            click a third-party link, You will be directed to that third party&apos;s site. We
            strongly advise You to review the Privacy Policy of every site You visit, as We have
            no control over and assume no responsibility for the content or privacy practices of
            any third-party sites.
          </p>

          <h2 className={heading2} style={{ color: "#f8fafc" }}>
            Changes to this Privacy Policy
          </h2>
          <p className={body}>
            We may update Our Privacy Policy from time to time. We will notify You of any changes
            by posting the new Privacy Policy on this page and updating the &quot;Last
            updated&quot; date above. You are advised to review this Privacy Policy periodically
            for any changes.
          </p>

          <h2 className={heading2} style={{ color: "#f8fafc" }}>
            Contact Us
          </h2>
          <p className={body}>
            If you have any questions about this Privacy Policy, You can contact Us by email at{" "}
            <a href={`mailto:${site.email}`} className="underline" style={{ color: "#5ac8a7" }}>
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
