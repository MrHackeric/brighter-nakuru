import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/policy.css';

const TermsOfUse = () => {
  return (
    <div className="policy-page">
      <div className="policy-header">
        <div className="container">
          <h1>Terms of Use</h1>
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="policy-content container">
        <section className="policy-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Geoffrey Gitau Mwangi Campaign website ("the Site"), you agree to be bound by these 
            Terms of Use. If you do not agree with any part of these terms, you must not use our Site.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Use of the Site</h2>
          <p>You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul>
            <li>Use the Site in any way that violates any applicable laws or regulations</li>
            <li>Engage in any conduct that restricts or inhibits anyone's use of the Site</li>
            <li>Attempt to gain unauthorized access to any portion of the Site</li>
            <li>Use the Site to impersonate or attempt to impersonate the campaign or any other person</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Intellectual Property</h2>
          <p>
            All content on this Site, including text, graphics, logos, and images, is the property of the Geoffrey Gitau 
            Mwangi Campaign or its content suppliers and is protected by copyright and other intellectual property laws.
          </p>
        </section>

        <section className="policy-section">
          <h2>4. User Contributions</h2>
          <p>
            The Site may contain message boards, comment sections, or other interactive features where you can post content. 
            By posting content, you grant us a non-exclusive, royalty-free license to use, reproduce, and display such content.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Donations</h2>
          <p>
            All donations made through the Site are voluntary and non-refundable. By making a donation, you represent that 
            you are authorized to use the payment method provided.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. Disclaimer of Warranties</h2>
          <p>
            The Site is provided "as is" without warranties of any kind. We do not warrant that the Site will be 
            uninterrupted or error-free, or that any defects will be corrected.
          </p>
        </section>

        <section className="policy-section">
          <h2>7. Limitation of Liability</h2>
          <p>
            In no event will the Geoffrey Gitau Mwangi Campaign be liable for any damages arising out of or in connection 
            with your use of the Site.
          </p>
        </section>

        <section className="policy-section">
          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Your continued use of the Site after such modifications 
            constitutes your acceptance of the modified Terms.
          </p>
        </section>

        <section className="policy-section">
          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of Kenya, without regard to its 
            conflict of law provisions.
          </p>
        </section>

        <div className="policy-footer">
          <Link to="/" className="back-home">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;