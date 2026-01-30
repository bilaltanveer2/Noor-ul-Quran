const WaterDrops = () => {
  // Generate drops for 10-20 drops per second
  // Each drop: 1-2 sec on screen + 2-3 sec falling = ~4-5 sec cycle
  // To get 15 drops per second average, we need drops appearing every 0.067s
  // Over 5 seconds = 75 drops, but we'll create more for continuous effect
  const drops = Array.from({ length: 200 }, (_, i) => {
    // Spread delays evenly: 200 drops over 10 seconds = 20 drops per second
    // Each drop appears every 0.05 seconds
    const baseDelay = (i * 0.05) % 10; // Cycle every 10 seconds
    const randomOffset = Math.random() * 0.1; // Small random variation
    return {
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${baseDelay + randomOffset}s`,
      duration: `${4.5 + Math.random() * 1}s`, // 4.5-5.5 seconds total
      size: Math.random() * 2 + 1, // 1-3px
    };
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="water-drop-falling absolute top-0"
          style={{
            left: drop.left,
            width: `${drop.size}px`,
            height: `${drop.size}px`,
            animationDelay: drop.delay,
            animationDuration: drop.duration,
          }}
        />
      ))}
    </div>
  );
};

export default WaterDrops;
