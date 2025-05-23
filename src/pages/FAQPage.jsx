// src/pages/FAQPage.jsx
import React, { useState } from 'react';
import './FAQPage.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span className="faq-icon">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
    </div>
  );
};

const FAQPage = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        { q: "What is Unidash?", a: "Unidash is a centralized online platform designed to simplify the university application process for students in India (and eventually Asia). Students can fill out one common application and apply to multiple universities simultaneously." },
        { q: "Is Unidash free for students?", a: "Basic account creation and access to search colleges will be free. There might be nominal fees for applying to certain universities or for premium features in the future. We aim to keep it as accessible as possible." },
        { q: "How does Unidash help universities?", a: "Unidash helps universities by increasing their reach to a wider pool of applicants, providing standardized application data for easier processing, and reducing their administrative burden." }
      ]
    },
    {
      category: "For Students",
      questions: [
        { q: "How do I sign up on Unidash?", a: "You can sign up using your email address or through social login options (once implemented). The sign-up process is quick and straightforward." },
        { q: "What documents will I need to apply?", a: "Typically, you'll need your academic transcripts (10th, 12th mark sheets), identification proof, photographs, and any relevant entrance exam scorecards or certificates. Specific requirements may vary by university." },
        { q: "Can I save my application and complete it later?", a: "Yes, Unidash will allow you to save your application progress and return to complete it at your convenience." }
      ]
    },
    {
      category: "For Universities",
      questions: [
        { q: "How can our university partner with Unidash?", a: "Universities interested in partnering can contact us through our 'Contact Us' page or email partners@unidash.app. We'll guide you through the onboarding process." },
        { q: "Is there a cost for universities to join Unidash?", a: "Our partnership models are flexible. Please contact us for detailed information on any potential costs or revenue-sharing models." }
      ]
    }
  ];

  return (
    <div className="page-container faq-page">
      <div className="container section-padding">
        <header className="page-header">
          <h1>Frequently Asked Questions</h1>
          <p className="subtitle">Find answers to common questions about Unidash, our services, and how we can help you.</p>
        </header>

        {faqs.map((categoryItem, index) => (
          <section key={index} className="faq-category">
            <h2 className="faq-category-title">{categoryItem.category}</h2>
            {categoryItem.questions.map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;