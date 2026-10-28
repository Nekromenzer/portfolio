type Props = {
  points: string[];
  className?: string;
};

export default function ExperiencePoints({ points, className = "" }: Props) {
  return (
    <ul className={`experience-points ${className}`}>
      {points.map((point) => (
        <li key={point}>
          {point.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={index}>{part.slice(2, -2)}</strong>
            ) : (
              part
            ),
          )}
        </li>
      ))}
    </ul>
  );
}
