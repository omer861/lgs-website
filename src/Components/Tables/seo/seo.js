import React from "react";
import "./PricingPage.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";
import Header from "../../navbar";
import Footer from "../../Footer";

const PricingPage = () => {
  const rowData = [
    // An array of rows with dummy data
    // Each row contains: features, small business, mid size business,

    // {

    //   smallBusiness: '25,000 INR / 400 USD Monthly',
    //   midSizeBusiness: '40,000 INR / 600 USD Monthly',
    //   largeOrEcommerce: '40,000 INR / 600 USD Monthly',

    // },
    {
      smallBusiness: "website review and analysis ",
      midSizeBusiness: "website review and analysis",
      largeOrEcommerce: "website review and analysis",
      highlighted: true,
    },
    {
      smallBusiness: "max 5 keywords",
      midSizeBusiness: "max 15 keywords",
      largeOrEcommerce: "max 30 keywords",
    },

    {
      smallBusiness: "website and competitor analysis",
      midSizeBusiness: "website and competitor analysis",
      largeOrEcommerce: "website and competitor analysis",
    },
    {
      smallBusiness: "content duplicity check",
      midSizeBusiness: "content duplicity check",
      largeOrEcommerce: "content duplicity check",
    },
    {
      smallBusiness: "initial ranking report",
      midSizeBusiness: "initial ranking report",
      largeOrEcommerce: "initial ranking report",
    },
    {
      smallBusiness: "keyword research",
      midSizeBusiness: "keyword research",
      largeOrEcommerce: "keyword research",
    },
    {
      smallBusiness: "on page seo analysis ",
      midSizeBusiness: "on page seo analysis",
      largeOrEcommerce: "on page seo analysis",
      highlighted: true,
    },
    {
      smallBusiness: "meta tags creation",
      midSizeBusiness: "meta tags creation",
      largeOrEcommerce: "meta tags creation",
    },
    {
      smallBusiness: "canonicalization",
      midSizeBusiness: "canonicalization",
      largeOrEcommerce: "canonicalization",
    },
    {
      smallBusiness: "url stracture",
      midSizeBusiness: "url stracture",
      largeOrEcommerce: "url stracture",
    },
    {
      smallBusiness: "content optimization",
      midSizeBusiness: "content optimization",
      largeOrEcommerce: "content optimization",
    },
    {
      smallBusiness: "image optimization",
      midSizeBusiness: "image optimization",
      largeOrEcommerce: "image optimization",
    },
    {
      smallBusiness: "heading tag optimization",
      midSizeBusiness: "heading tag optimization",
      largeOrEcommerce: "heading tag optimization",
    },
    {
      smallBusiness: "website speed optimization",
      midSizeBusiness: "website speed optimization",
      largeOrEcommerce: "website speed optimization",
    },
    {
      smallBusiness: "robots.txt",
      midSizeBusiness: "robots.txt",
      largeOrEcommerce: "robots.txt",
    },
    {
      smallBusiness: "sitemap creation",
      midSizeBusiness: "sitemap creation",
      largeOrEcommerce: "sitemap creation",
    },
    {
      smallBusiness: "google analytics and search console setup",
      midSizeBusiness: "google analytics and search console setup",
      largeOrEcommerce: "google analytics and search console setup",
    },
    {
      smallBusiness: "blog optimization -2 posts",
      midSizeBusiness: "blog optimization -5 posts",
      largeOrEcommerce: "blog optimization -5 posts",
    },
    {
      smallBusiness: "local seo setup ",
      midSizeBusiness: "local seo setup",
      largeOrEcommerce: "local seo setup",
      highlighted: true,
    },
    {
      smallBusiness: "Google Map Integration on website",
      midSizeBusiness: "Google Map Integration on website",
      largeOrEcommerce: "Google Map Integration on website",
    },
    {
      smallBusiness: "Google My business page setup and optimization",
      midSizeBusiness: "Google My business page setup and optimization",
      largeOrEcommerce: "Google My business page setup and optimization",
    },
    {
      smallBusiness: "Local Citations -5",
      midSizeBusiness: "Local Citations -10",
      largeOrEcommerce: "Local Citations -15",
    },
    {
      smallBusiness: "Local Classified -2",
      midSizeBusiness: "Local Classified -5",
      largeOrEcommerce: "Local Classified -10",
    },
    {},
    {
      smallBusiness: "on page seo analysis ",
      midSizeBusiness: "on page seo analysis",
      largeOrEcommerce: "on page seo analysis",
      highlighted: true,
    },
    //   {

    //     smallBusiness: 'content marketing',
    //     midSizeBusiness: 'content marketing',
    //     largeOrEcommerce: 'content marketing',
    //     highlighted: true,
    //   },
    {
      smallBusiness: "blog posting (500-700 words)-1",
      midSizeBusiness: "blog posting (500-700 words)-2",
      largeOrEcommerce: "blog posting (500-700 words)-2",
    },
    {
      smallBusiness: "ariticle writing (500-700 words)-1",
      midSizeBusiness: "ariticle writing (500-700 words)-2",
      largeOrEcommerce: "ariticle writing (500-700 words)-2",
    },
    {
      smallBusiness: " onsite blog (300-500) -1",
      midSizeBusiness: "onsite blog (300-500) -2",
      largeOrEcommerce: "onsite blog (300-500) -2",
    },
    {
      smallBusiness: "email outreach ",
      midSizeBusiness: "email outreach",
      largeOrEcommerce: "email outreach",
      highlighted: true,
    },
    {
      smallBusiness: " guest blogging",
      midSizeBusiness: "guest blogging",
      largeOrEcommerce: "guest blogging",
    },
    {
      smallBusiness: "broken backink building",
      midSizeBusiness: "broken backink building",
      largeOrEcommerce: "broken backink building",
    },
    {
      smallBusiness: "resource link building",
      midSizeBusiness: "resource link building",
      largeOrEcommerce: "resource link building",
    },
    {
      smallBusiness: "alert and mention",
      midSizeBusiness: "alert and mention",
      largeOrEcommerce: "alert and mention",
    },
    {
      smallBusiness: "link roundups",
      midSizeBusiness: "link roundups",
      largeOrEcommerce: "link roundups",
    },
    {
      smallBusiness: "competitor backlink research",
      midSizeBusiness: "competitor backlink research",
      largeOrEcommerce: "competitor backlink research",
    },
    {},
    {
      smallBusiness: "off page seo ",
      midSizeBusiness: "off page seo",
      largeOrEcommerce: "off page seo",
      highlighted: true,
    },
    {
      smallBusiness: "social sharing -30(total) ",
      midSizeBusiness: "social sharing -40(total)",
      largeOrEcommerce: "social sharing -50(total)",
    },
    {
      smallBusiness: "blog social sharing",
      midSizeBusiness: "blog social sharing",
      largeOrEcommerce: "blog social sharing",
    },
    {
      smallBusiness: "slide submission -1 ",
      midSizeBusiness: "slide submission -2",
      largeOrEcommerce: "slide submission -2",
    },
    {
      smallBusiness: "text infographic creation -1 ",
      midSizeBusiness: "text infographic creation -2",
      largeOrEcommerce: "text infographic creation -3",
    },
    {
      smallBusiness: "video creation",
      midSizeBusiness: "video creation",
      largeOrEcommerce: "video-1 minute ( product based)",
    },
    {
      smallBusiness: "Q and A -1",
      midSizeBusiness: "Q and A -3",
      largeOrEcommerce: "Q and A -5",
    },
    {},
    {
      smallBusiness: "monthly reporting",
      midSizeBusiness: "monthly reporting",
      largeOrEcommerce: "monthly reporting",
      highlighted: true,
    },
    {
      smallBusiness: "keyword ranking report",
      midSizeBusiness: "keyword ranking report",
      largeOrEcommerce: "keyword ranking report",
    },
    {
      smallBusiness: "google analytics report",
      midSizeBusiness: "google analytics report",
      largeOrEcommerce: "google analytics report",
    },
    {
      smallBusiness: "Acquired links report",
      midSizeBusiness: "Acquired links report",
      largeOrEcommerce: "Acquired links report",
    },

    {
      smallBusiness: "client support",
      midSizeBusiness: "client support",
      largeOrEcommerce: "client suppout",
      highlighted: true,
    },
    {
      smallBusiness: "email",
      midSizeBusiness: "email",
      largeOrEcommerce: "email",
    },
    {
      smallBusiness: "chat",
      midSizeBusiness: "chat",
      largeOrEcommerce: "chat",
    },
    {
      smallBusiness: "call",
      midSizeBusiness: "call",
      largeOrEcommerce: "call",
    },
    // ... repeat for other rows
  ];

  return (
    <div>
      <Header />
      <div className="pricing-page">
        <h1 className="heading-seo"> Our SEO Packages</h1>
        <table>
          <thead>
            <tr>
              <th className="seo-column">SMALL BUSINESS</th>
              <th className="seo-column-2">MID SIZE BUSINESS</th>
              <th className="seo-column-3">LARGE OR ECOMMERCE</th>
            </tr>
          </thead>
          <tbody>
            {rowData.map((row, index) => (
              <tr key={index} className={row.highlighted ? "highlighted" : ""}>
                <td>{row.smallBusiness}</td>
                <td>{row.midSizeBusiness}</td>
                <td>{row.largeOrEcommerce}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="seo-button">
          <Link to="/contactus">
            <button className="learn-more-button-seo">Get Quote</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
