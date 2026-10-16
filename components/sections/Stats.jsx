import Counter from "../animations/Counter";
import SplitText from "../animations/SplitText";

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Projects built",
  },

  {
    value: 5,
    suffix: "+",
    label: "Industries served",
  },

  {
    value: 100,
    suffix: "%",
    label: "Custom solutions",
  },

  {
    value: 24,
    suffix: "/7",
    label: "Digital systems",
  },
];

function Stats() {
  return (
    <section className="stats-section">
      <div className="container">

        <div className="section-header">
          <span className="section-label">
            By the numbers
          </span>

          <span className="section-index">
            (03)
          </span>
        </div>

        <SplitText
          text="Built to perform."
          className="stats-title"
        />

        <div className="stats-grid">

          {stats.map((stat) => (
            <div
              className="stat"
              key={stat.label}
            >
              <div className="stat-number">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </div>

              <div className="stat-line" />

              <p>
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;