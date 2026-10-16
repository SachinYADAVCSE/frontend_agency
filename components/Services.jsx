import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import BlurReveal from "./animations/BlurReveal";

const services = [
  {
    number: "01",
    title: "Web Design & Development",
    description:
      "High-performance websites and digital experiences designed around your business.",
    tags: [
      "Websites",
      "Landing Pages",
      "E-commerce",
      "Web Apps",
    ],
  },

  {
    number: "02",
    title: "Digital Marketing",
    description:
      "Digital campaigns and growth systems designed to bring qualified attention to your business.",
    tags: [
      "Paid Ads",
      "Social",
      "Content",
      "Growth",
    ],
  },

  {
    number: "03",
    title: "AI & Automation",
    description:
      "Custom systems that automate repetitive work and connect the tools your business already uses.",
    tags: [
      "AI",
      "Automation",
      "Integrations",
      "Workflows",
    ],
  },

  {
    number: "04",
    title: "E-commerce",
    description:
      "Commerce experiences focused on usability, trust and conversion.",
    tags: [
      "Shopify",
      "Custom Stores",
      "Payments",
      "Analytics",
    ],
  },
];

function Services() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      className="services-section"
    >
      <div className="container">

        <div className="section-header services-header">
          <span className="section-label">
            What we do
          </span>

          <span className="section-index">
            (02)
          </span>
        </div>

        <BlurReveal>
          <h2 className="services-title">
            Services.
          </h2>
        </BlurReveal>

        <div className="services-list">

          {services.map(
            (service, index) => {
              const isActive =
                active === index;

              return (
                <div
                  key={service.number}
                  className={`service-item ${
                    isActive
                      ? "active"
                      : ""
                  }`}
                >
                  <button
                    className="service-trigger"
                    onClick={() =>
                      setActive(
                        isActive
                          ? -1
                          : index
                      )
                    }
                  >
                    <span>
                      {service.number}
                    </span>

                    <span>
                      {service.title}
                    </span>

                    {isActive ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </button>

                  <div className="service-content">

                    <div className="service-content-inner">

                      <div className="service-placeholder">
                        <span>
                          {service.number}
                        </span>
                      </div>

                      <div>
                        <p>
                          {
                            service.description
                          }
                        </p>

                        <div className="service-tags">
                          {service.tags.map(
                            (tag) => (
                              <span
                                key={tag}
                              >
                                {tag}
                              </span>
                            )
                          )}
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              );
            }
          )}

        </div>

      </div>
    </section>
  );
}

export default Services;