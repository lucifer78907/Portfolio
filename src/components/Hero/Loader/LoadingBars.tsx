const LoadingBars = () => {
  const total: number = 12;
  const bars: React.JSX.Element[] = [];

  for (let i = 0; i < total; i++) {
    bars.push(<div key={i} className="hero__bar"></div>);
  }

  return <>{bars}</>;
};

export default LoadingBars;
