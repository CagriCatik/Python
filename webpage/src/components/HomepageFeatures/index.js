import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        Our platform is designed with simplicity in mind, ensuring that you can get started quickly and focus on your goals without unnecessary complexity.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    description: (
      <>
        Spend less time on setup and more time on what truly matters—building, creating, and achieving your objectives with confidence.
      </>
    ),
  },
  {
    title: 'Powerful and Flexible',
    description: (
      <>
        Leverage a robust feature set and customizable options that adapt to your unique needs, empowering you to reach new heights.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
