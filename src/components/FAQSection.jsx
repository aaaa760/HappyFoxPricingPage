import React, { useState } from 'react';
import './index.css';
import { ReactComponent as DownArrow} from '../assets/svg/DownArrow.svg';
import {ReactComponent as UpArrow} from '../assets/svg/UpArrow.svg'
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-3 text-left"
      >
        <span className="text-md font-md px-3 pt-3 pb-3">{question}</span>
        {isOpen ? (
          <UpArrow className="h-3 w-2" />
        ) : (
          <DownArrow className='h-3 w-2' />
        )}
        
      </button>
      {isOpen && (
        <div className="py-2">
          <p className="text-gray-700 pl-4 pb-4">{answer}</p>
        </div>
      )}
    </div>
  );
};

const ProductTag = ({ image, title, description, link, linkText }) => (
  <div className="flex flex-col items-center text-center p-8 py-8 border border-white  rounded-xl  hover:border hover:border-gray-300 hover:shadow-md">
    <img src={image} alt="icon" className="w-20 h-20 mb-2" />
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href={link} className="text-black font-md flex items-center">
      {linkText} <img src="https://assets.www.happyfox.com/v2/images/right-arrow-small.svg" alt="icon" className="ml-1" />
    </a>
  </div>
);

const FAQSection = () => (
  <div className="bg-white flex flex-col ">
    <div className="container mx-auto w-4/5 bg-white border  rounded-xl shadow-lg p-12 px-20 mt-24 ">
      <div className="">
        <h2 className="text-4xl text-gray-700 font-semibold text-center mb-16 mt-6">Frequently Asked Questions</h2>
        <div className="">
          <FAQItem
            question="Who are help desk agents?"
            answer="Support agents (help desk staff) who will be actively managing and responding to tickets raised by contacts."
          />
          <FAQItem
            question="What are Categories?"
            answer="Categories allow you to separate incoming requests into dedicated ticket types that can be distributed to a specific team, have unique SLA requirements, and produce insightful metrics."
          />
          <FAQItem
            question="How can I change my plan?"
            answer="You can upgrade your plan at any point in time. However, if you want to downgrade, you can do it at the end of the current billing cycle. You may also write to billing@happyfox.com or contact your Account Executive."
          />
          <FAQItem
            question="Do you offer a trial?"
            answer="Yes. We encourage you to request a demo to determine if HappyFox Help Desk is the right fit for your organization. Once we identify your needs, we'd be happy to provide access to a trial account where you can configure your proof of concept."
          />
          <FAQItem
            question="Do you offer discounts for non-profits or educational institutes?"
            answer="We offer a 10% discount on annual subscriptions on any plan."
          />
          <FAQItem
          question="What are the available bill cycles"
          answer="We offer a monthly, annual, 2-year savings plan (paid upfront), and 3-year contract for agent-based pricing."
          />
        </div>
      </div>
    </div>

    <div className="container mx-auto w-4/5  mt-36 ">
      <h2 className="text-4xl font-semibold text-center mb-20">More from HappyFox</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 ">
        <ProductTag
          image="https://assets.www.happyfox.com/v2/images/pricing-lc.svg"
          title="Live Chat"
          description="Chat with your customers instantly on mobile, desktop, and web."
          link="https://happyfoxchat.com/v2/signup/"
          linkText="Start free trial"
        />
        <ProductTag
          image="https://assets.www.happyfox.com/v2/images/pricing-lc.svg"
          title="Chatbot"
          description="Chat with your customers instantly on mobile, desktop, and web."
          link="https://happyfoxchat.com/v2/signup/"
          linkText="Get a demo"
        />
        <ProductTag
          image="https://assets.www.happyfox.com/v2/images/pricing-lc.svg"
          title="Assist AI"
          description="Chat with your customers instantly on mobile, desktop, and web."
          link="https://happyfoxchat.com/v2/signup/"
          linkText="Get a demo"
        />
        <ProductTag
          image="https://assets.www.happyfox.com/v2/images/pricing-lc.svg"
          title="Business Intelligence"
          description="Chat with your customers instantly on mobile, desktop, and web."
          link="https://happyfoxchat.com/v2/signup/"
          linkText="Get a demo"
        />
        <ProductTag
          image="https://assets.www.happyfox.com/v2/images/pricing-lc.svg"
          title="Workflow Automation"
          description="Reduce the grunt work with end to end process automation"
          link="https://happyfoxchat.com/v2/signup/"
          linkText="Get a demo"
        />
      </div>
    </div>
  </div>
);

export default FAQSection;
