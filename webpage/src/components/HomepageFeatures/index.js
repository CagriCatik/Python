import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Developer Guide',
    description: (
      <>
        Comprehensive guides to help developers get started and navigate the platform with ease, covering key concepts and best practices.
      </>
    ),
  },
  {
    title: 'Data Analysis',
    description: (
      <>
        Tools and resources to support advanced data analysis, providing insights and facilitating data-driven decision-making.
      </>
    ),
  },
  {
    title: 'Design Patterns',
    description: (
      <>
        Explore robust design patterns to build scalable and maintainable applications, tailored to diverse use cases.
      </>
    ),
  },
  {
    title: 'GUI',
    description: (
      <>
        A user-friendly graphical interface that simplifies interaction and enhances productivity, with intuitive navigation.
      </>
    ),
  },
  {
    title: 'REST-API',
    description: (
      <>
        A powerful RESTful API to seamlessly integrate and extend functionalities, ensuring smooth communication between services.
      </>
    ),
  },
  {
    title: 'Tips & Tricks',
    description: (
      <>
        Handy tips and tricks to help you maximize your efficiency and get the most out of the platform's features.
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
