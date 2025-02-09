function Card(props) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-4 lg:items-center bg-white relative px-8 py-12 lg:py-6 shadow-xl rounded-lg ${
        props.featured ? "border-l-8 border-primary" : null
      }`}
    >
      <img
        className="w-14 h-14 lg:w-20 lg:h-20 max-lg:absolute top-0 max-lg:-translate-y-1/2"
        src={props.logo}
        alt="company logo"
      />
      <div className="space-y-4 lg:space-y-2">
        <div className="flex gap-2 items-center">
          <p className="mr-4 text-primary font-bold">{props.company}</p>
          {props.new && (
            <p className="bg-primary text-white font-bold pt-1 uppercase text-sm px-2 rounded-2xl">
              New!
            </p>
          )}
          {props.featured && (
            <p className="bg-darkcyan text-white font-bold text-sm pt-1 px-2 uppercase rounded-2xl">
              Featured
            </p>
          )}
        </div>
        <p className="font-bold hover:text-primary cursor-pointer">
          {props.position}
        </p>
        <p className="text-cyan text-sm">
          {props.postedAt} - {props.contract} - {props.location}
        </p>
      </div>

      <div
        className="flex flex-wrap gap-4 max-lg:border-t-[1px] border-cyan pt-4 [&>*]:bg-primary/25 
        [&>*]:text-primary [&>*]:hover:text-white [&>*]:hover:bg-primary [&>*]:font-semibold [&>*]:rounded [&>*]:px-2 lg:ml-auto cursor-pointer"
      >
        <p onClick={() => props.addFilters("role", props.role)}>{props.role}</p>
        <p onClick={() => props.addFilters("level", props.level)}>{props.level}</p>

        {props.languages.map((lang) => (
          <p key={lang} onClick={() => props.addFilters("languages", lang)}>{lang}</p>
        ))}

        {props.tools.map((tool) => (
          <p key={tool} onClick={() => props.addFilters("tools", tool)}>{tool}</p>
        ))}
      </div>
    </div>
  );
}

export default Card;
