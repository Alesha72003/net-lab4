import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Лаба основана на реальной атаке',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Лаба основана на базе атаки на jabber.ru.
        <br />
        Вы можете прочитать о ней в <a href="https://habr.com/ru/news/768914/">статье на хабре </a>
      </>
    ),
  },
  {
    title: 'Оттестирована на нескольких студентах',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Мы постарались учесть ошибки и упростить сложные моменты. Но иногда придется заставлять вас читать :D
      </>
    ),
  },
  {
    title: 'Создана, чтобы было понятно и интересно',
    Svg:require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Но тут и добавить нечего. Pee-pee Poo-Poo
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
