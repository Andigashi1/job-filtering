import { useState } from "react";
import Card from "./Card";
import { data } from "./data.js";
import remove from "./assets/images/icon-remove.svg";

function App() {
  const [filters, setFilters] = useState({
    role: "",
    level: "",
    languages: [],
    tools: [],
  });

  const addFilters = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: Array.isArray(prev[category])
        ? prev[category].includes(value)
          ? prev[category]
          : [...prev[category], value]
        : value,
    }));
  };

  const removeFilters = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: Array.isArray(prev[category])
        ? prev[category].filter((item) => item !== value)
        : "",
    }));
  };

  const filteredJobs = data.filter((job) => {
    return (
      (filters.role === "" || job.role === filters.role) &&
      (filters.level === "" || job.level === filters.level) &&
      (filters.languages.length === 0 ||
        filters.languages.every((lang) => job.languages.includes(lang))) &&
      (filters.tools.length === 0 ||
        filters.tools.every((tool) => job.tools.includes(tool)))
    );
  });

  return (
    <div className="font-display bg-background flex flex-col items-center min-h-screen">
      <div className="w-full h-48 relative bg-primary bg-[url('./assets/images/bg-header-mobile.svg')] md:bg-[url('./assets/images/bg-header-desktop.svg')] bg-no-repeat bg-cover">
        {(filters.role ||
          filters.level ||
          filters.languages.length > 0 ||
          filters.tools.length > 0) && (
          <div className="flex justify-between items-center absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 bg-white rounded-md 
          px-12 py-8 w-[calc(100%-3rem)] lg:w-full max-w-md lg:max-w-5xl shadow-xl">
            <div className=" flex [&>*]:flex gap-4 flex-wrap [&>*]:bg-primary/25 [&>*]:text-primary [&>*]:font-semibold [&>*]:rounded">
              {filters.role && (
                <section className="[&>*]:px-2">
                  <p>{filters.role}</p>
                  <img
                    onClick={() => removeFilters("role", filters.role)}
                    className="bg-primary hover:bg-black py-1 rounded-r cursor-pointer"
                    src={remove}
                    alt=""
                  />
                </section>
              )}
              {filters.level && (
                <section className="[&>*]:px-2">
                  <p>{filters.level}</p>
                  <img
                    onClick={() => removeFilters("level", filters.level)}
                    className="bg-primary hover:bg-black py-1 rounded-r cursor-pointer"
                    src={remove}
                    alt=""
                  />
                </section>
              )}
              {filters.languages.map((lang) => (
                <section key={lang} className="[&>*]:px-2">
                  <p>{lang}</p>
                  <img
                    onClick={() => removeFilters("languages", lang)}
                    className="bg-primary hover:bg-black py-1 rounded-r cursor-pointer"
                    src={remove}
                    alt=""
                  />
                </section>
              ))}
              {filters.tools.map((tool) => (
                <section key={tool} className="[&>*]:px-2">
                  <p>{tool}</p>
                  <img
                    onClick={() => removeFilters("tools", tool)}
                    className="bg-primary hover:bg-black py-1 rounded-r cursor-pointer"
                    src={remove}
                    alt=""
                  />
                </section>
              ))}
            </div>

            <p
              onClick={() =>
                setFilters({
                  role: "",
                  level: "",
                  languages: [],
                  tools: [],
                })
              }
              className="text-cyan font-bold cursor-pointer"
            >
              Clear
            </p>
          </div>
        )}
      </div>

      <div className="space-y-16 lg:space-y-6 mx-6 mb-12 mt-20 lg:w-full max-w-5xl">
        {filteredJobs.map((job) => (
          <Card
            key={job.id}
            company={job.company}
            logo={job.logo}
            new={job.new}
            featured={job.featured}
            position={job.position}
            role={job.role}
            level={job.level}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            languages={job.languages}
            tools={job.tools}
            addFilters={addFilters}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
