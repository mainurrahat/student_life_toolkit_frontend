import StudyCard from "./StudyCard";

interface Props {
  plans: any[];
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const StudyList = ({ plans, onComplete, onDelete }: Props) => {
  if (plans.length === 0) {
    return <p className="text-gray-600">No study plans yet.</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {plans.map((plan) => (
        <StudyCard
          key={plan._id}
          plan={plan}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default StudyList;
