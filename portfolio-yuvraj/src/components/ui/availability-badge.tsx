const AvailabilityBadge = () => {
  return (
    <div className="bg-background border border-portfolio-border rounded-lg px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-glow">
      <div className="text-center">
        <div className="availability-label mb-1">
          AVAILABLE FOR WORK
        </div>
        <div className="availability-year">
          2025–26
        </div>
      </div>
    </div>
  );
};

export default AvailabilityBadge;