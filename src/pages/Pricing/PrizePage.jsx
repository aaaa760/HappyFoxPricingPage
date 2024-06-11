import React, { useState } from 'react';
import PricingCard from '../../components/PricingCard';
import '../../components/index.css';

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('Monthly');

  const pricingOptions = {
    Monthly: [
      {
        title: 'Mighty',
        price: 39,
        features: [
          'Omnichannel Ticket Creation',
          'SLA Management',
          'Knowledge Base',
          'SSO (GSuite/SAML/Azure)',
          'SSL Certificate Hosting',
          'Migration Assistance',
        ],
      },
      {
        title: 'Fantastic',
        price: 59,
        features: [
          'Everything in Mighty',
          'Multi-brand Helpdesk',
          'SLA Breach Notification',
          'Custom Ticket Queues',
          '24/7 Email Support',
          'Optional EU Data Center',
        ],
      },
      {
        title: 'Enterprise',
        price: 79,
        features: [
          'Everything in Fantastic',
          'Proactive Agent Collision',
          'Task Management',
          'Asset Management',
          '24/7 Email/Chat Support',
          'Uptime SLA',
        ],
      },
      {
        title: 'Enterprise Plus',
        price: 99,
        features: [
          'Everything in Enterprise',
          'Agent Scripting',
          '2 TB Attachment Store',
          'All-time Reporting History',
          '24/7 Email/Chat/Phone Support',
          'Customer Success Manager',
        ],
      },
    ],
    Annual: [
      {
        title: 'Mighty',
        price: 35,
        features: [
          'Omnichannel Ticket Creation',
          'SLA Management',
          'Knowledge Base',
          'SSO (GSuite/SAML/Azure)',
          'SSL Certificate Hosting',
          'Migration Assistance',
        ],
      },
      {
        title: 'Fantastic',
        price: 53,
        features: [
          'Everything in Mighty',
          'Multi-brand Helpdesk',
          'SLA Breach Notification',
          'Custom Ticket Queues',
          '24/7 Email Support',
          'Optional EU Data Center',
        ],
      },
      {
        title: 'Enterprise',
        price: 71,
        features: [
          'Everything in Fantastic',
          'Proactive Agent Collision',
          'Task Management',
          'Asset Management',
          '24/7 Email/Chat Support',
          'Uptime SLA',
        ],
      },
      {
        title: 'Enterprise Plus',
        price: 89,
        features: [
          'Everything in Enterprise',
          'Agent Scripting',
          '2 TB Attachment Store',
          'All-time Reporting History',
          '24/7 Email/Chat/Phone Support',
          'Customer Success Manager',
        ],
      },
    ],
    '2-Year': [
      {
        title: 'Mighty',
        price: 33,
        features: [
          'Omnichannel Ticket Creation',
          'SLA Management',
          'Knowledge Base',
          'SSO (GSuite/SAML/Azure)',
          'SSL Certificate Hosting',
          'Migration Assistance',
        ],
      },
      {
        title: 'Fantastic',
        price: 50,
        features: [
          'Everything in Mighty',
          'Multi-brand Helpdesk',
          'SLA Breach Notification',
          'Custom Ticket Queues',
          '24/7 Email Support',
          'Optional EU Data Center',
        ],
      },
      {
        title: 'Enterprise',
        price: 67,
        features: [
          'Everything in Fantastic',
          'Proactive Agent Collision',
          'Task Management',
          'Asset Management',
          '24/7 Email/Chat Support',
          'Uptime SLA',
        ],
      },
      {
        title: 'Enterprise Plus',
        price: 85,
        features: [
          'Everything in Enterprise',
          'Agent Scripting',
          '2 TB Attachment Store',
          'All-time Reporting History',
          '24/7 Email/Chat/Phone Support',
          'Customer Success Manager',
        ],
      },
    ],
    '3-Year': [
      {
        title: 'Mighty',
        price: 30,
        features: [
          'Omnichannel Ticket Creation',
          'SLA Management',
          'Knowledge Base',
          'SSO (GSuite/SAML/Azure)',
          'SSL Certificate Hosting',
          'Migration Assistance',
        ],
      },
      {
        title: 'Fantastic',
        price: 45,
        features: [
          'Everything in Mighty',
          'Multi-brand Helpdesk',
          'SLA Breach Notification',
          'Custom Ticket Queues',
          '24/7 Email Support',
          'Optional EU Data Center',
        ],
      },
      {
        title: 'Enterprise',
        price: 60,
        features: [
          'Everything in Fantastic',
          'Proactive Agent Collision',
          'Task Management',
          'Asset Management',
          '24/7 Email/Chat Support',
          'Uptime SLA',
        ],
      },
      {
        title: 'Enterprise Plus',
        price: 80,
        features: [
          'Everything in Enterprise',
          'Agent Scripting',
          '2 TB Attachment Store',
          'All-time Reporting History',
          '24/7 Email/Chat/Phone Support',
          'Customer Success Manager',
        ],
      },
    ],
  };

  return (
    <>
      <div className="mt-5 p-5 w-full h-36">
        <div className="buttons-bar">
          <button
            className={`button-price ${selectedPlan === 'Monthly' ? 'button-price-selected' : ''}`}
            onClick={() => setSelectedPlan('Monthly')}
          >
            Monthly
          </button>
          <button
            className={`button-price ${selectedPlan === 'Annual' ? 'button-price-selected' : ''}`}
            onClick={() => setSelectedPlan('Annual')}
          >
            Annual
          </button>
          <button
            className={`button-price ${selectedPlan === '2-Year' ? 'button-price-selected' : ''}`}
            onClick={() => setSelectedPlan('2-Year')}
          >
            2-Year Savings Plan <br/><p className="text-sm">Paid Up Front</p>
          </button>
          <button
            className={`button-price ${selectedPlan === '3-Year' ? 'button-price-selected' : ''}`}
            onClick={() => setSelectedPlan('3-Year')}
          >
            3-Year Contract<br/><p className="text-sm">Billed Annually</p>
          </button>
        </div>
      </div>
      <div className="container mx-auto w-4/5 p-6 mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {pricingOptions[selectedPlan].map((option, index) => (
          <div
            key={index}
            className={`${
              index !== pricingOptions[selectedPlan].length - 1
                ? 'border-r border-custom-gray'
                : ''
            }`}
          >
            <PricingCard {...option} />
          </div>
        ))}
      </div>
      <div className="mt-12 mb-24 mx-auto pricing-para py-3 px-4 text-center font-light text-md rounded-lg max-w-xl text-black">
        All plans require a minimum of 5 help desk agents. Non-profit and
        educational organizations are eligible for a discount.
      </div>
    </>
  );
};

export default PricingPage;
