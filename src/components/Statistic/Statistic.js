import { Section } from 'components/Title/Title';
import { Positive } from './Statistic.styled';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Section title="Statistics:">
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      {{ total } && <p>Total:{total}</p>}
      {{ positivePercentage } && (
        <Positive>Positive feedback: {positivePercentage}%</Positive>
      )}
    </Section>
  );
};
