"use client";

const chips = [
  { label: "Java", color: "green" },
  { label: "TypeScript", color: "blue" },
  { label: "Python", color: "blue" },
  { label: "Go", color: "purple" },
  { label: "Spring Boot", color: "green" },
  { label: "NestJS", color: "green" },
  { label: "Pega Platform", color: "purple" },
  { label: "AWS", color: "gray" },
  { label: "GCP", color: "gray" },
  { label: "Kafka", color: "purple" },
  { label: "Docker", color: "blue" },
  { label: "GitHub Actions", color: "gray" },
];

export default function StackRow() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        gap: "0.6rem",
        flexWrap: "wrap",
        padding: "1.5rem 3rem",
        marginBottom: "1rem",
      }}
    >
      {chips.map((c) => (
        <div key={c.label} className={`chip chip-${c.color}`}>
          {c.label}
        </div>
      ))}
    </div>
  );
}
