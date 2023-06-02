function About() {
  return (
    <div className="card">
      <h1>Movie Search Finder</h1>
      <p>
        A React app to search Movies and see details about them. This project is
        part of the practice on
        <a
          href="https://quantox-academy.getlearnworlds.com/home"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Quantox Academy
        </a>{' '}
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
    </div>
  );
}

export default About;
