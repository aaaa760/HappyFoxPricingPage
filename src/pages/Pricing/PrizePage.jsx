import React from 'react';
import PricingCard from '../../components/PricingCard';
import '../../components/index.css'
const PricingPage = () => {
  const pricingOptions = [
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
  ];

  return (
    <>
    <div className="container mx-auto w-4/5  p-6 mt-4 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4">
       {pricingOptions.map((option, index) => (
        <div
          key={index}
          className={`${
            index !== pricingOptions.length - 1
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
