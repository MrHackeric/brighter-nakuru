import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/policy.css';

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <div className="policy-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="policy-content container">
        <section className="policy-section">
          <h2>1. Introduction</h2>
          <p>
            The Geoffrey Gitau Mwangi Campaign ("we," "us," or "our") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide to us including:</p>
          <ul>
            <li>Contact information (name, email address, phone number)</li>
            <li>Demographic information (location, age)</li>
            <li>Payment information for donations</li>
            <li>Communication preferences</li>
          </ul>
          <p>We also collect non-personal information automatically through cookies and analytics tools.</p>
        </section>

        <section className="policy-section">
          <h2>3. How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes:</p>
          <ul>
            <li>To provide and maintain our services</li>
            <li>To notify you about campaign updates and events</li>
            <li>To process donations</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information. 
            However, no internet transmission is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access, update, or delete your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent where applicable</li>
            <li>Lodge a complaint with regulatory authorities</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>6. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
            Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section className="policy-section">
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <strong>Email:</strong> privacy@brighternakuru.com
            <br />
            <strong>Address:</strong> Campaign HQ, Nakuru Town, Kenya
          </p>
        </section>

        <div className="policy-footer">
          <Link to="/" className="back-home">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;