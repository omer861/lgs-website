import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Header from "../../navbar";
import Footer from "../../Footer";
const Data = [
  {
    Basic: "SMO Packages",
    Advanced: "SMO Packages",
    Enterprise: "SMO Packages",
    style: "",
  },
  {
    Basic: "Setting Goals",
    Advanced: "Setting Goals",
    Enterprise: "Setting Goals",
    style: "",
  },
  {
    Basic: "Account Management – 2",
    Advanced: "Account Management – 3",
    Enterprise: "Account Management – 6",
    style: "",
  },
  {
    Basic: "Hashtag Research",
    Advanced: "Hashtag Research",
    Enterprise: "Hashtag Research",
    style: "",
  },
  {
    Basic: "Content Strategy Creation",
    Advanced: "Content Strategy Creation",
    Enterprise: "Content Strategy Creation",
    style: "",
  },
  {
    Basic: "Facebook Management",
    Advanced: "Facebook Management",
    Enterprise: "Facebook Management",
    style: "Smo-category",
  },
  {
    Basic: "Page Creation",
    Advanced: "Page Creation",
    Enterprise: "Page Creation",
    style: "",
  },
  {
    Basic: "Facebook Cover And Profile Pic Creation",
    Advanced: "Facebook Cover And Profile Pic Creation",
    Enterprise: "Facebook Cover And Profile Pic Creation",
    style: "",
  },
  {
    Basic: "Page Optimization",
    Advanced: "Page Optimization",
    Enterprise: "Page Optimization",
    style: "",
  },
  {
    Basic: "Posting Per Week – 3",
    Advanced: "Posting Per Week – 6",
    Enterprise: "Posting Per Week – 10",
    style: "",
  },
  {
    Basic: "Facebook Story Creation",
    Advanced: "Facebook Story Creation",
    Enterprise: "Facebook Story Creation",
    style: "",
  },
  {
    Basic: "Post Sharing In Groups",
    Advanced: "Post Sharing In Groups",
    Enterprise: "Post Sharing In Groups",
    style: "",
  },
  {
    Basic: "Video Posting",
    Advanced: "Video Posting",
    Enterprise: "Video Posting",
    style: "",
  },
  {
    Basic: "Page Monitoring",
    Advanced: "Page Monitoring",
    Enterprise: "Page Monitoring",
    style: "",
  },
  {
    Basic: "Facebook Tabs Creation",
    Advanced: "Facebook Tabs Creation",
    Enterprise: "Facebook Tabs Creation",
    style: "",
  },
  {
    Basic: "Call To Action Button Creation",
    Advanced: "Call To Action Button Creation",
    Enterprise: "Call To Action Button Creation",
    style: "",
  },
  {
    Basic: "Influencer Research",
    Advanced: "Influencer Research",
    Enterprise: "Influencer Research",
    style: "",
  },
  {
    Basic: "Creation Of Facebook Polls/ Quizs",
    Advanced: "Creation Of Facebook Polls/ Quizs",
    Enterprise: "Creation Of Facebook Polls/ Quizs",
    style: "",
  },
  {
    Basic: "Responding To Comments",
    Advanced: "Responding To Comments",
    Enterprise: "Responding To Comments",
    style: "",
  },
  {
    Basic: "Page Monitoring",
    Advanced: "Page Monitoring",
    Enterprise: "Page Monitoring",
    style: "",
  },
  {
    Basic: "Competitor Analysis",
    Advanced: "Competitor Analysis",
    Enterprise: "Competitor Analysis",
    style: "",
  },
  {
    Basic: "Instagram Management",
    Advanced: "Instagram Management",
    Enterprise: "Instagram Management",
    style: "Smo-category",
  },
  {
    Basic: "Page Creation",
    Advanced: "Page Creation",
    Enterprise: "Page Creation",
    style: "",
  },
  {
    Basic: "Page Optimization",
    Advanced: "Page Optimization",
    Enterprise: "Page Optimization",
    style: "",
  },
  {
    Basic: "Posting Per Week – 3",
    Advanced: "Posting Per Week – 6",
    Enterprise: "Posting Per Week – 10",
    style: "",
  },
  {
    Basic: "Engagement Strategy",
    Advanced: "Engagement Strategy",
    Enterprise: "Engagement Strategy",
    style: "",
  },
  {
    Basic: "Instagram Stories Creation",
    Advanced: "Instagram Stories Creation",
    Enterprise: "Instagram Stories Creation",
    style: "",
  },
  {
    Basic: "Competitor Analysis",
    Advanced: "Competitor Analysis",
    Enterprise: "Competitor Analysis",
    style: "",
  },
  {
    Basic: "Responding To Comments",
    Advanced: "Responding To Comments",
    Enterprise: "Responding To Comments",
    style: "",
  },
  {
    Basic: "Link With Facebook Page",
    Advanced: "Link With Facebook Page",
    Enterprise: "Link With Facebook Page",
    style: "",
  },
  {
    Basic: "IGTV Upload( Video provided by Client)",
    Advanced: "IGTV Upload( Video provided by Client)",
    Enterprise: "IGTV Upload( Video provided by Client)",
    style: "",
  },
  {
    Basic: "Outreach With Influencers",
    Advanced: "Outreach With Influencers",
    Enterprise: "Outreach With Influencers",
    style: "",
  },
  {
    Basic: "Image Tagging",
    Advanced: "Image Tagging",
    Enterprise: "Image Tagging",
    style: "",
  },
  {
    Basic: "Instagram Analytics Monitoring",
    Advanced: "Instagram Analytics Monitoring",
    Enterprise: "Instagram Analytics Monitoring",
    style: "",
  },
  {
    Basic: "LinkedIn Management",
    Advanced: "LinkedIn Management",
    Enterprise: "LinkedIn Management",
    style: "Smo-category",
  },
  {
    Basic: "Profile Creation",
    Advanced: "Profile Creation",
    Enterprise: "Profile Creation",
    style: "",
  },
  {
    Basic: "Profile Pic & Cover Pic Creation",
    Advanced: "Profile Pic & Cover Pic Creation",
    Enterprise: "Profile Pic & Cover Pic Creation",
    style: "",
  },
  {
    Basic: "Profile Optimization",
    Advanced: "Profile Optimization",
    Enterprise: "Profile Optimization",
    style: "",
  },
  {
    Basic: "Company Page Creation",
    Advanced: "Company Page Creation",
    Enterprise: "Company Page Creation",
    style: "",
  },
  {
    Basic: "Competitors Analysis",
    Advanced: "Competitors Analysis",
    Enterprise: "Competitors Analysis",
    style: "",
  },
  {
    Basic: "Video Posting ",
    Advanced: "Video Posting ",
    Enterprise: "Video Posting ",
    style: "",
  },
  {
    Basic: "Posting Per Week – 3",
    Advanced: "Posting Per Week – 3",
    Enterprise: "Posting Per Week – 3",
    style: "",
  },
  {
    Basic: "Creation Of Showcase Page",
    Advanced: "Creation Of Showcase Page",
    Enterprise: "Creation Of Showcase Page",
    style: "",
  },
  {
    Basic: "Invite Connection To Like Your Page",
    Advanced: "Invite Connection To Like Your Page",
    Enterprise: "Invite Connection To Like Your Page",
    style: "",
  },
  {
    Basic: "Responding To Comments",
    Advanced: "Responding To Comments",
    Enterprise: "Responding To Comments",
    style: "",
  },
  {
    Basic: "Relevant Group Joining",
    Advanced: "Relevant Group Joining",
    Enterprise: "Relevant Group Joining",
    style: "",
  },
  {
    Basic: "Sharing In Groups",
    Advanced: "Sharing In Groups",
    Enterprise: "Sharing In Groups",
    style: "",
  },
  {
    Basic: "Youtube Management",
    Advanced: "Youtube Management",
    Enterprise: "Youtube Management",
    style: "Smo-category",
  },
  {
    Basic: "Channel Creation",
    Advanced: "Channel Creation",
    Enterprise: "Channel Creation",
    style: "",
  },
  {
    Basic: "Channel Pic & Cover Pic Creation",
    Advanced: "Channel Pic & Cover Pic Creation",
    Enterprise: "Channel Pic & Cover Pic Creation",
    style: "",
  },
  {
    Basic: "Video Optimization – 1",
    Advanced: "Video Optimization – 3",
    Enterprise: "Video Optimization – 6",
    style: "",
  },
  {
    Basic: "Thumbnail Creation",
    Advanced: "Thumbnail Creation",
    Enterprise: "Thumbnail Creation",
    style: "",
  },
  {
    Basic: "Keyword Research",
    Advanced: "Keyword Research",
    Enterprise: "Keyword Research",
    style: "",
  },
  {
    Basic: "Youtube Status Posting*",
    Advanced: "Youtube Status Posting*",
    Enterprise: "Youtube Status Posting*",
    style: "",
  },
  {
    Basic: "Comment Moderation",
    Advanced: "Comment Moderation",
    Enterprise: "Comment Moderation",
    style: "",
  },
  {
    Basic: "End Screen Cards Creation",
    Advanced: "End Screen Cards Creation",
    Enterprise: "End Screen Cards Creation",
    style: "",
  },
  {
    Basic: "Information Cards Creation",
    Advanced: "Information Cards Creation",
    Enterprise: "Information Cards Creation",
    style: "",
  },
  {
    Basic: "Video Tags Creation",
    Advanced: "Video Tags Creation",
    Enterprise: "Video Tags Creation",
    style: "",
  },
  {
    Basic: "Playlist Creation",
    Advanced: "Playlist Creation",
    Enterprise: "Playlist Creation",
    style: "",
  },
  {
    Basic: "Video Creation",
    Advanced: "Video Creation",
    Enterprise: "Video Creation",
    style: "",
  },
  {
    Basic: "Youtube Analytics Monitoring",
    Advanced: "Youtube Analytics Monitoring",
    Enterprise: "Youtube Analytics Monitoring",
    style: "",
  },
  {
    Basic: "Competitors Analysis",
    Advanced: "Competitors Analysis",
    Enterprise: "Competitors Analysis",
    style: "",
  },
  {
    Basic: "Video Backlinks",
    Advanced: "Video Backlinks",
    Enterprise: "Video Backlinks",
    style: "",
  },
  {
    Basic: "Twitter Management",
    Advanced: "Twitter Management",
    Enterprise: "Twitter Management",
    style: "Smo-category",
  },
  {
    Basic: "Profile Creation",
    Advanced: "Profile Creation",
    Enterprise: "Profile Creation",
    style: "",
  },
  {
    Basic: "Profile & Background Picture Creation",
    Advanced: "Profile & Background Picture Creation",
    Enterprise: "Profile & Background Picture Creation",
    style: "",
  },
  {
    Basic: "Tweet Per Week – 3",
    Advanced: "Tweet Per Week – 6",
    Enterprise: "Tweet Per Week – 10",
    style: "",
  },
  {
    Basic: "Retweets",
    Advanced: "Retweets",
    Enterprise: "Retweets",
    style: "",
  },
  {
    Basic: "List Creation",
    Advanced: "List Creation",
    Enterprise: "List Creation",
    style: "",
  },
  {
    Basic: "Active In Trending Hashtag",
    Advanced: "Active In Trending Hashtag",
    Enterprise: "Active In Trending Hashtag",
    style: "",
  },
  {
    Basic: "Creation Of Poll",
    Advanced: "Creation Of Poll",
    Enterprise: "Creation Of Poll",
    style: "",
  },
  {
    Basic: "Following Industry Related People",
    Advanced: "Following Industry Related People",
    Enterprise: "Following Industry Related People",
    style: "",
  },
  {
    Basic: "Creation Of Moments",
    Advanced: "Creation Of Moments",
    Enterprise: "Creation Of Moments",
    style: "",
  },
  {
    Basic: "Twitter Analytics Monitoring",
    Advanced: "Twitter Analytics Monitoring",
    Enterprise: "Twitter Analytics Monitoring",
    style: "",
  },
  {
    Basic: "Pinterest Management",
    Advanced: "Pinterest Management",
    Enterprise: "Pinterest Management",
    style: "Smo-category",
  },
  {
    Basic: "Profile Creation",
    Advanced: "Profile Creation",
    Enterprise: "Profile Creation",
    style: "",
  },
  {
    Basic: "Board Creation – 2",
    Advanced: "Board Creation – 4",
    Enterprise: "Board Creation – 6",
    style: "",
  },
  {
    Basic: "Content Creation",
    Advanced: "Content Creation",
    Enterprise: "Content Creation",
    style: "",
  },
  {
    Basic: "Posting Per Week – 3",
    Advanced: "Posting Per Week – 6",
    Enterprise: "Posting Per Week – 10",
    style: "",
  },
  {
    Basic: "Business Account Creation",
    Advanced: "Business Account Creation",
    Enterprise: "Business Account Creation",
    style: "",
  },
  {
    Basic: "Monthly Visitors Analysis",
    Advanced: "Monthly Visitors Analysis",
    Enterprise: "Monthly Visitors Analysis",
    style: "",
  },
  {
    Basic: "Follow Relevant Account And Boards",
    Advanced: "Follow Relevant Account And Boards",
    Enterprise: "Follow Relevant Account And Boards",
    style: "",
  },
  {
    Basic: "Inviting Relevant Pinners On Board",
    Advanced: "Inviting Relevant Pinners On Board",
    Enterprise: "Inviting Relevant Pinners On Board",
    style: "",
  },
];

const SMO = () => {
  return (
    <>
      <Header />
      <div className="smo-main-container">
        <h1 className="smo-heading">
          Our Monthly Social Media Optimization Packages
        </h1>
        <table>
          <thead>
            <tr>
              <th className="smo-column">BASIC</th>
              <th className="smo-column-1">ADVANCED</th>
              <th className="smo-column-2">ENTERPRISE</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((row, index) => (
              <tr key={index}>
                <td className={row.style}>{row.Basic}</td>
                <td className={row.style}>{row.Advanced}</td>
                <td className={row.style}>{row.Enterprise}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="smo-button">
          <Link to="/contactus">
            <button className="learn-more-button-smo">Get Quote</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SMO;
