import React, { useState } from 'react';
import './index.css';

const faqData = [
  {
    question: 'Who are help desk agents?',
    answer: 'Support agents (help desk staff) who will be actively managing and responding to tickets raised by contacts.',
  },
  {
    question: 'What are Categories?',
    answer: 'Categories are used to organize and classify tickets to ensure they are routed to the appropriate support staff.',
  },
  {
    question: 'How can I change my plan?',
    answer: 'You can change your plan by going to the billing section of your account settings and selecting a new plan.',
  },
  {
    question: 'Do you offer a trial?',
    answer: 'Yes, we offer a 14-day free trial for all new customers. No credit card is required to sign up.',
  },
  {
    question: 'Do you offer discounts for non-profits or educational institutes?',
    answer: 'Yes, we offer special discounts for non-profits and educational institutes. Please contact our support team for more details.',
  },
];

const FaqComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-header">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? 'open' : ''}`}
          onClick={() => toggleFaq(index)}
        >
          <div className="faq-question">
            {faq.question}
            <span>{openIndex === index ? '-' : '+'}</span>
          </div>
          <div className="faq-answer">{faq.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default FaqComponent;
