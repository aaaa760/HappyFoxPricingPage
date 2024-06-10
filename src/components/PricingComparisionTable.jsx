import React from 'react';
import './index.css'

const features = [
  {
    category: 'Ticket Management',
    items: [
      'Unlimited Mailboxes',
      'Unlimited Categories',
      'Unlimited Tickets',
      'Customizable Statuses',
      'Customizable Priorities',
      'Ticket Custom Fields',
    ],
    availability: {
      Mighty: true,
      Fantastic: true,
      Enterprise: true,
      'Enterprise Plus': true,
    },
  },
  // Add more categories and features as needed
  {
    category: 'Reporting',
    items: [
      'Basic Reports',
      'Advanced Reports',
      'Scheduled Reports',
    ],
    availability: {
      Mighty: true,
      Fantastic: true,
      Enterprise: true,
      'Enterprise Plus': true,
    },
  },
  {
    category: 'Integrations',
    items: [
      'Google Calendar',
      'Slack',
      'Microsoft Teams',
    ],
    availability: {
      Mighty: true,
      Fantastic: true,
      Enterprise: true,
      'Enterprise Plus': true,
    },
  },
];

const PricingComparisonTable = () => {
  return (
    <>
   <div className="border-t bg-gray-100 h-28">
    <h2 className="text-center text-2xl font-md my-10">Compare Help Desk Plans</h2>
   </div>
  
    <div className="container mx-auto">
     
        <table className="mx-auto w-4/5 text-left border-collapse mt-12">
          <thead>
            <tr className='text-xl font-medium w-full text-right plan-title'>
              <th className="p-4 border-b-2 border-gray-200"></th>
              <th className="p-4 border-b-2 border-gray-200">Mighty</th>
              <th className="p-4 border-b-2 border-gray-200">Fantastic</th>
              <th className="p-4 border-b-2 border-gray-200">Enterprise</th>
              <th className="p-4 border-b-2 border-gray-200">Enterprise Plus</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, featureIndex) => (
              <React.Fragment key={featureIndex}>
                <tr>
                  <td colSpan="5" className="bg-white p-4 font-bold text-base ">
                    {feature.category}
                  </td>
                </tr>
                {feature.items.map((item, itemIndex) => (
                  <tr key={itemIndex} className={` ${itemIndex % 2 === 0 ? 'bg-white hover:bg-gray-100' : 'bg-gray-50'}`}>
                    <td className="p-4 text-gray-900 "><a href='/' className='border-b border-gray-900 border-dotted border-opacity-50 text-gray-600 hover:text-orange-400 hover:border-orange-400 '>{item}</a></td>
                    <td className="p-4 text-center">
                      {feature.availability.Mighty && <span className='text-green-600'>&#10003;</span>}
                    </td>
                    <td className="p-4 text-center">
                      {feature.availability.Fantastic && <span className='text-green-600' >&#10003;</span>}
                    </td>
                    <td className="p-4 text-center">
                      {feature.availability.Enterprise && <span className='text-green-600'>&#10003;</span>}
                    </td>
                    <td className="p-4 text-center">
                      {feature.availability['Enterprise Plus'] && <span className='text-green-600'>&#10003;</span>}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
   
    </>
  );
};

export default PricingComparisonTable;
