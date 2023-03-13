import { useState, useEffect } from 'react';

export default function Card() {
  const { data, isLoading, error } = useData();

  if (error) return <ErrorInfo error={error} />;

  return (
    <section className="md:grid md:grid-cols-[repeat(2,368px)] md:place-content-center md:shadow-2xl md:shadow-[hsl(241,100%,89%,0.6)] md:rounded-3xl">
      {isLoading ? (
        <CardSkeleton />
      ) : (
        <>
          <div className="pt-6 pb-10 px-10 text-center bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] rounded-b-3xl md:rounded-3xl md:pt-10 md:pb-12 md:px-14">
            <h1 className="text-blue-lavender text-[1.125rem] md:text-2xl">Your Result</h1>
            <div className="flex flex-col items-center w-[145px] h-[145px] bg-gradient-to-b to-[hsla(241,72%,46%,0)] from-[hsla(256,72%,46%,1)] mx-auto justify-center rounded-[50%] my-5 md:my-7 md:w-[200px] md:h-[200px]">
              <span className="text-[3.5rem] leading-tight font-extrabold text-blue-pale md:text-7xl">{getScore(data)}</span>
              <span className="text-blue-lavender md:mt-1"> of 100</span>
            </div>
            <span className="text-2xl font-bold text-white md:text-3xl">Great</span>
            <p className="text-blue-lavender mt-2 md:text-[1.125rem] md:mt-4">You scored higher than 65% of the people who have taken these tests.</p>
          </div>
          <div className="p-6 pb-8 max-w-[550px] max-md:mx-auto md:px-10 md:py-8">
            <h2 className="text-xl font-bold text-blue-dark md:text-2xl">Summary</h2>
            <div className="mt-5 mb-6 flex flex-col gap-4 md:mt-7 md:mb-10">
              {data.map(item => (
                <SummaryCard key={item.category} {...item} />
              ))}
            </div>
            <button className="bg-blue-dark px-4 h-[56px] rounded-[28px] flex items-center justify-center text-white w-full text-[1.125rem] hover:bg-gradient-to-b hover:from-[hsl(252,100%,67%)] hover:to-[hsl(241,81%,54%)]">
              Continue
            </button>
          </div>
        </>
      )}
    </section>
  );
}

function SummaryCard({ category, score, icon }) {
  const colorVariants = {
    reaction: 'text-[hsl(0,100%,67%)] bg-[hsla(0,100%,67%,0.05)]',
    memory: 'text-[hsl(39,100%,56%)] bg-[hsla(39,100%,56%,0.05)]',
    verbal: 'text-[hsl(166,100%,37%)] bg-[hsla(166,100%,37%,0.05)]',
    visual: 'text-[hsl(234,85%,45%)] bg-[hsla(234,85%,45%,0.05)]',
  };

  return (
    <div className={`p-4 flex justify-between items-center ${colorVariants[category]} rounded-lg gap-3 flex-wrap md:text-[1.125rem]`}>
      <div className="flex gap-3 items-center">
        <img src={icon} alt={category} />
        <span className="capitalize">{category}</span>
      </div>
      <div className="font-bold">
        <span className="font-bold text-blue-dark">{score}</span>
        <span className="text-blue-dark text-opacity-60"> / 100</span>
      </div>
    </div>
  );
}

function CardSkeleton() {
  return (
    <>
      <div className="pt-6 pb-10 px-10 text-center rounded-b-3xl md:rounded-3xl md:pt-10 md:pb-12 md:px-14 animate-pulse flex flex-col items-center">
        <div className="h-6 md:h-8 bg-gray-300 rounded-full w-[min(100%,180px)]"></div>
        <div className="w-[145px] h-[145px] rounded-[50%] my-5 md:my-7 md:w-[200px] md:h-[200px] bg-gray-200"></div>
        <div className="h-7 md:h-9 bg-gray-300 rounded-full w-[min(100%,120px)] mb-4"></div>
        <div className="h-4 md:h-[1.125rem] bg-gray-300 rounded-full w-[min(100%,400px)] mt-2"></div>
        <div className="h-4 md:h-[1.125rem] bg-gray-300 rounded-full w-[min(100%,350px)] mt-2"></div>
      </div>
      <div className="p-6 pb-8 max-w-[550px] max-md:mx-auto md:px-10 md:py-8 animate-pulse">
        <div className="h-6 md:h-7 bg-gray-300 rounded-full w-[min(100%,150px)] mb-3"></div>
        <div className="mt-5 mb-6 flex flex-col gap-4 md:mt-7 md:mb-10">
          <div className="p-4 flex justify-between items-center rounded-lg gap-3 flex-wrap md:text-[1.125rem] bg-gray-100">
            <div className="h-5 md:h-6 bg-gray-300 rounded-full w-[min(100%,130px)]"></div>
            <div className="h-5 md:h-6 bg-gray-300 rounded-full w-[min(100%,70px)]"></div>
          </div>
          <div className="p-4 flex justify-between items-center rounded-lg gap-3 flex-wrap md:text-[1.125rem] bg-gray-100">
            <div className="h-5 md:h-6 bg-gray-300 rounded-full w-[min(100%,120px)]"></div>
            <div className="h-5 md:h-6 bg-gray-300 rounded-full w-[min(100%,70px)]"></div>
          </div>
          <div className="p-4 flex justify-between items-center rounded-lg gap-3 flex-wrap md:text-[1.125rem] bg-gray-100">
            <div className="h-5 md:h-6 bg-gray-300 rounded-full w-[min(100%,110px)]"></div>
            <div className="h-5 md:h-6 bg-gray-300 rounded-full w-[min(100%,70px)]"></div>
          </div>
          <div className="p-4 flex justify-between items-center rounded-lg gap-3 flex-wrap md:text-[1.125rem] bg-gray-100">
            <div className="h-5 md:h-6 bg-gray-300 rounded-full w-[min(100%,110px)]"></div>
            <div className="h-5 md:h-6 bg-gray-300 rounded-full w-[min(100%,70px)]"></div>
          </div>
        </div>
        <div className="bg-gray-300 h-[56px] rounded-[28px]"></div>
      </div>
    </>
  );
}

function ErrorInfo({ error }) {
  return (
    <div className="text-center">
      <h2 className="text-xl font-bold">Something went wrong</h2>
      <p>{error}</p>
    </div>
  );
}

function useData() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchData() {
      try {
        const response = await fetch('/data/data.json', { signal });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchData();

    () => {
      controller.abort();
      setIsLoading(false);
      setError(null);
    };
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}

function getScore(data) {
  const divider = data.length;
  const result = data.reduce((sum, { score }) => sum + score / divider, 0);
  return Math.round(result);
}
