import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const CounterSecOne = ({ className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const counters = [
    {
      id: 1,
      title: 'JOBS COMPLETED',
      number: 44.8,
      suffix: 'K',
      icon: 'assets/img/icon/counter_1_1.svg',
    },
    {
      id: 2,
      title: 'MEDIA ACTIVITIES',
      number: 325,
      suffix: '',
      icon: 'assets/img/icon/counter_1_2.svg',
    },
    {
      id: 3,
      title: 'SKILLED EXPERTS',
      number: 498,
      suffix: '',
      icon: 'assets/img/icon/counter_1_3.svg',
    },
    {
      id: 4,
      title: 'HAPPY CLIENTS',
      number: 42.8,
      suffix: 'K',
      icon: 'assets/img/icon/counter_1_4.svg',
    },
  ];

  return (
    <div className="">
      <div className="container">
        <div className={`counter-card-wrap ${className}`}>
          {counters.map((counter) => (
            <div className="counter-card" key={counter.id}>
              <div className="box-icon">
                <img src={counter.icon} alt="Icon" />
              </div>
              <div className="media-body">
                <h2 className="box-number">
                  <span ref={ref}>
                    {inView && (
                      <CountUp
                        start={0}
                        end={counter.number}
                        duration={2.5}
                        separator=","
                        suffix={counter.suffix}
                        className="counter-number"
                      />
                    )}
                  </span>
                </h2>
                <span className="box-text">{counter.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSecOne;
