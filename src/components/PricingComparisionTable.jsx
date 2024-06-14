import React from "react";
import './index.css';

const features = [
  {
    category: "Ticket Management",
    items: [
      "Unlimited Mailboxes",
      "Unlimited Categories",
      "Unlimited Tickets",
      "Customizable Statuses",
      "Customizable Priorities",
      "Ticket Custom Fields",
      "Custom Domain Mapping",
      "Multilingual Agent Portal",
      "Agent Collision",
      "Work Schedules",
      "Custom Roles and Permissions",
      "Ticket Tagging",
      "Email Notifications",
      "Bulk Editing",
      "Satisfaction Surveys",
      "Custom Ticket Queues",
      "Kanban view of tickets",
      "Proactive Agent Collision",
      "SLA Live Timer",
      "Task Management",
      "Asset Management",
      "Unlimited Assets",
      "Category Wise Statuses",
      "Attachment Store",
    ],
    availability: {
      Mighty: true,
      Fantastic: true,
      Enterprise: true,
      "Enterprise Plus": true,
    },
  },
  {
    category: "Reporting",
    items: ["Basic Reports", "Advanced Reports", "Scheduled Reports"],
    availability: {
      Mighty: true,
      Fantastic: true,
      Enterprise: true,
      "Enterprise Plus": true,
    },
  },
  {
    category: "Integrations",
    items: ["Google Calendar", "Slack", "Microsoft Teams"],
    availability: {
      Mighty: true,
      Fantastic: true,
      Enterprise: true,
      "Enterprise Plus": true,
    },
  },
];

const PricingComparisonTable = () => {
  return (
    <>
      <div className="border-t bg-gray-100 h-28">
        <h2 className="text-center text-2xl font-md my-10">
          Compare Help Desk Plans
        </h2>
      </div>

      <div className="container mx-auto">
        <div className="hidden md:block">
          <table className="mx-auto w-4/5 text-left border-collapse mt-12">
            <thead>
              <tr className="text-xl font-medium w-full text-right plan-title">
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
                    <td colSpan="5" className="bg-white p-4 font-bold text-base">
                      {feature.category}
                    </td>
                  </tr>
                  {feature.items.map((item, itemIndex) => (
                    <tr
                      key={itemIndex}
                      className={`${
                        itemIndex % 2 === 0
                          ? "bg-white hover:bg-gray-100"
                          : "bg-gray-50"
                      } flex flex-col md:table-row`}
                    >
                      <td className="p-4 text-gray-900">
                        <a
                          href="/"
                          className="border-b border-gray-900 border-dotted border-opacity-50 text-gray-600 hover:text-orange-400 hover:border-orange-400"
                        >
                          {item}
                        </a>
                      </td>
                      <td className="p-4 text-center">
                        {feature.availability.Mighty && (
                          <img
                            alt="tick"
                            src="https://assets.www.happyfox.com/v2/images/pricing-tick.svg"
                            className="pl-12"
                          ></img>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.availability.Fantastic && (
                          <img
                            alt="tick"
                            src="https://assets.www.happyfox.com/v2/images/pricing-tick.svg"
                            className="pl-12"
                          ></img>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.availability.Enterprise && (
                          <img
                            alt="tick"
                            src="https://assets.www.happyfox.com/v2/images/pricing-tick.svg"
                            className="pl-12"
                          ></img>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.availability["Enterprise Plus"] && (
                          <img
                            alt="tick"
                            src="https://assets.www.happyfox.com/v2/images/pricing-tick.svg"
                            className="pl-12"
                          ></img>
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="block md:hidden">
          <table className="mx-auto w-9/10 text-left mt-12">
            <thead>
              <tr className="w-full text-left plan-title">
                <th className="px-4 plan-title">Mighty</th>
                <th className="px-4 plan-title">Fantastic</th>
              </tr>
              <tr className="text-xl font-medium w-full text-left plan-title">
                <th className="px-4 py-2 plan-title">Enterprise</th>
                <th className="px-4 py-2 plan-title">Enterprise Plus</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, featureIndex) => (
                <React.Fragment key={featureIndex}>
                  <tr>
                    <td colSpan="4" className="bg-white p-4 font-bold text-base">
                      {feature.category}
                    </td>
                  </tr>
                  {feature.items.map((item, itemIndex) => (
                    <React.Fragment key={itemIndex}>
                      <tr className="flex flex-col bg-white hover:bg-gray-100">
                        <td className="p-4 text-gray-900">
                          <a
                            href="/"
                            className="border-b border-gray-900 border-dotted border-opacity-50 text-gray-600 hover:text-orange-400 hover:border-orange-400"
                          >
                            {item}
                          </a>
                        </td>
                      </tr>
                      <tr className="flex justify-around bg-white hover:bg-gray-100">
                        <div className="p-4 text-center">
                          {feature.availability.Mighty && (
                            <img
                              alt="tick"
                              src="https://assets.www.happyfox.com/v2/images/pricing-tick.svg"
                              className="pl-12"
                            ></img>
                          )}
                        </div>
                        <div className="p-4 text-center">
                          {feature.availability.Fantastic && (
                            <img
                              alt="tick"
                              src="https://assets.www.happyfox.com/v2/images/pricing-tick.svg"
                              className="pl-12"
                            ></img>
                          )}
                        </div>
                      </tr>
                      <tr className="flex justify-around bg-white hover:bg-gray-100">
                        <div className="p-4 text-center">
                          {feature.availability.Enterprise && (
                            <img
                              alt="tick"
                              src="https://assets.www.happyfox.com/v2/images/pricing-tick.svg"
                              className="pl-12"
                            ></img>
                          )}
                        </div>
                        <div className="p-4 text-center">
                          {feature.availability["Enterprise Plus"] && (
                            <img
                              alt="tick"
                              src="https://assets.www.happyfox.com/v2/images/pricing-tick.svg"
                              className="pl-12"
                            ></img>
                          )}
                        </div>
                      </tr>
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PricingComparisonTable;
